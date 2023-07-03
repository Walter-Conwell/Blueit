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
        // isAlphanumeric: true,
      },
    },
    // theme: {
    //   // store the theme information in a single string, similar to JSON
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
  },
  {
    hooks: {
      async beforeCreate(newTopicData) {
        newTopicData.topic_name = await newTopicData.topic_name.toLowerCase();
        Array.from(newTopicData.topic_name).forEach((char) => {
          if (char === " ") {
            newTopicData.topic_name = newTopicData.topic_name.replace(
              char,
              "_"
            );
          }
        });
        // Array.from(newTopicData.topic_name).forEach((char) => {
        //   if (char === ", ") {
        //     newTopicData.topic_name = newTopicData.topic_name.replace(
        //       char,
        //       ","
        //     );
        //   }
        // });
        return newTopicData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Topic",
  }
);

module.exports = Topic;
