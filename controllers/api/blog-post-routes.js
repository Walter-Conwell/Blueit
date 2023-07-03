const router = require("express").Router();
const { BlogPost, Topic } = require("../../models");

//localhost:3001/api/blogposts

// GET all posts
http: router.get("/", async (req, res) => {
  try {
    const posts = await BlogPost.findAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all posts in a topic
router.get("/:topic", async (req, res) => {
  try {
    // Read the 3 lines below very carefully
    const posts = await BlogPost.findAll({ where: {
        post_category_id: Topic.findOne({ where: { topic_name: req.params.topic }}).id,
    }});
    if(!posts){
        res.status(404).json({ message: 'No topic with that name'});
        return;
    }
    res.status(200).json(posts);
  }
  catch (err) {
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
    Topic.findOne({ where: { topic_name: req.body.topic }}).then(async (data) => {
        const topicID = data.id;
        console.log('\n\ndata:' + data.id);
        const newPost = await BlogPost.create({
          post_topic_id: topicID,
          post_title: req.body.post_title,
          post_text: req.body.post_text,
          post_date: new Date(),
          user_id: req.body.user_id,
        });
        res.status(200).json(newPost);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// edit a previous post
router.put("/:id", (req, res) => {
  BlogPost.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedPost) => res.json(updatedPost))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a previous post
router.delete("/:id", async (req, res) => {
  try {
    await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// {
// 	"topic": "",
//   "post_title": "",
// 	"post_text": "",
// 	"user_id": ""
// }
