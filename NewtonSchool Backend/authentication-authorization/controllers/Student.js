const StudentSchema = require('../models/StudentsSchema');

exports.getStudents = (req,res)=>{
    console.log(req.emailToken)
    StudentSchema.find({email:req.emailToken})
    .then((response)=>{
        res.status(201).json({
            results:response
        })
    })
    .catch((error)=>{
        res.status(400).json({
            error:error
        })
    })
}

exports.postStudents = (req,res) =>{
    console.log(req.emailToken);
    const Student = new StudentSchema({
        name:req.body.name,
        age:req.body.age,
        course:req.body.course,
        jobStatus:req.body.jobStatus,
        score:req.body.score,
        email:req.emailToken
    })
    
    Student.save()
    .then((response)=>{
        res.send({
            response:response
        })
    })
    .catch((error)=>{
        res.send({
            error:error
        })
    })
}

//filtering data
exports.getStudentsFilter = (req,res) =>{
    StudentSchema.aggregate([
        {$match:{course:'MERN',jobStatus:true}},       //$match is used for matching the property and help in filtering the particular data
        {$project:{name:1,age:1,_id:0}},         //$project is used to display some particular property, 0 only for _id not for other property
        {$sort:{name:1}},       // for sorting the data in accending order(1) or decending order(-1)
        {$limit:2}          // this will use to limit the coming data to a particular number
    ])
    .then((response)=>{
        res.status(200).json({
            list:response
        })
    })
    .catch((error)=>{
        res.status(400).json({
            error:error
        })
    })
}

exports.getStudentsUniqueData = async (req,res) =>{
    let response = await StudentSchema.aggregate([
        //{$group:{_id:"$course"}}    //$group is used to print the unique data (any data name,course ect). _id is neccessary
        {$group:{_id:null,count:{$sum:1},avarage:{$avg: "$score"}}}
    ])
    // console.log(response)
    console.log(response[0].avarage.toFixed(2))
    response[0].avarage = response[0].avarage.toFixed(2)
    response[0].percentage = (response[0].avarage/response[0].count).toFixed(2)+"%" //adding percentage 
    res.status(200).json({
        list:response
    })
}