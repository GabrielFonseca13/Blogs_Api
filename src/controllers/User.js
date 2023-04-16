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

const getAllUsers = async (_req, res) => {
  const allUsers = await UserService.getAllUsers();

  return res.status(200).json(allUsers);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userById = await UserService.getUserById(id);

  if (userById.error && userById.error.code === 'userNotFound') {
    return res.status(404).json({ message: userById.error.message });
  }
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', userById);
  return res.status(200).json(userById);
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
};