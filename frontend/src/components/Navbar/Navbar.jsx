import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/axios";
import { useState, useEffect } from "react";
import Logov6 from "../../assets/Logos/Logov6NoBg.png";
import NavbarCenterBtns from "./NavbarCenterBtns";
import NavbarMobile from "./NavbarMobile";
import NavbarSide from "./NavbarSide";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav
      class="flex items-center mx-4 my-1 max-md:w-full max-md:justify-between justify-between
       px-6 py-1 rounded-3xl text-white bg-[#00A63E]/0 backdrop-blur-sm border border-white/10 text-sm navbar"
    >
      <a href="/">
        <img src={Logov6} alt="image not loaded" className="max-w-35" />
      </a>

      <NavbarCenterBtns user={user} />

      <NavbarSide user={user} handleLogout={handleLogout} />

      <NavbarMobile
        user={user}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navigate={navigate}
        handleLogout={handleLogout}
      />
    </nav>
  );
}

export default Navbar;
