const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
    fs.writeFile(fileName,fileContent,()=>console.log("done"));
	// dont chnage function name
}

const myFileReader = async (fileName) => {
	// write code here
    fs.readFile(fileName,'utf-8',()=>console.log("done"));
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
    fs.appendFile(fileName,fileContent,()=>console.log("done"))
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	// write code here
    fs.unlink(fileName,()=>console.log("done"))
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }