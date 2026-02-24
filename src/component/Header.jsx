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
    

<header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
    
    {/* Logo */}
    <div className="text-2xl font-bold text-gray-800">Mallah</div>

    {/* Nav Links */}
    <nav className="hidden md:flex space-x-6 items-center">
      <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium">Home</Link>
      <Link to="/restaurants" className="text-gray-800 hover:text-blue-600 font-medium">Restaurants</Link>
      <Link to="/about" className="text-gray-800 hover:text-blue-600 font-medium">About</Link>
      <Link to="/contacts" className="text-gray-800 hover:text-blue-600 font-medium">Contact</Link>
    </nav>

    {/* Cart + Profile */}
    <div className="flex items-center space-x-4">
      <IconButton component={Link} to="/cart" aria-label="cart" className="relative text-gray-800">
        <ShoppingCartIcon />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </IconButton>
      <IconButton component={Link} to="/profile" aria-label="profile" className="text-gray-800">
        <Avatar alt="User Profile" src="/profile.jpg" />
      </IconButton>
    </div>
  </div>
</header>







    
  );
}
