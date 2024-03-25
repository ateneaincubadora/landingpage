"use client";

import { incubatedCardsCloudinary } from "@/consts/incubated-cards";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "./incubated-list.css";

import IncubatedCard from "./incubated-card";
import { IncubatedCarousel } from "./incubated-carousel";

interface IncubatedListProps {
  onDescription: (desc: string) => void;
}

export default function IncubatedList({ onDescription }: IncubatedListProps) {
  const [currentPlayingCardId, setCurrentPlayingCardId] = useState<
    number | null
  >(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(1);

  const onTogglePlayPause = (indexCard: number) => {
    if (activeSlideIndex !== indexCard) return;

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

  return (
    <IncubatedCarousel
      onDescription={onDescription}
      currentPlayingCardId={currentPlayingCardId}
      onCurrentPlayingCard={setCurrentPlayingCardId}
      onActiveSlide={setActiveSlideIndex}
    >
      {incubatedCardsCloudinary.map((card, index) => (
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
    </IncubatedCarousel>
  );
}
