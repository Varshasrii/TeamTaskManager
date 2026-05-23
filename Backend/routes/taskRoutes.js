const express = require("express");

const router = express.Router();

const Task = require("../models/Task");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/create", authMiddleware, async (req, res) => {

  try {

    const { title, description, project } = req.body;

    const task = await Task.create({
      title,
      description,
      project
    });

    res.status(201).json({
      message: "Task created successfully",
      task
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

router.get("/", authMiddleware, async (req, res) => {

  try {

    const tasks = await Task.find()
      .populate("project");

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});
router.delete("/:id", authMiddleware, async (req, res) => {

  try {

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Task updated successfully",
      task: updatedTask
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});
module.exports = router;