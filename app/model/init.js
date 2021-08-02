const connection = require('../helper/connection');
const info = require('../helper/info');

module.exports = () => {
    console.log('triggered');
    info.collectionsList.forEach(collection => {
        connection((mongoDB)=>{
            mongoDB.db(info.database).createCollection(collection,(err,res)=>{
                if (err) return;
                console.log(`collection ${collection} inserted!`);
                mongoDB.close();
            });
        }) 
    });
}