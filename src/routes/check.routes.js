const express=require("express");

const router=express.Router();

router.get("/",(req, res) => {
    res.status(200).send({message:"checking successful route"});
})

module.exports=router;