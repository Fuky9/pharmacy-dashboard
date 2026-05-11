import Task from "../models/Task.js";
import Pharmacy from "../models/Pharmacy.js";
import mongoose from "mongoose";
import { matchedData } from "express-validator";

export const getTasks = async (req, res) => {
  try {
    const { pharmacy } = req.query;

    if (!pharmacy) {
      return res.status(400).json({ message: "Pharmacy ID is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(pharmacy)) {
      return res.status(400).json({ message: "Invalid pharmacy ID" });
    }

    const tasks = await Task.find({ pharmacy })
      .populate("pharmacy", "name address manager")
      .sort({ createdAt: -1 });

    return res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const data = matchedData(req, { locations: ["body"], onlyValidData: true });

    // Check if the referenced pharmacy exists
    const existingPharmacy = await Pharmacy.findById(data.pharmacy);

    if (!existingPharmacy) {
      return res.status(404).json({ message: "Referenced pharmacy not found" });
    }

    const newTask = await Task.create(data);

    return res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    const data = matchedData(req, { locations: ["body"], onlyValidData: true });

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    Object.assign(task, data);

    await task.save();

    return res.status(200).json(task);
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    return res.status(500).json({ message: error.message });
  }
};
