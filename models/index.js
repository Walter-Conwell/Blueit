const User = require("./User");
const Topic = require("./Topic");
const BlogPost = require("./BlogPost");
const BlogPostTopic = require("./BlogPostTopic");

User.hasMany(BlogPost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

BlogPost.belongsTo(User, {
  foreignKey: "user_id",
});

BlogPost.belongsToMany(Topic, {
  through: "blog_post_topic",
  as: "topics",
  foreignKey: "blog_post_id",
});

Topic.belongsToMany(BlogPost, {
  through: "blog_post_topic",
  as: "blog_posts",
  foreignKey: "topic_id",
});

module.exports = { User, Topic, BlogPost, BlogPostTopic };
