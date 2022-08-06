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
    encrypt_password:{
        type:String,
        required: true
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
userSchema.method={
    securePassword: function(plain_password){
        if(!plain_password){
            return ""
        }
        try {
            return crypto
            .createHmac("sha256",this.salt)
            .update(plain_password)
            .digest("hex")
            
        } catch (error) {
            return "";
        }
    }
}

module.exports=mongoose.model("user",userSchema);