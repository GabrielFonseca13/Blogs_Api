/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      displayName: {
        type: DataTypes.STRING, 
      },
      email: {
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      }
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });

      // User.hasMany(models.BlogPosts, {
      //   foreignKey: 'user_id',
      //   as: 'blog_posts',
      // });

  return User;
};