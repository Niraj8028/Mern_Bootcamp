const express=require('express');

const router=express.Router();

const { isSignedIn, isAuthenticated, isAdmin }=require('../Controllers/auth')
const { getUserById }=require('../Controllers/user')
const {}=require('../Controllers/category')
const {getProductById,createProduct, removeProduct, updateProduct, getAllProducts,getProduct,photo}=require('../Controllers/product')


router.param("productId",getProductById);
router.param("userId",getUserById)

router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct)


router.delete("/products/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,removeProduct);

router.put("/product/:productId",isSignedIn,isAuthenticated,isAdmin,updateProduct);
router.get("/products",getAllProducts)

module.exports=router;