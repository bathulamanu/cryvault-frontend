import React from "react";
import { Box, Breadcrumbs, Button, Link, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import "./Common.css";
const OurStory = () => {
  return (
    <Box className="bg_counter_img">
      <Box className="container">
        <Box className="section-title section-center">
          <Typography variant="h2" className="title">OUR STORY</Typography>
          <Typography>It is a long established fact that a reade.</Typography>
          <Box className="shape_in shape_in-bk excer_ot">
            {" "}
            <img src="assets/images/med-img blk heart.svg" width="45" />
          </Box>
        </Box>

        <Box className="countr_out">
          <Box className="row g-5">
            <Box className="col-lg-3 col-sm-6 mt-0">
              <Box className="edu-counterup counterup-style-4">
                <Box className="icon primary-color">
                  <img src="assets/images/happy-moms.png" alt="baby" />
                </Box>
                <Typography sx={{fontSize:"5rem !important", fontWeight:"500 !important"}}  className="counter-item ">
                  53,926 <span>+</span>
                </Typography>
                <Typography className="title">HAPPY MOMs</Typography>
              </Box>
            </Box>
            <Box className="col-lg-3 col-sm-6 mt-0">
              <Box className="edu-counterup counterup-style-4">
                <Box className="icon secondary-color">
                  <img src="assets/images/clinic-rooms.png" alt="baby" />
                </Box>
                <Typography sx={{fontSize:"5rem !important", fontWeight:"500 !important"}} className="counter-item ">312</Typography>
                <Typography className="title">Clinic Rooms</Typography>
              </Box>
            </Box>
            <Box className="col-lg-3 col-sm-6 mt-0">
              <Box className="edu-counterup counterup-style-4">
                <Box className="icon extra08-color">
                  <img src="assets/images/awards.png" alt="baby" />
                </Box>
                <Typography sx={{fontSize:"5rem !important", fontWeight:"500 !important"}}  className="counter-item ">22</Typography>
                <Typography className="title">AWARDS</Typography>
              </Box>
            </Box>
            <Box className="col-lg-3 col-sm-6 mt-0">
              <Box className="edu-counterup counterup-style-4">
                <Box className="icon extra05-color">
                  <img src="assets/images/dedicateddoctor.png" alt="baby" />
                </Box>
                <Typography sx={{fontSize:"5rem !important", fontWeight:"500 !important"}} className="counter-item ">
                  492 <span>+</span>
                </Typography>
                <Typography className="title">DEDICATED DOCTORS</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default OurStory;
