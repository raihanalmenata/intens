// MongoDB servers uri

exports.DBuri = 'mongodb+srv://username1:pass1@cluster0.y4t2w.mongodb.net/intens?retryWrites=true&w=majority';
//"mongodb://localhost:27017/";

// Database Name
exports.currentDatabase = 'intens';

// Server Port
exports.port = 80;

// Collection List for Initiation
exports.collectionsList = ['clients','projects','teams', 'logs'];

// Data Format for Validation
// Note : Order matters.
exports.clientsFields=['nama','gambar']; // Clients
exports.teamsFields=['nama','jabatan','gambar']; // Teams
exports.projectsFields=['judul','deskripsi','gambar']; // Projects

// Local Variabel location for Communicating between Middlewares.
exports.storage = 'storage';

// Keyword for admin access.
exports.admPass = 'intens';

// Path for storing static files/ assets.
exports.assetsStorage = '/assets';

// Form input name for uploading picture.
exports.picInputName = 'picture';

exports.publicDirPath = __dirname+`/../../assets/public/`;