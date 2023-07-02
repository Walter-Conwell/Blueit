const sequelize = require("../config/connection");
const seedUserCredential = require("./userCredentialData");
const seedUserProfile = require("./userProfileData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUserCredential();
  await seedUserProfile();

  process.exit(0);
};

seedAll();
