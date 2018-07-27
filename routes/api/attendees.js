const router = require("express").Router();
const entryController = require("../../controllers/entryController");

// Matches with "/api/guestbook"
router
  .route("/guestbook")
  .get(entryController.findAll);

module.exports = router;
