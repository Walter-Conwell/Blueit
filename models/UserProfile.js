const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserProfile extends Model {}

UserProfile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {},
    user_cred_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user_credentials",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
