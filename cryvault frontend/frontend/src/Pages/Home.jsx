import React from "react";
import Banner from "../Components/Home/Banner";
import WhyBank from "../Components/Home/WhyBank";
import WhyPreserve from "../Components/Home/WhyPreserve";
import WhyShould from "../Components/Home/WhyShould";
import HowItWorks from "../Components/Home/HowItWorks";
import BookAppointment from "../Components/Home/BookAppointment";
import Stats from "../Components/Home/Stats";
import GoogleReviews from "../Components/Home/GoogleReviews";
import Testimonial from "../Components/Home/Testimonial";
import Videos from "../Components/Home/Videos";
import EnrollBaby from "../Components/Home/EnrollBaby";
import CallUs from "../Components/Home/CallUs";
import HomeBlog from "../Components/Home/HomeBlog";
import useDeviceSize from "../Utilities/useDeviceSize";

const Home = () => {
  const isMobile = useDeviceSize() === "xs";
  return (
    <div style={{ maxWidth: "100vw" }}>
      <Banner />
      <WhyBank />
      {isMobile ? <div style={{ height: "50vh" }} /> : <div style={{ height: "20vh" }} />}

      <WhyPreserve />
      <WhyShould />
      <HowItWorks />
      <BookAppointment />
      <Stats />
      <GoogleReviews />
      <Testimonial />
      <Videos />
      <EnrollBaby />
      <CallUs />
      <HomeBlog />
    </div>
  );
};

export default Home;
