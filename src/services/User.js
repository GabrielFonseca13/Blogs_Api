const { User } = require('../models');
const { generateToken } = require('./utils/auth');

const createNewUser = async ({ displayName, email, password, image }) => {
  //  validar se já nao existe um email.
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

module.exports = {
  createNewUser,
};