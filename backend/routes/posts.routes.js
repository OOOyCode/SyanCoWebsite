import express from "express";
import {
  createPost,
  getPosts,
  getMyPosts,
  deletePost,
} from "../controllers/posts.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

router.get("/", getPosts);
router.delete("/delete/:id", authMiddleware, deletePost);

router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  createPost
);

router.get("/my", authMiddleware, getMyPosts);

export default router;