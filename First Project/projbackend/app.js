require("dotenv").config();

const mongoose = require('mongoose');
const express= require("express")
const app=express();

mongoose.connect(process.env.DATABASE, 
    {useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
}).then(()=>{
    console.log("DATABASE CONNECTED")
});
const port=8000;

app.listen(port,()=>{
    console.log(`app is running at ${port} `)
})

