import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Restaurants from "./Pages/Restaurants.jsx"; // <-- restaurant cards
import RestaurantPage from "./Pages/RestaurantPage.jsx"; // <-- single restaurant detail
import About from "./Pages/about.jsx";
import Header from "./component/Header.jsx";
import Contacts from "./Pages/contacts.jsx";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Restaurants list & detail */}
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />

        {/* Other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
