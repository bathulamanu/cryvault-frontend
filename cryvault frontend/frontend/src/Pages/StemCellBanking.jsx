import React from "react";
import ReactUs from "../Components/Common/ReachUs";
import TableContents from "../Components/Common/TableContents";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";

const StemCellBanking = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 40px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}> 
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
                <Typography sx={{ fontSize: isMobile ? "24px !important" : "45px !important" }} variant="h1" className="title">
                  Stem Cell Banking
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
                  <Typography>Stem cells have the remarkable potential to regenerate into any kinds of cells or tissues. This unique property of a stem cell is exploited in medicine for the treatment of diseases, such as anemias, cancers, inherited metabolic disorders, and deficiencies of the immune system. The umbilical cord has been identified as a rich source of these stem cells. At the time of birth, the umbilical .cord is collected in a safe and painless manner, and they are processed and cryo preserved for many years.</Typography>
                  <Typography>Cryovault, we help you create a secure future for your child’s health by preserving the newborn’s stem cells under advanced clinical conditions for years. These cells could be utilized at any point of time in the future in regenerative medicine.</Typography>
                </Box>
                <hr className="hr_line"></hr>
                <Box className="stem-serv_out">
                  <Box className="section-title section-center sal-animate mb-5">
                    <Typography variant="h2" className="title">
                      What are Cord Blood Stem Cells Used for?{" "}
                    </Typography>

                    <Box className="shape_in shape_in-bk">
                      {" "}
                      <img src="assets/images/med-img blk pink.svg" width="30" />
                    </Box>
                  </Box>
                  <Box className="row g-5 mt-5">
                    <Box className="col-lg-4 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                      <Box className="why-choose-box-3 features-box color-primary-style">
                        <Box className="content text-left">
                          <svg aria-hidden="true" class="e-font-icon-svg e-fas-syringe" fill="#FF001E" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"></path>
                          </svg>
                          <Typography variant="h4" className="title">TRANSPLANT</Typography>
                          <Typography>A cord blood stem cell transplant can be used to replace diseased cells with healthy new cells, and rebuild an individual’s blood and immune system. More recently, cord blood stem cells have been shown to be able to form other tissues in the body such as nerve and bone cells.</Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="col-lg-4 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                      <Box className="why-choose-box-3 features-box color-secondary-style">
                        <Box className="content">
                          <img src="assets/images/graph-top.png" width="50" />
                          <Typography variant="h4" className="title">
                            POTENTIAL
                          </Typography>
                          <Typography>Cord blood stem cells have considerable potential in regenerative medicine. Research has shown that these cells are capable of developing into a range of cell types such as nerve, bone, skin, heart and liver cells to name a few. More recently they have also been shown to have the ability to stimulate the body’s own repair systems.</Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="col-lg-4 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                      <Box className="why-choose-box-3 features-box color-extra08-style">
                        <Box className="content">
                          <svg aria-hidden="true" fill="#FF001E" width="50px" class="e-font-icon-svg e-fab-react" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
                          </svg>
                          <Typography variant="h4" className="title">
                            FUTURE
                          </Typography>
                          <Typography>These exciting developments have already translated into early clinical treatment of ischaemic heart disease and some neurological conditions. The future of regenerative medicine holds much promise and cord blood is likely to play a major part in this advancement in our ability to treat human disease.</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
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

      <ReactUs />
    </>
  );
};

export default StemCellBanking;
