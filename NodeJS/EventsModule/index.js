const EventEmiiter = require("events")

const event = new EventEmiiter();  //event is a object here 

//define events
event.on("sayMyName",()=>{
    console.log("Your name is Deepak")
})

event.on("sayMyName",()=>{
    console.log("Your name is Deepak Kumar")
})

event.on("sayMyName",()=>{
    console.log("Your name is DK")
})

event.on('checkPage',(sc,mgs)=>{
    console.log(`status code is ${sc} and the page is ${mgs}`)
})
// fire event : fire the event which name is "sayMyName"
event.emit('sayMyName')
event.emit('checkPage',200,'ok')
