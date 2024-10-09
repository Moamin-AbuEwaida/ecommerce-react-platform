import React from "react";
import "./Main.css";
import Slider from "./slider/Slider.jsx";
import Category from "./category/Category.jsx";
const Main = () => {
  return (
    <div className="main">
      <Slider />
      <Category />
    </div>
  );
};

export default Main;
