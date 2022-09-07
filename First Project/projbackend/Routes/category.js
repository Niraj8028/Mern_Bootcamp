const express= require('express')
const router=express.Router();

const {getCategoryById, 
    createCategory, 
     getCategory, 
    getAllCategories, 
    updateCategory,
removeCategory}=require('../Controllers/category')

const {getUserById}=require('../Controllers/user')
const {isAuthenticated,isSignedIn,isAdmin}=require('../Controllers/auth')


router.param("categoryId",getCategoryById)
router.param("userId",getUserById)

router.post("/category/create/:userId",isSignedIn,isAuthenticated,isAdmin,createCategory)
router.get("/category/:categoryId",getCategory)
router.get("/categories",getAllCategories)

router.put("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin,updateCategory)
router.delete("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin,removeCategory);


module.exports=router;