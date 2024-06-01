import { Box, Button, Container, Link, Rating, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import useDeviceSize from "../../Utilities/useDeviceSize";
import SwiperCore from "swiper";
import "./Images.css";

const GalleryImagesCategory = () => {
  const isMobile = useDeviceSize() === "xs";
  const [categoryActiveTab, setCategoryActiveTab] = useState("All");
  const categories = ["All", "Mother's Day", "Yoga Program", "5k run "];

  const handleCategoryClick = (category) => {
    setCategoryActiveTab(category);
  };

  return (
    <Container sx={{ paddingLeft: isMobile ? "" : "200px !important", paddingRight: isMobile ? "" : "200px !important" }}>
      <Swiper
        slidesPerView={isMobile ? 3 : categories.length}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{ width: "100%" }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category} style={{ width: "200px !important" }}>
            <Box
              style={{
                border: "1px solid red",
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontSize: isMobile ? "1.5rem" : "2.5rem",
              }}
              onClick={() => handleCategoryClick(category)}
              className={categoryActiveTab === category ? " activeSingleCategory" : "singleCategory"}
            >
              {category}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="swiper-button-next"></div> */}
      {/* <div className="swiper-button-prev"></div> */}
      {/* <div className="swiper-pagination"></div> */}
    </Container>
  );
};

export default GalleryImagesCategory;
