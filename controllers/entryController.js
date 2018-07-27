const db = require("../models");

// Defining methods for the entryController
module.exports = {
  findAll: function(req, res) {
    db.Entry
      .find(req.query)
      .then(dbEntry => res.json(dbEntry))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const entry = {
      _id: req.body._id,
      userName: req.body.userName,
      userComment: req.body.userComment
    };
    db.Entry
      .create(entry)
      .then(dbEntry => res.json(dbEntry))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Entry
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbEntry => res.json(dbEntry))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Entry
      .findById({ _id: req.params.id })
      .then(dbEntry => dbEntry.remove())
      .then(dbEntry => res.json(dbEntry))
      .catch(err => res.status(422).json(err));
  }
};
