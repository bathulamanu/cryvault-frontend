import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";

const VideoHero = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 40px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
      <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
        <Box className="breadcrumb-inner">
          <Box className="page-title d-flex align-items-center">
            <Box  sx={{ width: isMobile ? "100%" : "80% !important" }}>
              <Typography variant="h1" className="title">
                Videos
              </Typography>
            </Box>
            {isMobile ? null : (
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  <Typography variant="body2" color="text.primary">
                    Gallery
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.primary">
                  Videos
                </Typography>
              </Breadcrumbs>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoHero;
