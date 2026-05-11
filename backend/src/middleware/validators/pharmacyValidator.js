import { body } from "express-validator";

export const createPharmacyValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must be between 3 and 50 characters")
    .escape(),
  body("address").trim().notEmpty().withMessage("Address is required").escape(),
  body("manager").trim().notEmpty().withMessage("Manager is required").escape(),
];

export const updatePharmacyValidator = [
  body("name)")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must be between 3 and 50 characters")
    .escape(),
  body("address")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Address cannot be empty")
    .escape(),
  body("manager")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Manager cannot be empty")
    .escape(),
];

//.escape() is redundant in this case because there will be React frontend which will handle escaping automatically. It is necessary e.g. in apps with SSR.
