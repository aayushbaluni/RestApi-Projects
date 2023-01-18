const Joi = require('joi');
//const joi = require('joi');

  function validateUser(user) { 
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        email: Joi.string().min(5).required().email(),
        password: Joi.string().min(5).required()
    });
     try {
         const value =  schema.validate(user);
}
     catch (err) {
         return err;
 }
}




exports.validateUser = validateUser;