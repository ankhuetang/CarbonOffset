from flask import Flask, request, jsonify, g
from mongoengine import Document, StringField, connect, FloatField, DateTimeField, IntField
from datetime import datetime
import bisect


app = Flask(__name__)
connect(host='mongodb+srv://CarbonOffset:CarbonOffset@carbonoffset.fr7kjux.mongodb.net/?retryWrites=true&w=majority')


g.bids = []
g.asks = []

g.orderbook = {
    "bids": [],
    "asks": [],
    "order_id_map": {}
}


class Bid(Document):
    name = StringField(required=True)
    price = FloatField(required=True)
    quantity = IntField(required=True)
    timestamp = DateTimeField(default=datetime.utcnow)

class Ask(Document):
    name = StringField(required=True)
    price = FloatField(required=True)
    quantity = IntField(required=True)
    timestamp = DateTimeField(default=datetime.utcnow)

# Routes
@app.route('/bids', methods=['GET'])
def get_bids():
    try:
        bids = Bid.objects().to_json()
        return bids, 200
    except Exception as e:
        return str(e), 400

@app.route('/bids', methods=['POST'])
def create_bid():
    try:
        data = request.json
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
                highest_bid.save()
                lowest_ask.delete()
            elif highest_bid.quantity < lowest_ask.quantity:
                lowest_ask.quantity -= highest_bid.quantity
                lowest_ask.save()
                highest_bid.delete()
            else:
                highest_bid.delete()
                lowest_ask.delete()
            
            # Log the match (in a real system you'd also want to notify the users involved)
            print(f'Match: {highest_bid.name} bought from {lowest_ask.name} at ${matched_price} per share')

    except Exception as e:
        print(str(e))



# Define the User model
class User(Document):
    name = StringField(required=True)

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




if __name__ == "__main__":
    app.run(debug=True)

