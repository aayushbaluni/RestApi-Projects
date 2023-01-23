const express = require('express');
const _ = require('lodash');
const { validateUser } = require("./validation/validateUser");
const { User } = require("./models/UserModel");
const jwt=require('jsonwebtoken')

const router = express.Router();


router.post('/', async (req, res) => {
    // not implementing check over email and password
    const result = findres(req);
    if (!result) res.send("Invalid Credentials");
        else if (result.password != req.body.password) return res.status(400).send("Incorrect Password.");
        const token = jwt.sign(_.pick(result, ["_id", 'name', 'email',"isAdmin"]), "my_secret_key");
         res.send(token);
        
    }
    
);


router.post('/admin', async (req, res) => {
     // not implementing check over email and password
    const result = findres(req);
    if (!result) res.send("Invalid Credentials");
    else if (result.password != req.body.password) return res.status(400).send("Incorrect Password.");
        if (!result.isAdmin) return res.status(400).send("You Are Not an Admin.Please login as a User.");
        const token = jwt.sign(_.pick(result, ["_id", 'name', 'email',"isAdmin"]), "my_secret_key");
         res.send(token);
        
    }
    
);


async function findres(req) {
        
        const result = await User.findOne({ email: req.body.email });
        console.log(result);
        return result;
    
}
module.exports = router;