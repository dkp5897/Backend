
const express = require('express')
const app = express();
const mongoose = require("mongoose");
const Salary = require('./models/Salary');
const employee = require('./models/Employee');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req,res,next)=>{
    console.log("coming fo first middleware");
    return next();
})

mongoose.connect("mongodb://localhost/Newton")
.then(()=>{
    console.log("database connection made");
})
.catch(()=>{
    console.log("connection failed");
})

// mongoose.set('strictQuery',false)

app.get("/",(req,res)=>{
    res.send("Successfully Submited")
})

app.post('/',(req,res)=>{
    const post = new Salary({
        fullName:req.body.fullName,
        amount:req.body.amount,
        codeId:true
    });
    post.save().then((response)=>{
        res.status(201).json({
            result:response
        })
    }).catch((error)=>{
        res.status(500).json({
            result:error
        })
    })
})

app.post('/employee',(req,res)=>{
    const post = new employee({
        name:req.body.name,
        age:req.body.age,
        salary:req.body.salary
    })
    post.save().then((response)=>{
        res.status(201).json({
            result:response
        })
    })
    .catch((error)=>{
        res.status(500).json({
            result:error
        })
    })
})

//getting data from mongodb. Salary is collection in mongodb. Salary.find() will return a promise which will ethier resolve or reject
app.get('/Salarydata',(req,res)=>{
    Salary.find()
    .then((obj)=>{
        res.send({
            result:obj
        })
    })
    .catch((error)=>{
        res.send({
            info:error
        })
    })
})


app.get('/employeedata',(req,res)=>{
    employee.find()
    .then((result)=>{
        res.send({
            result:result
        })
    })
    .catch((error)=>{
        res.send({
            info:error
        })
    })
})

// getting one data from mongodb
app.get('/employeeOne',(req,res)=>{
    employee.findOne({name:"Deepak"})   // getting only one data which name is Deepak
    .then((object)=>{
        res.send({
            object
        })
    })
    .catch((error)=>{
        res.send({
            info:error
        })
    })
})

//deleting a data from mongodb
// app.delete('/:name',(req,res)=>{
//     console.log(req.params.name);
//     employee.deleteOne({name:req.params.name})
//     .then((object)=>{
//         res.send({
//             object
//         })
//     })
//     .catch((error)=>{
//         res.send({
//             info:error
//         })
//     })
// })

//deleting a data from mongo by using id
// it will delete a data from Salary collection
app.delete('/:id',(req,res)=>{
    Salary.findByIdAndRemove(req.params.id)
    .then((obj)=>{
        res.send({
            obj
        })
    })
    .catch((error)=>{
        res.send({
            error
        })
    })
})

// updating data in mongo
app.patch('/:id',(req,res)=>{
    Salary.findByIdAndUpdate(req.params.id,{...req.body})
    .then((obj)=>{
        res.send({
            update:obj
        })
    })
    .catch((error)=>{
        res.send({
            info:error
        })
    })
})

app.listen(8000,()=>{
    console.log("port is running at http://localhost:8000");
})
