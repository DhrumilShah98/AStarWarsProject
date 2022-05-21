import express from "express";
import { getPersonAsync } from "../controllers/people.js";

// Create a new router object for handling requests.
const router = express.Router();

// Router endpoint to get a character by id. 
router.get("/:id", getPersonAsync);

// Export the router object.
export default router;
