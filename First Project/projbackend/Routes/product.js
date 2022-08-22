const express=require('express');

const router=express.Router();

const { isSignedIn, isAuthenticated, isAdmin }=require('../Controllers/auth')
const { getUserById }=require('../Controllers/user')
const {}=require('../Controllers/category')
const {getProductById,createProduct}=require('../Controllers/product')


router.param("productId",getProductById);
router.param("userId",getUserById)

router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct)

router.get("/product/create/", (req,res)=>{
    res.send("inside crete")
})
module.exports=router;