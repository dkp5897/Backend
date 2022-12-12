const express = require('express');
const app = express();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
   return next()
})

let employee=[
    {
        name:"Deepak Kumar",
        age:25,
        location:"Chakia"
    },{
        name:"Pradeep Kumar",
        age:23,
        location:"Varanasi"
    },{
        name:"Rohit Kumar",
        age:26,
        location:"Gorakhpur"
    }
]

app.get('/',(req,res)=>{
    res.send({list:employee})
})

app.get('/:id',(req,res)=>{
    console.log(req.params.id);
    let id = req.params.id-1;
    let input = employee[id];
    if(input){
        res.send({
            massage:"Valid id",
            result:input
        })
    }else{
        res.status(400).json({
            massage:"The given id is not valid",
        })
    }
})


app.listen(8080,()=>{
    console.log(`the port is runing at http://localhost:8080`)
})

