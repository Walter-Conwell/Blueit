const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { TEXT } = require("sequelize");

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
      type: varchar(255),
      allowNull: false,
      unique: true,
    },
    name: {
      type: varchar(255),
      allowNull: true,
    },

    user_cred_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user_credentials",
        key: "id",
      },
      photo_file: {
        type: varchar(255),
      },
      bio: {
        type: DataTypes.TEXT,
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
