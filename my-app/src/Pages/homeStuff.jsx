import React from "react";
import "./App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function ImageWithText() {
  return (
    <div className="image-container">
      <img
        src="./src/assets/images/home.jpg"
        alt="Sample"
        className="background-image"
      />
      <div className="overlay-text">
        <h2> Personalized meal plans for your health</h2>
        <p>
          Craving something delicious? Mallah delivers fresh, flavorful meals
          from your favorite restaurants straight to your door fast and
          convenient. Whether it’s a hearty dinner, a light lunch, or a sweet
          treat, we bring you great food to enjoy anytime, anywhere.
        </p>
      </div>
    </div>
  );
}
function ImageLeftDescriptionRight() {
  return (
    <div className="main-container">
      {/* Image on the left */}
      <div className="image-box">
        <img
          src="./src/assets/images/nutris.jpg"
          alt="Delicious food"
          className="left-image"
        />
      </div>

      {/* Description on the right */}
      <div className="description-box">
        <h1>LEARN MORE ABOUT OUR APPROACH</h1>
        <p>Expert design plans</p>
        <h3>Crafted by nutritionists</h3>

        <p>
          Our meal plans are developed by registered dietitians and nutrution
          experts. Ensuring the meet the highest standered of nutritional
          ballance and effectiveness.
        </p>
      </div>
    </div>
  );
}
function ImageLeftDescriptionRigh() {
  return (
    <div className="main-container">
      {/* Description on the left */}
      <div className="description-box">
        <p>Fresh, Quality Ingredients</p>
        <h3>Sourced with Care</h3>
        <p>
          We use only the freshest, highest quality ingredients in our meals,
          sourced from suppliers to ensure both taste and nutritional value.
        </p>
      </div>

      {/* Image on the right */}
      <div className="image-box">
        <img
          src="./src/assets/images/network.jpg"
          alt="Delicious food"
          className="left-image"
        />
      </div>
    </div>
  );
}

function ImageLeftDescriptionRig() {
  return (
    <div className="main-container">
      {/* Image on the left */}
      <div className="image-box">
        <img
          src="./src/assets/images/network.jpg"
          alt="Delicious food"
          className="left-image"
        />
      </div>

      {/* Description on the right */}
      <div className="description-box">
        <p>Expert design pland</p>
        <h3>Expert design pland</h3>
        <p>
          Enjoy fresh, flavorful meals delivered right to your doorstep. Whether
          it’s breakfast, lunch, or dinner, we connect you with the best local
          kitchens so you can enjoy delicious food anytime, anywhere.
        </p>
      </div>
    </div>
  );
}

function ImageLeftDescriptionRi() {
  return (
    <div className="main-container">
      {/* Description on the left */}
      <div className="description-box">
        <p>Convenient and Delicious</p>
        <h3>Ready to Enjoy</h3>
        <p>
          Our meals are prepared with convience in mind, arriving ready to eat
          and enjoy, saving you time compromising on nutrition.
        </p>
      </div>

      {/* Image on the right */}
      <div className="image-box">
        <img
          src="./src/assets/images/network.jpg"
          alt="Delicious food"
          className="left-image"
        />
      </div>
    </div>
  );
}

function Line() {
  return <div className="line"></div>;
}

function FooterSection() {
  return (
    <div className="footer-container">
      {/* Left section: Text links */}
      <div className="footer-links">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms and Conditions</a>
        <a href="/Contacts">Contact Us</a>
      </div>

      {/* Right section: Social icons */}
      <div className="footer-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}

function HomeStuff() {
  return (
    <div>
      <ImageWithText />
      <ImageLeftDescriptionRight />
      <ImageLeftDescriptionRigh />
      <ImageLeftDescriptionRig />
      <ImageLeftDescriptionRi />
      <Line />
      <FooterSection />
    </div>
  );
}

export default HomeStuff;
