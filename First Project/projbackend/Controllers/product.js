const Product=require("../Models/product")
const formidable=require('formidable')
const _=require("lodash")
const fs=require("fs")
const category = require("../Models/category")

exports.getProductById=(req,res,next,id)=>{
    Product.findById(id)
    .populate("category")
    .exec((err,product)=>{
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

exports.createProduct=(req,res)=>{
    let form=new formidable.IncomingForm();

    form.keepExtensions = true;

    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({
                error:"There is some error in file"
            })
        }

        const {name,description,price,category,stock} =fields;

        if(!name || ! description || !price || !category || !stock){
            return res.status(400).json({
                error:"Please mention all required fields"
            })
        }

        let product= new Product(fields);

        if (file.photo) {
            if (file.photo.size > 3000000) {
              return res.status(400).json({
                error: "file size must be less than 3 MB",
              });
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type;
          }

        product.save((err,product)=>{
            if(err){
                return res.status(400).json({
                    error:"Saving Product in database failed"
                })
            }
            res.json({product})
            console.log(product)
        })
    })
}

exports.getProduct=(req,res)=>{
    req.product.photo=undefined;
    return res.json(req.product);

}

exports.photo=(req,res,next)=>{
     if(req.product.photo.data){
        res.set("Content-Type",req.product.photo.contentType);
        return res.json(req.product.photo.data);
     }
     next();
}

exports.removeProduct=(req,res)=>{
    let product=req.product
    product.remove((err,deletedProduct)=>{
        if(err){
            return res.status(400).json({
                error:"Unable to deleted product"
            })
        }
        res.json({
            message:"Deletion was success",
            deletedProduct
        })
    })
}

exports.updateProduct=(req,res)=>{
    let form=new formidable.IncomingForm();

    form.keepExtensions = true;

    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({
                error:"There is some error in file"
            })
        }
        let product=req.product;
        product=_.extend(product,fields)

        if (file.photo) {
            if (file.photo.size > 3000000) {
              return res.status(400).json({
                error: "file size must be less than 3 MB",
              });
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type;
          }

        product.save((err,product)=>{
            if(err){
                return res.status(400).json({
                    error:"updating Product in database failed"
                })
            }
            res.json({product})
            console.log(product)
        })
    })
}

exports.getAllProducts=(req,res)=>{
    let limit= req.query.limit? parseInt(req.query.limit): 8;
    let sortBy=req.query.sortBy ? req.query.sortBy : "_id";

    Product.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy,"asc"]])
    .limit(limit)    
    .exec((err,products)=>{
        if(err){
            res.status(400).json({
                error:"No product was found"
            })
        }
        res.json(products)
    })
}

exports.updateStock=(req,res,next)=>{
    let myOperations=req.body.order.product.map(prod=>{
        return{
            updateOne:{
                filter:{_id: prod._id},
                update:{$inc:{stock:-prod.count, sold:+prod.count}}
            }
        }
    })
    Product.bulkWrite(myOperations,{},(err,products)=>{
        if(err){
            return res.status(400).json({
                error:"stock updation failed"
            })
        }
        next()
    })
}