const router = require("express").Router();
const { BlogPost } = require("../../models");

// GET all posts in a category
router.get("/:cat", async (req, res) => {
  try {
    const posts = await BlogPost.findAll({
      where: { post_category: req.params.cat },
    });
    if (!posts) {
      res.status(404).json({ message: "No posts in that category" });
      return;
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one post
router.get("/:id", async (req, res) => {
  try {
    const postData = await BlogPost.findByPk(req.params.id);
    if (!postData) {
      res.status(404).json({ message: "No post with this id" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a blog post
router.post("/", async (req, res) => {
  try {
    const newPost = await BlogPost.create({
      post_category: req.body.post_category,
      post_title: req.body.post_title,
      post_text: req.body.post_text,
      post_date: new Date(),
      user_profile_id: req.body.user_profile_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {
  BlogPost.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => {
    res.status(500).json(err);
  });
});

module.exports = router;
