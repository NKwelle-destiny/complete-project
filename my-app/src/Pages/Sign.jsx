import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sign.css";
function Sign() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      alert("invalid login");
    }
  };

  return (
    <div className="App">
      <div className="all">
        <div className="Section2">
          <h1 className="welcome">WELCOME</h1>
          <p className="P-tag">Continue with one of the following options</p>
          <div className="inputs">
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your name"
              className="input"
              name="name"
              id="name"
              required
            />
            <input
              type="phone"
              placeholder="phone number"
              name="phone"
              className="input"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.valueAsDate)}
              required
            />
            <input
              type="password"
              required
              placeholder="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              className="input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="continue">
            <button
              className="button"
              type="submit"
              id="button"
              onClick={handleLogin}
            >
              sign-in
            </button>
          </div>
          <p className="P-tag">or</p>
          <div id="google" className="google">
            Google
          </div>
          already have an acount?
          <a id="a-tag" href="Login.jsx">
            login
          </a>
          <p className="P-tag">By continuing you automatically acept our</p>{" "}
          <a id="a-tag" href="#">
            Terms of services.policy and Cookies policy
          </a>
        </div>
      </div>
    </div>
  );
}
export default Sign;
