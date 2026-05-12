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

          <a
            href="https://lyc-cdg-poissy.ac-versailles.fr/"
            className="group transition-transform hover:-translate-y-1"
          >
            <div className="p-2 rounded-full border border-violet-500/30
                            bg-white/5 backdrop-blur-md
                            shadow-[0_0_15px_rgba(139,92,246,0.2)]
                            group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
            >
              <a
  href="https://github.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
  className="group transition-transform hover:-translate-y-1"
>
  <div
    className="p-2 rounded-full border border-violet-500/30
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
        d="M12 2C6.48 2 2 6.58 2 12.23C2 16.74 4.87 20.56 8.84 21.91C9.34 22.01 9.52 21.69 9.52 21.41C9.52 21.16 9.51 20.33 9.5 19.23C6.73 19.85 6.14 17.87 6.14 17.87C5.68 16.68 5.03 16.36 5.03 16.36C4.12 15.72 5.1 15.73 5.1 15.73C6.1 15.8 6.63 16.79 6.63 16.79C7.52 18.36 8.97 17.91 9.54 17.65C9.63 16.99 9.89 16.54 10.17 16.29C7.95 16.03 5.62 15.14 5.62 11.18C5.62 10.05 6.01 9.13 6.65 8.41C6.55 8.15 6.2 7.11 6.75 5.72C6.75 5.72 7.59 5.44 9.5 6.77C10.29 6.55 11.15 6.44 12 6.44C12.85 6.44 13.71 6.55 14.5 6.77C16.41 5.44 17.25 5.72 17.25 5.72C17.8 7.11 17.45 8.15 17.35 8.41C17.99 9.13 18.38 10.05 18.38 11.18C18.38 15.15 16.04 16.02 13.81 16.28C14.17 16.6 14.5 17.22 14.5 18.17C14.5 19.52 14.49 20.95 14.49 21.41C14.49 21.69 14.67 22.02 15.18 21.91C19.14 20.56 22 16.74 22 12.23C22 6.58 17.52 2 12 2Z"
        stroke="#a78bfa"
        strokeWidth="1.5"
        fill="#a78bfa"
      />
    </svg>
  </div>
</a>
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