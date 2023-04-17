const { CategoryService } = require('../services');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;
  
  const categories = await Promise.all(
    categoryIds.map(async (categoryId) => CategoryService.getCategoryById(categoryId)),
  );
    
    const someCategoryIsMissing = categories.some((category) => category === null);
    if (someCategoryIsMissing) { 
      return res.status(400).json({ message: 'one or more "categoryIds" not found' }); 
    }
  return next();
};