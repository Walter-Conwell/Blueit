const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Post extends Model {}

Post.init(
  {},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
