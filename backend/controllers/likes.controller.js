import { prisma } from "../config/db.ts";

// TOGGLE LIKE (like/unlike)
export const toggleLike = async (req, res) => {
  try {
    const { postId } = req.params;

    const existingLike = await prisma.like.findUnique({
      where: {
        userId_postId: {
          userId: req.userId,
          postId,
        },
      },
    });

    // IF LIKE EXISTS → UNLIKE
    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });

      return res.json({ message: "Unliked" });
    }

    // OTHERWISE → LIKE
    await prisma.like.create({
      data: {
        userId: req.userId,
        postId,
      },
    });

    res.json({ message: "Liked" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET LIKE COUNT
export const getLikes = async (req, res) => {
  try {
    const { postId } = req.params;

    const count = await prisma.like.count({
      where: { postId },
    });

    res.json({ likes: count });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};