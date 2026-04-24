import jwt from "jsonwebtoken";

// AUTH CHECK
export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.userId;
    req.userRole = decoded.role;

    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// ADMIN CHECK
export const isAdmin = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.userId;
    req.userRole = decoded.role;

    if (req.userRole !== "admin") {
      return res.status(403).json({ error: "Forbidden" });
    }

    next(); // ONLY ON SUCCESS
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};