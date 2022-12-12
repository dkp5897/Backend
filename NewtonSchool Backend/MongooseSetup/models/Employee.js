const mongoose = require('mongoose');

const employeeScema = mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    salary:{type:Number,required:true}
});

module.exports = mongoose.model('employee',employeeScema);