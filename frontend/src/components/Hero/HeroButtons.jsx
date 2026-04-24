import React, { useEffect, useRef, useState } from "react";
import RobotImage from "../../assets/robot.png";
import CodeImage from "../../assets/code.png";
import UxImage from "../../assets/ux.png";

function HeroButtons() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
        else {
            setVisible(false);
        }
      },
      {
        threshold: 0.2, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const cardBase =
    "bg-linear-to-b from-[#2A0150] to-[#090025] border border-violet-900 rounded-lg p-6 space-y-4 transition duration-700 hover:-translate-y-1";

  const hidden =
    "opacity-0 translate-y-10 blur-sm transition-all duration-700";
  const shown = "opacity-100 translate-y-0 blur-0";

  return (
    <div
      ref={sectionRef}
      className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-0 mt-14"
    >
      {/* CARD 1 */}
      <div className={`${cardBase} ${visible ? shown : hidden}`}>
        <div className="flex items-start justify-between">
          <img
            className="w-12 h-12 bg-white p-1.5 rounded-2xl"
            src={RobotImage}
            alt="Robotique"
          />
          <button className="bg-purple-950 text-xs text-slate-50 rounded-full px-4 py-2">
            1ère fois
          </button>
        </div>
        <p className="text-lg text-gray-50">Robotique</p>
        <p className="text-sm text-gray-200">
          Notre premier travail de robotique, découvrez nos projets et réalisations.
        </p>
      </div>

      {/* CARD 2 */}
      <div className={`${cardBase} ${visible ? shown : hidden}`}>
        <img
          className="w-12 h-12 bg-white p-1.5 rounded-2xl"
          src={CodeImage}
          alt="Programmation"
        />
        <p className="text-lg text-gray-50">Programmation</p>
        <p className="text-sm text-gray-200">
          OpenCV, robot, et développement logiciel.
        </p>
      </div>

      {/* CARD 3 */}
      <div className={`${cardBase} ${visible ? shown : hidden}`}>
        <img
          className="w-12 h-12 bg-white p-1.5 rounded-2xl"
          src={UxImage}
          alt="Web Dev"
        />
        <p className="text-lg text-gray-50">Web Dev</p>
        <p className="text-sm text-gray-200">
          Site web du projet et interface utilisateur.
        </p>
      </div>
    </div>
  );
}

export default HeroButtons;