import React, { useEffect, useState } from "react";
import { api } from "../api/axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

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
    setIndex((prev) => (prev + 1) % posts.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        No posts yet
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-6 text-white text-3xl z-10"
      >
        ◀
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-6 text-white text-3xl z-10"
      >
        ▶
      </button>

      {/* CAROUSEL */}
      <div className="relative w-[400px] h-[500px] perspective-1000">

        {posts.map((post, i) => {
          const offset = i - index;

          return (
            <div
              key={post.id}
              className="absolute w-full h-full transition-all duration-700 ease-out"
              style={{
                transform: `
                  rotateY(${offset * 50}deg)
                  translateZ(${Math.abs(offset) === 0 ? 0 : -200}px)
                  scale(${offset === 0 ? 1 : 0.8})
                `,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                zIndex: offset === 0 ? 10 : 1,
              }}
            >
              
              {/* GLASS CARD */}
              <div className="w-full h-full rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-4 flex flex-col justify-between">
                
                <img
                  src={`http://localhost:5000${post.ImageURL}`}
                  className="w-full h-[300px] object-cover rounded-xl"
                />

                <p className="text-white mt-3 text-sm opacity-90">
                  {post.caption}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <button className="text-red-400 text-xl">
                    {post.liked ? "❤️" : "🤍"}
                  </button>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default Posts;