const http = require("http")

// const server = http.createServer((req,res)=> {

//     res.end('Hello from the other side')
// })

// server.listen(8000,'127.0.0.1',()=>{
//     console.log("listening to the port on 8000")
// })

 http.createServer((req,res)=>{
    res.write("Hello World")
    console.log("port is open at 8000")
    res.end()
}).listen(8000)

