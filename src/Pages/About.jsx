import React from "react";
import "./AboutPage.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import Aboutpage from "../assets/images/Aboutpage.jpg";
import Deliveryguy from "../assets/images/Deliveryguy.jpg";
import Menu from "../assets/images/Menu.jpeg";
import Cook from "../assets/images/cook.jpg";
import Friedfish from "../assets/images/Friedfish.jpeg";
const About = () => {
  return (
    <div className="about-container">
      {/* Top Section */}
      <div className="about-header">
        <div className="about-title">
          <h2>About</h2>
          <h2>our company</h2>
        </div>
        <div className="about-image">
          <img src={Aboutpage} alt="Healthy meal" />
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content">
        <h3>From food delivery to your daily convenience companion</h3>
        <p>
          Our food delivery web app offers convenient, city-wide meal delivery
          designed to cater to diverse dietary needs. It provides users with an
          easy-to-navigate platform to order nutritious and flavorful meals
          tailored specifically for different health conditions and lifestyle
          preferences.
        </p>
        <p>
          Fast and reliable delivery services covering the entire city ensuring
          users get fresh meals wherever they are. Our meals are thoughtfully
          categorized based on health needs, including vegetarians,
          diabetic-friendly, heart-healthy, gluten-free, and more. Users can
          select meal plans that suit their individual health requirements or
          preferences.
        </p>
        <p>
          At <strong>Malah</strong>, we don’t just deliver food, we deliver{" "}
          <strong>care, choice and wellness</strong> straight to your door step.
          We partner with certified restaurants and professional chefs who
          prioritize both taste and nutrition.
        </p>
      </div>

      {/* Image section */}
      <div className="imagecenter">
        <img src={Friedfish} alt="Fried Fish" className="Friedfish" />
      </div>

      {/* Fourth section */}
      {
        <div className="fourth-section">
          <div className="subs">
            <img src={Menu} alt="" className="images-fourth" />
            <h3>Explore</h3>
            <p>
              Get inspired and explore menus from the best national dining
              places and local independent favorites, or just order whatever
              your heart desires—because you want to!
            </p>
          </div>
          <div className="subs">
            <img src={Deliveryguy} alt="" className="images-fourth" />
            <h3>Sit back</h3>
            <p>
              Select your favorite dish, and relax while we bring the order
              straight to your door.
            </p>
          </div>
          <div className="subs">
            <img src={Cook} alt="" className="images-fourth" />
            <h3>Enjoy</h3>
            <p>
              Receive your order and enjoy from wherever you are. Delicious
              fresh food, without you having to lift your finger!
            </p>
          </div>
        </div>
      }
      <div className="line"></div>
      <div className="footer">
        <div className="links">
          <div className="policy">privacy policy</div>
          <div className="terms">terms and conditions</div>
          <div className="contact">contact us</div>
        </div>
        <div className="icons-links">
          <div className="icons-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                style={{ fontSize: 30, color: "#4267B2", marginRight: "10px" }}
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon style={{ fontSize: 30, color: "#E1306C" }} />
            </a>
          </div>
        </div>
        <div className="links"></div>
      </div>
    </div>
  );
};

export default About;
