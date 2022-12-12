const express = require('express');
const path = require('path')
const app = express();

//absolute path
// console.log(__dirname);

const staticPath = path.join(__dirname,'../public')
console.log(staticPath)


// bluilting middleware
app.use(express.static(staticPath))  // to serve a static folder we used "use" and express.static is a middleware to add static page

// app.get('/',(req,res)=>{
//     res.send(`<h1>Welcome to Home Page</h1>`);
// })

// app.get('/about',(req,res)=>{
//     res.status(200).send(`<h1>Welcome to About Page</h1>`);
// })

// app.get('/contact',(req,res)=>{
//     res.send(`<h1>Welcome to Contact Page</h1>`);
// })

app.listen(8000,()=>{
    console.log("port is running at 8000");
})