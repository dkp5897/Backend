const fileSystem = require("fs")

// console.log(fileSystem)

//creating a file
// fileSystem.writeFileSync('read.txt',"Welcome to node js")
// fileSystem.writeFileSync('read.txt',"Welcome to node js, with Deepak")

//===============================================

// adding extra data

// fileSystem.appendFileSync("read.txt"," How are you ? I am Good!")

//=================================================
// read the exiting file

// const buf_data = fileSystem.readFileSync('read.txt')
// console.log(buf_data);

// Node.js includes an addintion data type called buffer
// buffer is mainly use to store binary data, while reading from a file or receiving packets onver the network


{/* <Buffer 57 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 20 6a 73 2c 20 77 
69 74 68 20 44 65 65 70 61 6b 20 48 6f 77 20 61 72 65 20 79 6f 75 20 3f 20 49 20 61 6d ... 6 more bytes>
 */}

//  org_data = buf_data.toString()
//  console.log(org_data)

// to rename the file name
fileSystem.renameSync('read.txt','readwrite.txt')


