const User= require("../Models/user")

exports.getUserById=(req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error:"user was not found in database"
            })
        }
        req.profile=user
        next();
    })
}
exports.getUser=(req,res)=>{   
    req.profile.salt=undefined;
    req.profile.encrypt_password=undefined;
    
    res.json(req.profile)
}