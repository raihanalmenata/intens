const router = require('express').Router();

router.get('/',[
    //Retrieving the response
    require('../model/get'), 
    //Sending the response
    require('../helper/send')
]);

router.post('/',[
    // Authenticating the incoming request
    require('../helper/auth'),
    // Validating the Data Format
    require('../helper/validate'),
    // Posting the Request
    require('../model/post'),
    // Sending Back Request
    require('../helper/send')
]);

module.exports = router;