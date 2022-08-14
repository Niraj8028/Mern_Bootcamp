const express= require("express");
const router=express.Router();
const { getUserById, getUser } = require("../Controllers/user");
const {isSignedIn , isAdmin , isAuthenticated}=require("../Controllers/auth")

router.param("userId",getUserById)

router.get("/user/:userId",isSignedIn,isAuthenticated,getUser)


module.exports=router;