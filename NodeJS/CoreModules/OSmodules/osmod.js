const os = require('os')

console.log(os.arch())
console.log(os.freemem())  //memory in byte

console.log(os.hostname()) 
console.log(os.platform())
console.log(os.type())

const freeMemory = os.freemem()
console.log(`Your free memory is : ${freeMemory /1024 /1024 /1024 }GB`)


const totalMemory = os.totalmem()
console.log(`Your total RAM memory is : ${totalMemory /1024 /1024 /1024 }GB`)