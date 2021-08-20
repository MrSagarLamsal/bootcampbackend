const express = require('express')
const router = express.Router();
const FoodModel=require('../../models/FoodModel');
const OrdersModel=require('../../models/Orders');

router.get('/order_this_food',function(req,res){

    const FoodOrder=new OrdersModel({foodId:req.query.foodID});

    FoodOrder.save().then((order)=>{
        res.status(206).json({
            success:true,
            message:"Food Ordered",
            dataInfo:order
        })
    })


});

module.exports = router;