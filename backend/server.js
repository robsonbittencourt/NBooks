var express = require('express'),
    books = require('./routes/books');
 
var app = express();

app.use(express.bodyParser());

// default route
app.get('/', function(req, res){
	//res.redirect('/users/');
});

// books
app.get('/books', books.findAll);
//app.post('/books/', books.create);
app.get('/books/:id', books.findById);
//app.put('/books/:id', books.update);
//app.delete('/books/:id', books.delete);


app.listen(3000);
console.log('Listening on port 3000...');