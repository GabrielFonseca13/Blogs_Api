const { User } = require('../models');
const { generateToken } = require('./utils/auth');

const createNewUser = async ({ displayName, email, password, image }) => {
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return {
      error: {
        code: 'usernameExists',
        message: 'User already registered',
      },
    };
  }
  
  const newUser = await User.create({ displayName, email, password, image });
  const payload = { 
    id: newUser.dataValues.id,
    displayName: newUser.dataValues.displayName,
    email: newUser.dataValues.email,
    image: newUser.dataValues.image,
  };

  const token = generateToken(payload);
  return { token };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll(
    {
      attributes: { exclude: ['password'] },
    },
  );

  return allUsers;
};

const getUserById = async (id) => {
  const userById = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!userById) {
    return {
      error: {
        code: 'userNotFound',
        message: 'User does not exist',
      },
    };
  }
  return userById.dataValues;
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
};