module.exports = require('multer').diskStorage({
    destination : function (req, file, cb){
        const currentRoute = req.url.replace('/','');
        console.log('route: '+ __dirname);
        cb(null, `../assets/public/${currentRoute}`);
    } ,
    filename : function (req, file, cb){
        cb(null, file.originalname);
    }
});