const mongoose= require("mongoose")
const {ObjectId}= mongoose.Schema;

const ProductCartSchema= new mongoose.Schema({
    product:{
        type: ObjectId,
        ref:"product"
    },
    name:String,
    count: Number,
    price: Number
}, {timestamps: true})

const ProductCart= mongoose.model("ProductCart", ProductCartSchema);

const OrderSchema= new mongoose.Schema({
    product: [ProductCartSchema],
    transaction_id:{},
    amount:{
        type: Number
    },
    address: String,
    updated: Date,
    status:{
        type:String,
        default:"Received",
        enum:["Delivered","Received","Cancelled","Processing","Shipped"]
    },
    user:{
        type: ObjectId,
        ref:"user"
    }

},{timestamps:true})

const Order= mongoose.model("Order",OrderSchema);
module.exports={Order, ProductCart}