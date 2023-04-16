const { Category } = require('../models');

const createCategorie = async ({ name }) => {
  const categoryExists = await Category.findOne({ where: { name } });
  if (categoryExists) {
    return {
      error: {
        code: 'categorieExists',
        message: 'Categories already registered',
      },
    };
  }
  
  const newCategory = await Category.create({ name });
  return newCategory;
};

module.exports = {
  createCategorie,
};