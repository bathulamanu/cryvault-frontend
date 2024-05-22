import { Box, Typography } from "@mui/material";
import React from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";

const BlogHero = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Box sx={{padding: isMobile ? " 50px 7px !important" : "120px 0px !important"}}  className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
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
