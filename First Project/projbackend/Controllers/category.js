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
        res.json(category);
    })
}

exports.getCategory=(req,res)=>{
    return res.json(req.category);
}

exports.getAllCategories=(req,res)=>{
    Category.find().exec=((err,items)=>{
        if(err){
            return res.json({
                error:"No categories found in database"
            })
        }
        res.json(items);
    })
}


exports.updateCategory=(req,res)=>{
    const category=req.category;
    category.name=req.body.name;

    category.save((err,updatedCate)=>{
        if(err){
            return res.status(400).json({
                error:"unable to update category"
            })
        }
        res.json(updatedCate)
    })
}

exports.removeCategory=(req,res)=>{
    const category=req.category;
    category.remove((err,category)=>{
        if(err){
            return res.status(400).json({
                error:"unable to update category"
            })
        }
        res.json({
            message:`${category.name} Category was deleted succesfully`
        })
    })
}