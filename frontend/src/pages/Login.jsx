import React, { useState } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "./auth.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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
      await api.post("/auth/login", form);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-black">

      <div className="container">

        <div className="heading">Sign In</div>

        {error && (
          <div style={{ color: "red", fontSize: "12px", textAlign: "center" }}>
            {error}
          </div>
        )}

        {/* FORM */}
        <form className="form" onSubmit={handleSubmit}>

          <input
            required
            className="input"
            type="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
          />

          <input
            required
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <span className="forgot-password">
            <a href="#">Forgot Password ?</a>
          </span>

          <input
            className="login-button"
            type="submit"
            value={loading ? "Loading..." : "Sign In"}
          />
        </form>

        {/* SOCIAL */}
        <div className="social-account-container">

          <div className="social-accounts">

            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                try {
                  await api.post("/auth/google", {
                    credential: credentialResponse.credential,
                  });
                  navigate("/");
                } catch {
                  setError("Google login failed");
                }
              }}
              onError={() => setError("Google login failed")}
            />

          </div>
        </div>


      </div>
    </div>
  );
}

export default Login;