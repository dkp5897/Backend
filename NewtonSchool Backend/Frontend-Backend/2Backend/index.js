const express = require('express');
const app = express();
const global = require('./helper');

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
        age:25,
        location:"Varanasi"
    },{
        name:"Rohit Kumar",
        age:26,
        location:"Gorakhpur"
    }
]

app.get('/',(req,res)=>{
    let result = employee;
    if(req.query.name){
        result = global.filterDetails(result,'name',req.query.name);
    }
    if(req.query.age){
        result = global.filterDetails(result,'age',Number(req.query.age))
    }
    if(req.query.location){
        global.filterDetails(result,'location',(req.query.location))
    }
    console.log("filter details:",result)
    // console.log(req.query)
    // employee.push(req.query)
    res.send({list:result})
})

app.get('/:id',(req,res)=>{
    // console.log(req.params.id);
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

