const path = require("path");
const session = require("express-session");
const express = require("express");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const hbs = exphbs.create({});

/* const routes = require("./controllers");
const sequelize = require("./config/connection"); */

const app = express();
const PORT = process.env.PORT || 3001;

/*
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
*/

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/home-routes"));

app.get("/blogwrite", (req, res) => {
  res.render("main", { isBlogWrite: true });
});

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
