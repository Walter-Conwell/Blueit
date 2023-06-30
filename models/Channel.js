const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Channel extends Model {}

Channel.init(
  {},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "channel",
  }
);

module.exports = Channel;
