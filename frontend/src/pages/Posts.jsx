import React, { useEffect, useState } from "react";
import { api } from "../api/axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get("/post");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const next = () => {
    if (!posts.length) return;
    setIndex((prev) => (prev + 1) % posts.length);
  };

  const prev = () => {
    if (!posts.length) return;
    setIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#070712] text-violet-200">
        Loading...
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#070712] text-violet-200">
        No posts yet
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070712] flex flex-col items-center justify-center overflow-hidden relative px-4">

      {/* CAROUSEL */}
      <div className="relative w-full max-w-sm sm:max-w-md md:w-[420px] h-[520px] perspective-[1200px]">

        {posts.map((post, i) => {
          const offset = i - index;

          return (
            <div
              key={post.id}
              className="absolute w-full h-full transition-all duration-700 ease-out"
              style={{
                transform: `
                  rotateY(${offset * 45}deg)
                  translateZ(${Math.abs(offset) === 0 ? 0 : -220}px)
                  scale(${offset === 0 ? 1 : 0.82})
                `,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                zIndex: offset === 0 ? 10 : 1,
              }}
            >
              {/* CARD */}
              <div className="w-full h-full rounded-2xl
                              bg-[#0c0c18]/80 backdrop-blur-xl
                              border border-violet-500/20
                              shadow-[0_0_30px_rgba(139,92,246,0.15)]
                              p-4 flex flex-col justify-between">

                <img
                  src={`${BASE_URL}${post.ImageURL}`}
                  className="w-full h-[300px] object-cover rounded-xl
                             border border-violet-500/10"
                />

                <p className="text-violet-100 mt-3 text-sm opacity-90">
                  {post.caption}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <button className="text-2xl hover:scale-110 transition">
                    {post.liked ? "❤️" : "🤍"}
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* NAVIGATION ARROWS (BOTTOM FIXED STYLE) */}
      <div className="flex items-center gap-10 mt-6">

        <button
          onClick={prev}
          className="px-4 py-2 rounded-full
                     bg-violet-600/20 border border-violet-400/30
                     text-violet-200
                     shadow-[0_0_15px_rgba(139,92,246,0.2)]
                     hover:scale-110 transition"
        >
          ◀ Prev
        </button>

        <button
          onClick={next}
          className="px-4 py-2 rounded-full
                     bg-cyan-600/20 border border-cyan-400/30
                     text-cyan-200
                     shadow-[0_0_15px_rgba(34,211,238,0.2)]
                     hover:scale-110 transition"
        >
          Next ▶
        </button>

      </div>

    </div>
  );
}

export default Posts;
