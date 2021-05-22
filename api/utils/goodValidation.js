const Joi = require('joi');

//signup authorization
const goodValidation = data => {
    const schema = Joi.object({
        item_name: Joi.string().required().min(3).max(255),
        category: Joi.string().required().min(3).max(255),
        description: Joi.string().min(3).max(255).required(),
        image: Joi.string().allow(null, '').max(255).default("good image"),
        quality: Joi.number().integer().min(0).max(5),
        quantity: Joi.number().integer().min(1).max(100),
        available: Joi.number().integer().min(0).max(1),
        taken: Joi.number().integer().min(0).max(1),
        owner_id: Joi.number().integer().min(1).required(),
        category_id: Joi.number().integer().min(1).required(),
    }).unknown();
    return schema.validate(data);
};

module.exports.goodValidation = goodValidation;