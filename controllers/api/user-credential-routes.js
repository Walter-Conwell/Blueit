const router = require("express").Router();
const { UserCredential } = require("../../models");

router.get("/", (req, res) => {
  UserCredential.findAll()
    .then((dbuserCredData) => res.json(dbuserCredData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const dbuserCredData = await UserCredential.create({
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbuserCredData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const dbuserCredData = await UserCredential.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbuserCredData) {
      res.status(400).json({ message: "Incorrect email" });
      return;
    }

    const validPassword = await dbuserCredData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbuserCredData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).json({ message: "You are now logged out!" });
    });
  } else {
    res.status(400).json({ message: "You are not logged in!" });
  }
});

router.put("/:id", (req, res) => {
  // update a userCred by its `id` value
  UserCredential.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbuserCredData) => {
      if (!dbuserCredData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbuserCredData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a userCred by its `id` value
  UserCredential.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbuserCredData) => {
      if (!dbuserCredData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbuserCredData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
