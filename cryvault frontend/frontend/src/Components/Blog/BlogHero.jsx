import { Box, Typography } from "@mui/material";
import React from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";
import { useSelector } from "react-redux";

const BlogHero = () => {
  const isMobile = useDeviceSize() === "xs";
  const pageInfo = useSelector((state) => state.home.pageInfo);
  const aboutCryovaultHeroImg = pageInfo?.[0]?.[1]?.pageHeaderImage;
  // const url = `https://flyingbyts.s3.ap-south-2.amazonaws.com/s3/${aboutCryovaultHeroImg}`;
  const url = `https://flyingbyts.s3.ap-south-2.amazonaws.com/s3/HeaderBackgroundImage/SwGBbDNdjf-Bannerslide-01.jpg`;
  console.log({url})
  return (
    <Box sx={{background: `https://flyingbyts.s3.ap-south-2.amazonaws.com/s3/HeaderBackgroundImage/SwGBbDNdjf-Bannerslide-01.jpg !important`, backgroundImage: `https://flyingbyts.s3.ap-south-2.amazonaws.com/s3/${aboutCryovaultHeroImg} !important`, padding: isMobile ? " 50px 7px !important" : "120px 0px !important" , border:"2px solid red"}} className="edu-breadcrumb-area breadcrumb-style-2 bg-image ">
      <Box className="container">
        <Box className="breadcrumb-inner">
          <Box className="page-title">
            <Typography variant="h1" className="title">
              Blog
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogHero;
