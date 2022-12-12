const express = require('express');
const app= express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true})); // to take the from backend to frontend we have to use this


const employee = [
    {
        name:"Deepak",
        age:25
    }, {
        name:"Pradeep",
        age:23
    }, {
        name:"Rajan",
        age:22
    }
]

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/login',(req,res)=>{
    res.render('Login.ejs')
})

// passing dynamic data from node js
app.get('/table',(req,res)=>{
    res.render('Table.ejs',{companyName:"Newton School",name:"Deepak",list:employee})
})

app.post('/uploadData',(req,res)=>{
    console.log('data from frontend side:',req.body); // printing the data from frontend
    res.render('Success.ejs',req.body)
})

app.listen(8000,()=>{
    console.log(`The port is running at http://localhost:8000`)
})