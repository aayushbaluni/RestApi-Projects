const express = require('express');
const _ = require('lodash');
const jwt = require("jsonwebtoken");
const {Restaurants} = require('./models/RestaurantModel');
const validateRestaurant = require("./validation/validateResturant");
const router = express.Router();



router.post('/', async (req, res) => {
    // not implementing check over email and password
    const response = await Restaurants.findOne( { email: req.body.email } );
    if (!response) return res.status(400).send("Account doesn't Exist.");
    console.log(response);
     if (response.password != req.body.password) return res.status(400).send("Incorrect Password.");
    const token = jwt.sign(_.pick(response, ["_id", "name", "address", "phoneNo", "isVerified", "email"]), "my_secret_key");
    return res.send(token);
    

});



module.exports = router;