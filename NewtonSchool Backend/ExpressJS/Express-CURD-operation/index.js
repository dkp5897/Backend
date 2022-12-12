const express = require("express")
const employee = require('./mock.json')
const bodyParser = require('body-parser');
const path = require('path')
const app  = express()
const port = 8000;

// app.use(bodyParser.json())

app.get('/',(req,res)=>{
    // res.send("Hii")
    res.status(200).json({
        message:"Fetching data successfully",
        data:employee.employee
    })
})

app.get('/contact',(req,res)=>{
    res.status(200)
    .json({
        message:"contact fetching successfully",
        contactList:{
            fullname:"Deepak Kumar",
            age : 25
        }
    })
})

app.post('/',(req,res)=>{
    console.log(typeof req.body)
    res.status(201).json({
        message:"Data added successfully",
        data:req.body
    })
})

// we can also serve json file or any file through path
app.get('/data',(req,res)=>{
    res.sendFile(path.join(__dirname,'mock.json'))
})

app.listen(8000,()=>{
    console.log(`The port is running at http://localhost:${port}`)
})