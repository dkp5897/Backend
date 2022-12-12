const express = require('express')
const app = express();

// app.get(route,callback)

app.get('/',(req,res)=>{
    // res.send("This is http request of express js");
    res.send(`<h1>Hello world</h1>`)
})

app.get('/about', (req,res)=>{
    res.send(`<h1>Hello About Page</h1>`)
})

app.listen(8000,()=>{
    console.log("listening the port at 8000");
})

//The callback function has 2 parameters, request(req) and response (res).
//The request object (req) represents the http request and has the properties for the request query string, parameters, body, HTTP headers, ect.

// The esponse (res) represets the http response that express app Express app sends when it recievesan http request.
