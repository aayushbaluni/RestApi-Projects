const express = require('express');
const Restaurants = require('./models/RestaurantModel');

const router = express.Router();


router.post('/', (req, res) => {
    //not performing any operation on input field
    const response=Restaurants
});



module.exports = router;