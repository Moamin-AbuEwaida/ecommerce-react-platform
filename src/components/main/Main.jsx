import React from "react";
import "./Main.css";
import Slider from "./slider/Slider.jsx";
import Category from "./category/Category.jsx";
import Collection from "./collection/Collection.jsx";
import Trend from "./trend/Trend.jsx";
const Main = () => {
  return (
    <div className="main">
      <Slider />
      <Category />
      <Collection />
      <Trend />
    </div>
  );
};

export default Main;
