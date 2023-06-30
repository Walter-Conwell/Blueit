const { UserCredentials } = require("../models");

const usercredentialdata = [
  {
    id: 1,
    email: "stanely@dundermifflin.com",
    password: "idontcare",
  },
  {
    id: 2,
    email: "frodo@underhill.com",
    password: "samsbestfriend",
  },
  {
    id: 3,
    email: "obiwan@jedicouncil.com",
    password: "57IHaveTheHighGround",
  },
  {
    id: 4,
    email: "zelda@hyrulecastle.com",
    password: "LookABloodMoon",
  },
  {
    id: 5,
    email: "morty@harryherpsonhigh.com",
    password: "awjeeeez",
  },
];

const seedUserCredentials = () =>
  UserCredentials.bulkCreate(usercredentialdata);

module.exports = seedUserCredentials;
