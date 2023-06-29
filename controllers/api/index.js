const router = require("express").Router();

const channelRoutes = require("./channel-routes");
const postRoutes = require("./post-routes");
const userRoutes = require("./user-routes");

router.use("/channels", channelRoutes);
router.use("/posts", postRoutes);
router.use("/users", userRoutes);

module.exports = router;
