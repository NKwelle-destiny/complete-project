import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("isSignedIn", "true");
      navigate("/home");
    } else {
      alert("invalid login");
    }
  };
  return (
    <div className="App">
      <div className="container23">
        <div className="sec3">
          <h1 className="welcome1">WELCOME</h1>
          <p className="P-tage">LOGIN PLEASE</p>
          <div className="inputse">
            <input
              className="inputi"
              type="email"
              required
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id=""
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              id="password"
              className="inputi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="continue1">
            <button type="sumit" className="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
