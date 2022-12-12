const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("This is Home page")
    }else if(req.url==='/about'){
        res.end('This is About Page')
    }else if(req.url==='/userApi'){
        fs.readFile(`D:\WebDevelopment\NodeJS/Api/UserApi/userApi.json`,'utf-8',(err,data)=>{
            console.log(data)
        })
        res.end('This is api call')
    }else{
        res.writeHead(404, {'content-type':'text/html'})
        res.end("<h1>404 error, page not found</h1>")
    }
})

server.listen(8080,'127.0.0.1',()=>{
    console.log("listening at port 8080")
})