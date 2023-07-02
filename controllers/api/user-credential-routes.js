const router = require("express").Router();
const { UserCredential } = require("../../models");

// router.get("/", (req, res) => {});

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

// router.post("/login", (req, res) => {});

// router.post("/logout", (req, res) => {});

// router.put("/:id", (req, res) => {});

// router.delete("/:id", (req, res) => {});

module.exports = router;
