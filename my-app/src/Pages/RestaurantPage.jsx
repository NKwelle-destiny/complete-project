import React, { useState } from "react";
import {
  IconButton,
  TextField,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import { useContext } from "react";
import { CartContext } from "./CartContext"; // adjust path if needed

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import networkImg from "../assets/images/network.jpg"; // restaurant image component

// ✅ General foods
import ndoleImg from "../assets/images/ndole.jpeg";
import garriImg from "../assets/images/garri.jpg";
import CrispyImg from "../assets/images/Crispy.jpeg";
import shawamaImg from "../assets/images/shawama.jpeg";
import spagatiImg from "../assets/images/spagati.jpeg";
import FriedbrownriceImg from "../assets/images/Friedbrownrice.jpeg";
import PizzaImg from "../assets/images/Pizza.jpeg";
import burgerImg from "../assets/images/burger.jpg";
import DrinksImg from "../assets/images/Drinks.jpeg";

// ✅ Diabetic foods
import d1Img from "../assets/images/d1.jpg";

import d3Img from "../assets/images/d3.jpg";
import d4Img from "../assets/images/d4.jpg";
import d5Img from "../assets/images/d5.jpg";
import d6Img from "../assets/images/d6.jpg";
import d7Img from "../assets/images/d7.jpg";
import d8Img from "../assets/images/d8.jpg";
import d9Img from "../assets/images/d9.jpg";

// ✅ Vegetarian foods
import v1Img from "../assets/images/v1.jpg";
import v2Img from "../assets/images/v2.jpg";
import v3Img from "../assets/images/v3.jpg";
import v4Img from "../assets/images/v4.jpg";
import v5Img from "../assets/images/v5.jpg";
import v6Img from "../assets/images/v6.jpg";
import v7Img from "../assets/images/v7.jpg";
import v8Img from "../assets/images/v8.jpg";

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
        <Typography variant="h5" className="food-name">
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

// ✅ Food datasets
const generalFoods = [
  {
    imageSrc: ndoleImg,
    name: "Ndole with Plantain",
    description: "Well prepared Ndolle with rich perfection",
    price: 2500,
  },
  {
    imageSrc: garriImg,
    name: "Garri and Eru",
    description: "Well prepared garri and eru",
    price: 1000,
  },
  {
    imageSrc: CrispyImg,
    name: "Crispy Chicken",
    description: "Get your well served crispy chicken",
    price: 2500,
  },
  {
    imageSrc: shawamaImg,
    name: "Shawarma",
    description: "Get the best shawarma",
    price: 1000,
  },
  {
    imageSrc: spagatiImg,
    name: "Spaghetti",
    description: "Delicious and tasty spaghetti",
    price: 1500,
  },
  {
    imageSrc: FriedbrownriceImg,
    name: "Fried Rice",
    description: "Enjoy your delicious fried rice",
    price: 2000,
  },
  {
    imageSrc: PizzaImg,
    name: "Pizza",
    description: "Get your best pizza",
    price: 4000,
  },
  {
    imageSrc: burgerImg,
    name: "Burger",
    description: "Your awesome burger",
    price: 2500,
  },
];

const diabeticFoods = [
  {
    imageSrc: d1Img,
    name: "Diabetic Dish 1",
    description: "Healthy meal option",
    price: 2000,
  },

  {
    imageSrc: d3Img,
    name: "Diabetic Dish 3",
    description: "Nutritious and balanced",
    price: 1800,
  },
  {
    imageSrc: d4Img,
    name: "Diabetic Dish 4",
    description: "Carefully crafted meal",
    price: 2200,
  },
  {
    imageSrc: d5Img,
    name: "Diabetic Dish 5",
    description: "Diabetic-friendly meal",
    price: 2300,
  },
  {
    imageSrc: d6Img,
    name: "Diabetic Dish 6",
    description: "Rich in fibers",
    price: 1900,
  },
  {
    imageSrc: d7Img,
    name: "Diabetic Dish 7",
    description: "Balanced nutrition",
    price: 2400,
  },
  {
    imageSrc: d8Img,
    name: "Diabetic Dish 8",
    description: "Delicious and healthy",
    price: 2100,
  },
  {
    imageSrc: d9Img,
    name: "Diabetic Dish 9",
    description: "Safe for diabetics",
    price: 2000,
  },
];

const vegetarianFoods = [
  {
    imageSrc: v1Img,
    name: "Vegetarian Dish 1",
    description: "Fresh veggies delight",
    price: 2000,
  },
  {
    imageSrc: v2Img,
    name: "Vegetarian Dish 2",
    description: "Nutritious vegetarian meal",
    price: 2200,
  },
  {
    imageSrc: v3Img,
    name: "Vegetarian Dish 3",
    description: "Delicious plant-based meal",
    price: 1800,
  },
  {
    imageSrc: v4Img,
    name: "Vegetarian Dish 4",
    description: "Tasty veggie combo",
    price: 2300,
  },
  {
    imageSrc: v5Img,
    name: "Vegetarian Dish 5",
    description: "Healthy plant meal",
    price: 2500,
  },
  {
    imageSrc: v6Img,
    name: "Vegetarian Dish 6",
    description: "Rich vegetarian delight",
    price: 2100,
  },
  {
    imageSrc: v7Img,
    name: "Vegetarian Dish 7",
    description: "Vegan approved",
    price: 2400,
  },
  {
    imageSrc: v8Img,
    name: "Vegetarian Dish 8",
    description: "Fresh and tasty",
    price: 2000,
  },
];

function RestaurantPage() {
  const [menu, setMenu] = useState("general");
  const { addToCart } = useContext(CartContext);

  const handleBack = () => {
    window.history.back();
  };
  const handleAddToCart = (foodName, quantity) => {
    const foodList = [...generalFoods, ...diabeticFoods, ...vegetarianFoods];
    const selectedItems = foodList.find((item) => item.name === foodName);
    if (selectedItems) {
      addToCart(selectedItems, quantity);
    }
  };

  const currentFoods =
    menu === "general"
      ? generalFoods
      : menu === "diabetic"
      ? diabeticFoods
      : vegetarianFoods;

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
        <Button
          variant={menu === "general" ? "contained" : "outlined"}
          color="success"
          onClick={() => setMenu("general")}
        >
          General
        </Button>
        <Button
          variant={menu === "diabetic" ? "contained" : "outlined"}
          color="secondary"
          onClick={() => setMenu("diabetic")}
        >
          Diabetic
        </Button>
        <Button
          variant={menu === "vegetarian" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setMenu("vegetarian")}
        >
          Vegetarian
        </Button>
      </div>

      {/* Food list */}
      <div className="food-list">
        {currentFoods.map((item, index) => (
          <FoodCard
            key={index}
            imageSrc={item.imageSrc}
            name={item.name}
            description={item.description}
            price={item.price}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Footer */}
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
