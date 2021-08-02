const {DBuri, database} = require('./info');
const MongoClient = require('mongodb').MongoClient;

const connection = (callback) => {
    MongoClient.connect(DBuri, function(err, mongoDB) {
        if (err) throw err;
        console.log('Connection Established!');
        callback(mongoDB);
      });
}

module.exports = connection;