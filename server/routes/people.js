import express from "express";
import { getPersonAsync } from "../controllers/people.js";

const router = express.Router();

router.get("/:id", getPersonAsync);

export default router;
