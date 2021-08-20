const express = require('express')
const router = express.Router();
const FoodModel=require('../../models/FoodModel');
const OrdersModel=require('../../models/Orders');

router.get('/filter_price',function(req,res){
    FoodModel.find({price:{$gte:req.query.priceMin,$lte:req.query.priceMax}}).then((filteredData)=>{
        res.status(200).json({
            success:true,
            message:"Foods of your searched range",
            dataInfo:filteredData            
        })
    })
});

module.exports = router;