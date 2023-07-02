const { User } = require("../models");

const Userdata = [
  {
    id: 1,
    email: "stanley@dundermifflin.com",
    password: "$2b$10$gfrpFEnGGE6842KA7ilyPuD.BBWCLCM/3qZUEzsH8UTr5DunUD7xO",
    username: "stanleyhudson",
    name: "Stanley Hudson",
  },
  //idontcare
  {
    id: 2,
    email: "frodo@underhill.com",
    password: "$2b$10$VUUtNqLfFYZo8eXDRf5w6.nLItOgVgGJOIruchKSgOgR2YoUxG3U2",
    username: "frodo",
    name: "Frodo Baggins",
  },
  //samsbestfriend
  {
    id: 3,
    email: "obiwan@jedicouncil.com",
    password: "$2b$10$Iy8GbD.N7DiNkldaRprKL.YRzs/ApEoY6kEc1VdZ0Uu3vt5A326Yq",
    username: "obiwan",
    name: "Obi Wan Kenobi",
  },
  //57IHaveTheHighGround
  {
    id: 4,
    email: "zelda@hyrulecastle.com",
    password: "$2b$10$bPJkMMGbD72yWK.XOdym1ukdadu/6qFfj94f5U4qNMqeDjTmg4BB.",
    username: "zelda",
    name: "Princess Zelda",
  },
  //LookABloodMoon
  {
    id: 5,
    email: "morty@harryherpsonhigh.com",
    password: "$2b$10$dsOeQaxpElZ1eAJmUVFNsu20XgjrF4HzZ9CFPZXRCKpoAL4/Pg6ze",
    username: "morty",
    name: "Morty Smith",
  },
  //awjeeeez
];

const seedUser = () => User.bulkCreate(Userdata);

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
