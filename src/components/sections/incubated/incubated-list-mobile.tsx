import { incubatedCardsMobile } from "@/consts/incubated-cards";
import { IncubatedCarousel } from "./incubated-carousel";
import { SwiperSlide } from "swiper/react";

import React from "react";
import IconPlay from "@/components/icons/icon-play";

interface IncubatedListMobileProps {
  onDescription: (desc: string) => void;
}

export default function IncubatedListMobile({
  onDescription,
}: IncubatedListMobileProps) {
  return (
    <IncubatedCarousel onDescription={onDescription}>
      {incubatedCardsMobile.map((card, index) => (
        <SwiperSlide key={card.id} className="slide-mobile relative">
          <a href={card.video} target="_blank" rel="noreferrer">
            <img
              width="300"
              height="300"
              src={card.image}
              alt={`video capture of ${card.description}`}
              className="mx-auto  h-[400px] w-auto rounded-2xl "
            />
          </a>

          <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50">
            <IconPlay />
          </span>
        </SwiperSlide>
      ))}
    </IncubatedCarousel>
  );
}
