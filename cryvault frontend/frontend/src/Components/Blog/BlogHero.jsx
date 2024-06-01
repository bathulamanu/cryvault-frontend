import { Box, Typography } from "@mui/material";
import React from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";
import { useSelector } from "react-redux";

const BlogHero = () => {
  const isMobile = useDeviceSize() === "xs";
  const pageInfo = useSelector((state) => state.home.pageInfo);
  const url = `https://flyingbyts.s3.ap-south-2.amazonaws.com/s3/HeaderBackgroundImage/SwGBbDNdjf-Bannerslide-01.jpg`;
  return (
    <div style={{backgroundImage:` url(${url})`, padding: isMobile ? "50px 7px" : "120px 40px" }} className=" edu-breadcrumb-area breadcrumb-style-2 bg-image ">
      <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
        <Box className="breadcrumb-inner">
          <Box className="page-title">
            <Typography  sx={{ fontSize: isMobile ? "24px !important" : "45px !important" }} variant="h1" className="title">
              Blog
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default BlogHero;
