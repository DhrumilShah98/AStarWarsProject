import express from "express";
import { getPerson } from "../controllers/people.js";

const router = express.Router();

router.get("/:id", getPerson);

export default router;
