const connection = require('../helper/connection');
const info = require('../helper/info');

module.exports = (req, res , next)=>{
    const collection = req.baseUrl.replace('/','');
    const data = { ...req[info.locVar]};

    connection((mongoDB)=>{
        mongoDB.db(info.database).collection(collection).insertOne(data,(err,res)=>{
            if (err) throw err;
            console.log(data)
            mongoDB.close();
        });
    })
    next();
}