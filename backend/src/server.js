import express from "express";
import dotenv from "dotenv";
import pharmacyRoutes from "./routes/pharmacyRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// Logging middleware for practice
const loggerMiddleware = (req, res, next) => {
  res.on("finish", () => {
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.url} ${res.statusCode}`);
  });

  next();
};

app.use(loggerMiddleware);

app.use("/api/pharmacies", pharmacyRoutes);

// Connect to the database and then start the server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

startServer();
