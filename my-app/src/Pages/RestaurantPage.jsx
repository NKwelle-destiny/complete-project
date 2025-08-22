import React, { useState } from "react";
import {
  IconButton,
  TextField,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import networkImg from "../assets/images/network.jpg"; // restaurant image component

import d1Img from "../assets/images/ndole.jpeg";
import d2Img from "../assets/images/garri.jpg";
import d4Img from "../assets/images/Crispy.jpeg";
import d3Img from "../assets/images/shawama.jpeg";
import d5Img from "../assets/images/spagati.jpeg";
import d6Img from "../assets/images/Friedbrownrice.jpeg";
import d7Img from "../assets/images/Pizza.jpeg";
import d8Img from "../assets/images/burger.jpg";
import d9Img from "../assets/images/Drinks.jpeg";

import ndoleImg from "../assets/images/ndole.jpeg";
import garriImg from "../assets/images/garri.jpg";
import CrispyImg from "../assets/images/Crispy.jpeg";
import shawamaImg from "../assets/images/shawama.jpeg";
import spagatiImg from "../assets/images/spagati.jpeg";
import FriedbrownriceImg from "../assets/images/Friedbrownrice.jpeg";
import PizzaImg from "../assets/images/Pizza.jpeg";
import burgerImg from "../assets/images/burger.jpg";
import DrinksImg from "../assets/images/Drinks.jpeg";

import ndoleImg from "../assets/images/ndole.jpeg";
import garriImg from "../assets/images/garri.jpg";
import CrispyImg from "../assets/images/Crispy.jpeg";
import shawamaImg from "../assets/images/shawama.jpeg";
import spagatiImg from "../assets/images/spagati.jpeg";
import FriedbrownriceImg from "../assets/images/Friedbrownrice.jpeg";
import PizzaImg from "../assets/images/Pizza.jpeg";
import burgerImg from "../assets/images/burger.jpg";
import DrinksImg from "../assets/images/Drinks.jpeg";

import "./RestaurantPage.css";

// ✅ FoodCard component
function FoodCard({ imageSrc, name, description, price, onAddToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    if (onAddToCart) onAddToCart(name, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      if (onAddToCart) onAddToCart(name, quantity - 1);
    }
  };

  return (
    <div className="food-card">
      <CardMedia
        component="img"
        image={imageSrc}
        alt={name}
        className="food-image"
      />
      <div className="food-details">
        <Typography variant="h6" className="food-name">
          {name}
        </Typography>
        <Typography variant="body2" className="food-description">
          {description}
        </Typography>

        {/* Quantity controls */}
        <div className="quantity-controls">
          <Button
            variant="outlined"
            onClick={handleDecrease}
            className="quantity-btn"
          >
            −
          </Button>
          <Typography variant="body1" className="quantity">
            {quantity}
          </Typography>
          <Button
            variant="outlined"
            onClick={handleIncrease}
            className="quantity-btn"
          >
            +
          </Button>
        </div>
      </div>

      {/* Price */}
      <div className="food-price">XAF{price.toFixed(2)}</div>
    </div>
  );
}

function RestaurantPage() {
  const handleBack = () => {
    window.history.back();
  };

  const handleAddToCart = (foodName, quantity) => {
    console.log(`${foodName} added with quantity ${quantity}`);
    // here you can hook into global cart state
  };

  return (
    <div className="gallery-container">
      {/* Top bar */}
      <div className="top-bar">
        <IconButton onClick={handleBack} className="back-button">
          <ArrowBackIcon />
        </IconButton>
        <div className="searchcontainer">
          <TextField label="Search" variant="outlined" fullWidth />
        </div>
      </div>
      {/* Cards row */}
      <div className="cards-row">
        <div className="card-wrapper">
          <CardMedia
            component="img"
            height="200"
            image={burgerImg}
            alt="Fast Food"
            className="card-image"
          />
          <Typography variant="h6" align="center">
            Fast Food
          </Typography>
        </div>

        <div className="card-wrapper">
          <CardMedia
            component="img"
            height="200"
            image={DrinksImg}
            className="card-image"
          />
          <Typography variant="h6" align="center">
            Drinks
          </Typography>
        </div>
      </div>
      {/* Full width overlay image */}
      <div className="full-width-image" style={{ height: "400px" }}>
        <CardMedia
          component="img"
          image={networkImg}
          alt="Image"
          className="image"
        />
        <div className="overlay-content">
          <Typography variant="h6">Myway Restaurant</Typography>
          <Typography variant="subtitle1" className="rating">
            Rating: 4.5 ⭐
          </Typography>
        </div>
      </div>
      {/* Menu buttons */}
      <div>
        <h3>Menu</h3>
      </div>
      <div className="menu-buttons">
        <Button variant="contained" color="success">
          General
        </Button>
        <Button variant="contained" color="secondary">
          Diabetic
        </Button>
        <Button variant="contained" color="primary">
          Vegetarian
        </Button>
      </div>
      {/* ✅ Food Cards List */}
      <div className="food-list">
        <FoodCard
          imageSrc={ndoleImg}
          name="Ndole with Plantain"
          description="Well prepared Ndolle with rich perfection"
          price={2500}
          onAddToCart={handleAddToCart}
        />

        <FoodCard
          imageSrc={garriImg}
          name="Garri and Eru"
          description="Well prepared garri and eru"
          price={1000}
          onAddToCart={handleAddToCart}
        />
      </div>
      {/* ✅ Food Cards List */}
      <div className="food-list">
        <FoodCard
          imageSrc={CrispyImg}
          name="cripsy"
          description="Get your well served Cripsy chichen"
          price={2500}
          onAddToCart={handleAddToCart}
        />

        <FoodCard
          imageSrc={shawamaImg}
          name="shawama"
          description="Get the best shawama  "
          price={1000}
          onAddToCart={handleAddToCart}
        />
      </div>
      <div className="food-list">
        <FoodCard
          imageSrc={spagatiImg}
          name="spaghetti"
          description="Get the best and tastety spaghetti"
          price={1500}
          onAddToCart={handleAddToCart}
        />

        <FoodCard
          imageSrc={FriedbrownriceImg}
          name="Fried Rice"
          description="Enjoy your deliciouse Fried Rice"
          price={2000}
          onAddToCart={handleAddToCart}
        />
      </div>
      <div className="food-list">
        <FoodCard
          imageSrc={PizzaImg}
          name="Pizza"
          description="Get your best Pizza"
          price={4000}
          onAddToCart={handleAddToCart}
        />

        <FoodCard
          imageSrc={burgerImg}
          name="Burger"
          description="Your awesome Burger"
          price={2500}
          onAddToCart={handleAddToCart}
        />
      </div>
      <div className="line"></div>
      <div className="footer-links">
        <span>
          <a href="#">Private Policy</a>
        </span>
        <span>
          <a href="#">Terms and Services</a>
        </span>
        <span>
          <a href="#">Contact us</a>
        </span>
      </div>

      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="social-icon" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default RestaurantPage;
