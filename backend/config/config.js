module.exports = {
    development: {
        root: require('path').normalize(__dirname + '/..'),
        app: {
            name: 'Nbooks DEV'
        },
        host: 'localhost',
        port: '3000',
        db_prefix: 'mongodb',
        db_port: '27017',
        db_database: 'test_database',
        version: '0.9.3'
    },
    test: {
        root: require('path').normalize(__dirname + '/..'),
        app: {
            name: 'Nbooks Test'
        }
    },
    production: {
        root: require('path').normalize(__dirname + '/..'),
        app: {
            name: 'Nbooks'
        }
  	}	
};