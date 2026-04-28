import React, { useState } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";
import "./auth.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await api.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">

      <div className="container">

        <div className="heading">Create Account</div>

        {error && (
          <div style={{ color: "red", fontSize: "12px", textAlign: "center" }}>
            {error}
          </div>
        )}

        <form className="form" onSubmit={handleSubmit}>

          <input
            required
            className="input"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />

          <input
            required
            className="input"
            name="email"
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
          />

          <input
            required
            className="input"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <span className="forgot-password">
            <a href="login">Already have an account ?</a>
          </span>

          <input
            className="login-button"
            type="submit"
            value={loading ? "Creating..." : "Sign Up"}
          />
        </form>

      </div>
    </div>
  );
}

export default Register;