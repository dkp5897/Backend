const UserSchema = require('../models/UserSchema')
const bcrypt = require('bcryptjs');
const webToken = require('jsonwebtoken');

exports.userLogin = async (req,res)=>{
    const result = await UserSchema.findOne({email:req.body.email})
    // console.log(result);
    // console.log("password store in database",result.password);
    // console.log("password from frontend side",req.body.password);

    
    // console.log(passwordDecode) // true if password matched otherwise false
    
    if(!result){
        res.status(400).json({
            status:"Failure",
            massage:"email not found"
        })
    }
    else{
        var passwordDecode = await bcrypt.compare(req.body.password,result.password)
        if(!passwordDecode){
            res.status(201).json({
                status:"failure",
                massage:"password does not match"
            })
        }
        else{
            const jsonwebtokenResult = webToken.sign(
                {userDetails:result},   //our data details
                'dk-secret',            //private key
                {expiresIn:'1h'}        //token expire time
            )
            
            res.status(201).json({
                status:"success",
                token:jsonwebtokenResult
            })
        }
    }
}

exports.userRegister = async (req,res) =>{
    try {
        const passwordEncrypt =await bcrypt.hash(req.body.password,10)  // where 10 sault means how many encription you want to add. more value more encription
        // console.log(passwordEncrypt);
        const register = new UserSchema({
            email:req.body.email,
            password:passwordEncrypt
        })

        let result = await register.save();
        res.status(200).json({
            list:result
        })

    } catch (error) {
        res.status(400).json({
            error:error
        })
    }
}