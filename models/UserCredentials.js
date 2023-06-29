const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);
