import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/axios";
import { useState, useEffect } from "react";
import Logov1 from "../../assets/Logov1.png";
import Logov2 from "../../assets/Logov2.png";
import Logov3 from "../../assets/Logov3.png";
import Logov4 from "../../assets/Logov4.png";
import Logov5 from "../../assets/Logov5.png";
import Logov6 from "../../assets/Logov6.png";
import NavbarCenterBtns from "./NavbarCenterBtns";
import NavbarMobile from "./NavbarMobile";
import NavbarSide from "./NavbarSide";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);

  // CHECK AUTH
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me"); // backend endpoint needed
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  // LOGOUT
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
      class="flex items-center mx-4 max-md:w-full max-md:justify-between justify-between
  border border-slate-700 bg-slate-900 px-6 py-4 rounded-full text-slate-200 text-sm"
    >
      <a href="/">
        <img src={Logov6} alt="uwu" className="max-w-35" />
      </a>

      <NavbarCenterBtns user={user} />

      <NavbarSide user={user} handleLogout={handleLogout} />

      {/* Mobile Toggle */}
      <NavbarMobile user={user} menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigate={navigate} handleLogout={handleLogout} />
    </nav>
  );
}

export default Navbar;
