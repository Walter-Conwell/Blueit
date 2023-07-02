const sequelize = require("../config/connection");
const seedUser = require("./userData");
// const seedUserProfile = require("./userProfileData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  // await seedUserProfile();

  process.exit(0);
};

seedAll();
