require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
//routes
const routerUser = require('./routes/user.routes');

//bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use('/api/user',routerUser)



mongoose.connect(process.env.MONGODB_URI).then(result=>{
    
    return app.listen({port:process.env.PORT},()=>{
        console.log("Connected MongoDB")
        console.log("http://localhost:"+process.env.PORT)
    });
})
.catch(err =>{
    console.log(err);
})