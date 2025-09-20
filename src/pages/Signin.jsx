import React, { useState } from "react";
import "../styles/Signin.css";
import { loginAgency } from "../API/api"; // import API helper
import { setAllAgencies } from "../data/Agency_Data.jsx";


function Signin({ onLogin }) {
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!role) return "Please select Army, Navy, or Airforce.";
    if (!password) return "Password is required.";
    if (password.length < 6)
      return "Password must be at least 6 characters long.";
    if (!/[A-Z]/.test(password))
      return "Password must contain at least one uppercase letter.";
    if (!/[0-9]/.test(password))
      return "Password must contain at least one number.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");

    try {
      const data = await loginAgency(role, password);
      console.log("Login successful:", data);
      
      
// After login
setAllAgencies(data.users); // 'users' contains all agencies with full populated data

      // Store JWT in localStorage for later API calls
      localStorage.setItem("token", data.token);

      alert(`Welcome ${role} officer!`);
      onLogin(data); // pass data back to parent
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">🔐 Defence Portal Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3 text-center">
            <label className="radio-label">
              <input
                type="radio"
                name="role"
                value="Army"
                checked={role === "Army"}
                onChange={(e) => setRole(e.target.value)}
              />
              Army
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="role"
                value="Navy"
                checked={role === "Navy"}
                onChange={(e) => setRole(e.target.value)}
              />
              Navy
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="role"
                value="Airforce"
                checked={role === "Airforce"}
                onChange={(e) => setRole(e.target.value)}
              />
              Airforce
            </label>
          </div>

          <div className="form-group mb-3 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control glass-input"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="rhombus-btn">
            Sign In
          </button>

          <div className="extra-links mt-3">
            <a href="/signup">Sign Up</a> |{" "}
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;