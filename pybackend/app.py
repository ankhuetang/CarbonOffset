from flask import Flask, request, jsonify, g
from mongoengine import Document, connect
from datetime import datetime
import bisect

from models import Bid, Ask, CarbonCreditProject, User, Possession


app = Flask(__name__)
connect(host='mongodb+srv://CarbonOffset:CarbonOffset@carbonoffset.fr7kjux.mongodb.net/?retryWrites=true&w=majority')


# Routes
@app.route('/bids', methods=['GET'])
def get_bids():
    try:
        bids = Bid.objects().to_json()
        return bids, 200
    except Exception as e:
        return str(e), 400
    
# Buy carbon credits
@app.route('/bids', methods=['POST'])
def create_bid():
    try:
        data = request.json

        # Verify that the project exists
        project = CarbonCreditProject.objects.get(id=data['project_id'])
        if not project:
            return 'Project not found', 404
        
        # Verify that the user has enough money to buy the carbon credits
        user = User.objects.get(id=data['user_id'])
        if user.balance < data['price'] * data['quantity']:
            return 'Insufficient funds', 400
        
        # Create the bid
        bid = Bid(name=data['name'], price=data['price'], quantity=data['quantity']).save()
        match_orders()
        return str(bid.id), 201
    except Exception as e:
        return str(e), 400

@app.route('/asks', methods=['GET'])
def get_asks():
    try:
        asks = Ask.objects().to_json()
        return asks, 200
    except Exception as e:
        return str(e), 400

@app.route('/asks', methods=['POST'])
def create_ask():
    try:
        data = request.json

        # Verify that the project exists
        project = CarbonCreditProject.objects.get(id=data['project_id'])
        if not project:
            return 'Project not found', 404
        
        # Verify that the user has enough carbon credits to sell
        possession = Possession.objects.get(user_id=data['user_id'], project_id=data['project_id'])
        if possession.quantity < data['quantity']:
            return 'Insufficient carbon credits', 400
        
        # Create the ask
        ask = Ask(name=data['name'], price=data['price'], quantity=data['quantity']).save()
        match_orders()
        return str(ask.id), 201
    except Exception as e:
        return str(e), 400


# Matching engine
def match_orders():
    try:
        highest_bid = Bid.objects.order_by('-price').first()
        lowest_ask = Ask.objects.order_by('price').first()

        if highest_bid and lowest_ask and highest_bid.price >= lowest_ask.price:
            matched_price = (highest_bid.price + lowest_ask.price) / 2

            # Adjust quantities and delete orders if necessary
            if highest_bid.quantity > lowest_ask.quantity:
                highest_bid.quantity -= lowest_ask.quantity
                bid_user = User.objects.get(id=highest_bid.user_id)
                bid_user.balance -= lowest_ask.quantity * matched_price
                bid_user.save()
                possession = Possession.objects.get(user_id=highest_bid.user_id, project_id=highest_bid.project_id)
                possession.quantity += lowest_ask.quantity
                possession.save()
                lowest_ask.delete()

            elif highest_bid.quantity < lowest_ask.quantity:
                lowest_ask.quantity -= highest_bid.quantity
                ask_user = User.objects.get(id=lowest_ask.user_id)
                ask_user.balance += highest_bid.quantity * matched_price
                ask_user.save()
                possession = Possession.objects.get(user_id=lowest_ask.user_id, project_id=lowest_ask.project_id)
                possession.quantity -= highest_bid.quantity
                possession.save()
                highest_bid.delete()
                lowest_ask.save()
            else:
                bid_user = User.objects.get(id=highest_bid.user_id)
                bid_user.balance -= highest_bid.quantity * matched_price
                bid_user.save()
                possession = Possession.objects.get(user_id=highest_bid.user_id, project_id=highest_bid.project_id)
                possession.quantity += highest_bid.quantity
                possession.save()
                ask_user = User.objects.get(id=lowest_ask.user_id)
                ask_user.balance += highest_bid.quantity * matched_price
                ask_user.save()
                possession = Possession.objects.get(user_id=lowest_ask.user_id, project_id=lowest_ask.project_id)
                possession.quantity -= highest_bid.quantity
                possession.save()
                highest_bid.delete()
                lowest_ask.delete()
            
            # Log the match (in a real system you'd also want to notify the users involved)
            print(f'Match: {highest_bid.name} bought from {lowest_ask.name} at ${matched_price} per share')

    except Exception as e:
        print(str(e))


# Get highest bid and lowest ask
def get_highest_bid_and_lowest_ask():
    try:
        highest_bid = Bid.objects.order_by('-price').first()
        lowest_ask = Ask.objects.order_by('price').first()
        return highest_bid, lowest_ask
    except Exception as e:
        return str(e), 400


# Get all carbon credit projects
@app.route('/carboncreditprojects', methods=['GET'])
def get_carboncreditprojects():
    try:
        carboncreditprojects = CarbonCreditProject.objects().to_json()
        return carboncreditprojects, 200
    except Exception as e:
        return str(e), 400
    
# Get a specific carbon credit project
@app.route('/carboncreditprojects/<id>', methods=['GET'])
def get_carboncreditproject(id):
    try:
        carboncreditproject = CarbonCreditProject.objects.get(id=id).to_json()
        return carboncreditproject, 200
    except Exception as e:
        return str(e), 400

# Create a new carbon credit project
@app.route('/carboncreditprojects', methods=['POST'])
def create_carboncreditproject():
    try:
        data = request.json
        carboncreditproject = CarbonCreditProject(name=data['name'], price=data['price'], quantity=data['quantity'], user_id=data['user_id']).save()
        return carboncreditproject.to_json(), 201
    except Exception as e:
        return str(e), 400




# Route to get all users
@app.route('/users', methods=['GET'])
def get_users():
    try:
        users = User.objects().to_json()
        return users, 200
    except Exception as e:
        return str(e), 400

# Route to create a new user
@app.route('/users', methods=['POST'])
def create_user():
    try:
        user = User(name=request.json['name'])
        user.save()
        return user.to_json(), 201
    except Exception as e:
        return str(e), 400
    
# Get all carbon credits owned by a user
@app.route('/users/possessions', methods=['POST'])
def get_possessions():
    try:
        data = request.json
        possessions = Possession.objects(user_id=data['user_id']).to_json()
        return possessions, 200
    except Exception as e:
        return str(e), 400




if __name__ == "__main__":
    app.run(debug=True)

