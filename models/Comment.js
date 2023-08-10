// imports
const { Model, DataTypes, DATE } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

// this will have a foreign key that references blogs
Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    comment_content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'blog',
            key: id,
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        references:{
            model: 'user',
            key: id,
        },
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
