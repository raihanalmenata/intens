const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("Projects API invoked.");
    res.send("Succeed!");
})

module.exports = router;