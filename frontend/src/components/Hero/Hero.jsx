import React from "react";
import "../../index.css";
import Titre from "../../assets/Titre.png"
import HeroImages from "./HeroImages";
import HeroButtons from "./HeroButtons";
import "./hero.css"

// bg-gradient-to-b from-black to-[#3B006E]
function Hero() {
  return (
    <section className="flex flex-col items-center  text-white px-4 pb-10">
      <HeroImages />

      <h1 className="text-[42px]/1 font-semibold text-center max-w-[840px] mt-4 bg-gradient-to-r from-white to-[#00529f] text-transparent bg-clip-text ">
        <span className="text-[62px]/24 " >LE <span className="syan bg-gradient-to-r from-white to-[#7686e1]  text-transparent bg-clip-text"><span className="s">S</span>yan</span><span>Inator.</span></span> <br />
        <span className="text-[12px]/11 bg-gradient-to-r from-[#a3bff0] to-[#e176dd]  text-transparent bg-clip-text sub"><span>Informatique</span> - <span>Ingénierie</span> - <span>Robotique</span></span> <br />
        <span className="text-[32px]/13 subsub">Pour tous les tableaux.</span>
      </h1>
      <p className="text-gray-200 text-sm max-md:px-2 text-center max-w-sm mt-3 animate-fadeIn">
        Découvrez le robot qui réinvente le dessin sur tableau.
      </p>

      <div className="mt-8 flex items-center justify-center bg-white h-20 rounded-md w-full max-w-md
shadow-lg shadow-[#3c0056]">
        <svg viewBox="0 0 500 100" className="w-full h-full">
          <defs>
            <linearGradient id="gradStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>

          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="line"
          >
            PROJET OLYMPIADE SI
          </text>
        </svg>
      </div>

      <p className="text-gray-500 mt-4 text-sm animate-fadeIn">
        <i>Fait par le lycée Charles de Gaulles, Poissy</i>
      </p>

      <HeroButtons />
    </section>
  );
}

export default Hero;
