const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Topic extends Model {}

Topic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    topic_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
        isAlphanumeric: true,
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newTopicData) {
        newTopicData.topic_name = await newTopicData.topic_name.toLowerCase();
        // use split to split the string into an array
        // use map to iterate over the array and
        return newTopicData;
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Topic",
  }
);

module.exports = Topic;
