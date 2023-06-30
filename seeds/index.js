const sequelize = require("../config/connections");
const seedUserProfile = require("./userProfileData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUserProfile();

  process.exit(0);
};

seedAll();
