console.log(__filename)
console.log(__dirname)

function greet(){
    console.log("settimeout greet")
}

let resultOne = setTimeout(greet,2000)
// let resultTwo = setInterval(greet,2000)

console.time("starting time")
console.log("calculating");
console.info("information")

process.on('exit',function(code){
    console.log("Program is ending", code);
})

console.log("program last statement");