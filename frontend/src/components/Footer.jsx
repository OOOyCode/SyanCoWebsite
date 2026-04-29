import React from "react";
import Logov6NoBg from "../assets/Logos/Logov6NoBg.png";

function Footer() {
  return (
    <footer
      className="relative flex flex-col items-center justify-center w-full py-10 px-4
                 bg-[#070712] text-white/70 overflow-hidden
                 border-t border-violet-500/20
                 shadow-[0_-10px_50px_rgba(139,92,246,0.15)]"
    >
      {/* glow background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_60%)]" />

      <div className="relative flex flex-col items-center z-10 max-w-2xl">

        <img
          src={Logov6NoBg}
          alt="logo"
          className="max-h-24 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
        />

        <p className="mt-5 text-center text-sm leading-relaxed text-violet-100/70">
          Merci d'avoir visité notre site ! Si vous avez des questions, des suggestions,
          n'hésitez pas à nous contacter. Nous sommes là pour vous aider et nous apprécions
          votre soutien continu.
        </p>

        <div className="flex items-center gap-5 mt-6">

          <a
            href="https://lyc-cdg-poissy.ac-versailles.fr/"
            className="group transition-transform hover:-translate-y-1"
          >
            <div className="p-2 rounded-full border border-violet-500/30
                            bg-white/5 backdrop-blur-md
                            shadow-[0_0_15px_rgba(139,92,246,0.2)]
                            group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  stroke="#a78bfa"
                  strokeOpacity=".9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>

        </div>

        {/* small glow line */}
        <div className="w-40 h-[1px] mt-6 bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

        <p className="mt-4 text-xs text-violet-300/50 tracking-wide">
          © {new Date().getFullYear()} • Kaouachi
        </p>

      </div>
    </footer>
  );
}

export default Footer;