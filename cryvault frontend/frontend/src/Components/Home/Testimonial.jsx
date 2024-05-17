import { Button, Container, Link, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import useDeviceSize from "../../Utilities/useDeviceSize";

const Testimonial = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <div style={{ position: "relative", marginBottom:isMobile ?"5rem" : "15rem", marginTop:   "15rem", paddingTop: "10rem", paddingBottom: isMobile ?"0rem" : "10rem" }} className="testimonailContainer">
      {isMobile ? null : (
        <>
          {" "}
          <img src="assets/images/testimonial-3-icon-bell.webp" className="position-ab icons-img bell" alt="pencil" />
          <img src="assets/images/testimonial-3-icon-chat.webp" style={{ bottom: "6%" }} className="position-ab chat-img bounce-animation" alt="pencil" />
          <img src="assets/images/testimonial-3-icon-hand.webp" className="position-ab thumbg-img" alt="pencil" />
        </>
      )}
      <div className=" testimonialAboveImage" data-negative="false">
        <svg style={{ position: "absolute", top: "100px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path
            style={{
              fill: "#FFF7EF61",

              transformOrigin: "center",
              transform: "rotateY(0deg)",
            }}
            className="elementor-shape-fill"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>{" "}
      </div>
      <div className="section-title section-center">
        <span className="pre-title reviw_out">Business</span>
        <Typography variant="h2">
          What <span style={{ color: "#EF636D" }}> Parents </span> say
        </Typography>
        <div className="shape_in shape_in-bk" style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <img src="assets/images/med-img blk.svg" width="30" />
        </div>
        <Typography className="mb-0">
          Let’s start the journey towards success and enhance revenue for your<br></br> business. Take your company to the next level.
        </Typography>
      </div>

      <Container>
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <SingleSlide />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export const SingleSlide = React.memo(() => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <div className="singleSlide" style={{ width: isMobile ? "100%" : "65%" }}>
        <div className="quote-icon">
          <img src="assets/images/quote.svg" alt="quote svg" style={{ width: "4rem" }} />
        </div>
        <p>"I am grateful to Cryovault for providing top-notch stem cell storage services. Their knowledgeable staff guided us through the process with ease, giving us peace of mind knowing that our baby's future health is in good hands."</p>
        <div className="d-flex align-items-center avatr_blk">
          <img src="assets/images/Praveen-Kumar.webp" alt="quote svg" /> <h5 className="title">Praveen</h5>
        </div>
      </div>
    </>
  );
});

export default Testimonial;
