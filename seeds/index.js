const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedTopic = require("./topicData");
const seedBlogPost = require("./postData");
// const seedUserProfile = require("./userProfileData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedTopic();
  await seedBlogPost();
  // await seedUserProfile();

  process.exit(0);
};

seedAll();
