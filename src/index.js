const express = require('express');

// The Main App.
const app = express();

// Port.
const {port} = require('./conf/info');

// Import Init Function.
const initCollection = require('./app/model/init');

// Start App.
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening on port : ${port}`);
})

//  Initiates Collections.
initCollection();

// Req Body Parser.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load Routes.
app.use('/teams',require('./app/routers/teams'));
app.use('/projects',require('./app/routers/projects'));
app.use('/clients',require('./app/routers/clients'));
app.use('/assets', require('./app/routers/assets'));

app.use((req,res,next)=>{
    res.status(404);
    res.send("Not Found");
    next();
})