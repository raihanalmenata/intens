const info = require('../helper/info');

module.exports = function(req,res,next){
    const baseUrl = req.baseUrl.replace('/','');
    const fields = info[`${baseUrl}Fields`];
    const result = [];
    const temp = info.locVar;

    req[temp].forEach(data => {
        const obj = {};
        fields.forEach(field => {
            obj[field] = data[field]
        });
        result.push(obj);
    });
    req[temp] = [...result];
    next();
}