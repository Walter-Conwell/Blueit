const { UserProfile } = require("../models");

const userProfileData = [
  {
    username: "StanleyIzCool",
    name: "Stanley Yelnats",
    user_cred_id: 1,
    photo_file: "stanley.jpg",
    bio: "Hi my name is Stanley. I love writing bios",
  },
];

const seedUserProfile = () => UserProfile.bulkCreate(userProfileData);

module.exports = seedUserProfile;
