// console.log("Hello World")

const express = require("express")

const app = express()

app.get("",(req,res)=>{
    res.send("Hello World")
})

app.get('/about',(req,res)=>{
    res.send("This is about page!")
})

app.get('/contact',(req,res)=>{
    res.send("<h1>Welcome to Node.js</h1><h3>I am start learning Node js</h3>")
})
app.listen(8080,()=>{
    console.log("our app is running at port 8080")
})

