const { Topic } = require("../models");

const topicData = [
  {
    id: 1,
    topic_name: "JavaScript",
  },
  {
    id: 2,
    topic_name: "HTML",
  },
  {
    id: 3,
    topic_name: "CSS",
  },
  {
    id: 4,
    topic_name: "Node.js",
  },
  {
    id: 5,
    topic_name: "Express.js",
  },
];

const seedTopic = () => Topic.bulkCreate(topicData);

module.exports = seedTopic;
