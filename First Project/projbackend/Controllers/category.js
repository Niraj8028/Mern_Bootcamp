const Category=require("../Models/category")

exports.getCategoryById=(req,res,next,id)=>{
    Category.findById(id).exec((err,cate)=>{
        if(err){
            return res.status(400).json({
                error:"unable to find category in database"
            })
        }
        req.Category=cate;
        next();
    })
}

exports.createCategory=(req,res)=>{
    const category= new Category(req.body);
    category.save((err,category)=>{
        if(err){
            return res.status(400).json({
                error:"unable to create category"
            })
        }
        res.json(category)
    })
}