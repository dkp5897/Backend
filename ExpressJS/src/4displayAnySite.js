const express = require('express')
const app = express();
const port = 8500;
const path = require('path')

//built in middleware
// const staticPath = path.join(__dirname,"../public/Site")
// console.log(staticPath);
// app.use(express.static(staticPath))


app.get('/',(req,res)=>{
    // res.send("Hello for the express server");
    res.sendFile(path.join(__dirname,'4index.html'))
})

app.listen(port,()=>{
    console.log("The port is running at ",port);
})