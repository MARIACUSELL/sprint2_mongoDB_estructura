db = db.getSiblingDB('pizzeriaMongoDB');
db.dropDatabase();
db = db.getSiblingDB('pizzeriaMongoDB')

db.createCollection('shops');
db.createCollection('products');
db.createCollection('clients');

db.shops.insert([{}])