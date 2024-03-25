"use client";

import { incubatedCards, incubatedCardsMobile } from "@/consts/incubated-cards";
import { cn } from "@/utils/cn";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
interface IncubatedListProps {
  onCurrentPlayingCard?: (value: number | null) => void;
  onActiveSlide?: (value: number) => void;
  onDescription: (desc: string) => void;
  currentPlayingCardId?: number | null;
  children: React.ReactNode;
  isMobile?: boolean;
  className?: string;
}

export function IncubatedCarousel({
  onCurrentPlayingCard,
  onActiveSlide,
  onDescription,
  currentPlayingCardId,
  children,
  isMobile,
  className,
}: IncubatedListProps) {
  const onPauseVideo = () => {
    if (currentPlayingCardId !== null && onCurrentPlayingCard) {
      const currentPlayingVideo = document.getElementById(
        `video-${currentPlayingCardId}`,
      ) as HTMLVideoElement;
      if (currentPlayingVideo) {
        currentPlayingVideo.pause();
        onCurrentPlayingCard(null);
      }
    }
  };

  const handleSlideChange = (swiper: any) => {
    const realIndex = swiper.realIndex;
    if (onActiveSlide) onActiveSlide(realIndex);
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
      initialSlide={0}
      className={cn(
        "w-[100vw]  rounded-xl lg:w-[41.6rem] dt:w-[43.7rem]",
        className,
      )}
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
      {children}
      <button
        className={`swiper-button-next button-incubated-next z-60  button rounded-xl  ${isMobile && "button-mobile"}`}
        onClick={!isMobile ? onPauseVideo : () => null}
      ></button>
      <button
        className={`swiper-button-prev button-incubated-prev  button rounded-xl  ${isMobile && "button-mobile"}`}
        onClick={!isMobile ? onPauseVideo : () => null}
      ></button>
      <div className="swiper-pagination z-20 hidden "></div>
    </Swiper>
  );
}
