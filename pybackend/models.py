from datetime import datetime
from mongoengine import Document, FloatField, DateTimeField, IntField, StringField

class Bid(Document):
    project_id = StringField(required=True)
    buyer_id = StringField(required=True)
    price = FloatField(required=True)
    quantity = IntField(required=True)
    timestamp = DateTimeField(default=datetime.utcnow)

class Ask(Document):
    project_id = StringField(required=True)
    seller_id = StringField(required=True)
    price = FloatField(required=True)
    quantity = IntField(required=True)
    timestamp = DateTimeField(default=datetime.utcnow)


class CarbonCreditProject(Document):
    img_url = StringField(required=True)
    name = StringField(required=True)
    price = FloatField(required=True)
    quantity = IntField(required=True)
    timestamp = DateTimeField(default=datetime.utcnow)
    user_id = StringField(required=True)


class User(Document):
    name = StringField(required=True)
    balance = FloatField(default=1000000)


class Possession(Document):
    user_id = StringField(required=True)
    project_id = StringField(required=True)
    quantity = IntField(required=True)
    timestamp = DateTimeField(default=datetime.utcnow)
    price_at_purchase = FloatField(required=True)