const router = require("express").Router();
const { BlogPost, User } = require("../models");

router.get("/", async (req, res) => {
  // res.render("all", { loggedIn: req.session.loggedIn });
  try {
    const postData = await BlogPost.findAll({
      limit: 10,
      order: [["created_at", "DESC"]],
    });
    var posts = postData.map((post) => post.get({ plain: true }));
    // posts = posts.slice(0, 3);
    console.log(posts);
    res.render("all", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/blogwrite", async (req, res) => {
  res.render("blogWrite", { layout: "blogwrite-layout" });
});

router.get("/andrick", async (req, res) => {
  try {
    var userID = await User.findAll({
      attributes: ["id"],
      where: {
        email: "andrick@yahoo.com",
      },
    });
    // console.log(andrickUserID[0].dataValues.id);
    const postData = await BlogPost.findAll({
      order: [["created_at", "DESC"]],
      where: {
        user_id: userID[0].dataValues.id,
      },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("all", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/madeline", async (req, res) => {
  try {
    var userID = await User.findAll({
      attributes: ["id"],
      where: {
        email: "madeline@ihatehandlebars.com",
      },
    });
    const postData = await BlogPost.findAll({
      order: [["created_at", "DESC"]],
      where: {
        user_id: userID[0].dataValues.id,
      },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("all", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/will", async (req, res) => {
  try {
    var userID = await User.findAll({
      attributes: ["id"],
      where: {
        email: "will@gmail.com",
      },
    });
    const postData = await BlogPost.findAll({
      order: [["created_at", "DESC"]],
      where: {
        user_id: userID[0].dataValues.id,
      },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("all", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/walter", async (req, res) => {
  try {
    var userID = await User.findAll({
      attributes: ["id"],
      where: {
        email: "walter@yahoo.com",
      },
    });
    const postData = await BlogPost.findAll({
      order: [["created_at", "DESC"]],
      where: {
        user_id: userID[0].dataValues.id,
      },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("all", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/kyle", async (req, res) => {
  try {
    var userID = await User.findAll({
      attributes: ["id"],
      where: {
        email: "kyle@aol.com",
      },
    });
    const postData = await BlogPost.findAll({
      order: [["created_at", "DESC"]],
      where: {
        user_id: userID[0].dataValues.id,
      },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("all", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
