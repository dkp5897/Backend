const eventEmitter = require('events')

const event = new eventEmitter()
// console.log(event)

event.on('add',function(a,b){
    console.log("addition is called:-",a+b)
})

event.on('sub',function(a,b){
    console.log("substarct is calles:-",a-b)
})

event.removeAllListeners('add')

event.emit('add',5,3)
event.emit('sub',9,5)