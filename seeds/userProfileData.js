const UserProfile = require("../models/UserProfile");

const userProfileData = [
  {
    username: "Splorna123",
    name: "Splorna Shmangleberg",
    user_cred_id: 1,
    photo_file: "splorna.jpg",
    bio: "Hi my name is splorna. I love writing bios",
  },
];

const seedUserProfile = () => UserProfile.bulkCreate(userProfileData);

module.exports = seedUserProfile;
