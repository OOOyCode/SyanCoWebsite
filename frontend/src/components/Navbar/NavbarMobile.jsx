import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function NavbarMobile({ user, menuOpen, setMenuOpen, navigate, handleLogout }) {
  return (
    <div className="fixed top-2 left-10/12 w-full z-[999999]">

      {/* HAMBURGER */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-violet-200 p-3"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* MENU */}
      <div
        className={`
          fixed top-20 left-1/2 -translate-x-1/2
          w-[92%] max-w-md

          flex flex-col items-center gap-4 py-6

          rounded-2xl
          bg-[#0b0b14]/90 backdrop-blur-2xl
          border border-violet-500/20
          shadow-[0_0_40px_rgba(139,92,246,0.2)]

          transition-all duration-300 ease-in-out

          ${menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >

        {/* ALWAYS VISIBLE LINKS */}
        <a className="text-violet-200 hover:text-white" href="/posts">
          Posts
        </a>

        <a className="text-violet-200 hover:text-white" href="/contact">
          Contact
        </a>


        {!user ? (
          <>
            {/* NOT LOGGED IN */}
            <button
              onClick={() => navigate("/register")}
              className="px-4 py-2 rounded-full
                         bg-gradient-to-r from-violet-600 to-fuchsia-600
                         text-white"
            >
              Sign In
            </button>

            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 rounded-full bg-white text-black"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            {/* LOGGED IN */}
            <a
              className="text-violet-200 hover:text-white"
              href="/create-post"
            >
              Create Post
            </a>

            <a
              className="text-violet-200 hover:text-white px-4 py-2 rounded-full
                         bg-gradient-to-r from-violet-600 to-fuchsia-600
                         text-white"
              href="/drawing"
            >
              Drawing
            </a>

            <button
              onClick={async () => {
                await handleLogout();
                navigate("/");
              }}
              className="px-4 py-2 rounded-full border border-violet-500/40 text-violet-200"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default NavbarMobile;
