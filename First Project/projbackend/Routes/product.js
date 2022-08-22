const express=require('express');
const { getProductById } = require('../Controllers/product');
const router=express.Router();

const { isSignedIn, isAuthenticated, isAdmin }=require('../Controllers/auth')
const { getUserById }=require('../Controllers/user')
const {}=require('../Controllers/category')
const {getProductById}=require('../Controllers/product')


router.param("productId",getProductById);
router.param("userId",getUserById)

router.post("product/create/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct)

module.exports=router;