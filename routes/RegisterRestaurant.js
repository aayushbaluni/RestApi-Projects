const express = require('express');
const _ = require('lodash');
const { Restaurants } = require('./models/RestaurantModel');
const validateRestaurant = require('./validation/validateResturant');


const router = express.Router();


router.post('/', async(req, res) => {
    const err = validateRestaurant(req.body);
    if (err) return res.status(400).send("Please Check inputs.");
    const restaurant = new Restaurants(req.body);
    const re = await Restaurants.findOne({ email: req.body.email });
    if (re) return res.status(400).send("Email already exists.");
    try {
        await restaurant.save();
        res.send("Successfully registered. " + restaurant);   
    }
    catch (e) {
        console.log(e);
        return res.status(404).send(e);
    }
    
});


module.exports = router;