import React from 'react'
import { useNavigate } from 'react-router-dom';

function NavbarSide({user, handleLogout}) {
    const navigate = useNavigate();
  return (
    <>
      {user ? (
        <div class="hidden ml-14 md:flex items-center gap-4">
          <button
            onClick={() => {
              (navigate("/register"), handleLogout());
            }}
            class="border border-slate-600 hover:bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Logout
          </button>

          <button
            onClick={() => navigate("/drawing")}
            class="bg-slate-100 text-black hover:bg-white hover:shadow-[0px_0px_25px_6px_rgba(255,255,255,0.4)] px-4 py-2 rounded-full text-sm font-medium transition duration-300"
          >
            Drawing
          </button>
        </div>
      ) : (
        <div class="hidden ml-14 md:flex items-center gap-4">
          <button
            onClick={() => navigate("/register")}
            class="border border-slate-600 hover:bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Sign Up
          </button>

          <button
            onClick={() => navigate("/login")}
            class="bg-slate-100 text-black hover:bg-white hover:shadow-[0px_0px_25px_6px_rgba(255,255,255,0.4)] px-4 py-2 rounded-full text-sm font-medium transition duration-300"
          >
            Sign In
          </button>
        </div>
      )}
    </>
  )
}

export default NavbarSide
