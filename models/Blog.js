// imports
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blog extends Model {}

// this will have a foreign key that references blogs
Blog.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    post_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    post_content: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    post_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    comment_id:{
        type: DataTypes.TEXT,
        allowNull: true,
        references: {
            model: 'comment',
            key: id,
        },
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

module.exports = Blog;