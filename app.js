const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./db/mongoose');
const multer = require('multer');
app.use(express.static('./images'));
app.use(express.json());
const path = require('path');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
//const allroutes = require('./approutes');
//app.use(allroutes);//All routings here redirected
var http = require('http').Server(app);
var server = http.listen(3456, () => {
    console.log("server is running on port", server.address().port);
});
////test alive
app.get('/check',function(req,res){
    res.send("HELLO WORLD");
})




//route lists


const AddFood=require('./routes/admin/AddFood');
const FoodOrder=require('./routes/admin/FoodOrders');
const FoodList=require('./routes/admin/ListFood');
const UpdateFood=require('./routes/admin/UpdateFood');
const ViewParticularFood=require('./routes/admin/ViewFood');

app.use("/admin",AddFood);
app.use("/admin",FoodOrder);
app.use("/admin",FoodList);
app.use("/admin",UpdateFood);
app.use("/admin",ViewParticularFood);


const FilterFoodList=require('./routes/users/FilterFoodList');
const FilterByPrice=require('./routes/users/FilterPrices');
const FoodLists=require('./routes/users/FoodList');
const OrderFood=require('./routes/users/OrderFood');

app.use("/users",FilterFoodList);
app.use("/users",FilterByPrice);
app.use("/users",FoodLists);
app.use("/users",OrderFood);;

const AddImages=require('./routes/ImageUpload/addImage');
app.use("/images",AddImages);




