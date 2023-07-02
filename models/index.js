const UserProfile = require("./UserProfile");
const UserCredential = require("./UserCredential");
const Channel = require("./Channel");
const BlogPost = require("./BlogPost");

UserCredential.hasOne(UserProfile, {
  foreignKey: "user_cred_id",
});

UserProfile.belongsTo(UserCredential, {
  foreignKey: "user_cred_id",
});

module.exports = { UserProfile, UserCredential, Channel, BlogPost };
