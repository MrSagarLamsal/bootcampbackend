
const mongoose=require('mongoose');
const OrdersModel=mongoose.model('Orders',{
  
    foodId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Foods',
        required: true
    },
    isComplited:{
        type:Boolean
    },
    isPaid:{
        type:Boolean,
        default:false
    }
})
module.exports=OrdersModel;




