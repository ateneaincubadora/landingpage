import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { membersCards } from "@/consts/members-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import Card from "./card";
export default function MembersListMobile() {
  return (
    <section className="block lg:hidden">
      <Swiper
        loop={true}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: true,
        }}
        grabCursor={true}
        modules={[Navigation, Pagination, Thumbs]}
        pagination={{ el: ".pagination", clickable: true }}
        className="w-[100vw] overflow-hidden"
      >
        {membersCards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card card={card} />
          </SwiperSlide>
        ))}
        <div className="pagination flex items-center justify-center gap-x-2 pt-4 text-center lg:hidden"></div>

        <button className="swiper-button-next"></button>
        <button className="swiper-button-prev"></button>
      </Swiper>
    </section>
  );
}
