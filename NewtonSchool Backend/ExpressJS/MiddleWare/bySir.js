const express  = require('express');
const app = express();
const port = 8000;
const employee  = require('./mock.json')
const bodyParse = require("body-parser")

app.use(bodyParse.json())
//middlewares
app.use((req,res,next)=>{
    console.log("first middleware");
    if(req.body.fullName!=""){
        return next();
    }else{
        res.send("fullname is not found");
    }
})

app.get("/",(req,res)=>{
    res.status(200).json({
        msg:"fetching data succefully",
        list:employee
    })
})

app.get('/contactDetails',(req,res)=>{
    console.log((req.body));
    console.log((req.url));
    res.status(201).json({
        message:"contact is fetch successfully",
        contactList:{
            fullName:"Deepak",
            age:22
        }
    });
});

app.post('/contactDetails',(req,res)=>{
    // console.log(tyoeof (req.body));
    res.status(201).json({
        message:"successfully data is added",
        list:req.body
    });
})

app.delete('deleteDetails/:fullName/:id',(req,res)=>{
    console.log(req.params.fullName);
    console.log(req.params.id);
    res.status(201).json("Data is deleted successfully");
})


app.listen(port,()=>{
    console.log(`the port is running at http://localhost:${port} `)
})