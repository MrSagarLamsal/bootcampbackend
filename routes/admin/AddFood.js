const express = require('express')
const router = express.Router();
const FoodModel=require('../../models/FoodModel');
const OrdersModel=require('../../models/Orders');

router.post('/add_food',function(req,res){

    const Food=new FoodModel({...req.body});
    Food.save().then((result)=>{
        res.status(200).json({
            success:true,
            message:"Food Added",
            dataInfo:result
        })
    })

})

module.exports = router;