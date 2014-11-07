var mongoose = require("mongoose");

var noteSchema = mongoose.Schema({
  noteBody: "String",
  validBody: "String"
});

module.exports = mongoose.model("Note", noteSchema);
