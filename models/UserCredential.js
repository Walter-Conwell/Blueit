const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class UserCredential extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

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
        newUserCredData.email = await newUserCredData.email.toLowerCase();
        newUserCredData.password = await bcrypt.hash(
          newUserCredData.password,
          10
        );
        return newUserCredData;
      },
      async beforeUpdate(updatedUserCredData) {
        updatedUserCredData.email =
          await updatedUserCredData.email.toLowerCase();
        updatedUserCredData.password = await bcrypt.hash(
          updatedUserCredData.password,
          10
        );
        return updatedUserCredData;
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user_credentials",
  }
);

module.exports = UserCredential;
