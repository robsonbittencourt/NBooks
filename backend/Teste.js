var express = require("express");
var app = express();

console.log("funcionou");

app.get("/books/:bookName?",function(req, res, next){
	var bn = req.params.bookName;
	
	console.log(bn);
	
	res.send("hãhãhãhã");
});

app.listen(3000);