import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import peopleRoutes from "./routes/people.js";

const app = express();
dotenv.config();

app.use("/people", peopleRoutes);
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
