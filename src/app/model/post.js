const connection = require('./connection');
const {storage , currentDatabase} = require('../../conf/info');
const log = require('../logs/post');

module.exports = (req, res , next)=>{
    // The route name.
    const route = req.baseUrl.replace('/','');

    // The processed request data.
    const data = { ...req[storage]};

    // Connect to Database Server, passing the operation as a callback func.
    connection((mongoDB)=>{
        
        // The Insertion Query.
        mongoDB.db(currentDatabase).collection(route).insertOne(data,(err,res)=>{
            if (err) throw err;
            mongoDB.close();
        });

    })
    
    res.status(201);
    log('adm' , res.statusCode , data);

    next();
}