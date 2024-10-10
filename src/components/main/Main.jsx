import React from "react";
import "./Main.css";
import Slider from "./slider/Slider.jsx";
import Category from "./category/Category.jsx";
import Collection from "./collection/Collection.jsx";
const Main = () => {
  return (
    <div className="main">
      <Slider />
      <Category />
      <Collection />
    </div>
  );
};

export default Main;
