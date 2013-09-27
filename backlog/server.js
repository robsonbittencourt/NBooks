var express = require('express'),
    users = require('./routes/users'),
    drinks = require('./routes/drinks'),
    checkins = require('./routes/checkins');
 
var app = express();

app.use(express.bodyParser());

// default route
app.get('/', function(req, res){
	res.redirect('/users/');
});

// users
app.get('/login', users.login);

app.get('/users', users.findAll);
app.post('/users', users.createNewUser);
app.get('/drinks', drinks.findAll);

app.get('/users/:id', users.findById);
app.get('/users/:id/friends', users.findFriends);
//app.get('/users/:id/dashboard', users.findDashboard);

//app.put('/users/:id/', users.updateUser);

// drinks

app.get('/drinks/:id', drinks.findById);

// checkins
app.post('/checkins', checkins.createNewCheckin);

/*

GET /users/
GET /users/:id
GET /users/:id/friends
GET /users/:id/Dashboard
POST /users/
{
	"name": "name",
	"email": "email",
	"password" : "password"
}
PUT /users:id

GET /drinks/
GET /drinks/[?name]&[type]
GET /drinks/:id

POST /checkins/
{
	"userId" : "userId",
	"drinkId" : "drinkId",
	"comment" : "comment",
	"private" : "private"
}

*/

app.listen(3000);
console.log('Listening on port 3000...');