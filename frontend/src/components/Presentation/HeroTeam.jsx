import React, { useEffect, useRef, useState } from "react";
import TeamCard from "./TeamCard";
import "./teamCard.css";

function HeroTeam() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const nameList = [
    {
      name: "Syan",
      role: "Chef de groupe",
      desc: "S'est occupé d'organiser les tâches, former le groupe et d'une partie de la robotique.",
      img: "",
      listing: [
        "A désigner les membres du groupe",
        "A trouver l'idée du projet",
        "S'est occupé de l'assemblage de la base du robot",
        "S'est occupé de la communication avec les professeurs",
        "Achat du matériel"
      ]
    },
    {
      name: "Naïma",
      role: "Communication",
      desc: "S'est occupée de la communication professeur / élève et dans le groupe",
      img: "",
      listing: [
        "A créé les groupes pour communiquer",
        "Nous a mis en lien avec certains professeurs et élèves",
        "S'est occupée de l'assemblage de la partie movible du robot",
        "A aidé à la séléction du matériel",
        "A jugé et corrigé le site"
      ]
    },
    {
      name: "Mohamed",
      role: "Développeur",
      desc: "S'est occupé de la partie développement des programmes.",
      img: "",
      listing: [
        "A fait les documentations / rapports",
        "A créé les logiciels / programmes",
        "S'est occupé de l'assemblage du robot",
        "S'est occupé de la création du siteWeb",
        "Achat du matériel"
      ]
    },
    {
      name: "Denzel",
      role: "Designer",
      desc: "S'est occupé d'une partie du design et de la direction artistique.",
      img: "",
      listing: [
        "A désigner les cartes du sites",
        "A trouver le design du robot",
        "S'est occupé de l'assemblage de la base du robot",
        "A participé à la mise en place des logiciels",
        "Achat du matériel"
      ]
    },
    {
      name: "Autre",
      role: "Fait d'autres trucs",
      desc: "Minimal and elegant interface enthusiast.",
      img: "",
      listing: [
        "A désigner les membres du groupe",
        "A trouver l'idée du projet",
        "S'est occupé de l'assemblage de la base du robot",
        "S'est occupé de la communication avec les professeurs",
        "Achat du matériel"
      ]
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="cracks min-h-screen bg-gradient-to-b from-[#010874]/10 to-[#01494e] backdrop-blur-sm border border-white/10 text-sm text-white flex flex-col items-center py-16 px-6"
    >
      {/* TITLE */}
      <h1
        className={`text-4xl font-bold mb-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Notre groupe
      </h1>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-8">
        {nameList.map((person, i) => (
          <div
            key={i}
            className={`transition-all duration-700 delay-[${i * 100}ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <TeamCard person={person} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroTeam;