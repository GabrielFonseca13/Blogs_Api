/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING, 
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING, 
      },
      userId: {
        foreignKey: true,  
        type: DataTypes.INTEGER,
      },
      published: {
        type: DataTypes.DATE,
      },
      updated: {
        type: DataTypes.DATE,
      }
    },
    {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
    });

    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: "User"
      });
    };
  
  return BlogPost;
};