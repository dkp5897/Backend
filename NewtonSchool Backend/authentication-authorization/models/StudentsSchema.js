const mongoose = require('mongoose');

const studentsSchema = mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    course:{type:String,required:true},
    jobStatus:{type:Boolean,required:true},
    score:{type:Number,required:true},
    email:{type:String,required:true}
})


module.exports = mongoose.model('tresStudents',studentsSchema);