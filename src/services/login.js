const { User } = require('../models');
const { generateToken } = require('./utils/auth');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user || user.password !== password) {
    return {
      error: {
        code: 'invalidCredentials',
        message: 'Invalid fields',
      },
    };
  }

  const payload = { id: user.dataValues.id,
    displayName: user.dataValues.displayName,
    email: user.dataValues.email,
    image: user.dataValues.image,
  };

  const token = generateToken(payload);

  return { token };
};

module.exports = {
  login,
};