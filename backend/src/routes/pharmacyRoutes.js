import express from "express";
import { getPharmacies } from "../controllers/pharmacyController.js";

const router = express.Router();

// Example route for fetching pharmacy data
router.get("/pharmacies", getPharmacies);

export default router;
