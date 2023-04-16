const express = require('express');
const { userController } = require('../controllers');
const { authToken } = require('../middlewares/authToken');

const router = express.Router();

router.post('/', userController.createNewUser);
router.get('/', authToken, userController.getAllUsers);

module.exports = router;