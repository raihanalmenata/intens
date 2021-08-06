const connection = require('../model/connection');
const currentDatabase = require('../../conf/info').currentDatabase;

module.exports = function (userType , status, data) {
    const log = {
        'time' : new Date().toGMTString(),
        'type' : userType ,
        'status' : status,
        'data' : data
    }
    connection((mongoDB)=>{
        mongoDB.db(currentDatabase).collection('logs').insertOne(log , (err,res) => {
            if (err) throw err;
            mongoDB.close();
        });
    });
    console.log(
        `${log.time} : ${log.type} ${log.status}`
    );
}