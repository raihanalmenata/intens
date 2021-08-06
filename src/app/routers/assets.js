const express = require('express');
const router = express.Router();
const {publicDirPath , picInputName} = require('../../conf/info');
const {readdirSync} = require('fs');
const publicDir = readdirSync(publicDirPath , { withFileTypes : true })
.filter(source => source.isDirectory())
.map(source => source.name);
const upload = require('../static/upload');

publicDir.forEach( dir => {
    console.log(dir);
    router.post(`/${dir}`,[
        upload.single(picInputName),
        (req,res,next) => {
            res.status(201);
            res.send('sent');
        }
    ]);
})

router.use('/', [
     express.static(publicDirPath),
     require('../helper/send')
]);




module.exports = router;