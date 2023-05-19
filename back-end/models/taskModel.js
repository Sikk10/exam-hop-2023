const { model, Schema } = require("mongoose");

const TaskScheme = new Schema({
  text: String,
  isDone: { type: Boolean, default: false },
  createdDate: { type: Date, default: Date.now },
});

const TaskModel = model("Task", TaskScheme);

module.exports = TaskModel;
