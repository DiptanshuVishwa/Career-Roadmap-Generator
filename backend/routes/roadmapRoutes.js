import express from "express"
import {generateRoadmap, getAllRoadmaps, deleteRoadmap} from "../controllers/roadmapController.js";

const router = express.Router();
router.post("/generate" , generateRoadmap);
router.get("/", getAllRoadmaps);
router.delete("/:id", deleteRoadmap);

export default router;