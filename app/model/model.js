const uri = "mongodb://localhost:27017/";
const MongoClient = require('mongodb').MongoClient;
const database = 'intens';

const model = (callback) => {
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        console.log('DB Connected!');
        callback(db);
      });
}




exports.model = model;
exports.database = database;