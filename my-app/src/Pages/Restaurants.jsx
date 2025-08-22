import React from "react";
import { Link } from "react-router-dom";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
} from "@mui/material";
import "./restaurant.css";

// Images
import networkImg from "../assets/images/network.jpg";
import beirutImg from "../assets/images/beirut.jpg";
import burjImg from "../assets/images/burj.jpg";
import kmcImg from "../assets/images/kmc.jpg";
import livescoreImg from "../assets/images/livescore.jpg";
import mywayImg from "../assets/images/myway.jpg";

// ------------------ Restaurant Card ------------------
function RestaurantCard({ image, title, rating, description }) {
  const [value, setValue] = React.useState(rating);

  return (
    <Card className="restaurant-card">
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <h3>{title}</h3>
        <Rating
          name="restaurant-rating"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => setValue(newValue)}
        />
        <Typography variant="body2" color="text.secondary" className="desc">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

// ------------------ Main Component ------------------
export default function SearchWithHeading() {
  // Restaurant Data
  const restaurantData = [
    {
      id: "network",
      image: networkImg,
      title: "Network",
      rating: 4,
      description:
        "Explore the Restautant menu featuring cispy chicken delights and more delicious meals.",
      path: "/restaurants/network",
    },
    {
      id: "beirut",
      image: beirutImg,
      title: "beirut",
      rating: 4.5,
      description:
        "Excellent dishes, respective services and very good food. Excellent cleanliness.",
      path: "/restaurants/beirut",
    },
    {
      id: "burj",
      image: burjImg,
      title: "Burj",
      rating: 5,
      description: "Fine dining with a beautiful view.",
      path: "/restaurants/burj",
    },
    {
      image: kmcImg,
      title: "KMC Restaurant",
      rating: 4.5,
      description:
        "Exlore the KMC Restaurant menu featuring crispy chicken delights and more delicious meals.",
      path: "/restaurants/nutris",
    },
    {
      image: livescoreImg,
      title: "LiveScore VIP",
      rating: 4.5,
      description: "Healthy options and fresh ingredients.",
      path: "/restaurants/nutris",
    },
    {
      image: mywayImg,
      title: "MyWay",
      rating: 4.5,
      description: "Healthy options and fresh ingredients.",
      path: "/restaurants/nutris",
    },

    // Add more restaurants with their paths here
  ];

  return (
    <div className="search-container">
      {/* Search Bar */}
      <div className="search-bar-container">
        <TextField
          label="Search restaurants..."
          variant="outlined"
          className="search-bar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      {/* Heading */}
      <div className="search-heading-container">
        <h4 className="search-heading">POPULAR RESTAURANTS IN BUEA</h4>
      </div>

      {/* Restaurant Cards */}
      <div className="restaurants">
        {restaurantData.map((rest) => (
          <Link
            to={`/restaurants/${rest.id}`}
            key={rest.id}
            className="card-link"
          >
            <RestaurantCard
              image={rest.image}
              title={rest.title}
              rating={rest.rating}
              description={rest.description}
            />
          </Link>
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
