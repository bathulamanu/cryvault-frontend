import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Typography } from "@mui/material";

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
    }
  };
  return (
    //   <Box>
    //     <Swiper
    //       slidesPerView={1}
    //       spaceBetween={0}
    //       autoplay={{
    //         delay: 2500,
    //         disableOnInteraction: false,
    //       }}
    //     >
    //       <SwiperSlide>
    //         <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <img src="assets/images/mother-babie.png" style={{height:"100vh", width:"100vw"}}/>
    //       </SwiperSlide>
    //     </Swiper>
    //   </Box>
    // );

    <>
      <Carousel
        responsive={responsive}
        // autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        swipeable={true}
        className="header-content-banner carousel-itemm"
      >
        <Box className="items">
          <Box className="banner_contnt" sx={{ left:"80px !important", top: "40% !important" }}>
            <Box className="container">
              <Box className="banner_contnt-txt">
                <Typography variant="h2" sx={{ fontSize: "36px !important" }}>
                  Stem cell banking is an<br></br> effective method to <br></br> safeguard your family's
                  <br /> health{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
          <img src="assets/images/banner_cryovault_b.webp" alt="baby" />
        </Box>
        {/* <Box className="items banner_sec" sx={{ top: "45% !important" }}>
          <Box className="banner_contnt" sx={{ top: "45% !important" }}>
            <Box className="container">
              <Box className="banner_contnt-txt">
                <Typography variant="h2" sx={{ fontSize: "36px !important" }}>
                  Sometimes the
                  <br />
                  Smallest Things{" "}
                </Typography>
                <Typography variant="h2" sx={{ fontSize: "36px !important" }}>
                  Take up the <br />
                  most place in your heart{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
          <img src="assets/images/baby.webp" alt="baby" />
        </Box> */}

        <div className="items banner_sec">
          <div className="banner_contnt">
            <div className="container">
              <div className="banner_contnt-txt">
                <h2 style={{ fontWeight:"500px !important",}}>
                  Sometimes the
                  <br />
                  Smallest Things{" "}
                </h2>
                <h3>
                  Take up the <br />
                  most place in your heart{" "}
                </h3>
              </div>
            </div>
          </div>
          <img src="assets/images/baby.webp" alt="baby" />
        </div>
        <Box className="items banner_sec3">
          <Box className="banner_contnt" sx={{ top: "45% !important" }}>
            <Box className="container">
              <Box className="banner_contnt-txt">
                <Typography variant="h3" sx={{ fontSize: "36px !important" }}>
                  You only get one opportunity to
                  <br /> preserve your baby's stem cells and
                  <br /> open up a world of
                  <br /> possibility for their future.
                </Typography>
              </Box>
            </Box>
          </Box>
          <img src="assets/images/mother-babie.png" alt="baby" />
        </Box>
      </Carousel>
    </>
  );
};

export default Banner;
