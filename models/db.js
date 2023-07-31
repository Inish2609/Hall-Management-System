const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Hall_Analytics",{useNewUrlParser:true},(err)=>{
    if(!err){console.log('MongoDB connection succeeded')}
    else{console.log('Error is DB connection :'+ err)}
});

require("./Hall.model");