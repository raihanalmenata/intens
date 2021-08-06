const {storage} = require('../../conf/info');

module.exports = function (req, res, next) {

    // req.storage is a temp variable where processed response stored.
    res.send(req[storage]);
    
}