const add = (a,b) =>{
    return (a+b)
}

const sub = (a,b) =>{
    return (a-b)
}
const mul = (a,b) =>{
    return (a*b)
}
const div = (a,b) =>{
    return (a/b)
}

const name = 'deepak'

// for single export use module.export = add
// module.exports = add

// for multiple export
// module.exports.add = add
// module.exports.sub = sub
// module.exports.name =name

module.exports = {add,sub,mul,div,name}