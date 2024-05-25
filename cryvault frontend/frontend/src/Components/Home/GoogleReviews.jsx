import { Box, Button, Container, Link, Rating, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import useDeviceSize from "../../Utilities/useDeviceSize";
import SwiperCore from "swiper";
import { FcGoogle } from "react-icons/fc";
const reviews = [
  {
    userImage: "",

    alterImage: "",

    userName: "Vikram goud",

    userEmail: "",

    googleMapLocation: "https://www.google.com/maps/contrib/103344430736844963744/reviews",

    content: "Srinivas is doing great job… thank you for your service Srinivas am really happy with your service thank you ",

    customerID: null,

    rating: 4,

    photoOrVideo: [],

    _id: "662237b63be61d6d5e15a5ae",
  },
  {
    userImage: "",

    alterImage: "",

    userName: "Vikram goud",

    userEmail: "",

    googleMapLocation: "https://www.google.com/maps/contrib/103344430736844963744/reviews",

    content: "Srinivas is doing great job… thank you for your service Srinivas am really happy with your service thank you ",

    customerID: null,

    rating: 4,

    photoOrVideo: [],

    _id: "662237b63be61d6d5e15a5ae",
  },
  {
    userImage: "",

    alterImage: "",

    userName: "Vikram goud",

    userEmail: "",

    googleMapLocation: "https://www.google.com/maps/contrib/103344430736844963744/reviews",

    content: "Srinivas is doing great job… thank you for your service Srinivas am really happy with your service thank you ",

    customerID: null,

    rating: 4,

    photoOrVideo: [],

    _id: "662237b63be61d6d5e15a5ae",
  },
  {
    userImage: "",

    alterImage: "",

    userName: "Vikram goud",

    userEmail: "",

    googleMapLocation: "https://www.google.com/maps/contrib/103344430736844963744/reviews",

    content: "Srinivas is doing great job… thank you for your service Srinivas am really happy with your service thank you ",

    customerID: null,

    rating: 4,

    photoOrVideo: [],

    _id: "662237b63be61d6d5e15a5ae",
  },
];
const GoogleReviews = () => {
  const isMobile = useDeviceSize() === "xs";

  SwiperCore.use([Navigation, Pagination, A11y]);
  const stars = Array.from({ length: 5 }, () => (
    <span className="wp-star">
      <svg width="17" height="17" viewBox="0 0 1792 1792">
        <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" fill="#fb8e28"></path>
      </svg>
    </span>
  ));
  return (
    <Container sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", paddingTop: "5rem", alignItems: "center", gap: "2rem", marginBottom: isMobile ? "5rem" : "25rem" }}>
      <Box style={{ width: isMobile ? "100%" : "30%", display: "flex", alignItems: "start", gap: "0.5rem" }}>
        <img loading="lazy" decoding="async" src="https://www.cryovault.in/wp-content/plugins/widget-google-reviews/assets/img/gmblogo.svg" alt="Cryovault | Best Stem Cell Banking in Hyderabad | India" width="50" height="50" title="Cryovault | Best Stem Cell Banking in Hyderabad | India" />

        <Box style={{ display: "flex", alignItems: "start !important", flexDirection: "column", gap: "0.5rem" }}>
          <Link href="https://maps.google.com/?cid=1616921368839435671" target="_blank" rel="nofollow noopener">
            <Typography sx={{ fontWeight: "600" }} variant="h4">
              Cryovault | Best Stem Cell Banking in Hyderabad | India
            </Typography>
          </Link>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "700", color: "rgb(251, 142, 40)" }}>
              5.0 {stars.map((star, index) => star)}{" "}
            </Typography>
          </Box>

          <Typography variant="h4">Based on 284 reviews</Typography>
          <img loading="lazy" decoding="async" src="https://www.cryovault.in/wp-content/plugins/widget-google-reviews/assets/img/powered_by_google_on_white.png" alt="powered by Google" style={{ maxWidth: "144px", height: "auto" }} />
          <Button variant="contained" sx={{ width: isMobile ? "40%" : "100%" }} className="googleBtn">
            <Link sx={{ textDecoration: "none", color: "white" }} href="https://search.google.com/local/writereview?placeid=ChIJH5WwOMiWyzsRl7VpC2t1cBY" onClick="return rplg_leave_review_window.call(this)" target="_blank" rel="noopener">
              Review us on
              <svg viewBox="0 0 512 512" height="18" width="18">
                <g fill="none" fillRule="evenodd">
                  <path d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z" fill="#4285f4"></path>
                  <path d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z" fill="#34a853"></path>
                  <path d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z" fill="#fbbc05"></path>
                  <path d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z" fill="#ea4335"></path>
                  <path d="M20 20h472v472H20V20z"></path>
                </g>
              </svg>
            </Link>
          </Button>
        </Box>
      </Box>

      <Box style={{ width: isMobile ? "100%" : "60%" }}>
        <Swiper
          slidesPerView={isMobile ? 1 : 3}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          navigation={true}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide>
              <SingleReview review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export const SingleReview = React.memo(({ review }) => {
  return (
    <Box key={review?._id} sx={{ display: "flex", flexDirection: "column", marginBottom: 2, background: "#fafafa", padding:"1rem" }}>
      <Box sx={{ display: "flex", alignItems: "start !important", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex"}}>
          <img src={review?.userImage || "default-user-image.png"} alt="User avatar" style={{ width: 50, height: 50, borderRadius: "50%" }} /> {/* Handle missing user image gracefully */}
          <Box sx={{ display: "flex", flexDirection: "column", marginLeft: 1 }}>
            <Typography variant="body1">{review?.userName}</Typography>
            <Typography variant="caption" color="text.secondary">
              {/* Time logic goes here */}
            </Typography>
          </Box>
        </Box>

        <FcGoogle style={{ marginLeft: "auto", fontSize:"1.5rem" }} />
      </Box>
      <Rating name="read-only" value={review?.rating} readOnly />
      <Box sx={{ marginTop: 1, height: "5vh", overflow: "auto" }}>
        <Typography variant="h5">{review?.content}</Typography>
      </Box>
    </Box>
  );
});

export default GoogleReviews;
