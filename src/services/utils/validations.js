const Joi = require('joi');

const validateFieldsUser = ({ displayName, email, password, image }) =>
  Joi.object({
    displayName: Joi.string().min(8).required().messages({
      'string.min': '"displayName" length must be at least 8 characters long',
      'string.required': '"displayName" is required',
    }),
    email: Joi.string().email().required().messages({
      'string.email': '"email" must be a valid email',
      'string.required': '"email" is required',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': '"password" length must be at least 6 characters long',
      'string.required': '"password" is required',
    }),
    image: Joi.string(),
  }).validate({ displayName, email, password, image });

module.exports = {
  validateFieldsUser,
};