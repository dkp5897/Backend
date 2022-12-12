const fs = require('fs')

let readStream = fs.createReadStream(__dirname+'/read.txt','utf-8')

readStream.on('data',function(chunk){
    console.log("data is ",chunk)
})

