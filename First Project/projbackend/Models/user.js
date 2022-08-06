const mongoose=require("mongoose");
const schema=mongoose.schema;

const userSchema= new schema({
    name:{
        type:String,
        required:true,
        maxlength: 32,
        trim: true
    },
    lastname:{
        type:String,
        maxlength:32,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        trim:true
    },
    password:{
        type:String,
        trim:true
    },
    salt: String,
    role:{
        type:Number,
        default:0
    },
    purchases:{
        type: Array,
        default:[]
    }
})
module.exports=mongoose.model("user",userSchema);