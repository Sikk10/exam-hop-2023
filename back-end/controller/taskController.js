const TaskModel = require("../models/taskModel");

exports.getList = async (req, res, next) => {
  try {
    const list = await TaskModel.find();
    res.status(200).json({ data: list });
  } catch {
    res.status(400).json({ message: "error" });
  }
};

exports.tasksDone = async (req, res, next) => {
  try {
    const tasksDone = await TaskModel.find({ isDone: true });
    res.status(200).json({ message: "Tasks done", data: tasksDone });
  } catch {
    res.status(400).json({ message: "error" });
  }
};

exports.addTask = async (req, res, next) => {
  try {
    const task = await TaskModel.create(req.body);
    res.status(200).json({ message: "Task added", data: task });
  } catch {
    res.status(400).json({ message: "error" });
  }
};

exports.deleteTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedTask = await TaskModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Task deleted.", data: deletedTask });
  } catch {
    res.status(400).json({ message: "error" });
  }
};

exports.updateTask = async (req, res, next) => {
  const { text, id } = req.body;
  try {
    const task = await TaskModel.findOneAndUpdate({ _id: id }, { text: text });
    res.status(200).json({ message: "Task update", data: task });
  } catch {
    res.status(400).json({ message: "error" });
  }
};

exports.checked = async (req, res, next) => {
  const { id, isDone } = req.body;
  try {
    const task = await TaskModel.findOneAndUpdate(
      { _id: id },
      { isDone: isDone }
    );
    res.status(200).json({ message: "Task update", data: task });
  } catch {
    res.status(400).json({ message: "error" });
  }
};
