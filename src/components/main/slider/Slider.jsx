import React from "react";
import "./Slider.css";
import SliderData from "../../../data/Slider.json";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Pagination } from "swiper/modules";

import slider1 from "../../../assets/watch-slider1.png";
import slider2 from "../../../assets/watch-slider2.png";
import slider4 from "../../../assets/watch-slider4.png";

const images = {
  slider1: slider1,
  slider2: slider2,
  slider4: slider4,
};

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="swiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <>
          {SliderData.slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slider">
              <img src={images[slide.image]} alt={slide.heading} />
              <div className="content">
                <span>{slide.announcement}</span>
                <h1 dangerouslySetInnerHTML={{ __html: slide.heading }}></h1>
                <p dangerouslySetInnerHTML={{ __html: slide.description }}></p>
                <a href={slide.buttonLink}>{slide.buttonText}</a>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </>
  );
};

export default Slider;
