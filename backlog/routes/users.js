var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    Bson = require('mongodb').BSONPure,
    db;

var mongoClient = new MongoClient(new Server('localhost', 27017));
mongoClient.open(function(err, mongoClient) {
    db = mongoClient.db("bebendosocial");
    db.collection('users', {strict:true}, function(err, collection) {
        if (err) {
            console.log("Criando users padrão");
            populateDB();
        }
    });
});
 
exports.findById = function(request, response) {
    console.log(request.params);
    var id = Bson.ObjectID.createFromHexString(request.params.id);
    console.log('findById: ' + id);
    db.collection('users', function(err, collection) {
        collection.findOne({'_id': id}, function(error, item) {
            console.log(item);
            response.jsonp(item);
        });
    });
};

exports.login = function(request, response) {
    console.log(request);
    console.log(request.query);

    var email = request.query["email"];
    var password = request.query["password"];

    db.collection('users', function(err, collection) {
        collection.findOne({'email': email, 'password' : password }, function(error, item) {
            console.log(item);
            response.jsonp(item);
        });
    });
};

exports.findAll = function(request, response) {
    console.log(request.params);
    db.collection('users', function(error, collection) {
        collection.find().toArray(function(error, items) {
            response.jsonp(items);
        });
    });
};

exports.findFriends = function(request, response) {
    var id = Bson.ObjectID.createFromHexString(request.params.id);
    
    db.collection('users', function(error, collection) {
        collection.find().toArray(function(error, items) {
            response.jsonp(items);
        });
    });

    /*
    db.collection('users', function(error, collection){
        collection.findOne({'_id' : id}, function(error, user){            
            var friends = [];
            var ids = user.friends;

            for (var i = ids.length - 1; i >= 0; i--) {        
                
                var friendId = ids[i];      

                db.collection('users', function(error, collection){
                    collection.findOne({'_id' : friendId}, function(error, user){                
                        friends.push(user);                                    
                    });
                });
                console.log("aa " + ids);
            };
            console.log("dd " + friends);
            response.jsonp(friends);            
        });
    });*/
}

exports.createNewUser = function(request, response) {
    console.log(request.body);
    var name = request.body.name;
    var email = request.body.email;
    var password = request.body.password;

    var user = 
    {
        "name": name,
        "email": email,
        "password" : password
    };
    
    
    db.collection('users', function(err, collection) {
        collection.insert(user, {safe:true}, function(error, result) {
            console.log("user ->" + result);
            response.jsonp(result[0]);
        });
    });
};


var getFriends = function (friendsIds) {
    var friends = [];
    
    for (var i = friendsIds.length - 1; i >= 0; i--) {        
        
        var id = friendsIds[i];      

        db.collection('users', function(error, collection){
            collection.findOne({'_id' : id}, function(error, user){                
                friends.push(user);
                console.log("aa " + friends);                
            });
        });
    };
    //console.log("friends -> " + friends);
    return friends;
}

var populateDB = function() { 
    console.log("Populating users database...");
    var users = 
    [
        { "name" : "pablo", "email" : "ruanmyv@gmail.com", "password" : "teste" },
        { "name" : "teste1", "email" : "teste@teste.com", "password" : "teste" },
        { "name" : "teste2", "email" : "aaa@aaa.com", "password" : "teste" }
    ];
    
    var ids = [];

    db.collection('users', function(err, collection) {
        collection.insert(users, {safe:true}, function(err, result) {
            console.log(result);
            for (var i = result.length - 1; i >= 0; i--) {
                ids.push(result[i]._id);
            };

             var user = {
                "name" : "teste", "email" : "1@1.com", "password" : "1", friends : ids
            };
            console.log(user);
            db.collection('users', function(err, collection) {
                collection.insert(user, {safe:true}, function(err, result) {});
            }); 
        });
    }); 
};

