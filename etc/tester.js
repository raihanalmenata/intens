const { connect, db } = require('../app/helper/connection');

const starts = async ()=>{
    await connect();
    console.log(db);
}

starts();