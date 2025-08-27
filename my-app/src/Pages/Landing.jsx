import React from "react";

import kmc from "../assets/images/kmc.jpg";
import wangis from "../assets/images/wangis.jpg";
import bierut from "../assets/images/bierut.jpg";
import foodhuh from "../assets/images/foodhub.jpg";
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
import "./Landing.css";
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
        className="section1"
        style={{
          backgroundImage: `url(${delice})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          color: "white",
          padding: "50px 20px",
        }}
      >
        <header className="headered">
          <div className="App-logo-app">MALLAH</div>
          <div className="botons">
            <button className="boton" onClick={() => navigate("/Sign")}>
              sign up
            </button>
            <button
              id="login"
              className="boton"
              onClick={() => navigate("/Login")}
            >
              login
            </button>
          </div>
        </header>

        <h1 className="scroll-animate">THE FOOD YOU LOVE DELIVERED FAST.</h1>
        <p id="p1" className="scroll-animate">
          Malah food has a huge selection of restuarants and stores in your
          City, just enter your address,and get started and order your favorite
          food delivered.
        </p>
        <div className="delivery-address">
          <div className="input-search-address">
            <span className="icon-wrapper">
              <i className="fas fa-map-marker"></i>
            </span>
            <input
              type="text"
              placeholder="Enter delivery address"
              className="Enter-delivery-address-input"
              name=""
              id=""
            />
            <span className="Use-current-location">Use current location</span>
          </div>
          <span className="search">Search</span>
        </div>
      </section>
      <div className="section2">
        <h1 className="h1">Top Restuarants</h1>
        <div className="imagese">
          <div className="ima">
            <img src={kmc} alt="" id="image1" />
            <p className="image-name"> KMC</p>
          </div>

          <div className="ima">
            <img
              className="ima scroll-animate"
              src={wangis}
              alt=""
              id="image2"
            />
            <p className="image-name" id="image-name">
              {" "}
              Wangis
            </p>
          </div>
          <div className="ima">
            <img
              className="ima scroll-animate"
              src={delice}
              id="image3"
              alt=""
            />
            <p className="image-name"> Beirut</p>
          </div>

          <div className="ima">
            <img
              className="ima scroll-animate"
              src={myway}
              id="image4"
              alt=""
            />
            <p className="image-name"> My Way</p>
          </div>
        </div>
        <div className="imagese">
          <div className="ima">
            <img
              className="ima scroll-animate"
              src={njieforbi}
              id="image5"
              alt=""
            />
            <p className="image-name"> NJEIFORBI</p>
          </div>
          <div className={Sparkland}>
            <img
              className="ima scroll-animate"
              src={delice}
              alt=""
              id="image7"
            />
            <p className="image-name"> Sparkland</p>
          </div>
          <div className="ima">
            <img
              src={bierut}
              id="image8"
              alt=""
              className="ima scroll-animate"
            />
            <p className="image-name"> Delice</p>
          </div>
          <div className="ima">
            <img
              className="ima scroll-animate"
              src={foodhuh}
              id="image6"
              alt=""
            />
            <p className="image-name"> Foodhub</p>
          </div>
        </div>
      </div>

      <div className="section3">
        <h1 className="h1" id="anything">
          Anything delivered
        </h1>
        <div id="" className="section3-sub1">
          <div className="section3-sub2">
            <img
              className="ima scroll-animate"
              src={people1}
              alt=""
              id="image13"
            />
            <h3>your city top restuarans</h3>
            <p className="p-down">
              {" "}
              with a great variety of restaurants you can order your favourite
              food or <b>explore new restuarants near by</b>
            </p>
          </div>
          <div className="section3-sub2">
            <img
              className="ima scroll-animate"
              src={people2}
              alt=""
              id="image14"
            />
            <h3 id="h3">your city top restuarans</h3>
            <p className="p-down">
              {" "}
              like a flash oder or send anything in your city and{" "}
              <b>recieve it in minutes</b>
            </p>
          </div>
          <div className="section3-sub2">
            <img
              className="ima scroll-animate"
              src={people3}
              alt=""
              id="image9"
            />
            <h3>Groceries delivery</h3>
            <p className="p-down">
              {" "}
              find anything you need from <b>supermarket to shops</b> in your
              city
            </p>
          </div>
        </div>
        <div className="section3-sub1">
          <div className="section3-sub2">
            <img
              className="ima scroll-animate"
              src={people4}
              alt=""
              id="image10"
            />
            <h3>Become a rider</h3>
            <p className="p-down">
              {" "}
              enjoy flexibility,freedomand competitive earnings bydelivery
              through MALLA{" "}
            </p>
          </div>
          <div className="section3-sub2">
            <img
              className="ima scroll-animate"
              src={peoplex}
              alt=""
              id="image11"
            />
            <h3>Career</h3>
            <p className="p-down">
              {" "}
              ready for an exciting new challenge? if you are
              ambitious,humble,then we want to hear from you
            </p>
          </div>
          <div className="section3-sub2">
            <img
              className="ima scroll-animate"
              src={people6}
              alt=""
              id="image12"
            />
            <h3>Become a partner </h3>
            <p className="p-down">
              {" "}
              Grow with malla our technology and user base can help you boost
              your sales
            </p>
          </div>
        </div>
      </div>
      <div className="linkse">
        <div className="links">
          <div className="link">
            <a href="#">About</a>
            <a href="#">catergories</a>
            <a href="#">menu</a>
          </div>
        </div>
        <div className="social-links">
          <i className="bi bi-google"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-whatsapp"></i>
        </div>
        <div className="end">&copy;Mallah.Al rights reserved</div>
      </div>
    </div>
  );
};
export default Landng;
