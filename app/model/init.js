const { model , database } = require('./model')
const collections = ['clients','teams','projects'];

const getCollections = function(){
    return new Promise((resolve, reject)=>{
        let result = [];
        model((db)=>{
            const dbo = db.db(database);
            dbo.listCollections().toArray(async (err, collInfos)=>{
                collInfos.forEach(col => {
                    result.push(col.name);
                    console.log(result);
                });
            });
        });
        resolve(result)
    });
}

const initCollections = async () => {

    const result = await getCollections();
    console.log(result);
    
    // collections.forEach(collection => {
        


    //     // model((db)=>{
    //     //     const dbo = db.db(database);
    //     //     dbo.createCollection(collection, (err, res) => { 
    //     //         if (err) throw err;
    //     //         console.log(`Collection ${collection} created!`);
    //     //         db.close();
    //     //     });
    //     // });

    // });
}

// dbo.listCollections().toArray((err, collInfos)=>{
//     let result = false;
//     collInfos.forEach(col => {
//        if(collection == col.name){
//             console.log(collection);
//             console.log(col.name);
//             result = true;
//             console.log(result);
//        }
//     });
// db.close();
// return result;
// });

module.exports = initCollections;