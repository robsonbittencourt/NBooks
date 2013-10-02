// Database
var connection = config.db_prefix + '://' + config.host + ':' + config.db_port + '/' + config.db_database;
console.log(connection);
mongoose.connect(connection, {
	server:{auto_reconnect:true}
});
var db = mongoose.connection;

mongoose.connection.on('opening', function() {
  console.log("reconnecting... %d", mongoose.connection.readyState);
});

db.once('open', function callback () {
  console.log("Database connection opened.");
});

db.on('error', function (err) {
  console.log("DB Connection error %s", err);
});

db.on('reconnected', function () {
  console.log('MongoDB reconnected!');
});

db.on('disconnected', function() {
  console.log('MongoDB disconnected!');
  mongoose.connect(connection, {server:{auto_reconnect:true}});
});

// Init models
fs.readdirSync(models_path).forEach(function (file) {
  console.log("Loading model " + file);
  require(models_path + '/' + file);
});