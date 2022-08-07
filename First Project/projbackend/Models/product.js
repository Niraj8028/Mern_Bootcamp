const mongoose= require("mongoose")
const{ ObjectId}= mongoose.Schema;

const productSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    description:{
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    price:{
        type: Number,
        required: true,
        maxlength: 32,
        trim: true
    },
    category:{
        type: ObjectId ,
        ref:  "category",
        required: true
    },
    stock:{
        type: number
    },
    sold: {
        type: number,
        default: 0
    },
    photo:{
        data: Buffer,
        contentType: String
    }
}, {timestamps: true})

module.export= mongoose.model("product", productSchema);