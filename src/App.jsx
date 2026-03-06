import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/home.jsx  ";
import Restaurants from "./Pages/Restaurants.jsx";
import RestaurantPage from "./Pages/RestaurantPage.jsx";
import About from "./Pages/About.jsx";
import Header from "./component/Header.jsx";
import Contacts from "./Pages/Contacts.jsx";
import Cart from "./Pages/Cart.jsx";
import Landing from "./Pages/Landing.jsx";
import Sign from "./Pages/Sign.jsx";
import Login from "./Pages/Login.jsx";
import { CartProvider } from "./Pages/CartContext.jsx";

function Layout() {
  const location = useLocation();

  // Hide header only on Landing, Sign, and Login
  const hideHeader =
    location.pathname === "/" ||
    location.pathname === "/Sign" ||
    location.pathname === "/Login";

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        {/* Landing & Auth pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Login" element={<Login />} />

        {/* Main pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
