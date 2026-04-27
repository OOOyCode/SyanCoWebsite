import { prisma } from "../config/db.ts";
import { hashPassword, comparePassword } from "../utils/auth.js";
import { generateToken } from "../utils/jwt.js";
import { OAuth2Client } from "google-auth-library";

// REGISTER
export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
      },
    });
    res.json(user);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existing = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existing) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Check password strength
    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }
    if (!/\d/.test(password)) {
      return res.status(400).json({ error: "Password must contain a number" });
    }
    if (!/[A-Z]/.test(password)) {
      return res.status(400).json({ error: "Password must contain an uppercase letter" });
    }
    if (!/[a-z]/.test(password)) {
      return res.status(400).json({ error: "Password must contain a lowercase letter" });
    }

    const hashed = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashed,
        role: "user", // default role
      },
    });

    res.json({
      id: user.id,
      email: user.email,
      username: user.username,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const valid = await comparePassword(password, user.password);
    if (!valid) {
      return res.status(400).json({ error: "Wrong password" });
    }

    // ✅ FIXED TOKEN STRUCTURE
    const token = generateToken({
      userId: user.id,
      role: user.role,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      message: user.role === "admin"
        ? "Logged in as admin"
        : "Logged in",
    });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

// LOGOUT
export const logout = (req, res) => {
  res.clearCookie("token");
  return res.json({ message: "Logged out" });
};

// DELETE ACCOUNT
export const deleteAccount = async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: req.userId },
    });

    res.clearCookie("token");
    return res.json({ message: "Account deleted" });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { email, name, picture } = payload;

    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          username: name,
          password: "", // Google users don't need password
          role: "user",
        },
      });
    }

    const token = generateToken({
      userId: user.id,
      role: user.role,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // FIXED
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ message: "Logged in with Google" });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Invalid Google token" });
  }
};
