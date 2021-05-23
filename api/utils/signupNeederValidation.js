const Joi = require('joi');

//signup authorization
const signupNeederValidation = data => {
    const schema = Joi.object({
        first_name: Joi.string().required().min(3).max(50),
        last_name: Joi.string().required().min(3).max(50),
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().required().min(8).max(255),
        street: Joi.string().min(5).max(255),
        phone: Joi.string().min(6).max(50),
        age: Joi.number().integer().min(18).max(120),
        is_giver: Joi.number().integer().min(0).max(1).required(),
        is_needer: Joi.number().integer().min(0).max(1).required(),
        description: Joi.string().required().min(200).max(255),
        agreement: Joi.number().min(1).max(1)
    }).unknown();
    return schema.validate(data);
};

module.exports.signupNeederValidation = signupNeederValidation;