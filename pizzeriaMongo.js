db = db.getSiblingDB('pizzeriaMongoDB');
db.dropDatabase();
db = db.getSiblingDB('pizzeriaMongoDB')

// db.createCollection('products');
// db.createCollection('clients');
// db.createCollection('shops');
// db.createCollection('localities');

db.products.insertMany(
    [{
        "_id": ObjectId("62baafb03bdb5aa0c5ab4d9f"),
        "productName": "pizza manola",
        "productDescription": "no tomato",
        "productImage": "./img/img.jpg",
        "productPrice": 10.5,
        "category": "pizza white",
        "productRef": "01"
      },{
        "_id": ObjectId("62c15e0db6051ad7ff2157d5"),
        "productName": "pizza italy",
        "productDescription": "gamberi",
        "productImage": "./img/img.jpg",
        "productPrice": 10.12,
        "category": "pizza vegan",
        "productRef": "02"
      },{
        "_id": ObjectId("62c15e91b6051ad7ff2157d6"),
        "productName": "coca cola",
        "productDescription": "zero",
        "productImage": "./img/img.jpg",
        "productPrice": 3.5,
        "category": "drinks",
        "productRef": "03"
      },{
        "_id": ObjectId("62c15ff2b6051ad7ff2157d7"),
        "productName": "solan",
        "productDescription": "water",
        "productImage": "./img/img.jpg",
        "productPrice": 2.5,
        "category": "drinks"
      },{
        "_id": ObjectId("62c160b6b6051ad7ff2157d8"),
        "productName": "burger piripiri",
        "productDescription": "with cheese",
        "productImage": "./img/img.jpg",
        "productPrice": 20.5,
        "category": "burgers",
        "productRef": "05"
      }]
);

db.clients.insertMany(
    [{
        "_id": ObjectId("62c1623eb6051ad7ff2157db"),
        "clientAddress": "c/muntaner 6",
        "clientPostalCode": "08370",
        "clientLastName": "Peris",
        "clientName": "Anna",
        "clientRef": "01",
        "clientCellNumber": "+34 666333444",
        "localitiesRef": "01",
        "orders": {
          "orderRef": "01",
          "orderTime": new ISODate('2022-04-02T12:40:00Z'),
          "orderHow": "home",
          "shopRef": "01",
          "orderTotalPrice": 30.5,
          "productRef": [
            "01",
            "04"
          ],
          "employeeRef": "01",
          "deliveryTime": new ISODate('2022-04-02T12:40:44Z')
        }
    },{
        "_id": ObjectId("62c166b4b6051ad7ff2157dc"),
        "clientAddress": "c/balmes 8",
        "clientPostalCode": "43850",
        "clientLastName": "Amat",
        "clientName": "Bego",
        "clientRef": "02",
        "clientCellNumber": "+34 666555444",
        "localitiesRef": "02",
        "orders": {
          "orderRef": "02",
          "orderTime": new ISODate('2022-03-02T12:40:44Z'),
          "orderHow": "home",
          "shopRef": "02",
          "orderTotalPrice": 40.5,
          "productRef": [
            "02",
            "03"
          ],
          "employeeRef": "02",
          "deliveryTime": new ISODate('2022-03-02T12:40:60Z')
         },
    }]
);

db.shops.insertMany(

    [{
        "_id": ObjectId("62c1688bb6051ad7ff2157df"),
        "shopAddress": "c/trampa 45",
        "shopRef": "01",
        "shopPostalCode": "08370",
        "localityRef": "01",
        "provinceRef": "01",
        "employee": {
          "employeeRef": "01",
          "employeeName": "Pedro",
          "employeeLastName": "Perez",
          "employeeNIF": "35113958L",
          "employeeCellNumber": "+34 666222333",
          "employeeCategory": "cook"
        }
      },{
        "_id": ObjectId("62c169e7b6051ad7ff2157e0"),
        "shopAddress": "c/trampa 45",
        "shopRef": "01",
        "shopPostalCode": "08370",
        "localityRef": "01",
        "provinceRef": "01",
        "employee": {
          "employeeRef": "02",
          "employeeName": "Jose",
          "employeeLastName": "Perez",
          "employeeNIF": "35222958L",
          "employeeCellNumber": "+34 111222333",
          "employeeCategory": "driver"
        }
    }]
);

db.localities.insertMany(
    [{
        "_id": ObjectId("62c16a6cb6051ad7ff2157e3"),
        "localityName": "Calella",
        "localityRef": "01",
        "province": {
          "provinceRef": "01",
          "provinceName": "Barcelona"
        }
      },{
        "_id": ObjectId("62c16b16b6051ad7ff2157e4"),
        "localityName": "Cambrils",
        "localityRef": "02",
        "province": {
          "provinceRef": "01",
          "provinceName": "Tarragona"
        }
    }]
);