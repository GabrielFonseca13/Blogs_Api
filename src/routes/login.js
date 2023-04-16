const loginRouter = require('express').Router();
const { loginController } = require('../controllers');
const validateLoginFields = require('../middlewares/validateLoginFields');

loginRouter.post('/', validateLoginFields, loginController.login);

module.exports = loginRouter;