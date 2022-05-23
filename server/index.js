import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import peopleRoutes from "./routes/people.js";

// Initialize this project as an Express application.
const app = express();

// Configure the dotenv package to use the .env file into the process.env.
dotenv.config();

// Initialize cors, to enable all CORS requests. 
app.use(cors());

// Initialize helmet and set it as a middleware to secure this Express application.
app.use(helmet());

// Incoming requests for <base_url>/people/<end_point> are routed here.
app.use("/people", peopleRoutes);

// Hello message route.
app.use("/", (req, res) => {
  res.status(200).json({
    message: "Hello from the Star Wars backend.",
    hint: "Try <base_url>/people/id",
  });
});

// PORT on which this Express application runs. If not available, run this application on PORT 5000.
const PORT = process.env.PORT || 5000;

// Starts this server and listen for incoming requests on PORT.
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
