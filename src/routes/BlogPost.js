const express = require('express');
const { blogPostController } = require('../controllers');
const { authToken } = require('../middlewares/authToken');
const validateCreatePostFields = require('../middlewares/validateCreatePostFields');
const validateCategoryExists = require('../middlewares/validateCategoryExists');

const router = express.Router();

router.post(
  '/', 
  authToken, 
  validateCreatePostFields, 
  validateCategoryExists, 
  blogPostController.createNewBlogPost,
);

module.exports = router;