import React from "react";
import ReachUs from "../Components/Common/ReachUs";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";
import TableContents from "../Components/Common/TableContents";

const UmbilicalCord = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 90px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }} >
                <Typography  sx={{ fontSize: isMobile ? "24px !important" : "45px !important" }} variant="h1" className="title">
                  About Umbilical Cord
                </Typography>
              </Box>
              {isMobile ? null : (
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/pregnancy">
                    <Typography variant="body2" color="text.primary">
                      Stem Cell Banking
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.primary">
                    Stem Cell Banking
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="edu-section-gap course-details-area">
        <Box className="container">
          <Box className="row row--30">
            <Box className="col-lg-8">
              <Box className="course-details-content course-details-2">
                <Box className="course-overview">
                  <Typography>Umbilical cord function as a connecting cord between mother and child during pregnancy. After a baby is delivered, the umbilical cord is cut and the mother side umbilical cord is connected to placenta. Normally earlier it was thrown as a biological waste, but when we came to know that there are some magical cells in it, we started preserving it.</Typography>
                </Box>
              </Box>
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

export default UmbilicalCord;
