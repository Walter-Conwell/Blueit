const path = require("path");
const session = require("express-session");
const express = require("express");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const hbs = exphbs.create({});
// const favicon = require("serve-favicon");
/* const routes = require("./controllers");
const sequelize = require("./config/connection"); */

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
// app.use(favicon(path.join(__dirname + "/public/images/favicon.ico")));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers"));
app.use("/public", express.static(path.join(__dirname, "public")));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
