const connection = require('../helper/connection');
const info = require('../helper/info');

module.exports = (req, res, next)=>{
    const collection = req.baseUrl.replace('/','');
    connection((mongoDB)=>{
        mongoDB.db(info.database).collection(collection).find({}).toArray((err,res)=>{
            if (err) throw err;
            req[info.locVar] = [...res];
            mongoDB.close();
            next();
        });
    })
}