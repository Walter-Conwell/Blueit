const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BlogPost extends Model {}

BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_topic_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "topic",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    post_date: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    timestamps: true,
    updatedAt: "updateTimestamp",
    freezeTableName: true,
    underscored: true,
    modelName: "blog_post",
  }
);

module.exports = BlogPost;
