const Product=require("../Models/product")


exports.getProductById=(req,res,next,id)=>{
    Product.findById(id).exec((err,product)=>{
        if(err){
            return res.status(400).json({
                error:"no product was found"
            })
        }
        req.product=product;
        res.json(product);
        next()
    })
}