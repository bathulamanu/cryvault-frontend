import { Box } from "@mui/material";
import React from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";

const VideoHero = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Box sx={{padding: isMobile ? " 50px 7px !important" : "200px 90px !important"}} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
      <Box className="container">
        <Box className="breadcrumb-inner">
          <Box className="page-title d-flex align-items-center">
            <Box className="w-100">
              <h1 className="title">Videos</h1>
              <p className="mb-0">Newborn Stem Cell</p>
            </Box>
            <ul class="breadcrumb">
              <li>
                <a href="#">Gallery</a>
              </li>
              <li> / </li>
              <li class="active">Videos</li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoHero;
