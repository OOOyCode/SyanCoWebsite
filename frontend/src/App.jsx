import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <Navbar />

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
