import React from "react";
import ReachUs from "../Components/Common/ReachUs";
import useDeviceSize from "../Utilities/useDeviceSize";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
const Franchise = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 0px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
                <Typography variant="h1" className="title">
                  Franchise
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
                    Franchise
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="account-page-area section-gap-equal">
        <Box className="container position-relative">
          <Box className="row g-5 justify-content-center">
            <Box className="col-lg-12">
              <Box className="login-form-box">
                <Box className="section-title section-center sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                  <span className="pre-title pre-textsecondary">Work with us</span>
                  <h2 className="title">Franchise</h2>
                  <Box className="shape_in shape_in-bk" style={{ display: "flex", justifyContent: "center" }}>
                    {" "}
                    <img src="assets/images/med-img blk.svg" width="30" />
                  </Box>
                  <p>join our mission to connect the right talent with the Right Opportunity.</p>
                </Box>

                <form className="row">
                  <Box className="form-group col-md-6">
                    <label for="current-log-email">First Name*</label>
                    <input type="text" name="current-log-email" id="current-log-email" />
                  </Box>
                  <Box className="form-group col-md-6">
                    <label for="current-log-email">Last Name*</label>
                    <input type="text" name="current-log-email" id="current-log-email" />
                  </Box>
                  <Box className="form-group col-md-6">
                    <label for="current-log-email">Phone Number</label>
                    <input type="email" name="current-log-email" id="current-log-email" />
                  </Box>
                  <Box className="form-group col-md-6">
                    <label for="current-log-email">Enter Email</label>
                    <input type="email" name="current-log-email" id="current-log-email" />
                  </Box>
                  <Box className="form-group col-md-6">
                    <label for="current-log-password">Enter your City*</label>
                    <input type="text" id="current-log-password" placeholder="Enter your City" />
                  </Box>
                  <Box className="form-group col-md-6">
                    <label for="current-log-password">Enter Your State*</label>
                    <input type="text" id="current-log-password" />
                  </Box>

                  <Box className="form-group col-md-12">
                    <label>Office Space *</label>
                    <Box className="d-flex">
                      <Box className="form-group mb-0 mr-4">
                        <Box className="edu-form-check">
                          <input type="radio" id="mr" name="payment" />
                          <label for="mr">Yes</label>
                        </Box>
                      </Box>
                      <Box className="form-group mb-0">
                        <Box className="edu-form-check">
                          <input type="radio" id="mrs" name="payment" />
                          <label for="mrs">No</label>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="form-group col-md-12">
                    <label for="current-log-password">Professional Experience *</label>
                    <input type="text" id="current-log-password" />
                  </Box>

                  <Box className="form-group col-md-12">
                    <label>Experience in Stem Cell Banking *</label>
                    <Box className="d-flex">
                      <Box className="form-group mb-0 mr-4">
                        <Box className="edu-form-check">
                          <input type="radio" id="mr" name="payment" />
                          <label for="mr">Yes</label>
                        </Box>
                      </Box>
                      <Box className="form-group mb-0">
                        <Box className="edu-form-check">
                          <input type="radio" id="mrs" name="payment" />
                          <label for="mrs">No</label>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box className="form-group col-md-12">
                    <label for="current-log-password">Comment</label>
                    <textarea name="contact-message" style={{ fontSize: "15px", height: "150px" }} id="contact-message" cols="30" rows="6" placeholder="Type your message"></textarea>
                  </Box>
                  <Box className="form-group">
                    <button type="button" className="edu-btn btn-medium">
                      Submit
                    </button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <ReachUs />
    </>
  );
};

export default Franchise;
