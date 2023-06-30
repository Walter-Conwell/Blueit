const router = require("express").Router();

const channelRoutes = require("./channel-routes");
const blogpostRoutes = require("./blog-post-routes");
const userRoutes = require("./user-profile-routes");
const userCredentialRoutes = require("./user-credential-routes");
const userProfileRoutes = require("./user-profile-routes");

router.use("/profiles", userProfileRoutes);
router.use("/credentials", userCredentialRoutes);
router.use("/channels", channelRoutes);
router.use("/blogposts", blogpostRoutes);
router.use("/users", userRoutes);

module.exports = router;
