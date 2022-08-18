const express=require("express")
const router=express.Router();

const {getCategoryById}=require('../Controllers/category')
const {getUserById}=require('../Controllers/user')
const {isAuthenticated,isSignedIn,isAdmin}=require('../Controllers/auth')


router.param("categoryId",getCategoryById)
router.param("userId",getUserById)

module.exports=router;