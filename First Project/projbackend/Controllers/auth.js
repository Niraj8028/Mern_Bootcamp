const User= require('../Models/user')
const {check , validationResult}= require("express-validator");

const jwt=require("jsonwebtoken")
const expressJwt=require("express-jwt")



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
        res.json({
            name: user.name,
            email: user.email,
            id: user._id
          });
    })
}
exports.signin=(req,res)=>{
    const{email,password}=req.body;
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        })
    }
    User.findOne({email},(err,user)=>{
        if(err || !user){
            return res.status(400).json({
                err:"email does not exists"
            })
        }
        if(!user.authenticate(password)){
            return res.status(401).json({
                error:"email and password does not match"
            })
        }

        const token=jwt.sign({_id:user._id},process.env.SECRET)
        res.cookie("token",token,{expire: new Date()+9999})

        const{_id, name, email,role}=user;
        return res.json({token,user: {_id,name,email,role}})
    })
}

exports.signout=(req,res)=>{
    res.json({
        message:"user signout"
    })
}