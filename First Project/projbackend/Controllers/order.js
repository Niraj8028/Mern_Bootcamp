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

exports.getAllOrders=(req,res)=>{
    Order.find()
    .populate("user","_id name")
    .exec((err,orders)=>{
        if(err){
            return res.status(400).json({
                error:"No orders found in database"
            })

        }
        res.json(orders);
    })
}

exports.getOrderStatus=(req,res)=>{
    res.json(Order.schema.path("status").enumValues)
}

exports.updateStatus=(req,res)=>{
    Order.update(
        {id:req.body.orderId},
        {$set: {status: req.body.status}},
        (err,order)=>{
            if(err){
                return order.status(400).json({
                    error:"Unable to update a status"
                })
                
            }
            res.json(order);
        }
        
    )
}