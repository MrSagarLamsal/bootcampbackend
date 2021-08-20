const express = require('express')
const router = express.Router();
const FoodModel=require('../../models/FoodModel');
const OrdersModel=require('../../models/Orders');

router.get('/view_this_food',function(req,res){
    
    FoodModel.findById({_id:req.query._id}).then((particularFood)=>{
        res.status(200).json({
            success:true,
            message:"Food Info",
            dataInfo:particularFood
        })
    })
});

module.exports = router;