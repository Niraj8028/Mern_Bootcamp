const express= require('express')
const router=express.Router();

const {getCategoryById, 
    createCategory, 
     getCategory, 
    getAllCategories, 
    updateCategory}=require('../Controllers/category')

const {getUserById}=require('../Controllers/user')
const {isAuthenticated,isSignedIn,isAdmin}=require('../Controllers/auth')


router.param("categoryId",getCategoryById)
router.param("userId",getUserById)

router.post("/category/create/:userId",isSignedIn,isAuthenticated,isAdmin,createCategory)
router.get("/category/:categoryId",getCategory)
router.get("/category/categories",getAllCategories)

router.put("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin,updateCategory)


module.exports=router;