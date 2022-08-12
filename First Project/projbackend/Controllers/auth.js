const User= require('../Models/user')
const {check , validationResult}= require("express-validator");


exports.signup=(req,res)=>{

    const errors=validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        })
    }
    const user= new User(req.body);
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err:"unable to save the user in database"
            })
        }
        res.json(user)
    })
}

exports.signout=(req,res)=>{
    res.json({
        message:"user signout"
    })
}