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

const getAllCategories = async () => {
  const allCategories = await Category.findAll(
    {
      order: [['id', 'ASC']],
    },
  );

  return allCategories;
};

module.exports = {
  createCategorie,
  getAllCategories,
};