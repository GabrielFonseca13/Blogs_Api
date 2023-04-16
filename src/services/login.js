const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secretKey = process.env.JWT_SECRET;

const configJWT = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  // console.log('######### user', user.dataValues);    
  
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

  const token = jwt.sign(payload, secretKey, configJWT);
  return { token };
};

module.exports = {
  login,
};