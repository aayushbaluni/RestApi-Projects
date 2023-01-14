const mongoose = require("mongoose");
const _ = require('lodash');
const express = require('express');
const { validateUser } = require("./validation/validateUser");
const { User } = require("./models/IUserModel");

const router = express.Router();



router.post('/', async (req,res) =>{
    const { err } = await validateUser(req.body);
    console.log(err)
    if (err) return res.status(400).send("Please enter valid Credentials.");
    else {    
            const user = new User(_.pick(req.body,['name','email','password']));

        const u = await User.findOne({ email: req.body.email });
        if(u)return res.send("Email already Exists. ")
        try {
       
            await user.save();
   
            res.send(user);
        }
        catch (err) {
            if (err.code == 11000) res.send("Email must be Unique.")
            res.send("Please check your Inputs.")
        }
   }
});



module.exports = router;
