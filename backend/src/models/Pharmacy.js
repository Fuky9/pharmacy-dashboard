import mongoose from "mongoose";

// 1) Create a schema
// 2) Model based off of that schema

const pharmacySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    manager: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

const Pharmacy = mongoose.model("Pharmacy", pharmacySchema);

export default Pharmacy;
