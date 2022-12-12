const path = require('path')

// console.log(path.dirname("D:\WebDevelopment\NodeJS\CoreModules\PathModules/pathmmod.js"))
// console.log(path.basename("D:\WebDevelopment\NodeJS\CoreModules\PathModules/pathmmod.js"))
// console.log(path.extname("D:\WebDevelopment\NodeJS\CoreModules\PathModules/pathmmod.js"))

const mypath = path.parse("D:\WebDevelopment\NodeJS\CoreModules\PathModules/pathmod.js")

console.log(mypath)
// console.log(mypath.base)
// console.log(mypath.dir)
// console.log(mypath.root)
// console.log(mypath.name)