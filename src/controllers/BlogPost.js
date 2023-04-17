const { BlogPostService, PostCategoryService } = require('../services');

const createNewBlogPost = async (req, res) => {
  const { user } = req;
  const { title, content, categoryIds } = req.body;

  const result = await BlogPostService.createBlogPost({ title, content, userId: user.id });
  
  await Promise.all(
    categoryIds.map(async (categoryId) => {
      await PostCategoryService.createPostCategory({ postId: result.id, categoryId });
    }), 
  );

  return res.status(201).json(result);
};

module.exports = {
  createNewBlogPost,
};