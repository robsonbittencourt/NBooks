var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    Bson = require('mongodb').BSONPure,
    db;

var mongoClient = new MongoClient(new Server('localhost', 27017));
mongoClient.open(function(err, mongoClient) {
    db = mongoClient.db("bebendosocial");
    db.collection('drinks', {strict:true}, function(err, collection) {
        if (err) {
            console.log("The 'drinks' collection doesn't exist. Creating it with sample data...");
            populateDB();
        }
    });
});

 
exports.findById = function(request, response) {
    var id = Bson.ObjectID.createFromHexString(request.params.id);
    db.collection('drinks', function(err, collection) {
        collection.findOne({'_id': id}, function(err, item) {
            console.log(item);
            response.jsonp(item);
        });
    });
};

exports.findAll = function(request, response) {
    var name = request.query["name"];
    var type = request.query["type"];

    db.collection('drinks', function(err, collection) {
        if (name) {
            collection.find({"name": new RegExp(name, "i")}).toArray(function(err, items) {
                response.jsonp(items);
            });
        } else if(type) {
            collection.find({"type": new RegExp(type, "i")}).toArray(function(err, items) {
                response.jsonp(items);
            });
        } else {
            collection.find().toArray(function(err, items) {
                console.log(items);
                response.jsonp(items);
            });
        }
    });
};
 
/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {
 
    console.log("Populating drinks database...");
    var drinks = [
        { "Name" : "Polar", "Producer":"AMBEV", "Alcohol":"4.5","Capacity":"600", "Type" : "beer"},
        { "Name" : "Heineken", "Producer":"Heineken", "Alcohol":"4.1","capacity":"600", "Type" : "beer"},
        { "Name" : "Skol", "Producer":"AMBEV", "Alcohol":"2","Capacity":"600", "Type" : "beer"}
    ];
 
    db.collection('drinks', function(err, collection) {
        collection.insert(drinks, {safe:true}, function(err, result) {});
    });
 
};