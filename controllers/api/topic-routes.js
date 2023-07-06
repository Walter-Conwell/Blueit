const router = require("express").Router();
const { Topic } = require("../../models");

//gets list of all topics
router.get("/", (req, res) => {
  Topic.findAll()
    .then((dbTopicData) => res.json(dbTopicData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//gets a single topic by its ID
router.get("/:id", async (req, res) => {
  try {
    const topicData = await Topic.findByPk(req.params.id);
    if (!topicData) {
      res.status(404).json({ message: "No topic with this id" });
      return;
    }
    res.status(200).json(topicData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new topic
//takes topics in via req.body.topic_name, then compares the contents with the database
//new entries are added to the database, and entries that already exist are returned with their IDs
//This allows the front end to not have to worry about whether or not a topic already exists
//and then allows the front end to create a new blog post with the correct topic IDs attached
router.post("/", async (req, res) => {
  try {
    // console.log(`In post route. Topic is: ${req.body.topic_name}`);
    var topics = req.body.topic_name.split(",");
    topics = topics.map((topic) => topic.trim());
    // console.log(`line 10 ${topics}}`);
    // console.log(typeof topics);

    var returnedTopics = [];

    for (var topicName of topics) {
      Array.from(topicName).forEach((char) => {
        if (char === " ") {
          topicName = topicName.replace(char, "_");
        }
      });
      var topicExists = await Topic.findOne({
        where: {
          topic_name: topicName,
        },
      });

      if (!topicExists) {
        const newTopic = await Topic.create({
          topic_name: topicName,
          // topic_is_new: true,
        });
        returnedTopics.push(newTopic);
      } else {
        // topicExists.topic_is_new = false;
        returnedTopics.push(topicExists);
      }
      // console.log(`line 31 ${topicName}`);
    }

    res.status(200).json({
      returnedTopics,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a topic's name by its `id` value
  try {
    const topicData = await Topic.update(
      {
        topic_name: req.body.topic_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!topicData) {
      res.status(404).json({ message: "No topic found with this id!" });
      return;
    }
    res.status(200).json(topicData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const topicData = await Topic.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!topicData) {
      res.status(404).json({ message: "No topic found with this id!" });
      return;
    }
    res.status(200).json(topicData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
