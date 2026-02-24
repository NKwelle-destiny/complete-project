import { Outlet } from "react-router-dom";
import Header from "../component/Header.jsx";
import HomeStuff from "./homeStuff.jsx";
import Restaurants from "./Restaurants.jsx";
export default function Home() {
  return (
    <div className="home-container">
      <div className="header-container">
        <Outlet />
        <HomeStuff />
      </div>
    </div>
  );
}
