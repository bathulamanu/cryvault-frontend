import React from "react";
import ReachUs from "../Components/Common/ReachUs";
import { Link, Box, Typography, Breadcrumbs } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";
import TableContents from "../Components/Common/TableContents";

const StoreStemcells = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "60px 100px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: "100% !important" }}>
                <Typography sx={{ fontSize: isMobile ? "24px !important" : "25px !important" }} variant="h1" className="title">
                  How to Store Your STEM CELLS WITH CRYOVAULT
                </Typography>
                {isMobile ? null : (
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/pregnancy">
                      <Typography variant="body2" color="text.primary">
                        Stem Cell Banking
                      </Typography>
                    </Link>
                    <Typography variant="body2" color="text.primary">
                      How to Store Your STEM CELLS WITH CRYOVAULT
                    </Typography>
                  </Breadcrumbs>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="edu-section-gap course-details-area">
        <Box className="container">
          <Box className="row row--30">
            <Box className="col-lg-8">
              <Box className="course-details-content course-details-2"></Box>
            </Box>
            <Box className="col-lg-4">
              <Box className="course-sidebar-3 sidebar-top-position">
                <TableContents />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <ReachUs />
    </>
  );
};

export default StoreStemcells;
