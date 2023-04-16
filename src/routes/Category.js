const express = require('express');
const { categoryController } = require('../controllers');
const { authToken } = require('../middlewares/authToken');

const router = express.Router();

router.post('/', authToken, categoryController.createNewCategory);

module.exports = router;