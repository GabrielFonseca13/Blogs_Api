const { BlogPost } = require('../models');

const createBlogPost = async ({ title, content, userId }) => {
  const newBlogPost = await BlogPost.create({ title, content, userId });
  return newBlogPost;
};

module.exports = {
  createBlogPost,
};
