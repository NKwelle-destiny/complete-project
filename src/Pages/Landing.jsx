import React from "react";

import kmc from "../assets/images/kmc.jpg";
import wangis from "../assets/images/wangis.jpg";
// filename is "beiut.jpg" in assets, so correct both path and variable
import beiut from "../assets/images/beiut.jpg";
// variable name had a typo but path was fine
import foodhub from "../assets/images/foodhub.jpg";
import myway from "../assets/images/myway.jpg";
import Sparkland from "../assets/images/sparkland.jpg";
import delice from "../assets/images/delice.jpg";
import njieforbi from "../assets/images/njieforbi.jpg";
import people1 from "../assets/images/people1.jpg";
import people2 from "../assets/images/people2.jpg";
import people3 from "../assets/images/people3.jpg";
import people4 from "../assets/images/people4.jpg";
import peoplex from "../assets/images/peoplex.jpg";
import people6 from "../assets/images/people6.jpg";

import { useNavigate } from "react-router-dom";
const Landng = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up"); // or 'zoom-in'
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="Appo">
 <section
  className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
  style={{ backgroundImage: `url(${delice})` }}
>
  {/* Overlay (makes text readable) */}
  <div className="min-h-screen bg-black/50">

    {/* Header */}
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-2xl sm:text-3xl font-bold">
            MALLAH
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              className="px-4 py-2 text-sm sm:text-base border border-white rounded-lg hover:bg-white hover:text-black transition"
              onClick={() => navigate("/Sign")}
            >
              Sign Up
            </button>

            <button
              className="px-4 py-2 text-sm sm:text-base bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              onClick={() => navigate("/Login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Hero Content */}
    <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-16">

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
        THE FOOD YOU LOVE DELIVERED FAST.
      </h1>

      <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-200">
        Malah food has a huge selection of restaurants and stores in your city.
        Just enter your address and order your favorite food delivered.
      </p>

      {/* Search Section */}
      <div className="mt-10 w-full flex flex-col sm:flex-row gap-4">

        {/* Input Container */}
        <div className="flex items-center bg-white text-black rounded-xl px-4 py-3 flex-1 shadow-lg">
          <span className="text-gray-400 mr-3">📍</span>

          <input
            type="text"
            placeholder="Enter delivery address"
            className="flex-1 outline-none"
          />
        </div>

        {/* Search Button */}
      <button
  className="bg-blue-600 text-white text-center font-medium px-5 w-500 h-12 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
>
  Search
</button>


      </div>

    </div>

  </div>
</section>

    <div className="section2 px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
  {/* Section Title */}
  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">
    Top Restaurants
  </h2>

  {/* Restaurant Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

    {/* Restaurant Card */}
    <div className="flex flex-col items-center text-center bg-white shadow-lg overflow-hidden hover:scale-105 transform transition duration-200">
      <img src={kmc} alt="KMC" className="w-full h-32 object-cover" />
      <p className="mt-2 font-medium text-gray-800">KMC</p>
    </div>

    <div className="flex flex-col items-center text-center bg-white shadow-lg overflow-hidden hover:scale-105 transform transition duration-200">
      <img src={wangis} alt="Wangis" className="w-full h-32 object-cover" />
      <p className="mt-2 font-medium text-gray-800">Wangis</p>
    </div>

    <div className="flex flex-col items-center text-center bg-white shadow-lg overflow-hidden hover:scale-105 transform transition duration-200">
      <img src={delice} alt="Beirut" className="w-full h-32 object-cover" />
      <p className="mt-2 font-medium text-gray-800">Beirut</p>
    </div>

    <div className="flex flex-col items-center text-center bg-white shadow-lg overflow-hidden hover:scale-105 transform transition duration-200">
      <img src={myway} alt="My Way" className="w-full h-32 object-cover" />
      <p className="mt-2 font-medium text-gray-800">My Way</p>
    </div>

    <div className="flex flex-col items-center text-center bg-white shadow-lg overflow-hidden hover:scale-105 transform transition duration-200">
      <img src={njieforbi} alt="Njeiforbi" className="w-full h-32 object-cover" />
      <p className="mt-2 font-medium text-gray-800">NJEIFORBI</p>
    </div>

    <div className="flex flex-col items-center text-center bg-white shadow-lg overflow-hidden hover:scale-105 transform transition duration-200">
      <img src={delice} alt="Sparkland" className="w-full h-32 object-cover" />
      <p className="mt-2 font-medium text-gray-800">Sparkland</p>
    </div>

    <div className="flex flex-col items-center text-center bg-white shadow-lg overflow-hidden hover:scale-105 transform transition duration-200">
      <img src={beiut} alt="Delice" className="w-full h-32 object-cover" />
      <p className="mt-2 font-medium text-gray-800">Delice</p>
    </div>

    <div className="flex flex-col items-center text-center bg-white shadow-lg overflow-hidden hover:scale-105 transform transition duration-200">
      <img src={foodhub} alt="Foodhub" className="w-full h-32 object-cover" />
      <p className="mt-2 font-medium text-gray-800">Foodhub</p>
    </div>

  </div>
</div>

<section className="section3 px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
  {/* Section Title */}
  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center">
    Anything delivered
  </h2>

  {/* Features Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
    {/* Feature Card 1 */}
    <div className="flex flex-col items-center text-center">
      <img src={people1} alt="Your city top restaurants" className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">Your city top restaurants</h3>
      <p className="text-gray-600">
        With a great variety of restaurants you can order your favourite food or <b>explore new restaurants nearby</b>
      </p>
    </div>

    {/* Feature Card 2 */}
    <div className="flex flex-col items-center text-center">
      <img src={people2} alt="Flash delivery" className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">Your city top restaurants</h3>
      <p className="text-gray-600">
        Like a flash order or send anything in your city and <b>receive it in minutes</b>
      </p>
    </div>

    {/* Feature Card 3 */}
    <div className="flex flex-col items-center text-center">
      <img src={people3} alt="Groceries delivery" className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">Groceries delivery</h3>
      <p className="text-gray-600">
        Find anything you need from <b>supermarket to shops</b> in your city
      </p>
    </div>
  </div>

  {/* Second Row */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Feature Card 4 */}
    <div className="flex flex-col items-center text-center">
      <img src={people4} alt="Become a rider" className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">Become a rider</h3>
      <p className="text-gray-600">
        Enjoy flexibility, freedom and competitive earnings by delivery through MALLAH
      </p>
    </div>

    {/* Feature Card 5 */}
    <div className="flex flex-col items-center text-center">
      <img src={peoplex} alt="Career" className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">Career</h3>
      <p className="text-gray-600">
        Ready for an exciting new challenge? If you are ambitious, humble, then we want to hear from you
      </p>
    </div>

    {/* Feature Card 6 */}
    <div className="flex flex-col items-center text-center">
      <img src={people6} alt="Become a partner" className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">Become a partner</h3>
      <p className="text-gray-600">
        Grow with MALLAH — our technology and user base can help you boost your sales
      </p>
    </div>
  </div>
</section>

    <footer className="bg-gray-900 text-gray-200 py-10 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

    {/* Navigation Links */}
    <div className="flex flex-col sm:flex-row gap-4 text-center md:text-left">
      <a href="#" className="hover:text-white transition">About</a>
      <a href="#" className="hover:text-white transition">Categories</a>
      <a href="#" className="hover:text-white transition">Menu</a>
    </div>

    {/* Social Icons */}
    <div className="flex gap-4 text-2xl">
      <a href="#" className="hover:text-white transition"><i className="bi bi-google"></i></a>
      <a href="#" className="hover:text-white transition"><i className="bi bi-facebook"></i></a>
      <a href="#" className="hover:text-white transition"><i className="bi bi-whatsapp"></i></a>
    </div>

    {/* Copyright */}
    <div className="text-center md:text-right text-sm text-gray-400">
      &copy; Mallah. All rights reserved
    </div>

  </div>
</footer>

     
    </div>
  );
};
export default Landng;
