"use client";

import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./style/slider.css";
import videos from "../../types/videos";
import modules from "@/app/types/modules";

// ICONS
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

register();

declare type SliderProps = {
  items: any[];
  pagination: boolean;
};

export default function Slider(props: SliderProps) {
  const { items, pagination } = props;
  const [slidesPerView, setSlidePerView] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1060) {
        setSlidePerView(2);
      } else {
        setSlidePerView(4);
      }
    }

    handleResize();
  }, []);

  return (
    <div className="sectionSlider">
      <div className="sectionNavigationSlider">
        <i className="slide-button-prev">
          <FaArrowLeft />
        </i>
        <i className="slide-button-next">
          <FaArrowRight />
        </i>
      </div>

      <Swiper
        className="slide"
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        pagination={{
          enabled: pagination,
          clickable: true,
        }}
        navigation={{
          nextEl: ".slide-button-next",
          prevEl: ".slide-button-prev",
        }}
      >
        {items.map((item) => (
          <SwiperSlide className="card" key={item.id}>
            <a href={item.link}>
              <Image
                src={item.image}
                width={340}
                height={530}
                alt={item.title}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
