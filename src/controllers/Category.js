const { CategoryService } = require('../services');

const createNewCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
    
  const newCategory = await CategoryService.createCategorie({ name });

  if (newCategory.error && newCategory.error.code === 'categorieExists') {
    return res.status(409).json({ message: newCategory.error.message });
  }

  return res.status(201).json(newCategory);
};

module.exports = {
  createNewCategory,
};