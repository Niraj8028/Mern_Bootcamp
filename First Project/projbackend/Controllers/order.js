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