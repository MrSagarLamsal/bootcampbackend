const express = require('express')
const router = express.Router();
const FoodModel=require('../../models/FoodModel');
const OrdersModel=require('../../models/Orders');

router.get('/all_foods',function(req,res){
    
    FoodModel.find({isAvailable:true}).then((foodList)=>{
        res.status(200).json({
            success:true,
            message: "Available Foods",
            dataInfo:foodList
        })
    })
});

module.exports = router;