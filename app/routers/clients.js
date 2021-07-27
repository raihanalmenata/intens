const express = require('express');
const router = express.Router();
const model = require('../model/post')

router.get('/',(req,res,next)=>{
    console.log("Clients API invoked.");
    next();
    }, model
    )

module.exports = router;