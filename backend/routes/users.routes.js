import { getUsers, getUserById } from "../controllers/users.controller.js"
import { isAdmin } from "../middleware/auth.middleware.js"
import express from "express"

const router = express.Router()

router.get('/users', isAdmin, getUsers)
router.get('/user/:id', isAdmin, getUserById)

export default router