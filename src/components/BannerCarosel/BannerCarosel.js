import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../css/carosel.css";

// import required modules
import { Navigation, Autoplay } from "swiper";
import bannerImages from "../../API/bannerImages";

export default function BannerCarosel() {
  return (
    <>
      <Swiper
        navigation={true}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {bannerImages.map((img) => {
          return (
            <SwiperSlide>
              <img src={img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
