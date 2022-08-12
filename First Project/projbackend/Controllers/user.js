const User= require("../Models/user")

exports.getUserById=(req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err){
            return res.status(400).json({
                error:"user was not found in database"
            })
        }
        const profile=user
        next();
    })
}