const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbu01foodmenu?authSource=admin', {
    user: "bhawa",
    pass: "bhawa@bhawa",
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
 }).then((isitanyinfo)=>{
     console.log("--------------Database On Connection")
 })