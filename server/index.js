import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import peopleRoutes from "./routes/people.js";

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

app.use(cors());
app.use(helmet());
app.use("/people", peopleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
