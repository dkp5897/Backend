const fs = require('fs')

// fs.mkdir('dk',(err)=>{
//     console.log('task complted !')
//     console.log(err)
// })

// fs.writeFile('dk/boi.txt','Hello, I am deepak Kumar',(err)=>{
//     console.log('task completed')
//     console.log(err)
// })


// fs.appendFile('dk/boi.txt',', I am an engineer',(err)=>{
//     console.log('task completed')
//     console.log(err)
// })

// fs.readFile('dk/boi.txt','utf-8',(err,data)=>{
//     console.log(data)
//     console.log(err)
// })

// fs.rename('dk/boi.txt','dk/myboi.txt',(err)=>{
//     console.log('rename done!')
//     console.log(err)
// })

//deleting file
// fs.unlink('dk/myboi.txt',(err)=>{
//     console.log('file deleted')
//     console.log(err)

// })

// deleting folder
fs.rmdir('./dk',(err)=>{
    console.log('folder deleted')
    console.log(err)
})