import express from "express";
import {
  createPackage,
  deletePackage,
  getPackage,
  getPackages,
  updatePackage,
} from "../controllers/package.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/", verifyAdmin, createPackage);

//UPDATE
router.put("/:id", verifyAdmin, updatePackage);

//DELETE
router.delete("/:id", verifyAdmin, deletePackage);

//GET
router.get("/:id", getPackage);

//GET ALL
router.get("/", getPackages);

export default router;
