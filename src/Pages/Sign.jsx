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


<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-12 max-w-md w-full">

    {/* Heading */}
    <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-2">WELCOME</h1>
    <p className="text-gray-500 text-center mb-6">
      Continue with one of the following options
    </p>

    {/* Form Inputs */}
    <div className="flex flex-col gap-4 mb-6">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      />
    </div>

    {/* Signup Button */}
    <button
      type="submit"
      onClick={handleLogin}
      className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 mb-4"
    >
      Sign Up
    </button>

    {/* Divider */}
    <p className="text-center text-gray-500 mb-4">or</p>

    {/* Google Signup */}
   <button
  type="button"
  className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-xl mb-6 bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-100 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
>
  <img src="/path-to-google-icon.svg" alt="Google" className="w-5 h-5" />
  Continue with Google
</button>


    {/* Login Link */}
    <p className="text-center text-gray-500 mb-2">
      Already have an account?{" "}
      <a href="Login.jsx" className="text-blue-600 hover:underline">
        Login
      </a>
    </p>

    {/* Terms */}
    <p className="text-center text-gray-400 text-xs">
      By continuing you automatically accept our{" "}
      <a href="#" className="underline hover:text-gray-600">
        Terms of Service & Cookies Policy
      </a>
    </p>

  </div>
</div>

      
     
    </div>
  );
}
export default Sign;
