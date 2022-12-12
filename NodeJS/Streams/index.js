const fs = require('fs')
const http = require('http')


const serevr = http.createServer();

// old way to read file

// serevr.on("request",(req,res)=>{
//     fs.readFile("data.txt",(err,data)=>{
//         if(err) return console.log(err)
//         res.end(`<h1>${data.toString()}</h1>`)
//     })
// }).listen(8080)


// 2nd way: by using stream
// serevr.on('request',(req,res)=>{
//     const rstream = fs.createReadStream('data.txt')

//     rstream.on("data",(chunkdata)=>{
//         res.write(chunkdata)
//         // console.log(chunkdata.toString())
//     });
//     rstream.on('end',()=>{
//         res.end()
//     })
//     rstream.on('error',(err)=>{
//         console.log(err)
//         res.end('<h1>file not found</h1>')
//     })
// }).listen(8080)



//3rd way: by using pipe method

serevr.on('request',(req,res)=>{
    const rstream = fs.createReadStream('introduction.txt')
    rstream.pipe(res)
}).listen(8080)