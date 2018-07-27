const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  userName: { type: String, required: true },
  userComment: { type: String, required: true },
}, { _id: false });

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
