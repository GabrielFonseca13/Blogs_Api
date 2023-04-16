const { UserService } = require('../services');
const { validateFieldsUser } = require('../services/utils/validations');

const createNewUser = async (req, res) => {
  const { error: validationError } = validateFieldsUser(req.body);
  if (validationError) {
    return res.status(400).json({ message: validationError.message });
  }
  
  const { error: serviceError, token } = await UserService.createNewUser(req.body);

  if (serviceError && serviceError.code === 'usernameExists') {
    return res.status(409).json({ message: serviceError.message });
  }
  
  return res.status(201).json({ token });
};

module.exports = {
  createNewUser,
};