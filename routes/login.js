const express = require('express');
const _ = require('lodash');
const { validateUser } = require("./validation/validateUser");
const { User } = require("./models/IUserModel");

const router = express.Router();


router.post('/', async (req, res) => {
     const {err} = validateUser(req.body);
    console.log(err);
    if (err) return res.status(400).send("Please enter valid Credentials.");
    else {    
         const user = new User(_.pick(req.body,['name','email','password']));
        
        const result = await User.findOne({email: req.body.email});
        if (result.length == 0) res.send("Invalid Credentials");
        else res.send(_.pick(result,["_id",'name','email']));
        
    }
    
});



module.exports = router;