const router = require("express").Router();
const { Topic } = require("../../models");

router.get("/", (req, res) => {});

// create a new topic
router.post("/", async (req, res) => {
  try {
    const topicExists = await Topic.findOne({
      where: {
        topic_name: req.body.topic_name,
      },
    });

    if (!topicExists) {
      const newTopic = await Topic.create({
        topic_name: req.body.topic_name,
      });
      res.status(200).json(newTopic);
    } else {
      // need to finish this route, which will probably end up in blog-post-routes.
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
