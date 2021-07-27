const express = require('express');
const app = express();
const port = 3000;

app.use((req,res,next)=>{
    console.log("Root Invoked.");
    next();
})

app.use('/teams',require('./app/routers/teams'));
app.use('/projects',require('./app/routers/projects'));
app.use('/clients',require('./app/routers/clients'));

app.listen(port, ()=>{
    console.log(`Listening on : ${port}`);
})

const init = require('./app/model/init');
init();