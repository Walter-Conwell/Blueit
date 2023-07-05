const router = require("express").Router();
const { Topic } = require("../../models");

router.get("/", (req, res) => {});

// create a new topic
router.post("/", async (req, res) => {
  try {
    var topics = req.body.topic_name.split(", ");
    console.log(`line 10 ${topics}}`);
    console.log(typeof topics);
    var newTopics = [];
    var existingTopics = [];
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
      console.log(`line 31 ${topicName}`);
    }

    // console.log(newTopics);
    // console.log(existingTopics);

    res.status(200).json({
      // newTopics,
      // existingTopics,
      returnedTopics,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
// router.post("/", async (req, res) => {
//   try {
//     const topicExists = await Topic.findOne({
//       where: {
//         topic_name: req.body.topic_name,
//       },
//     });

//     if (!topicExists) {
//       const newTopic = await Topic.create({
//         topic_name: req.body.topic_name,
//       });
//       res.status(200).json(newTopic);
//     } else {
//       const topic_name = req.body.topic_name;
//       res.status(200).json(topic_name);
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(400).json(err);
//   }
// });

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
