import React, { useEffect, useState } from "react";
import { api } from "../api/axios";

function ManagePosts() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [error, setError] = useState("");

  const BASE_URL = import.meta.env.VITE_API_URL;

  const fetchPosts = async () => {
    try {
      const res = await api.get("/post/my");
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingPosts(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      await api.delete(`/post/delete/${id}`);
      await fetchPosts(); // refresh list
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("caption", caption);
      formData.append("image", image);

      await api.post("/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setCaption("");
      setImage(null);
      setPreview(null);

      await fetchPosts();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 grid md:grid-cols-2 gap-6">

      {/* CREATE POST */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-xl space-y-4 h-fit"
      >
        <h2 className="text-xl font-bold text-center">Create Post</h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 p-2 rounded text-sm">
            {error}
          </div>
        )}

        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700"
        />

        <input type="file" accept="image/*" onChange={handleImageChange} />

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full h-40 object-cover rounded"
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded font-semibold"
        >
          {loading ? "Posting..." : "Create Post"}
        </button>
      </form>

      {/* POSTS LIST */}
      <div className="bg-gray-900 p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4">My Posts</h2>

        {loadingPosts ? (
          <p>Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-gray-400">No posts yet</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-800 p-3 rounded space-y-2"
              >

                {/* IMAGE */}
                {post.ImageURL && (
                  <img
                    src={`${BASE_URL}${post.ImageURL}`}
                    className="w-full h-40 object-cover rounded"
                  />
                )}

                {/* CAPTION */}
                <p>{post.caption}</p>

                {/* DELETE */}
                <button
                  onClick={() => deletePost(post.id)}
                  className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-sm"
                >
                  Delete
                </button>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ManagePosts;
