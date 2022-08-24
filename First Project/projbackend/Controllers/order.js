const Order= require("../Models/order")

exports.getOrderById=(req,res,next,id)=>{
    Order.findById(id)
    .populate("products.product", "name price")
    .exec((err,order)=>{
        if(err){
            return res.status(400).json({
                error:"unable to find an order"
            })
            
        }
        req.order=order;
        next();
    })
}
exports.createOrder=(req,res)=>{
    req.body.order.user=req.profile;
    const order=req.body.order;
    Order.save(order).exec((err,order)=>{
        if(err){
            return res.status(400).json({
                error:"unable to save order"
            })
        }
        res.json(order);
    })
}