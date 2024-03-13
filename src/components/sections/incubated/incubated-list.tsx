"use client";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { incubatedCards } from "@/consts/incubated-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "./incubated-list.css";

import IncubatedCard from "./incubated-card";

interface IncubatedListProps {
  onDescription: (desc: string) => void;
}

export default function IncubatedList({ onDescription }: IncubatedListProps) {
  const [currentPlayingCardId, setCurrentPlayingCardId] = useState<
    number | null
  >(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(1);

  const onTogglePlayPause = (indexCard: number) => {
    if (currentPlayingCardId === null) {
      const currentPlayingVideo = document.getElementById(
        `video-${indexCard}`,
      ) as HTMLVideoElement;
      currentPlayingVideo.play();
      setCurrentPlayingCardId(indexCard);
      return;
    }

    if (currentPlayingCardId === indexCard) {
      const currentPlayingVideo = document.getElementById(
        `video-${indexCard}`,
      ) as HTMLVideoElement;
      currentPlayingVideo.pause();
      setCurrentPlayingCardId(null);
      return;
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

  const handleSlideChange = (swiper: any) => {
    const realIndex = swiper.realIndex;
    setActiveSlideIndex(realIndex);
    const activeIncubated = incubatedCards[realIndex];
    onDescription(activeIncubated.description);
  };

  return (
    <Swiper
      onSlideChange={handleSlideChange}
      effect={"coverflow"}
      grabCursor={false}
      centeredSlides={true}
      slidesPerView={"auto"}
      modules={[EffectCoverflow, Navigation, Pagination]}
      coverflowEffect={{
        rotate: 0,
        depth: 80,
        modifier: 2,
      }}
      initialSlide={1}
      className="w-[100vw]  rounded-xl lg:w-[41.6rem] dt:w-[43.7rem]"
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
      loop={true}
    >
      {incubatedCards.map((card, index) => (
        <SwiperSlide key={card.id}>
          <IncubatedCard
            index={index}
            card={card}
            isPlaying={currentPlayingCardId === index}
            isActive={index === activeSlideIndex}
            onTogglePlayPause={() => onTogglePlayPause(index)}
          />
        </SwiperSlide>
      ))}
      <button
        className="swiper-button-next button-incubated-next"
        onClick={onPauseVideo}
      ></button>
      <button
        className="swiper-button-prev button-incubated-prev"
        onClick={onPauseVideo}
      ></button>
      <div className="swiper-pagination lg:hidden"></div>
    </Swiper>
  );
}
