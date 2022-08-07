const mongoose = require('mongoose');
const express= require("express")
const app=express();

mongoose.connect('mongodb://localhost:27017/T-shirts', 
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

