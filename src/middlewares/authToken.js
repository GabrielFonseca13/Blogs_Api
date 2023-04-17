const { validateToken } = require('../services/utils/auth');

const authToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const tokenResult = validateToken(authorization);
    req.user = tokenResult;
    if (tokenResult.error && tokenResult.error.code === 'tokenNotFound') {
      return res.status(401).json({ message: tokenResult.error.message });
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