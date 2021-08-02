const info = require('../helper/info');

module.exports = (req, res, next) => {
    const key = req.body.key;

    if(key == info.admPass) {
        console.log("Authenticated!");
        next();
    }
    else res.send("Access Denied : Unauthorized access.");
}