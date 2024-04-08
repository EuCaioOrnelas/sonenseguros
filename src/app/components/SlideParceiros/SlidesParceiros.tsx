"use client";

import "./slidesparceiros.css";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const data = [
  { id: "1", image: "/seguradoras/allianz.png" },
  { id: "2", image: "/seguradoras/azul.png" },
  { id: "3", image: "/seguradoras/hdi.png" },
  { id: "4", image: "/seguradoras/porto.png" },
  { id: "5", image: "/seguradoras/chubb.png" },
  { id: "6", image: "/seguradoras/itau.png" },
  { id: "7", image: "/seguradoras/liberty.png" },
  { id: "8", image: "/seguradoras/sompo.png" },
  { id: "9", image: "/seguradoras/tokio.png" },
  { id: "10", image: "/seguradoras/zurich.png" },
  { id: "11", image: "/seguradoras/suhai.png" },
  { id: "12", image: "/seguradoras/darwin.png" },
  { id: "13", image: "/seguradoras/sura.png" },
  { id: "14", image: "/seguradoras/ezze.png" },
  { id: "15", image: "/seguradoras/suica.png" },
];

function SlideParceiros() {
  const [slidesPerView, setSlidePerView] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1650) {
        setSlidePerView(3);
      }
      if (window.innerWidth < 900) {
        setSlidePerView(2);
      } else {
        setSlidePerView(4);
      }
    }

    handleResize();
  }, []);

  return (
    <>
      <div className="slide">
        <div className="section_slide">
          <Swiper spaceBetween={50} slidesPerView={slidesPerView} autoplay>
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  alt="Slider Seguradoras"
                  className="slideseguros"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SlideParceiros;
