import express from "express";
import {
  createGuide,
  deleteGuide,
  getGuide,
  getGuides,
  updateGuide,
} from "../controllers/guide.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createGuide);

//UPDATE
router.put("/:id", verifyAdmin, updateGuide);
//DELETE
router.delete("/:id", verifyAdmin, deleteGuide);
//GET

router.get("/find/:id", getGuide);
//GET ALL

router.get("/", getGuides);

export default router;
