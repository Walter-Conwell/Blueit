const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class UserProfile extends Model {}

UserProfile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // user_cred_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "user_credentials",
    //     key: "id",
    //   },
    // },
    photo_file: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user_profile",
  }
);

module.exports = UserProfile;
