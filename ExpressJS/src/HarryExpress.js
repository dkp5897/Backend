const express = require('express')
const path = require('path')
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.get('/about',(req,res)=>{
    res.send('Hello About Page');
    res.status(500);
})

// sending static file 
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'4index.html'))
})


// sending json file

app.get('/jsonfile',(req,res)=>{
    res.send([{
        name:"Deepak",
        add:"Janakpur",
        age:25
    },{
        name:"Deepak",
        add:"Janakpur",
        age:25
    },{
        name:"Deepak",
        add:"Janakpur",
        age:25
    }])
})
app.listen(3000,()=>{
    console.log(`Express app listening at http://localhost:${port}`)
});

// serving a folder. we ahve to use middleware
app.use(express.static(path.join(__dirname,'../public/ColorChange.html')));


// creating our own middleware

// const dkMiddleware = (req,res,next) =>{
//     console.log(req);
//     next();
// }

// app.use(dkMiddleware)


//printing variable

app.get('/hello/:name',(req,res)=>{
    res.send("Hello "+req.params.name)
})