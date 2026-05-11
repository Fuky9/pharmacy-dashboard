import { body } from "express-validator";

export const createTaskValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Title must be between 3 to 50 characters long"),
  body("description").optional().trim(),
  body("status")
    .optional()
    .isIn(["pending", "in-progress", "done"])
    .withMessage("Invalid status value"),
  body("pharmacy")
    .notEmpty()
    .withMessage("Pharmacy is required")
    .isMongoId()
    .withMessage("Invalid pharmacy ID"),
];

export const updateTaskValidator = [
  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Title must be between 3 to 50 characters long"),
  body("description").optional().trim(),
  body("status")
    .optional()
    .isIn(["pending", "in-progress", "done"])
    .withMessage("Invalid status value"),
];
