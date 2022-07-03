db = db.getSiblingDB('culampollaMongoDB');
db.dropDatabase();
db = db.getSiblingDB('culampollaMongoDB');

// db.createCollection('glasses');
// db.createCollection('clients');
// db.createCollection('employees');

db.glasses.insertMany(
    [{
        "_id": ObjectId("62b423baa66bb79fa87e2941"),
        "glassBrand": "Prada",
        "glassColorFrame": "white",
        "glassPrice": 56.80,
        "glassSellingDate": new ISODate('2022-03-03T12:40:00Z'),
        "lens":{"rightLensGraduation":"2.2",
          "leftLensGraduation":"1.2",
          "colorLens": "red"
        },
        "suppliers":{
          "supplierRef": "S01",
          "supplierName": "BBGLASSES",
          "supplierCellNumber": "+34 616620410",
          "supplierFax": "+34 934153444",
          "supplierNif": "35116956L",
          "supplierAddress": {
            "street": "casanoves",
            "number": "34",
            "flat": "3",
            "door": "1",
            "city": "Barcelona",
            "postalCode": "08015",
            "country": "Spain"
          }
        },
        "frame": {
          "color": "white",
          "type": "pasta"
        },
        "clientRef": "01",
        "employeeRef": "01",
        "glassRef": "01"
    },{
        "_id": ObjectId("62b42e89a66bb79fa87e2947"),
        "glassBrand": "Armani",
        "glassPrice": "105.45",
        "glassSellingDate": new ISODate('2022-04-01T12:40:00Z'),
        "lens":{"rightLensGraduation": "2.0",
        "leftLensGraduation": "1.5",
          "colorLens": "white"
        },
        "suppliers": {
          "supplierRef": "S02",
          "supplierName": "TTGLASSES",
          "supplierCellNumber": "+34 616620710",
          "supplierFax": "+34 934153644",
          "supplierNif": "35118956L",
          "supplierAddress": {
            "street": "Gran Via",
            "number": "45",
            "flat": "1",
            "door": "2",
            "city": "Madrid",
            "postalCode": "22015",
            "country": "Spain"
          }
        },
        "frame": {
          "color": "red",
          "type": "metallic"
        },
        "clientRef": "02",
        "employeeRef": "01",
        "glassRef": "02"
      }]
);

db.employees.insertMany(
    [{
        "_id": ObjectId("62bab38e3bdb5aa0c5ab4db0"),
        "employeeRef": "01",
        "employeeCellNumber": "+34 666 777 888",
        "employeeEmail": "malvaro@gmail.com",
        "employeeName": "Alvaro Perez"
      },{
        "_id": ObjectId("62bab4933bdb5aa0c5ab4db2"),
        "employeeRef": "02",
        "employeeCellNumber": "+34 666 000 888",
        "employeeEmail": "carmep@gmail.com",
        "employeeName": "Carmen Perez"
      }]
);

db.clients.insertMany(
    [{
        "_id": ObjectId("62bab5123bdb5aa0c5ab4dbb"),
        "clientCellName": "+34 666 777 222",
        "clientDateRegister": new ISODate('2020-06-20T12:40:00Z'),
        "clientEmail": "marta@gmail.com",
        "clientRef": "01",
        "clientName": "Marta Coca",
        "clienteRecommended": "null"
      },{
        "_id": ObjectId("62bab6333bdb5aa0c5ab4dbc"),
        "clientCellName": "+34 000 777 222",
        "clientDateRegister": new ISODate('2020-10-10T12:40:00Z'),
        "clientEmail": "marta@gmail.com",
        "clientRef": "02",
        "clientName": "Enric Mayne",
        "clienteRecommended": ""
      }]
);

