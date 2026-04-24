import React, { useEffect, useState } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import HeroProject from "../components/Presentation/HeroProject";
import VideoRobot from "../components/Presentation/VideoRobot";

const Home = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
  }, []);

  return (
    <>
      <Hero />
      <HeroProject />
      <VideoRobot />
    </>
  );
};

export default Home;
