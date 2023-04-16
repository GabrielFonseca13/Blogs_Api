const express = require('express');
const { loginController } = require('../controllers');
const validateLoginFields = require('../middlewares/validateLoginFields');

const router = express.Router();

router.post('/', validateLoginFields, loginController.login);

module.exports = router;