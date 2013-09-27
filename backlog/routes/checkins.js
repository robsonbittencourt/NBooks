var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    Bson = require('mongodb').BSONPure,
    db;

var mongoClient = new MongoClient(new Server('localhost', 27017));
mongoClient.open(function(err, mongoClient) {
    db = mongoClient.db("bebendosocial");
});
 

exports.createNewCheckin = function(request, response) {

    var id = Bson.ObjectID.createFromHexString(request.body.id);

    var drinkId = request.body.drinkId;
    var drinkName = request.body.drinkName;
    var comment = request.body.comment;
    var private = request.body.private;

    var checkin = 
    {
        "drinkId": drinkId,
        "drinkName": drinkName,
        "comment" : comment,
        "private" : private,
        "date" : new Date()
    };
    console.log(checkin);
    console.log(id);

    /*
    rankingdb.update(
        {keyword:key},
        {$inc:{score:1}},
        {upsert:true,safe:false},
        function(err,data){
            if (err){
                console.log(err);
            }else{
                console.log("score succeded");
            }
        }
    );
    */


    db.collection('users', function(err, collection) {
        collection.update(
            {'_id': id}, 
            {$push: 
                { checkins:  checkin }
            },
            {upsert:true, safe:false},
            function(error, result) {
                db.collection('users', function(error, collection){
                    collection.findOne({'_id' : id}, function(error, user){
                        response.jsonp(user);
                    });
                });               
                
            });
    });
};
