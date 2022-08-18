const express=require("express")
const router=express.Router();

const {getCategoryById, createCategory}=require('../Controllers/category')
const {getUserById}=require('../Controllers/user')
const {isAuthenticated,isSignedIn,isAdmin}=require('../Controllers/auth')


router.param("categoryId",getCategoryById)
router.param("userId",getUserById)

router.post("/category/create/:userId",isSignedIn,isAuthenticated,isAdmin,createCategory)
module.exports=router;