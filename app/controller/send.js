const info = require('../helper/info');

module.exports = function (req, res, next) {
    const resp = req[info.locVar];
    res.send(resp);
}