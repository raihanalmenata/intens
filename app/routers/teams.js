const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("Teams API invoked.");
    res.send("Succeed!");
})

module.exports = router;