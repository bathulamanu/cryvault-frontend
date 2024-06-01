import { Box, Typography } from "@mui/material";
import React from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";
const HowitWorks = () => {
  const isMobile = useDeviceSize() === "xs";
  return (
    <>
      <Box className="edu-categorie-area categorie-area-5 edu-section-gap">
        {isMobile ? null : <img className=" position-ab spectrum-circl" src="assets/images/anim-icon-10.webp" alt="Shape" />}

        <Box sx={{ marginTop: "2rem" }} className="container how-ts-containr">
          <Box sx={{ marginBottom: "20px !important" }} className="section-title section-center sal-animate cd-headline">
            <Typography variant="h2" className="title">
              How it works{" "}
            </Typography>
            <Typography>Cryovault provides 3 easy steps to preserve your child’s cord blood stem cells.</Typography>
          </Box>
          <Box className="row g-custom-5">
            <Box className="col-lg-4 col-sm-6 col-12 sal-animate">
              <Box className="edu-team-grid team-style-7">
                <Box className="inner stps_ot">
                  <Box className="thumbnail-wrap">
                    <Box className="thumbnail">
                      <img src="assets/images/kit-pregnant-mom.webp" />
                    </Box>
                    <Box className="content">
                      <Typography variant="h5" className="title">
                        Enroll
                      </Typography>
                      <Typography>
                        Sign up through our easy enrollment page and the CBR collection kit will be sent to you.
                        <br />
                        Call our toll free number
                        <br />
                        <b>
                          <a href="tel:18001 024 026">18001 024 026</a>
                        </b>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="col-lg-4 col-sm-6 col-12 sal-animate">
              <Box className="edu-team-grid team-style-7">
                <Box className="inner stps_ot">
                  <Box className="thumbnail-wrap">
                    <Box className="thumbnail">
                      <img src="assets/images/2-Collect-.webp" />
                    </Box>
                    <Box className="content">
                      <Typography variant="h5" className="title">
                        Collect
                      </Typography>
                      <Typography>
                        At birth, the umbilical cord blood (and tissue if selected) will be placed into your CBR collection kit.
                        <br /> Call our toll free number <br />{" "}
                        <b>
                          <a href="tel:18001 024 026">18001 024 026</a>
                        </b>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="col-lg-4 col-sm-6 col-12 sal-animate">
              <Box className="edu-team-grid team-style-7">
                <Box className="inner stps_ot">
                  <Box className="thumbnail-wrap">
                    <Box className="thumbnail">
                      <img src="assets/images/kit-pregnant-mom.webp" />
                    </Box>
                    <Box className="content">
                      <Typography variant="h5" className="title">
                        Preserve
                      </Typography>
                      <Typography>
                        Following delivery and collection of stem cells, you will need to call our medical courier at{" "}
                        <b>
                          <a href="tel:18001 024 026">18001 024 026</a>
                        </b>{" "}
                        to arrange transfer to Cryovault laboratory for processing.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HowitWorks;
