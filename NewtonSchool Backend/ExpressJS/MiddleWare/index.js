const express = require('express')
const data = require('./mock.json')
const bodyParser = require('body-parser')
const app = express()
const port = 8500;




app.use(bodyParser.json())

//middleware
app.use((req,res,next)=>{
    console.log(("first middleware"))
    console.log(req.body);
    if(req.body.name!=""){
        return next();
    }else{
        res.status(400).json('Name is not defined')
    }
})

// app.use((req,res,next)=>{
//     console.log(("second middleware"))
//     if(req.body.age<50){
//         return next();
//     }else{
//         res.status(400).json('the age is greater than 50');
//     }
// })

app.get('/',(req,res)=>{
    // res.status(200).json({
    //     massage:"got the data",
    //     boidata:{
    //         name:'Deepak Kumar',
    //         age:66
    //     }
    // })
    res.send({
        massage:"got the data",
        boidata:{
            name:'',
            age:200
        }
    })
})

app.get('/contact',(req,res)=>{
    res.status(200).json({
        massage:'got contact data',
        contact:{
            mobile:7376703898,
            address:'Janakpur'
        }
    })
})

app.post('/contactDetails',(req,res)=>{
    res.status(200).json({
        massage:'data posted',
        name:'deepak',
        details:'7376703898, Janakpur'
    })
})



app.listen(port,()=>{
    console.log(`our app is running at the port http://localhost:${port}`)
})