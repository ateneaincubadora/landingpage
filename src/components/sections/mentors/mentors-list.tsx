"use client";

import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import { mentorsCards } from "@/consts/mentors-cards";
import { Swiper, SwiperSlide } from "swiper/react";

import "./mentors.styles.css";

const breakpoints = {
  320: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 7,
  },
};

export default function MentorsList() {
  return (
    <Swiper
      effect={"coverflow"}
      breakpoints={breakpoints}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 6,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      }}
      initialSlide={4}
      loop={true}
      modules={[Pagination, EffectCoverflow, Navigation]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: true,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      className="mx-auto w-[100vw] overflow-hidden lg:w-auto"
      speed={500}
    >
      {mentorsCards.map((mentor) => (
        <SwiperSlide key={mentor.id}>
          <img
            src={mentor.logo}
            alt="mentors"
            loading="lazy"
            className=" swiper-image-mentor rounded-full object-cover"
          />
        </SwiperSlide>
      ))}

      <div className="swiper-pagination"></div>
      <button className="swiper-button-next "></button>
      <button className="swiper-button-prev "></button>
    </Swiper>
  );
}
