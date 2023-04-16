module.exports = (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (!displayName || !email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};