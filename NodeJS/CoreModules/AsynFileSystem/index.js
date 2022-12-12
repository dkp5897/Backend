const fs = require("fs");

// if we want to create a file by using asyn way then we have to use a callback function which show that our file is created

// fs.writeFile('read.txt',"This file is made by asyn file system!",(err)=>{
//     console.log("file is created")
//     console.log(err)
// })

// adding extra data

// fs.appendFile('read.txt',' we have to use callback function in asyn code for file creation',(err)=>{
//     console.log("task completed!")
//     console.log(err)
// })

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
  console.log(err);
});

console.log("first file"); // sync code
