const router = require("express").Router();
const { BlogPost, Topic, BlogPostTopic } = require("../../models");
const withAuth = require("../../utils/withAuth");

//localhost:3001/api/blogposts

// GET all posts that match a search query
router.get("/", async (req, res) => {
  try {
    const posts = await BlogPost.findAll({
      include: [{ model: Topic, as: "topics" }],
    });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all posts that match a search query
router.get("/search/:search", async (req, res) => {
  try {
    const posts = await BlogPost.findAll({
      include: [{ model: Topic, as: "topics" }],
    });
    var postsToReturn = [];
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].post_title.includes(req.params.search)) {
        postsToReturns.push(posts[i]);
      }
    }
    if (postsToReturn.length > 0) {
      res.status(200).json(postsToReturn);
    } else {
      res.status(200).json(posts);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all posts in a topic
router.get("/topic/:topic", async (req, res) => {
  try {
    // Read the 3 lines below very carefully
    const posts = await BlogPost.findAll({
      where: {
        post_category_id: Topic.findOne({
          where: { topic_name: req.params.topic },
        }).id,
      },
    });
    if (!posts) {
      res.status(404).json({ message: "No topic with that name" });
      return;
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one post
router.get("/id/:id", async (req, res) => {
  try {
    const postData = await BlogPost.findByPk(req.params.id, {
      include: [{ model: Topic, as: "topics" }],
    });
    if (!postData) {
      res.status(404).json({ message: "No post with this id" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//full blog post route
//This route posts blog contents, creates/gets topics, then creates entries in the blogposttopic table
router.post("/full", withAuth, async (req, res) => {
  try {
    const newPost = await BlogPost.create({
      post_title: req.body.post_title,
      post_text: req.body.post_text,
      user_id: req.session.user_id,
      // topics: req.body.topics,
    });

    var topics = req.body.topics.split(",");
    topics = topics.map((topic) => topic.trim());
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
        });
        returnedTopics.push(newTopic);
      } else {
        returnedTopics.push(topicExists);
      }
    }
    //returned topics is array of topic IDs
    //take id from newPost and array of topiIDs and create entries in blogposttopic table
    for (topic of returnedTopics) {
      await BlogPostTopic.create({
        blog_post_id: newPost.id,
        topic_id: topic.id,
      });
    }
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a blog post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await BlogPost.create({
      // post_topic_id: req.body.post_topic_id,
      post_title: req.body.post_title,
      post_text: req.body.post_text,
      // post_date: new Date(),
      user_id: req.session.user_id,
    });
    // if (req.body.post_topic_id.length) {
    //   const blogPostTopicIdArr = req.body.post_topic_id.map((topic_id) => {
    //     return {
    //       blog_post_id: newPost.id,
    //       topic_id,
    //     };
    //   });
    //   await BlogPostTopic.bulkCreate(blogPostTopicIdArr);
    // }
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE a blog post
router.put("/:id", withAuth, (req, res) => {
  BlogPost.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedPost) => {
      if (req.body.topicIds && req.body.topicIds.length) {
        BlogPostTopic.findAll({ where: { post_id: req.params.id } }).then(
          (blogPostTopics) => {
            const blogPostTopicIds = blogPostTopics.map(
              ({ topic_id }) => topic_id
            );
            const newBlogPostTopics = req.body.topicIds
              .filter((topic_id) => !blogPostTopicIds.includes(topic_id))
              .map((topic_id) => {
                return {
                  post_id: req.params.id,
                  topic_id,
                };
              });
            const blogPostTopicsToRemove = blogPostTopics
              .filter(({ topic_id }) => !req.body.topicIds.includes(topic_id))
              .map(({ id }) => id);

            return Promise.all([
              BlogPostTopic.destroy({ where: { id: blogPostTopicsToRemove } }),
              BlogPostTopic.bulkCreate(newBlogPostTopics),
            ]);
          }
        );
      }

      return res.json(updatedPost);
    })
    .catch((err) => {
      res.json(err);
    });
});

// // edit a previous post
// router.put("/:id", (req, res) => {
//   BlogPost.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((updatedPost) => res.json(updatedPost))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// DELETE a previous post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post with this id" });
      return;
    }

    res.status(200).json(postData);
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
