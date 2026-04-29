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
    <div
      className="min-h-screen bg-[#070710] text-white p-6 grid md:grid-cols-2 gap-6
                  bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_60%)]"
    >
      {/* CREATE POST */}
      <form
        onSubmit={handleSubmit}
        className="relative bg-[#0c0c18]/80 backdrop-blur-xl p-6 rounded-2xl space-y-4 h-fit
                 border border-violet-500/20 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
      >
        <h2 className="text-xl font-bold text-center tracking-wider text-violet-300">
          CREATE POST
        </h2>

        {error && (
          <div
            className="bg-red-500/10 border border-red-500/40 text-red-300 p-2 rounded text-sm
                        shadow-[0_0_10px_rgba(239,68,68,0.3)]"
          >
            {error}
          </div>
        )}

        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full p-3 rounded-lg bg-black/40 border border-violet-500/20
                   focus:border-violet-400 outline-none
                   shadow-inner shadow-black text-white"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="text-sm text-violet-200"
        />

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full h-40 object-cover rounded-lg border border-violet-500/20
                     shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg font-semibold tracking-wide
                   bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600
                   hover:scale-[1.02] transition
                   shadow-[0_0_20px_rgba(168,85,247,0.4)]"
        >
          {loading ? "Posting..." : "CREATE POST"}
        </button>
      </form>

      {/* POSTS LIST */}
      <div
        className="bg-[#0c0c18]/80 backdrop-blur-xl p-6 rounded-2xl
                    border border-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
      >
        <h2 className="text-xl font-bold mb-4 tracking-wider text-cyan-300">
          MY POSTS
        </h2>

        {loadingPosts ? (
          <p className="text-gray-400">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-gray-500">No posts yet</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="relative bg-black/30 p-3 rounded-xl space-y-2
                         border border-violet-500/10
                         hover:border-violet-400/30 transition
                         shadow-[0_0_15px_rgba(139,92,246,0.1)]"
              >
                {/* IMAGE */}
                {post.ImageURL && (
                  <img
                    src={`${BASE_URL}${post.ImageURL}`}
                    className="w-full h-40 object-cover rounded-lg
                             border border-violet-500/10"
                  />
                )}

                {/* CAPTION */}
                <p className="text-sm text-gray-200">{post.caption}</p>

                {/* DELETE */}
                <button
                  onClick={() => deletePost(post.id)}
                  className="px-3 py-1 text-xs rounded-md
                           bg-gradient-to-r from-red-600 to-rose-700
                           hover:scale-105 transition
                           shadow-[0_0_10px_rgba(239,68,68,0.3)]"
                >
                  DELETE
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
