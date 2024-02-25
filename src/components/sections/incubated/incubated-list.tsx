"use client";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { incubatedCards } from "@/consts/incubated-cards";
import { Swiper, SwiperSlide } from "swiper/react";

import "./incubated-list.css";

import IncubatedCard from "./incubated-card";

const breakpoints = {
  320: {
    slidesPerView: 1,
    slidesPerGroup: 1,
  },
  768: {
    slidesPerView: 3,
  },
};

export default function IncubatedList() {
  return (
    <Swiper
      breakpoints={breakpoints}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      modules={[EffectCoverflow, Navigation, Pagination]}
      coverflowEffect={{
        rotate: 0,
        stretch: 10,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      }}
      initialSlide={1}
      className="w-auto overflow-hidden lg:w-full"
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: true,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      speed={700}
    >
      {incubatedCards.map((card) => (
        <SwiperSlide key={card.id} className="px-4 lg:px-0 ">
          <IncubatedCard card={card} />
        </SwiperSlide>
      ))}

      <button className="swiper-button-next "></button>
      <button className="swiper-button-prev "></button>
      <div className="swiper-pagination lg:hidden"></div>
    </Swiper>
  );
}
