import React from "react";
import "./App.css";
import burj from "./assets/images/burj.jpg";
import iya from "./assets/images/iya.jpg";
import myway from "./assets/images/myway.jpg";
import network from "./assets/images/network.jpg";



function Gallery() {
  const items = [
    {
      id: 1,
      image: burj,
      description: "BURJ",
    },
    {
      id: 2,
      image: iya,
      description: "WANGIS",
    },
    {
      id: 3,
      image: myway,
      description: "BEIRUT",
    },
    {
      id: 4,
      image: network,
      description: "NIEFORBI",
    },
  ];

  return (
    <div className="parent-div">
      {items.map(({ id, image, description }) => (
        <div key={id} className="child-div">
          <img src={image} alt={Image ${id}} className="child-image" />
          <p className="child-description">{description}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
    
      <Gallery />
    </div>
  );
}

export default App;