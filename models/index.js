const UserProfile = require("./UserProfile");
const UserCredentials = require("./UserCredentials");
// const Channel = require("./Channel");
// const BlogPost = require("./BlogPost");

UserCredentials.hasOne(UserProfile, {
  foreignKey: "user_cred_id",
});

UserProfile.belongsTo(UserCredentials, {
  foreignKey: "user_cred_id",
});

module.exports = { UserProfile, UserCredentials };
