const connection = require('./connection');
const {currentDatabase, storage} = require('../../conf/info');
const log = require('../logs/post');

module.exports = (req, res, next)=>{
    
    const currentRoute = req.baseUrl.replace('/','');

    // Connect to Database Server, passing the operation as a callback func.
    connection((mongoDB)=>{

        // The Selection Query.
        mongoDB.db(currentDatabase).collection(currentRoute).find({})
        .project({ _id : 0 })
        .toArray((err,selectedDocs)=>{

            if (err) throw err;

            // Store the result into temp variable.
            req[storage] = [...selectedDocs];
            
            log('usr', res.statusCode , '-');

            mongoDB.close();
            next();

        });
    })
}