const joi = require('joi');

 function validateRestaurant(rest) {
    const schema = joi.object({
        name: joi.string().min(5).required(),
        address: joi.string(),
        phoneNo: joi.string().min(10),
        isVerified: joi.boolean().optional(),
        email: joi.string().email().min(5).required().email(),
        password: joi.string().min(5).required()
    })
    try {
         const value =  schema.validate(rest);
}
     catch (err) {
         return err;
 }
 }


module.exports = validateRestaurant;