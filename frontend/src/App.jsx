import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ManagePosts from "./pages/ManagePosts";
import DrawingPage from "./pages/HandDrawing";
import NotFound from "./pages/NotFound";
import { api } from "./api/axios";
import NavbarMobile from "./components/Navbar/NavbarMobile";

function App() {
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
    <>
      <Navbar />
      <NavbarMobile
        user={user}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navigate={navigate}
        handleLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/create-post" element={<ManagePosts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/drawing" element={<DrawingPage />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
