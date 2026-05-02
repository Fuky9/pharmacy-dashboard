import Pharmacy from "../models/Pharmacy.js";

export const getAllPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find().sort({ name: 1 }); // A-Z
   return res.status(200).json(pharmacies);
  } catch (error) {
    console.error("Error fetching pharmacies:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const getOnePharmacy = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findById(req.params.id);

    if (!pharmacy) {
      return res.status(404).json({ message: "Pharmacy not found" });
    }
    return res.status(200).json(pharmacy);
  } catch (error) {
    console.error("Error fetching pharmacy:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const createPharmacy = async (req, res) => {
  try {
    const { name, address, manager } = req.body;
    const newPharmacy = await Pharmacy.create({ name, address, manager });

    return res.status(201).json(newPharmacy);
  } catch (error) {
    console.error("Error creating pharmacy:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const updatePharmacy = async (req, res) => {
  try {
    const updatedPharmacy = await Pharmacy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!updatedPharmacy) {
      return res.status(404).json({ message: "Pharmacy not found" });
    }
    return res.status(200).json(updatedPharmacy);
  } catch (error) {
    console.error("Error updating pharmacy:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const deletePharmacy = async (req, res) => {
  try {
    const deletedPharmacy = await Pharmacy.findByIdAndDelete(req.params.id);

    if (!deletedPharmacy) {
      return res.status(404).json({ message: "Pharmacy not found" });
    }

    return res.status(200).json({ message: "Pharmacy deleted successfully" });
  } catch (error) {
    console.error("Error deleting pharmacy:", error);
    return res.status(500).json({ message: error.message });
  }
};
