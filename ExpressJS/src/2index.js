// rounting in express js

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to Home Page</h1>`);
})

app.get('/about',(req,res)=>{
    res.status(200).send(`<h1>Welcome to About Page</h1>`);
})

app.get('/contact',(req,res)=>{
    res.send(`<h1>Welcome to Contact Page</h1>`);
})

// how to send multiple html elements
app.get('/product',(req,res)=>{
    res.write(`<h1>Welcome to Product Page</h1>`);
    res.write(`<h3>Our products are very Good</h3>`);
    // write method is used for sending multiple data so use send method to tell that our response is ended
    res.send()
})

//sending json data

// app.get('/boi',(req,res)=>{
//     res.send([{
//         id:1,
//         name:"Deepak"
//     },{
//         id:2,
//         name:"Pradeep"
//     },{
//         id:3,
//         name:"Divyansh"
//     },{
//         id:4,
//         name:"Priyansh"
//     },])
// })
app.get('/boi',(req,res)=>{
    res.json([{
        id:1,
        name:"Deepak"
    },{
        id:2,
        name:"Pradeep"
    },{
        id:3,
        name:"Divyansh"
    },{
        id:4,
        name:"Priyansh"
    },])
})

app.listen(8080,()=>{
    console.log("The port is running at 8080");
});