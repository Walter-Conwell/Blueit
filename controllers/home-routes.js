const router = require("express").Router();
const { BlogPost } = require("../models");

router.get("/", async (req, res) => {
  // res.render("all", { loggedIn: req.session.loggedIn });
  console.log("WE ARE IN THE HOME ROUTES");
  try {
    console.log("WE ARE IN THE TRY BLOCK");
    const postData = await BlogPost.findAll({});
    var posts = postData.map((post) => post.get({ plain: true }));
    posts = posts.slice(0, 5);
    console.log(posts);
    console.log("WE ARE ABOUT TO RENDER THE PAGE");
    res.render("all", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/blogwrite", async (req, res) => {
  res.render("blogWrite", { layout: "blogwrite-layout" });
});

router.get("/Andrick", async (req, res) => {
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
