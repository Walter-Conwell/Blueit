const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class UserCredential extends Model {}

UserCredential.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validator: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validator: {
        isAlphanumeric: true,
        len: [8],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserCredData) {
        newUserCredData.password = await bcrypt.hash(
          newUserCredData.password,
          10
        );
        return newUserCredData;
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user_credentials",
  }
);

module.exports = UserCredential;
