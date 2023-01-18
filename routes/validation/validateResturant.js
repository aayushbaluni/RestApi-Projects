const joi = require('joi');

 function validateRestaurant(rest) {
    const schema = joi.object({
        name: joi.string().min(5),
        address: joi.string(),
        phoneNo: joi.string().min(10),
        isVerified: joi.boolean().optional(),
        email: joi.string().email().min(5).required(),
        password: joi.string().min(5).required()
    })
    return schema.validate(rest);
 }


module.exports = validateRestaurant;