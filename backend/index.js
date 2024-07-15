require("dotenv").config()
const config=require("./config.json");
const mongoose=require("mongoose");
mongoose.connect(config.connectionString)


const User=require("./models/user.model")
const Note=require("./models/note.model")
const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());

const jwt=require("jsonwebtoken");
const {authenticateToken}=require('./utilities');
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
app.post("/create-account",async (req,res)=>{
    const {fullName,email,password}=req.body;
    if(!fullName){
        return res.status(400).json({error:true,message:"full name is required"});
    }
    if(!email){
        return res.status(400).json({error:true,message:"email is required"});
    }
    if(!password){
        return res.status(400).json({error:true,message:"password is required"});
    }

    const isUser=await User.findOne({email:email});
    if(isUser){
        return res.json({
            error:true,
            message:"user already exists"
        })
    }

    const user=new User({
        fullName,
        email,
        password
    });

    await user.save();
    const accessToken=jwt.sign({user},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:"36900m"
    });

    return res.json({
        error:false,
        user,
        accessToken,
        message:"registration successful"
    })
})


app.post("/login", async (req,res)=>{
    const {email,password}=req.body;
    if(!email){
        return res.status(400).json({message:"email is required"})
    }
    if(!password){
        return res.status(400).json({message:"password is required"})
    }
    const userInfo=await User.findOne({email:email})
    if(!userInfo){
        return res.status(400).json({
            message:"user not found should signup"
        })
    }
    console.log(userInfo);
    if(userInfo.password===password){
        const user={user:userInfo}
        const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:"36000m",
        })

        return res.json({
            error:false,
            message:"login successfull",
            email,
            accessToken,
        })
    }
    
        return res.status(400).json({
            error:true,
            message:"invalid credentials"
        })
    

})

// add note
app.post("/add-note", authenticateToken, async (req, res) => { 
    const { title, content, tags } = req.body;
    const {user} = req.user; 

    if (!title) {
        return res.status(400).json({ error: true, message: "Title is required" });
    }
    if (!content) {
        return res.status(400).json({ error: true, message: "Content is required" });
    }
    var x=0;
    try {
        const note = new Note({
            title,
            content,
            tags: tags || [],
            userId: user._id,
            isPinned: false, 
        });
        await note.save();
        return res.json({ error: false, note,message: "Note added successfully" });
    } catch (error) {
        console.error("Error saving note:", error);
        return res.status(500).json({ error: true, message: "Internal server error" });
    }
});


app.listen(8000)
module.exports=app;
