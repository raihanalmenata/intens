const uri = "mongodb://localhost:27017/";
const MongoClient = require('mongodb').MongoClient;
const database = 'intens';

// const model = (callback) => {
//     MongoClient.connect(uri, function(err, db) {
//         if (err) throw err;
//         console.log('DB Connected!');
//         callback(db);
//       });
// }

const start = async function(){
    const client = new MongoClient(uri, { useUnifiedTopology : true });
    await client.connect();
    const collections = await client.db(database).listCollections().toArray();

    return collections;
}