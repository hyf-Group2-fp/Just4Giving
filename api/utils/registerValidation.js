const Joi = require('joi');

//login authorization
const registerValidation = data => {
    const schema = Joi.object({
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(8).required()
    }).unknown();
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;