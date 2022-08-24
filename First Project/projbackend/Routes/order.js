const express=require('express');
const { getOrderById } = require('../Controllers/order');
const { getUserById } = require('../Controllers/user');
const router=express.Router;

router.param("orderId",getOrderById)
router.param("userId",getUserById);






module.exports=router;