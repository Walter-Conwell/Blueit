const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("all");
});

router.get("/blogwrite", async (req, res) => {
  res.render("blogwrite", { layout: "blogwrite-layout" });
});

module.exports = router;
