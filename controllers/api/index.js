const router = require("express").Router();

const topicRoutes = require("./topic-routes");
const blogpostRoutes = require("./blog-post-routes");
const userRoutes = require("./user-profile-routes");
const userCredentialRoutes = require("./user-credential-routes");
const userProfileRoutes = require("./user-profile-routes");

router.use("/profiles", userProfileRoutes);
router.use("/credentials", userCredentialRoutes);
router.use("/topics", topicRoutes);
router.use("/blogposts", blogpostRoutes);
router.use("/users", userRoutes);

module.exports = router;
