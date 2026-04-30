export const getPharmacies = (req, res) => {
  res.status(200).json([{ id: 1, name: "Olomouc" }, { name: "Brno" }]);
};
