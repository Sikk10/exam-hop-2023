const express = require("express");
const router = express.Router();

const {
  getList,
  tasksDone,
  addTask,
  deleteTask,
  updateTask,
  checked,
} = require("../controller/taskController");

router
  .get("/list", getList)
  .get("/count", tasksDone)
  .post("/add", addTask)
  .delete("/delete/:id", deleteTask)
  .patch("/update", updateTask)
  .patch("/checked", checked);
module.exports = router;
