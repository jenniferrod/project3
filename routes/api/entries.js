const router = require("express").Router();
const entryController = require("../../controllers/entryController");

// Matches with "/api/guestbook"
router.route("/")
  .get(entryController.findAll)
  .post(entryController.create);

// Matches with "/api/guestbook/:id"
router
  .route("/:id")
  .get(entryController.findById)
  .put(entryController.update)
  .delete(entryController.remove);

module.exports = router;
