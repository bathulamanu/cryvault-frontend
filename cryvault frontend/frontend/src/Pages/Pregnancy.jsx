import React from "react";
import { Link } from "react-router-dom";
import ReachUs from "../Components/Common/ReachUs";
import { Box, Typography } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";

const Pregnancy = () => {
  const isMobile = useDeviceSize() === "xs";
  return (
    <>
      <Box className="pagnen_bgimg">
        <Box className="pmgg-1">
          <img src="assets/images/bg3-big.webp" />
        </Box>
      </Box>

      <Box className="py-5 pragnt_ot">
        <Box className="container" >
          <Box className={ "row" } sx={{ gap: isMobile ? "2rem" : "0rem" }}>
            <Box className={isMobile ? " trimesterMobile col-md-4" : "col-md-4"}>
              <Link to="/first-trimester">
                <Box className="d-flex">
                  <img src="assets/images/med-img blk heart.svg" width="50" />
                  <Box className="preg_ot">
                    <Typography variant="h3">First Trimester</Typography>
                    <Typography variant="h4">0-3 Months</Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
            <Box className={isMobile ? " trimesterMobile col-md-4" : "col-md-4"}>
              <Link to="/second-trimester">
                <Box className="d-flex">
                  <img src="assets/images/med-img blk heart.svg" width="50" />
                  <Box className="preg_ot">
                    <Typography variant="h3">Second Trimester</Typography>
                    <Typography variant="h4">4-6 Months</Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
            <Box className={isMobile ? " trimesterMobile col-md-4" : "col-md-4"}>
              <Link to="/third-trimester">
                <Box className="d-flex">
                  <img src="assets/images/med-img blk heart.svg" width="50" />
                  <Box className="preg_ot">
                    <Typography variant="h3">Third Trimester</Typography>
                    <Typography variant="h4">7-9 Months</Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Box>

          <Box className="text-center pt-5">
            <img src="assets/images/20-week.webp" width="600" />
          </Box>
        </Box>
      </Box>
      <ReachUs />
    </>
  );
};

export default Pregnancy;
