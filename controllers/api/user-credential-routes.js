const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/withAuth");

// GET all users
router.get("/", (req, res) => {
  User.findAll()
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// http://localhost:3001/api/credentials

// Create a new user
router.post("/", async (req, res) => {
  try {
    console.log("Enetered try block");
    console.log(req.body);
    const dbUserData = await User.create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
    });

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;

      res.redirect("/");
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res.status(400).json({ message: "Incorrect email" });
      // change to incorrect email or password
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password" });
      // change to incorrect email or password
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;

      res.redirect("/");
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Logout route
router.post("/logout", (req, res) => {
  // console.log("Entered logout route");
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Update a user
router.put("/:id", withAuth, (req, res) => {
  // update a User by its `id` value
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a user
router.delete("/:id", withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
