var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    Bson = require('mongodb').BSONPure,
    db;

var mongoClient = new MongoClient(new Server('localhost', 27017));

mongoClient.open(function(err, mongoClient) {
    db = mongoClient.db("nbooks");
    db.collection('books', {strict:true}, function(err, collection) {
        if (err) {
            console.log("The 'books' collection doesn't exist. Creating it with sample data...");
            populateDB();
        }
    });
});

 
exports.findById = function(request, response) {
    var id = Bson.ObjectID.createFromHexString(request.params.id);

    db.collection('books', function(err, collection) {
        collection.findOne({'_id': id}, function(err, item) {
            console.log(item);
            response.jsonp(item);
        });
    });
};

exports.findAll = function(request, response) {
    var name = request.query["Nome"];    

    db.collection('books', function(err, collection) {
        if (name) {
            collection.find({"nome": new RegExp(name, "i")}).toArray(function(err, items) {
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
 

var populateDB = function() {
    console.log("Populating drinks database...");
    var drinks = [ 
    { 
        "isbn" : "555555555",
        "editora" : "Teste"
        "estado" : "RS",
        "nome" : "Harry Potter - Prisioneiro de Azkabam",
        "autor" : {
            "nome" : "J. K. Rowling",
            "id" : "135486795464612"
        },
        "numeropaginas" : "350",
        "resumo" : "Lorem ipsum, Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum!",
        "notasconteudo" : "Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,",
        "palavraschave" : ["Ficção", "Fantasia", "Adolescente" , Jovem Adulto""]
        "quantidade" : "11",
        "ano" : "2002"
    },
    { 
        "isbn" : "555555555",
        "editora" : "Teste"
        "estado" : "RS",
        "nome" : "Harry Potter - Prisioneiro de Azkabam",
        "autor" : {
            "nome" : "J. K. Rowling",
            "id" : "135486795464612"
        },
        "numeropaginas" : "350",
        "resumo" : "Lorem ipsum, Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum!",
        "notasconteudo" : "Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,",
        "palavraschave" : ["Ficção", "Fantasia", "Adolescente" , Jovem Adulto""]
        "quantidade" : "11",
        "ano" : "2002"
    },
    { 
        "isbn" : "555555555",
        "editora" : "Teste"
        "estado" : "RS",
        "nome" : "Harry Potter - Prisioneiro de Azkabam",
        "autor" : {
            "nome" : "J. K. Rowling",
            "id" : "135486795464612"
        },
        "numeropaginas" : "350",
        "resumo" : "Lorem ipsum, Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum!",
        "notasconteudo" : "Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,",
        "palavraschave" : ["Ficção", "Fantasia", "Adolescente" , Jovem Adulto""]
        "quantidade" : "11",
        "ano" : "2002"
    }
];
 
    db.collection('books', function(err, collection) {
        collection.insert(drinks, {safe:true}, function(err, result) {});
    });
 
};