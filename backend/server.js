import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import { prisma } from './config/db.ts'
import contactRoutes from "./routes/contact.routes.js";

import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/users.routes.js'
import likeRoutes from './routes/likes.routes.js'
import postRoutes from './routes/posts.routes.js'

dotenv.config()

const app = express()
app.use((req, res, next) => {
  res.removeHeader("Cross-Origin-Opener-Policy");
  res.removeHeader("Cross-Origin-Embedder-Policy");
  next();
});
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://frontend-ekou.onrender.com"
  ],
  credentials: true
}));

app.use(cookieParser())
app.use(express.json())

app.use('/uploads', express.static('uploads'))

app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/like', likeRoutes)
app.use('/post', postRoutes)

app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
