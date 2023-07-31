const mongoose = require('mongoose');
var HallSchema = new mongoose.Schema({
    fullName :{
        type :String
    },
    email :{
        type:String 
    },
    mobile:{
        type :String
    },
    city :{
        type : String
    }
});
 mongoose.model("Hall",HallSchema);