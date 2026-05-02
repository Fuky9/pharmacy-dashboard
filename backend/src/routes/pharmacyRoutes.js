import express from "express";
import {
  getAllPharmacies,
  createPharmacy,
  updatePharmacy,
  deletePharmacy,
  getOnePharmacy,
} from "../controllers/pharmacyController.js";

import {
  createPharmacyValidator,
  updatePharmacyValidator,
} from "../middleware/validators/pharmacyValidator.js";

import validateRequest from "../middleware/validate.js";
import validateNonEmptyBody from "../middleware/validateNonEmptyBody.js";

const router = express.Router();

router.get("/", getAllPharmacies);
router.get("/:id", getOnePharmacy);
router.post("/", createPharmacyValidator, validateRequest, createPharmacy);
router.patch(
  "/:id",
  validateNonEmptyBody,
  updatePharmacyValidator,
  validateRequest,
  updatePharmacy,
);
router.delete("/:id", deletePharmacy);

export default router;
