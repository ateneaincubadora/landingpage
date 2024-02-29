"use client";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { incubatedCards } from "@/consts/incubated-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

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
  const [currentPlayingCardId, setCurrentPlayingCardId] = useState<
    number | null
  >(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(1);

  const onTogglePlayPause = (cardId: number) => {
    if (currentPlayingCardId === cardId) {
      const currentPlayingVideo = document.getElementById(
        `video-${currentPlayingCardId}`,
      ) as HTMLVideoElement;
      currentPlayingVideo.pause();
      setCurrentPlayingCardId(null);
      return;
    }

    if (currentPlayingCardId !== null) {
      const currentPlayingVideo = document.getElementById(
        `video-${currentPlayingCardId}`,
      ) as HTMLVideoElement;
      if (currentPlayingVideo) {
        currentPlayingVideo.pause();
      }
    }

    const video = document.getElementById(
      `video-${cardId}`,
    ) as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setCurrentPlayingCardId(cardId);
      }
    }
  };

  const onPauseVideo = () => {
    if (currentPlayingCardId !== null) {
      const currentPlayingVideo = document.getElementById(
        `video-${currentPlayingCardId}`,
      ) as HTMLVideoElement;
      if (currentPlayingVideo) {
        currentPlayingVideo.pause();
        setCurrentPlayingCardId(null);
      }
    }
  };

  return (
    <Swiper
      onSlideChange={(swiper: any) => {
        setActiveSlideIndex(swiper.realIndex);
      }}
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
      {incubatedCards.map((card, index) => (
        <SwiperSlide key={card.id} className="px-4 lg:px-0 ">
          <IncubatedCard
            card={card}
            isPlaying={currentPlayingCardId === card.id}
            isActive={index === activeSlideIndex}
            onTogglePlayPause={() => onTogglePlayPause(card.id)}
          />
        </SwiperSlide>
      ))}

      <button className="swiper-button-next " onClick={onPauseVideo}></button>
      <button className="swiper-button-prev " onClick={onPauseVideo}></button>
      <div className="swiper-pagination lg:hidden"></div>
    </Swiper>
  );
}
