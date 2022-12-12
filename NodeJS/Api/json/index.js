const fs = require ('fs')
const boidata = {
    name : "Deepak",
    age : 25,
    nickName : 'DK'
}

// console.log(boidata)

// // covert in json
// const jsonData = JSON.stringify(boidata)
// console.log(jsonData)

// // convert in object
// const nativeObj = JSON.parse(jsonData)
// console.log(nativeObj)

//=====================================================
//todo:-

//1.    convert into json
//2.    add into a file
//3.    readfile
//4.    again convert back into obj oriented
//5.    console.log

const jsonData = JSON.stringify(boidata)

// fs.writeFile('json1.json',jsonData,(err)=>{
//     console.log('done')
//     console.log(err)
// })


fs.readFile('json1.json','utf-8',(err,data)=>{
    console.log(data)                       // data in json form
    const orgData = JSON.parse(data)
    console.log(orgData)                // data in object form
})

