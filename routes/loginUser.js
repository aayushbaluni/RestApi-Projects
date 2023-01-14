const express = require('express');
const _ = require('lodash');
const { validateUser } = require("./validation/validateUser");
const { User } = require("./models/UserModel");
const jwt=require('jsonwebtoken')

const router = express.Router();


router.post('/', async (req, res) => {
    const { err } = validateUser(req.body);
    if (err) return res.status(400).send("Please enter valid Credentials.");
    const result = findres(req);
        if (!result) res.send("Invalid Credentials");
        const token = jwt.sign(_.pick(result, ["_id", 'name', 'email',"isAdmin"]), "my_secret_key");
         res.send(token);
        
    }
    
);


router.post('/admin', async (req, res) => {
      const { err } = validateUser(req.body);
    if (err) return res.status(400).send("Please enter valid Credentials.");
    const result = findres(req);
        if (!result) res.send("Invalid Credentials");
        if (!result.isAdmin) return res.status(400).send("You Are Not an Admin.Please login as a User.");
        const token = jwt.sign(_.pick(result, ["_id", 'name', 'email',"isAdmin"]), "my_secret_key");
         res.send(token);
        
    }
    
);


async function findres(req) {
        const user = new User(_.pick(req.body, ['name', 'email', 'password']));
        
        const result = await User.findOne({ email: req.body.email });
        console.log(result);
        return result;
    
}
module.exports = router;