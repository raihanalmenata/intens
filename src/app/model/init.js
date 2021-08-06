const connection = require('./connection');
const {collectionsList , currentDatabase} = require('../../conf/info');

module.exports = () => {
    collectionsList.forEach(collection => {
        connection((mongoDB)=>{
            mongoDB.db(currentDatabase).createCollection(collection,(err,res)=>{
                
                // If the collection already formed, exits.
                if (err){
                    mongoDB.close();
                    return;
                } 
                console.log(`collection ${collection} inserted!`);
                mongoDB.close();
            });
        }) 
    });
}