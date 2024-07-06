require("dotenv").config()
const config=require("./config.json");
const mongoose=require("mongoose");
mongoose.connect(config.connectionString)

const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());

const jwt=require("jsonwebtoken");
const {authenticatToken}=require('./utilities');
app.use(
    cors(
        {
            origin:"*"
        }
    )
);
app.get("/",(req,res)=>{
    res.json({data:"hello"});
});
//create account 
app.post("")
app.listen(8000)
module.exports=app;
