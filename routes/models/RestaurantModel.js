const mongoose = require("mongoose");


const Restaurants = mongoose.model("Restaurants", new mongoose.Schema({
    name: {
        type: String,
        minlength:5
    },
    address: {
        type:String
    },
    phoneNo: {
        type: String,
        minlength: 10,
    },
    isVerified:{
        type: Boolean,
        default:false
    },
    email: {
        type: String,
        required: true,
        minlength:5
    },
    password: {
        type: String,
        required: true,
        minlength:5,
    }
    
}));


module.exports = Restaurants;