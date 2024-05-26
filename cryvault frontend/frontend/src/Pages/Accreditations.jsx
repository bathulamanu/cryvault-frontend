import React from "react";
import ReachUs from "../Components/Common/ReachUs";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";

const Accreditations = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 0px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
                <Typography variant="h1" className="title">
                  Accreditations & Certifications
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
                    Accreditations & Certifications
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="edu-section-gap">
        <Box className="container">
          <Box className="row" sx={{gap: isMobile? '2rem' : '1rem'}}>
            <Box className="col-md-3">
              <Box className="cer_out">
                <Box className={"edu-blog gallerImg blog-style-list sal-animate"} sx={{ margin: "0 !important" }}>
                  <Box className="thumbnail" sx={{ margin: "0 !important" }}>
                    <Link to="#">
                      <img style={{height:"300px !important"}} src="assets/images/ISO-9001-2015-certificate-scaled.webp" />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-md-3">
              <Box className="cer_out">
                <Box className={"edu-blog gallerImg blog-style-list sal-animate"} sx={{ margin: "0 !important" }}>
                  <Box className="thumbnail" sx={{ margin: "0 !important" }}>
                    <Link to="#">
                      <img style={{height:"300px !important"}} src="assets/images/ISO-9001-2015-certificate-scaled.webp" />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-md-3">
              <Box className="cer_out">
                <Box className={"edu-blog gallerImg blog-style-list sal-animate"} sx={{ margin: "0 !important" }}>
                  <Box className="thumbnail" sx={{ margin: "0 !important" }}>
                    <Link to="#">
                      <img style={{height:"300px !important"}} src="assets/images/ISO-9001-2015-certificate-scaled.webp" />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <ReachUs />
    </>
  );
};

export default Accreditations;
