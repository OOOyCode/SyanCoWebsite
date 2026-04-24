import express from "express"
import { register, login, logout, deleteAccount, getMe } from "../controllers/auth.controller.js"
import {authMiddleware} from '../middleware/auth.middleware.js'

const router = express.Router()

import { googleLogin } from "../controllers/auth.controller.js";

router.post("/google", googleLogin);

// public
router.post('/register', register)
router.post('/login', login)

// protected
router.post('/logout', authMiddleware, logout)
router.delete('/delete', authMiddleware, deleteAccount)
router.get('/me', authMiddleware, getMe)

export default router