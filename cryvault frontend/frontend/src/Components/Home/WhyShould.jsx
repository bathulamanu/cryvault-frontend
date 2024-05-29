import { Box, Link, Typography } from "@mui/material";
import React from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";
const WhyShould = () => {
  const isMobile = useDeviceSize() === "xs";
  return (
    <>
      <Box className="gap-tb-text position-relative overflow-hidden">
        <Box className="container">
          <Box className="section-title section-center">
            <Typography variant="h2" className="title">
              Why Should Your Family Bank Cord Blood?
            </Typography>
            <Box className="shape_in shape_in-bk" style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <img src="assets/images/med-img blk.svg" width="30" />
            </Box>
            <Typography>
              Cord blood provides a valuable source of stem cells that can be used in the treatment of various medical conditions, such as leukemia and<br></br> other blood disorders. These stem cells, collected from the umbilical cord at birth, offer potential therapeutic options for both the child and, in some cases, compatible family members.
            </Typography>
            <Box className="about-btn sal-animate" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
              <Link href="#" className="edu-btn">
                Learn more
              </Link>
            </Box>
          </Box>
        </Box>
        {isMobile ? null : <img className=" position-ab triangle-btn" src="assets/images/anim-icon-9.webp" alt="Shape" />}

        {/* <img className=" position-ab rainbow-img" src="assets/images/rainbow-star.webp" alt="Shape" /> */}
      </Box>
    </>
  );
};

export default WhyShould;
