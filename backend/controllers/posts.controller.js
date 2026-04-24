import { prisma } from "../config/db.ts";

// CREATE POST (WITH IMAGE)
export const createPost = async (req, res) => {
  try {
    const { caption } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const imageURL = `/uploads/${req.file.filename}`;

    const post = await prisma.post.create({
      data: {
        caption,
        ImageURL: imageURL,
        authorId: req.userId,
      },
    });

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Server error     " + err.message });
  }
};

// GET ALL POSTS
export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            username: true,
          },
        },
        likes: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getMyPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: {
        authorId: req.userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
      where: { id: id },
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    if (post.authorId !== req.userId) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    await prisma.post.delete({
      where: { id: id },
    });

    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};