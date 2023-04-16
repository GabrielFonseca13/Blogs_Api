const { validateToken } = require('../services/utils/auth');

const authToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { error } = validateToken(authorization);

    if (error && error.code === 'tokenNotFound') {
      return res.status(401).json({ message: error.message });
    }

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  authToken,
};