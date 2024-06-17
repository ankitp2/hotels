const express=require("express");
const router=express.Router();
const MenuItem = require("./../models/MenuItem");
router.post("/", async (req, res)=> {
    try{
        const data=req.body;

        const newPerson=new MenuItem(data);
        const response=await newPerson.save();
        console.log("Data Saved");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
}); 
router.get("/",async (req, res)=>{
    try{
        const data=await MenuItem.find();
        console.log("Data Fetched");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
});
router.get("/:taste",async (req,res)=>{
    try{
        const taste=req.params.taste;
        if(taste=='sour' || taste=='sweet' || taste=='spicy'){
            const response= await MenuItem.find({taste:taste});
            console.log("Response fetched");
            res.status(200).json(response);
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})
module.exports=router;