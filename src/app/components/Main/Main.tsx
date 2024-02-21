"use client";

import "./mainslides.css";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
  {
    id: "1",
    image: "/banners/inicio.png",
  },
  {
    id: "2",
    image: "/banners/bora-viajar.png",
  },
  {
    id: "3",
    image: "/banners/proteja-seu-carro.png",
  },
  {
    id: "4",
    image: "/banners/seguro-de-vida.png",
  },
];

function Main() {
  const [mainPerView, setMainPerView] = useState(1);

  return (
    <>
      <div className="slideMain">
        <div className="sectionSlideMain">
          <Swiper
            className="styleSlideMain"
            slidesPerView={mainPerView}
            pagination={{ clickable: true }}
            autoplay
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt="Slides" className="slidesMain" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Main;
