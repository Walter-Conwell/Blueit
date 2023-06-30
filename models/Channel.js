const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

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
