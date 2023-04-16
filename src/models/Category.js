/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
     name: {
        unique: true,
        type: DataTypes.STRING, 
      },
    },
    {
      timestamps: false,
      tableName: 'categories',
      underscored: true,
    });

  return Category;
};