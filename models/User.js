// imports
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

// this will have a foreign key that references blogs
User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    blog_id: {
        type: DataTypes.TEXT,
        allowNull: true,
        references: {
            model: 'blog',
            key: id,
        },
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

module.exports = User;