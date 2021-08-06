const conf = require('../../conf/info');
const {storage} = conf;
const log = require('../logs/post');

module.exports = (req,res,next) => {
    
    // Route Name
    const route = req.baseUrl.replace('/','');

    // Required collection fields.
    const requiredField = conf[`${route}Fields`];

    // Data sent.
    const dataSent = req.body.data;

    // Check if data is null or in wrong format.
    if(dataSent == null || !match(dataSent, requiredField)){
        res.status(400);
        log('adm' , res.statusCode , '-')
        res.send(`Wrong Data Format : ${res.statusCode}`);
    }else{
        req[storage] = {...dataSent};
        next();
    }
        
}


const match = function (dataSent , requiredFields) {
    
    // Extract the object keys.
    const requestFields = Object.keys(dataSent);

    // Compare the number of object keys.
    if(requestFields.length != requiredFields.length) return false;

    // Check if the object's key names matches, order considered.
    return requestFields.every((requestField, index)=>{
        return requestField == requiredFields[index];
    });
}



