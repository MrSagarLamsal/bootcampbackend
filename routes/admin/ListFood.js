const express = require('express')
const router = express.Router();
const FoodModel=require('../../models/FoodModel');
const OrdersModel=require('../../models/Orders');

router.get('/list_foods',function(req,res){
    FoodModel.find().then((results)=>{
        res.status(200).json({
            success:true,
            message:"Our Food List",
            dataInfo:results
        })
    })
});

module.exports = router;