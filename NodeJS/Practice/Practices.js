// const fs = require('fs');

// // creating a file

// fs.writeFile('practice.txt',"This is for parctice",(err)=>{
//     console.log("File is created");
//     console.log(err);
// });

// // for adding extra data

// fs.appendFile('practice.txt',' This is not for normal!',(err)=>{
//     console.log("updated!");
//     console.log(err);
// })

// fs.readFile('practice.txt','utf-8',(err,data)=>{
//     console.log(err);
//     console.log(data);
// })

// console.log("first file");

// fs.mkdir('myboi',(err)=>{
//     console.log('Task Completed');
//     console.log(err)
// })

// fs.writeFile('myboi/boi.txt','Hello I am Deepak Kumar!',(err)=>{
//     console.log("file created!");
//     console.log(err)
// })

// fs.appendFile('myboi/boi.txt',' I am an Electrical Engineer!',(err)=>{
//     console.log('done');
//     console.log(err)
// })

// fs.readFile('myboi/boi.txt','utf-8',(err,data)=>{
//     console.log(data);
//     console.log(err);
// })

// fs.rename('myboi/boi.txt','myboi/myboi.txt',(err)=>{
//     console.log('done');
//     console.log(err)
// })

// fs.unlink('myboi/myboi.txt',(err)=>{
//     console.log('done!');
//     console.log(err);
// })


// fs.rmdir('./myboi',(err)=>{
//     console.log('done');
//     console.log(err)
// })

const fs = require('fs');

const http = require('http')

const server = http.createServer();

// server.on('request',(req,res)=>{
//     fs.readFile('practice.txt',(err,data)=>{
//         if(err) return console.log(err)
//         res.end(`<h1>${data.toString()}</h1>`)
//     })
// }).listen(8080)

// server.on('request',(req,res)=>{
//     fs.readFile('myfile.json',(err,data)=>{
//         if(err) return console.log(err);
//         // console.log("The port is running at 8000")
//         res.end(data.toString());
//     })
// }).listen(8000)

// server.on('request',(req,res)=>{
//     // res.write("Hello World");
//     res.writeHead(200,{'Content-type':'text/plain'});
//     console.log("server is running at 8000");
//     fs.readFile('myfile.json',(err,data)=>{
//         if(err) return console.log(err);
//         res.end(data.toString());
//     })
// }).listen(8000);

server.on('request',(req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'})
    console.log("server is running at 3500");
    fs.readFile('practice.txt',(err,data)=>{
        if(err) return console.log(err);
        res.end(data.toString())
    })
}).listen(3500)