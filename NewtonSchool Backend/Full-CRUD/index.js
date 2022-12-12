const express  = require('express');
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send(`<h1>Hello Deepak</h1>`);
})

app.get('/client',(req,res)=>{
    res.send(`
    <h1>Hello Client</h1>
    <h3>How are you?</h3>
    `)
})

app.get('/date/:id',(req,res)=>{
    res.send({
        id:req.params.id
    })
})

app.post('/gmail',(req,res)=>{
    console.log(req.body);
    res.status(201).json({
        mag:"successfully added"
    })
})

app.listen(8080,()=>{
    console.log("port is runnig at http://localhost:8080");
})