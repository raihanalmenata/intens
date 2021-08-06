const {DBuri} = require('../../conf/info');
const MongoClient = require('mongodb').MongoClient;

const connection = function (DBoperation) {
    
    // Connect to the MongoDB server.
    MongoClient.connect(DBuri, function(err, mongoDB) {
        
      if (err) throw err;
        
      // Call the callback function (database operation).
      DBoperation(mongoDB);

    });
}

module.exports = connection;