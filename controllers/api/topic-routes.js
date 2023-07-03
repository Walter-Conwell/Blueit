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
      res.status(500).json({message: 'Topic already exists'});
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/:id", (req, res) => {
  Topic.update(req.body, { where: { id: req.params.id }})
  .then(() => {
    if(req.body.topic_name){
      
    }
  })
});

router.delete("/:id", (req, res) => {});

module.exports = router;
