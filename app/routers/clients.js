const router = require('express').Router();
const info = require('../helper/info');

router.get('/',[

    //Retrieving all of the data
    require('../model/get'), 
    
    //Structuring the data format
    require('../controller/clean'), 
    
    //Sending the response
    require('../controller/send')

]);

router.post('/',[
    // Authenticating the incoming request
    require('../controller/auth'),
    // Validating the Data Format
    require('../controller/validate'),
    // Posting the Request
    require('../model/post')
]);

module.exports = router;