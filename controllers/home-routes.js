const router = require("express").Router();
/*const {} = require("../models");

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});*/

router.get("/", async (req, res) => {
  res.render("all");
});

router.get("/blogwrite", async (req, res) => {
  res.render("main", { isBlogWrite: true });
});

module.exports = router;
