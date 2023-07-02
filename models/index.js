const User = require("./User");
const Topic = require("./Topic");
const BlogPost = require("./BlogPost");

User.hasMany(BlogPost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

BlogPost.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Topic, BlogPost };
