const router = require("express").Router();
const { BlogPost } = require("../models");

router.get("/", async (req, res) => {
  // res.render("all", { loggedIn: req.session.loggedIn });
  try {
    const postData = await BlogPost.findAll({});
    var posts = postData.map((post) => post.get({ plain: true }));
    posts = posts.slice(0, 3);
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
    const postData = await BlogPost.findAll({
      where: {
        user_id: 5,
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
    const postData = await BlogPost.findAll({
      where: {
        user_id: 1,
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
    const postData = await BlogPost.findAll({
      where: {
        user_id: 2,
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
    const postData = await BlogPost.findAll({
      where: {
        user_id: 3,
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
    const postData = await BlogPost.findAll({
      where: {
        user_id: 4,
      },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("all", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
