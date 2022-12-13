const mongoose = require('mongoose');

const myDataschema = mongoose.Schema({
    title:{type:String,required:true},
    discription:{type:String,required:true},
    forWeb:{type:Boolean}
})

// mongoose.model('collection',definedSchema)
module.exports = mongoose.model('myContent',myDataschema)