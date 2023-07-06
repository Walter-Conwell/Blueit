const { User } = require("../models");

const userData = [
  {
    id: 1,
    email: "stanley@dundermifflin.com",
    password: "password123",
    username: "stanleyhudson",
    name: "Stanley Hudson",
  },
  //idontcare
  {
    id: 2,
    email: "frodo@underhill.com",
    password: "password1234",
    username: "frodo",
    name: "Frodo Baggins",
  },
  //samsbestfriend
  {
    id: 3,
    email: "obiwan@jedicouncil.com",
    password: "password1234",
    username: "obiwan",
    name: "Obi Wan Kenobi",
  },
  //57IHaveTheHighGround
  {
    id: 4,
    email: "zelda@hyrulecastle.com",
    password: "password1234",
    username: "zelda",
    name: "Princess Zelda",
  },
  //LookABloodMoon
  {
    id: 5,
    email: "morty@harryherpsonhigh.com",
    password: "password1234",
    username: "morty",
    name: "Morty Smith",
  },
  //awjeeeez
];
// encrypts passwords
const seedUser = async () =>  {
  for (const user of userData) {
    await User.create(user)
  } 
};

module.exports = seedUser;

// Manually add seed data to the database
// {
//   "email": "stanley@dundermifflin.com",
//   "password": "idontcare",
//   "username": "stanleyhudson"
// }
// {
//   "email": "frodo@underhill.com",
//   "password": "samsbestfriend",
//   "username": "frodo"
// }
// {
//   "email": "obiwan@jedicouncil.com",
//   "password": "57IHaveTheHighGround",
//   "username": "obiwan"
// }
// {
//   "email": "zelda@hyrulecastle.com",
//   "password": "LookABloodMoon",
//   "username": "zelda"
// }
// {
//   "email": "morty@harryherpsonhigh.com",
//   "password": "awjeeeez",
//   "username": "morty"
// }
