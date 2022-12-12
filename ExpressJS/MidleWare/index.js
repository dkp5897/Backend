//midleware: It is a function, program or somthing which is going to run between the time, the server getting request and server sending resonse to the client.

const express  = require('express');
const app = express();


app.use(logger);

// app.get(path,middlewares);

// app.get('/',(req,res,next)=>{
//     console.log('Home Page');
//     res.send('Welcome to Home Page');
//     next()
// })

app.get('/',(req,res)=>{
    console.log('Home Page');
    res.send('Welcome to Home Page');
})

app.get('/user',auth,(req,res)=>{
    console.log(`user is admin=${req.admin}`);
    console.log('User Page');
    res.send('Welcome to user page');
})

// app.use(logger);

// middleware
function logger(req,res,next){
    // console.log('Logger');
    console.log(req.originalUrl);
    next();
    console.log('after');
}

// function auth(req,res,next){
//     if(req.query.admin === 'true'){
//         console.log('Authentication');
//         next();
//     }else{
//         res.send("No Authentication");
//     }
// }
function auth(req,res,next){
    if(req.query.admin === 'true'){
        console.log('Authentication');
        next();
        return;
    }
    res.send("No Authentication");
    
}

app.listen(3000,()=>{
    console.log(`http://localhost:3000`);
})