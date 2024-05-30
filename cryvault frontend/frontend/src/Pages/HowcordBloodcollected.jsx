import React from "react";
import ReachUs from "../Components/Common/ReachUs";
import TableContents from "../Components/Common/TableContents";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";

const HowcordBloodcollected = () => {
  const isMobile = useDeviceSize() === "xs";
  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "100px 0px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: "100% !important" }}>
                <Typography  sx={{ fontSize: isMobile ? "24px !important" : "45px !important" }} variant="h1" className="title">
                  When and How is Cord Blood Collected
                </Typography>
                {isMobile ? null : (
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                      <Typography variant="body2" color="text.primary">
                        Stem Cell Banking
                      </Typography>
                    </Link>
                    <Typography variant="body2" color="text.primary">
                      When and How is Cord Blood Collected
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
              <Box className="course-details-content course-details-2">
                <Box className="course-overview">
                  <Typography>At the time of the collection every parents have the bad and negative assumptions regarding the collection of the cord blood and cord tissue. But don’t worry sir/madam we are not going to harm either mother or baby.</Typography>
                  <Typography>When you are going to hospital for the delivery please give us a call, then we provide our paramedic, she will come to the hospital and escort you until delivery.</Typography>

                  <Typography>
                    After delivery the doctor will first clamp both the sides one at baby side another one at mother side of the umbilical cord. In between these two clamps doctor cuts the umbilical cord and the baby is separated and handed over to the pediatrician. So here we are not touching the baby at all. Now the mother side umbilical cord which is connected to the placenta, earlier it was thrown as a biological waste, but when we came to know that there are some magical cells in it, we started preserving it. Then the doctor will give the umbilical cord and placenta in a tray then our paramedic will just prick the umbilical cord and the blood flows into the blood bag by gravitational force. Here we are not squeezing or pulling the umbilical cord. The blood bag capacity is 150 ml in that blood bag 22ml anti-coagulant is present. So while collecting the cord blood our paramedic keep on pacifying the blood bag, for proper mixing of anti-coagulant to avoid blood clots. Usually in
                    normal delivery we collect 100 ml to 120ml and in Caesarean we do collect 80ml to 100 ml of cord blood. After collecting the complete blood in to the blood bag, we also collect the umbilical cord. Here we separate the umbilical cord from the placenta and clean with the alcohol swabs properly and cut in to two pieces of 10cm each and keep them in vials.
                  </Typography>

                  <Typography>After the collection was done our paramedic will call one of your nominee person and shows the sample before we close the kit box and seal it.</Typography>
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

export default HowcordBloodcollected;
