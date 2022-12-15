const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//importing routers
const studentRouter = require('./routes/students');
const userRouter = require('./routes/users');


app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/Tres")
.then(()=>{
    console.log("database connected");
})
.catch((error)=>{
    console.log("connection failed")
})


app.use('',userRouter)
app.use('/students',studentRouter)


app.listen(8080,()=>{
    console.log("port is running at http://localhost:8080");
})