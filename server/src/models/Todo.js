const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isComplated: { type: Boolean, default: false },
});

todoSchema.plugin(timestamp);
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
