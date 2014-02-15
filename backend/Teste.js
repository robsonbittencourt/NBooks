var express = require("express");
var app = express();

console.log("funcionou");

app.get("/books/:bookName?",function(req, res, next){
	var bn = req.params.bookName;
	
	
	res.send("Livro solicitado " + req.params.bookName);
});

app.listen(3000);