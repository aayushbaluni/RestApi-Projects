const mongoose = require("mongoose");


const User = mongoose.model("Users", new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength:5
    },
    password: {
        type: String,
        required: true,
        minlength:5
    }
}));


exports.User = User;