const conf = require('../../conf/info');
const log = require('../logs/post');

module.exports = (req, res, next) => {
    const reqKey = req.body.key;

    // Check if reqKey match the admKey.
    if(reqKey == conf.admPass) { 
        next();
    }
    else{
        res.status(403);
        log('adm', res.statusCode,'-');
        res.send("Unauthorized Access");
    } 
}