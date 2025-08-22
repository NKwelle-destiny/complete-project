import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, IconButton } from "@mui/material";

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Mallah</div>

      {/* Navigation */}
      <nav className="drawer">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/restaurants">Restaurant</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contact</Link>
        </li>
        <li>
          {" "}
          {/* Right-side actions */}
          <div className="header-actions">
            {/* Shopping Cart */}
            <IconButton
              className="carticon"
              component={Link}
              to="/cart"
              aria-label="cart"
            >
              <ShoppingCartIcon />
            </IconButton>
            <p className="cart-text">24</p>
          </div>
        </li>

        <li>
          {/* Profile Avatar */}
          <IconButton
            component={Link}
            to="/profile"
            aria-label="profile"
            className="carticon"
          >
            <Avatar alt="User Profile" src="/profile.jpg" />
            {/* Replace with your user image or leave empty */}
          </IconButton>
        </li>
      </nav>
    </header>
  );
}
