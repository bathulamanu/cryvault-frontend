import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";
const ImageHero = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Box sx={{ padding: isMobile ? " 50px 7px !important" : "60px 100px !important" }} className={isMobile ? "contactbgImg edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19" : "edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19"}>
      <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
        <Box className="breadcrumb-inner">
          <Box className="page-title d-flex align-items-center">
            <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
              <Typography sx={{ fontSize: isMobile ? "24px !important" : "25px !important", width: "75%" }} variant={isMobile ? "h3" : "h1"} className={isMobile ? "mobileTitle" : "title"}>
                Images
              </Typography>
            </Box>

            {isMobile ? null : (
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/images">
                  <Typography variant="body2" color="text.primary">
                    Gallery
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.primary">
                  Images
                </Typography>
              </Breadcrumbs>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageHero;
