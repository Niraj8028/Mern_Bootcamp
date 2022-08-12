const express=require('express')
const router=express.Router();
const {signout ,signup, signin}= require("../Controllers/auth")
const {check , validationResult}= require("express-validator")

router.post("/signup",[
    check("name","name should be atleast 5 characters").isLength({min:5}),
    check("email", "email is required").isEmail(),
    check("password","password should be atleast 5 characters").isLength({min:5})
],signup);

router.post("/signin",[
    check("email", "email is not valid").isEmail(),
    check("password","password should be atleast 5 characters").isLength({min:5})
    
],signin)

router.get("/signout",signout)

module.exports=router;
