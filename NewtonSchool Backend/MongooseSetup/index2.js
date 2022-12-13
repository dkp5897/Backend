const express = require('express');
const app = express();
const mongoose = require('mongoose');
const myContent = require('./models/myContent');
const bodyParser = require('body-parser');

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/myData")
.then(()=>{
    console.log("nodejs connect with mongodb");
})
.catch(()=>{
    console.log("connection failed")
})


app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.post('',(req,res)=>{
    const post = new myContent({
        title:req.body.title,
        discription:req.body.discription,
        forWeb:req.body.forWeb
    })
    post.save()
    .then((response)=>{
        res.send({
            result:response
        })
    })
    .catch((error)=>{
        res.send({
            info:error
        })
    })
})

let arr = [];
app.get('/data',(req,res)=>{
    myContent.find()
    .then((response)=>{
        res.status(200).json({
            result:response
        })
    })
    .catch((error)=>{
        res.status(401).json({
            info:error
        })
    })
})

app.get('/showData',(req,res)=>{
    myContent.find()
    .then((response)=>{
        res.render('home.ejs',{
            list:response
        })
    })
    .catch((error)=>{
        res.status(401).json({
            info:error
        })
    })
})

app.listen(8000,()=>{
    console.log("port is running at http://localhost:8000");
})