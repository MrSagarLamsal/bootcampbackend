const express = require('express')
const router = express.Router();
const FoodModel=require('../../models/FoodModel');
const OrdersModel=require('../../models/Orders');


router.get('/filter_type',function(req,res){
    
    FoodModel.find({foodType:req.query.foodType}).then((filtered)=>{
        res.status(200).json({
            success:true,
            message:"Your requested food of"+req.body.foodType+" category" ,
            dataInfo:filtered
        })
    })
});

module.exports = router;