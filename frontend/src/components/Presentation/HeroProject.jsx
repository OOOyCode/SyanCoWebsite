import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Robot from "../../assets/robot.png";

function HeroProject() {
  const [text, setText] = useState("");
  const fullText = "Voici notre robot ainsi que ses fonctionnalités.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const features = [
    "Une IA capable de se repérer dans l’espace",
    "Vitesse moyenne optimisée",
    "Facile d’utilisation et sécurisé",
  ];

  const specs = [
    "Calcul automatique des positions",
    "Suivi de trajectoires avancé",
    "Création de dessins autonomes",
    "Interface écran intégrée",
    "Modes et outils personnalisables",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex flex-col md:flex-row gap-14 items-start justify-between max-w-7xl mx-auto px-4 p-10 
      bg-gradient-to-b from-white to-[#01494e]/10 backdrop-blur-sm border border-white/10 text-sm text-gray-800 overflow-hidden"
    >

      {/* ✨ LIGHT GLOW BACKGROUND EFFECT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
      </div>

      {/* LEFT */}
      <div className="relative max-w-sm z-10">

        <p className="mt-4 text-sm/6 text-gray-500">
          {text}
        </p>

        {/* ROBOT (3D HOVER) */}
        <motion.img
          src={Robot}
          alt="robot"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="mt-6 transition-transform drop-shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
        />

        {/* FEATURES */}
        <div className="mt-8 space-y-4">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition"
            >
              <div className="p-2 rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-md">
                ⚙
              </div>
              <p className="text-sm">{item}</p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-wrap items-end justify-center gap-10 w-full"
      >

        {/* CARD */}
        <div className="group w-full max-w-85 rounded-2xl p-6 pb-10 
        bg-white/80 backdrop-blur-xl border border-white/30
        shadow-[0_10px_50px_rgba(0,0,0,0.15)]
        hover:shadow-[0_20px_80px_rgba(0,255,255,0.15)]
        transition duration-500
        hover:-translate-y-2 hover:rotate-[0.5deg]">

          {/* HEADER */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Plan</h3>
            <p className="text-gray-500">
              Parfait pour de petits usages simples
            </p>

            <p className="mt-4 text-2xl font-semibold">
              Fait en 3 <span className="text-sm font-normal text-gray-500">semaines</span>
            </p>
          </div>

          {/* LIST */}
          <div className="mt-6 flex flex-col">

            {specs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 border-b py-3 border-gray-200/70
                hover:bg-gradient-to-r hover:from-cyan-50 hover:to-indigo-50
                transition rounded-md px-2"
              >
                <div className="rounded-full p-1 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-xs shadow-md">
                  ✓
                </div>
                {item}
              </motion.div>
            ))}

          </div>
        </div>

      </motion.div>
    </motion.section>
  );
}

export default HeroProject;