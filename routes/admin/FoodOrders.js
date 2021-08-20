const express = require('express')
const router = express.Router();
const FoodModel=require('../../models/FoodModel');
const OrdersModel=require('../../models/Orders');

router.get('/food_orders',function(req,res){

    OrdersModel.find({isComplited:false}).then((orders)=>{

        res.status(200).json({
            success:true,
            message:"All waiting food orders",
            dataInfo:orders
        })

    })

});

module.exports = router;