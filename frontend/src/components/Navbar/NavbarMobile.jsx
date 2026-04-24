import React from "react";

function NavbarMobile({ user, menuOpen, setMenuOpen, navigate, handleLogout }) {
  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-slate-300"
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

      {!user ? (
        <div
          className={`
  fixed top-24 left-1/2 -translate-x-1/2
  w-[90%] md:w-1/2
  h-auto

  z-[9999]

  bg-slate-900/40 backdrop-blur-2xl
  border border-white/10
  shadow-2xl

  rounded-2xl

  flex flex-col items-center gap-4 py-6 text-slate-200

  transition-all duration-300 ease-in-out

  md:hidden

  ${
    menuOpen
      ? "opacity-100 translate-y-0 visible"
      : "opacity-0 translate-y-5 invisible pointer-events-none"
  }
`}
        >
          <a className="hover:text-white transition" href="/posts">
            Posts
          </a>
          <a className="hover:text-white transition" href="/contact">
            Contact
          </a>
          <a className="hover:text-white transition" href="#">
            Docs
          </a>

          <button
            onClick={() => navigate("/register")}
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Sign Up
          </button>

          <button
            onClick={() => navigate("/login")}
            className="bg-slate-100 text-black hover:bg-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Sign In
          </button>
        </div>
      ) : (
        <div
          className={`
    absolute top-24 left-0 w-full
    bg-slate-900/90 backdrop-blur-xl
    border-t border-slate-800
    flex flex-col items-center gap-4 py-6 text-slate-300
    transition-all duration-300 ease-in-out
    md:hidden
    ${menuOpen ? "opacity-100 translate-x-0 visible" : "opacity-0 translate-x-50 invisible pointer-events-none"}
  `}
        >
          <a className="hover:text-white transition" href="/posts">
            Posts
          </a>
          <a className="hover:text-white transition" href="/create-post">
            Create Posts
          </a>
          <a className="hover:text-white transition" href="/contact">
            Contact
          </a>
          <div className="hover:text-white transition" href="#">
            Docs
          </div>

          <button
            onClick={async () => {
              await handleLogout();
              navigate("/");
            }}
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Logout
          </button>

          <button
            onClick={() => navigate("/drawing")}
            className="bg-slate-100 text-black hover:bg-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Drawing
          </button>
        </div>
      )}
    </>
  );
}

export default NavbarMobile;
