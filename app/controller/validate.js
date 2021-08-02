const info = require('../helper/info');

module.exports = (req,res,next) => {
    const baseUrl = req.baseUrl.replace('/','');
    const criteria = info[`${baseUrl}Fields`];
    const reqData = req.body.data;
    
    if(validated(reqData, criteria)){
        req[info.locVar] = {...reqData};
        next();
    }
    else res.send("wrong format")
}


const validated = function (reqData , criteria) {
    const reqFormat = Object.keys(reqData);

    if(reqFormat.length != criteria.length) return false;

    return reqFormat.every((element, index)=>{
        return element == criteria[index];
    });
}



