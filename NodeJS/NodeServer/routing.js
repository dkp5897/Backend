const http = require("http")

const server = http.createServer((req,res)=> {
    // console.log(req.url)
    if(req.url === '/'){
        res.end('Hello from the Hello side')
    }
    else if(req.url === '/about'){
        res.end("Hello from the about side")
    }
    else if(req.url === '/contact'){
        res.end("Hello from the contact side")
    }else{
        res.writeHead(404)
        res.end("<h1>404 error, page not found</h1>")
    }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("listening to the port on 8000")
})