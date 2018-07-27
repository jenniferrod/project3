const router = require("express").Router();
const entryRoutes = require("./entries");
const guestRoutes = require("./attendees");

// guestbook routes
router.use("/entries", entryRoutes);

router.use("/attendees", guestRoutes);

module.exports = router;
