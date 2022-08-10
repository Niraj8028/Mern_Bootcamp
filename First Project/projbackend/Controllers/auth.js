const User= require('../Models/user')


exports.signup=(req,res)=>{
    console.log("REQ BODY",req.body);
    res.send({
        message:"signup route works"
    })
}

exports.signout=(req,res)=>{
    res.json({
        message:"user signout"
    })
}