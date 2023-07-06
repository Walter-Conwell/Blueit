const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("all", {loggedIn:req.session.loggedIn});
});

router.get("/blogwrite", async (req, res) => {
  res.render("blogwrite", { layout: "blogwrite-layout" });
});

module.exports = router;
