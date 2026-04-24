import express from "express";
import {
  toggleLike,
  getLikes,
} from "../controllers/likes.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/:postId", authMiddleware, toggleLike);
router.get("/:postId", getLikes);

export default router;