const User= require("../Models/user")

exports.getUserById=(req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error:"user was not found in database"  
            })
        }
        req.profile=user
        console.log("User",req.profile)
        next();
    })
}

exports.getUser=(req,res)=>{   
    req.profile.salt=undefined;
    req.profile.encrypt_password=undefined;
    req.profile.updatedAt=undefined;
    req.profile.createdAt=undefined;
    return res.json(req.profile)
}

exports.getAllUsers=(req,res)=>{
    User.find().exec((err,users)=>{
        if(err || !users){
            return res.status(400).json({
                error:"No user was found"
            })
        }
        res.json(users)
    })
}