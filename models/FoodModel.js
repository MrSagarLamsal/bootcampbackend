
const mongoose=require('mongoose');
const FoodMenuModel=mongoose.model('Food',{
  
    foodName:{
        type:String
    },
    foodPrice:{
        type:Number
    },
    foodDescription:{
        type:String
    },
    isAvailable:{
        type:Boolean,
        default:true
    },
    foodImageName:{
        type:String
    },
    foodType:{
        type:String
    }
})
module.exports=FoodMenuModel;




