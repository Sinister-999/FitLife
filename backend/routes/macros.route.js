import express from "express";
import {createMacro, deleteMacro, updateMacro} from "../controllers/macros.controller.js";

const router = express.Router();

router.post("/macros", createMacro);
router.patch("/macros/:id", updateMacro);
router.delete("/macros/:id", deleteMacro);

export default router;