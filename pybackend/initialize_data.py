from models import Bid, Ask, CarbonCreditProject, User, Possession
from mongoengine import Document, connect

from mongoengine import connect
from datetime import datetime
from models import Bid, Ask, CarbonCreditProject, User, Possession

connect(host='mongodb+srv://CarbonOffset:CarbonOffset@carbonoffset.fr7kjux.mongodb.net/?retryWrites=true&w=majority')

def initialize_sample_data():
    # Creating Users
    user1 = User(name="Alice", balance=1000000.00).save()
    user2 = User(name="Bob", balance=1000000.00).save()

    # Creating Carbon Credit Projects
    project1 = CarbonCreditProject(
        img_url="https://example.com/image1.jpg",
        name="Forest Restoration",
        price=1000.0,
        quantity=100,
        user_id=str(user1.id),
        timestamp=datetime.utcnow()
    ).save()
    
    project2 = CarbonCreditProject(
        img_url="https://example.com/image2.jpg",
        name="Solar Farm",
        price=1200.0,
        quantity=200,
        user_id=str(user2.id),
        timestamp=datetime.utcnow()
    ).save()

    # Creating Possessions
    possession1 = Possession(
        user_id=str(user1.id),
        project_id=str(project1.id),
        quantity=50,
        price_at_purchase=900.0,
        timestamp=datetime.utcnow()
    ).save()

    possession2 = Possession(
        user_id=str(user2.id),
        project_id=str(project2.id),
        quantity=100,
        price_at_purchase=1100.0,
        timestamp=datetime.utcnow()
    ).save()

    # Creating Bids
    bid1 = Bid(
        project_id=str(project1.id),
        buyer_id=str(user1.id),
        price=950.0,
        quantity=30,
        timestamp=datetime.utcnow()
    ).save()

    bid2 = Bid(
        project_id=str(project2.id),
        buyer_id=str(user2.id),
        price=1150.0,
        quantity=50,
        timestamp=datetime.utcnow()
    ).save()

    # Creating Asks
    ask1 = Ask(
        project_id=str(project1.id),
        seller_id=str(user1.id),
        price=1050.0,
        quantity=20,
        timestamp=datetime.utcnow()
    ).save()

    ask2 = Ask(
        project_id=str(project2.id),
        seller_id=str(user2.id),
        price=1250.0,
        quantity=40,
        timestamp=datetime.utcnow()
    ).save()

    print("Sample data initialized.")

if __name__ == "__main__":
    initialize_sample_data()
