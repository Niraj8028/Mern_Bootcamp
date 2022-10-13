const express=require("express");
const { makePayment } = require("../Controllers/Stripe");
const router=express.router();


router.post("/stripePayment",makePayment)

module.exports=router;
