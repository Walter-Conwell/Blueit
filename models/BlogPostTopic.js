const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class BlogPostTopic extends Model {}

BlogPostTopic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blog_post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "blog_post",
        key: "id",
      },
    },
    topic_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "topic",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "blog_post_topic",
  }
);

module.exports = BlogPostTopic;
