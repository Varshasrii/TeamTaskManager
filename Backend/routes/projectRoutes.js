const express = require("express");

const router = express.Router();

const Project = require("../models/Project");
const authMiddleware = require("../middleware/authMiddleware");
router.post("/create", authMiddleware, async (req, res) => {

  try {

    const { title, description } = req.body;

    const project = await Project.create({
      title,
      description
    });

    res.status(201).json({
      message: "Project created successfully",
      project
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

router.get("/", authMiddleware, async (req, res) => {

  try {

    const projects = await Project.find();

    res.json(projects);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});
router.delete("/:id", authMiddleware, async (req, res) => {

  try {

    await Project.findByIdAndDelete(req.params.id);

    res.json({
      message: "Project deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});
module.exports = router;