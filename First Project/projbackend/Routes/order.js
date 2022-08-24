const express=require('express');
const { isSignedIn, isAuthenticated, isAdmin } = require('../Controllers/auth');
const { getOrderById, createOrder, getAllOrders } = require('../Controllers/order');
const { updateStock } = require('../Controllers/product');
const { getUserById, pushOrderInPurchaseList } = require('../Controllers/user');
const router=express.Router;

router.param("orderId",getOrderById)
router.param("userId",getUserById);


router.post("/order/create/:userId",
            isSignedIn,
            isAuthenticated,
            pushOrderInPurchaseList,
            updateStock,
            createOrder)

router.get("order/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrders)            




module.exports=router;