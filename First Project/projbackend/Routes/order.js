const express=require('express');
const { isSignedIn, isAuthenticated } = require('../Controllers/auth');
const { getOrderById } = require('../Controllers/order');
const { updateStock } = require('../Controllers/product');
const { getUserById, pushOrderInPurchaseList } = require('../Controllers/user');
const router=express.Router;

router.param("orderId",getOrderById)
router.param("userId",getUserById);


router.post("/order/create/:userId",isSignedIn,isAuthenticated,pushOrderInPurchaseList,updateStock,)





module.exports=router;