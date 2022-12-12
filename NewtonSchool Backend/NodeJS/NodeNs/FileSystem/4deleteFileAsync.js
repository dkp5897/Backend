const file = require("fs")

try {
    file.unlinkSync('fileOne.txt')
} catch (error) {
    console.log('error',"not able to find file")
}