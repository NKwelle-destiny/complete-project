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
<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-12 max-w-md w-full">
    
    {/* Heading */}
    <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-2">WELCOME</h1>
    <p className="text-gray-500 text-center mb-8">LOGIN PLEASE</p>

    {/* Inputs */}
    <div className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      />
    </div>

    {/* Login Button */}
    <div className="mt-6">
      <button
        type="submit"
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Login
      </button>
    </div>

  </div>
</div>

    </div>
  );
}
export default Login;
