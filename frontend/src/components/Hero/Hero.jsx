import React from "react";
import "../../index.css";
import HeroImages from "./HeroImages";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <section className="flex flex-col items-center bg-gradient-to-b from-black to-[#3B006E] text-white px-4 pb-10">
      <HeroImages />

      <h1 className="text-[42px]/13 md:text-6xl/19 font-semibold text-center max-w-[840px] mt-4 bg-gradient-to-r from-white to-[#5D009F] text-transparent bg-clip-text">
        Le SyanInator. Pour tous les tableaux.
      </h1>
      <p className="text-gray-200 text-sm max-md:px-2 text-center max-w-sm mt-3">
        Découvrez le robot qui réinvente le dessin sur tableau.
      </p>

      {/* Ecriture ici */}
      <div className="mt-8 flex items-center justify-center bg-white h-20 rounded-md w-full max-w-md">
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

      <p className="text-gray-500 mt-4 text-sm">
        <i>Fait par le lycée Charles de Gaulles, Poissy</i>
      </p>

      <HeroButtons />
    </section>
  );
}

export default Hero;
