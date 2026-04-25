import express from "express";
import dotenv from "dotenv";
import pharmacyRoutes from "./routes/pharmacyRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

app.use("/api", pharmacyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
