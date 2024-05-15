import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
