import express from "express";
import validateNonEmptyBody from "../middleware/validateNonEmptyBody.js";
import {
  createTaskValidator,
  updateTaskValidator,
} from "../middleware/validators/taskValidator.js";
import validateRequest from "../middleware/validate.js";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTaskValidator, validateRequest, createTask);
router.patch("/:id", validateNonEmptyBody, updateTaskValidator, validateRequest, updateTask);
router.delete("/:id", deleteTask);
export default router;
