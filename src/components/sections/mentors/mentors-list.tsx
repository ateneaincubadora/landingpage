"use client";

import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import { mentorsCards } from "@/consts/mentors-cards";
import { Swiper, SwiperSlide } from "swiper/react";

import "./mentors.styles.css";
import { useRef } from "react";

const breakpoints = {
  320: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 7,
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
      className="mx-auto w-[100vw] overflow-hidden lg:w-auto"
      modules={[Pagination, EffectCoverflow, Navigation]}
      onSlideChange={handleSlideChange}
      breakpoints={breakpoints}
      slidesPerView={"auto"}
      centeredSlides={true}
      effect={"coverflow"}
      initialSlide={4}
      ref={swiperRef}
      loop={true}
      speed={500}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: true,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      coverflowEffect={{
        rotate: 6,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      }}
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
