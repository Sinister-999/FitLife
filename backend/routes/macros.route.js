import express from "express";
import {createMacro, deleteMacro, updateMacro} from "../controllers/macros.controller.js";

const router = express.Router();

router.post(createMacro);
router.patch(updateMacro);
router.delete(deleteMacro);

export default router;