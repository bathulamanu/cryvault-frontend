import React from "react";
import ReachUs from "../Components/Common/ReachUs";
import { Link, Box, Breadcrumbs, Typography } from "@mui/material";
import TableContents from "../Components/Common/TableContents";
import useDeviceSize from "../Utilities/useDeviceSize";

const CordBloodbanking = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 90px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
                <Typography variant="h1" className="title">
                  Cord Blood Banking
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
                    Cord Blood Banking
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
                  <Typography>Cord blood , or placental blood, is the blood left behind in a baby’s umbilical cord after it’s been cut. This blood contains many types of stem cells, including HEMATOPOITIC STEM CELLS can be differentiate and proliferate into other blood cells in the body. These cells exit only in the bone marrow, cord blood, and peripheral blood, and can be transplanted to treat patients with blood disorders, Immunodeficiency’s, and other diseases. Like all your baby’s cells, cord blood stem cells are genetically unique to each individual and genetically similar to the stem cells of family members. Unlike bone marrow, cord blood cells can be easily collected, although at only one point in life: immediately after birth.</Typography>
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

export default CordBloodbanking;
