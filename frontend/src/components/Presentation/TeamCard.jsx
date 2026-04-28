import React, { useRef, useState } from "react";

const TeamCard = ({ person }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-80 h-[420px] rounded-2xl p-[1px] bg-white/10 backdrop-blur-xl overflow-hidden shadow-xl cursor-pointer transition-transform hover:scale-[1.02]"
    >
      {/* spotlight */}
      {visible && (
        <div
          className="pointer-events-none blur-2xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 opacity-70 transition-opacity duration-300"
          style={{
            top: position.y - 120,
            left: position.x - 120,
          }}
        />
      )}

      {/* content */}
      <div className="relative z-10 bg-[#0b0b2e] text-white p-6 h-full w-full rounded-2xl flex flex-col items-center text-center">

        <img
          src={person.img}
          alt={person.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-white/20 shadow-lg mb-4"
        />

        <h2 className="text-2xl font-bold">{person.name}</h2>
        <p className="text-indigo-400 text-sm font-medium mb-3">
          {person.role}
        </p>

        <p className="text-sm text-white/70 mb-6 px-2">
          {person.desc}
        </p>

        {/* social */}
        <div className="flex gap-4 text-indigo-300">
          <a className="hover:-translate-y-1 transition">GitHub</a>
          <a className="hover:-translate-y-1 transition">LinkedIn</a>
          <a className="hover:-translate-y-1 transition">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;