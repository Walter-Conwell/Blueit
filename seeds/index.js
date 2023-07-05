const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedTopic = require("./topicData");
// const seedUserProfile = require("./userProfileData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedTopic();
  // await seedUserProfile();

  process.exit(0);
};

seedAll();
