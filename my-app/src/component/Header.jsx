import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, IconButton } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../Pages/CartContext.jsx";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">Mallah</div>

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
          <div className="header-actions">
            <IconButton
              className="carticon"
              component={Link}
              to="/cart"
              aria-label="cart"
            >
              <ShoppingCartIcon />
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </IconButton>
          </div>
        </li>

        <li>
          <IconButton
            component={Link}
            to="/profile"
            aria-label="profile"
            className="carticon"
          >
            <Avatar alt="User Profile" src="/profile.jpg" />
          </IconButton>
        </li>
      </nav>
    </header>
  );
}
