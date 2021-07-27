const { model, database } = require('./model');

const postDB = () => {
    const obj = {'field1' : 'value1' , 'field2' : 'value2'};
    model((db)=>{
        const dbo = db.db(database);
        dbo.collection(collection).insertOne(obj, (err,res)=>{
            if (err) throw err;
            console.log('Document Inserted!');
            db.close();
        })
    });
}

module.exports = postDB;