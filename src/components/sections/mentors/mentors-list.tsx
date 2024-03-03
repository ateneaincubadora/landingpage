"use client";

import {
  Pagination,
  EffectCoverflow,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { mentorsCards } from "@/consts/mentors-cards";
import { Swiper, SwiperSlide } from "swiper/react";

import "./mentors.styles.css";
import { useRef } from "react";

const breakpoints = {
  320: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 15,
  },
};

interface MentorsListProps {
  onDescription: (desc: string) => void;
}

export default function MentorsList({ onDescription }: MentorsListProps) {
  const swiperRef = useRef<any>(null);

  const handleSlideChange = () => {
    const activeSlideIndex = swiperRef.current.swiper.realIndex;
    const activeMentor = mentorsCards[activeSlideIndex];
    onDescription(activeMentor.description);
  };

  return (
    <Swiper
      ref={swiperRef}
      effect={"coverflow"}
      onSlideChange={handleSlideChange}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        depth: 300,
        modifier: 0,
        slideShadows: false,
      }}
      loop={true}
      modules={[Pagination, EffectCoverflow, Navigation, Autoplay]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: true,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      className="slider-mentors mx-auto h-full w-[100vw] overflow-hidden lg:w-auto"
      speed={500}
    >
      {mentorsCards.map((mentor) => (
        <SwiperSlide key={mentor.id} className="slide-mentors">
          <img
            src={mentor.logo}
            alt="mentors"
            loading="lazy"
            className=" swiper-image-mentor aspect-square rounded-full object-contain"
          />
        </SwiperSlide>
      ))}

      <div className="swiper-pagination"></div>

      <button className="swiper-button-next button-mentors-next"></button>
      <button className="swiper-button-prev button-mentors-prev"></button>
    </Swiper>
  );
}
