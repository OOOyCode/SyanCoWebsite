import React, { useState } from "react";
import TeamCard from "./TeamCard";

function HeroTeam() {
  const nameList = [
    {
      name: "Syan",
      role: "Frontend Developer",
      desc: "Creative developer focused on modern UI/UX experiences.",
      img: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Naïma",
      role: "UI/UX Designer",
      desc: "Designing clean and intuitive digital experiences.",
      img: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Mohamed",
      role: "Full Stack Developer",
      desc: "Building scalable backend systems and APIs.",
      img: "https://i.pravatar.cc/150?img=45",
    },
    {
      name: "Denzel",
      role: "Product Designer",
      desc: "Minimal and elegant interface enthusiast.",
      img: "https://i.pravatar.cc/150?img=8",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#050146] to-[#0b0b2e] text-white flex flex-col items-center py-16 px-6">

      <h1 className="text-4xl font-bold mb-12">Meet the Team</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {nameList.map((person, i) => (
          <TeamCard key={i} person={person} />
        ))}
      </div>

    </section>
  );
}

export default HeroTeam;