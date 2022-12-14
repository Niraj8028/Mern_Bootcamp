require("dotenv").config();

const mongoose = require('mongoose');
const express= require("express")
const app=express();
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const cors=require('cors')

const authRoutes=require('./Routes/auth')
const userRoutes=require('./Routes/user')
const categoryRoutes=require('./Routes/category')
const productRoutes=require('./Routes/product')
const orderRoutes=require("./Routes/order")
const stripeRoutes=require("./Routes/stripe")

mongoose.connect(process.env.DATABASE, 
    {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
}).then(()=>{
    console.log("DATABASE CONNECTED")
});
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",orderRoutes);
app.use("/api",stripeRoutes);


const port=7000;

app.listen(port,()=>{
    console.log(`app is running at ${port} `)
})

