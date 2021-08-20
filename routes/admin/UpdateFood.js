const express = require('express')
const router = express.Router();
const FoodModel=require('../../models/FoodModel');
const OrdersModel=require('../../models/Orders');

router.post('/update_food',function(req,res){

FoodModel.findByIdAndUpdate({_id:req.body._id},{$set:{...req.body}},{new:true}).then((updatedData)=>{
    res.status(206).json({
        success:true,
        message:"Updated",
        dataInfo:updatedData
    })
})

});

module.exports = router;