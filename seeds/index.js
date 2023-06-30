const sequelize = require("../config/connection");
const seedUserCredentials = require("./userCredentialData");
const seedUserProfile = require("./userProfileData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUserCredentials();
  await seedUserProfile();

  process.exit(0);
};

seedAll();
