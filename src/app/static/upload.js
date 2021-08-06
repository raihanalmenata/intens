const storage = require('./storage');
const multer = require('multer');

module.exports = multer({storage : storage});