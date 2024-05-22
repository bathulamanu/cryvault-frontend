import React from "react";
import ReachUs from "../Components/Common/ReachUs";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";

const VisionMission = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 0px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
                <Typography variant="h1" className="title">
                  Vision & Mission
                </Typography>
              </Box>
              {isMobile ? null : (
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/pregnancy">
                    <Typography variant="body2" color="text.primary">
                      About
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.primary">
                    Vision & Mission
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="gap-top-equal vision_abt">
        <Box className="container">
          <Box className="row g-5 align-items-center">
            <Box className="col-lg-4">
              <img src="assets/images/visiom.webp" />
            </Box>
            <Box className="col-lg-8">
              <Box className="about-content sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                <Typography>Top most trusted stemcel banking in India and establish this making Indian company in the world’s largest. To accomplish the association quality by developing and motivating the correct point of view of cryovault team and offering open doors for development, advancement and upgrade.</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className=" edu-event-area event-area-3 bg-image vision_abt">
        <Box className="container">
          <Box className="row g-5 align-items-center">
            <Box className="col-lg-8">
              <Box className="about-content sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                <Typography>Partner activity with our customer to provide latest technology and team establish to reach service to every customer, with in customer available charges.</Typography>
                <Typography>As per trusted stem cell banking company, our mission is to provide the most affordable cord blood stem cell banking available, while maintaining the industry’s highest scientific standards in our sample processing and storage. we continue to be successful in that mission.</Typography>
              </Box>
            </Box>
            <Box className="col-lg-4">
              <img src="assets/images/Mission.webp" />
            </Box>
          </Box>
        </Box>
      </Box>

      <ReachUs />
    </>
  );
};

export default VisionMission;
