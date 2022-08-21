const express=require('express');
const { getProductById } = require('../Controllers/product');
const router=express.Router();

router.param("productId",getProductById);

module.exports=router;