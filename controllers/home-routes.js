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
    res.render("all", posts);
  } catch (err) {}
});

module.exports = router;
