import React, { useState } from "react";

function HeroImages() {
  const [hovered, setHovered] = useState(null);

  const users = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
  ];

  const getScale = (index) => {
    if (hovered === null) return "scale-100";

    const distance = Math.abs(hovered - index);

    if (distance === 0)
      return "scale-125 z-50 shadow-xl ring-2 ring-white/60";
    if (distance === 1) return "scale-110";
    if (distance === 2) return "scale-95 opacity-90";
    return "scale-90 opacity-70";
  };

  return (
    <div className="flex items-center mt-8 mx-auto lg:mx-0">
      <div className="flex -space-x-3 pr-3 items-center">

        {users.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`user${i}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`
              size-8 object-cover rounded-full border-2 border-white
              transition-all duration-300 ease-out
              hover:-translate-y-0.5
              hover:brightness-110
              animate-fadeIn

              ${getScale(i)}
            `}
            style={{
              zIndex: hovered === i ? 50 : 10 + i,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroImages;