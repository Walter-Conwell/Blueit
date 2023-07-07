const { User } = require("../models");

const userData = [
  {
    id: 1,
    email: "madeline@ihatehandlebars.com",
    password: "password123",
    username: "NotMaddy",
    name: "Madeline Moore",
  },
  {
    id: 2,
    email: "will@gmail.com",
    password: "password1234",
    username: "WillyB",
    name: "Will Brown",
  },
  {
    id: 3,
    email: "walter@yahoo.com",
    password: "password1234",
    username: "WalterC",
    name: "Walter Conwell",
  },
  {
    id: 4,
    email: "kyle@aol.com",
    password: "password1234",
    username: "KyleS",
    name: "Kyle Slaughter",
  },
  {
    id: 5,
    email: "andrick@yahoo.com",
    password: "password1234",
    username: "AndyS",
    name: "Andrick Siegmund",
  },
];
// encrypts passwords
const seedUser = async () => {
  for (const user of userData) {
    await User.create(user);
  }
};

module.exports = seedUser;
