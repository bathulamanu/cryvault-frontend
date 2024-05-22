import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ReachUs from "../Components/Common/ReachUs";
import OurStory from "../Components/Common/OurStory";
import { List, ListItem, ListItemIcon, ListItemText, Link, Box, Breadcrumbs, Typography } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";

const reasons = ["Cryovault is the only company with CDSCO and DCGI approved with ISO certification.", "Cryovault is the only company with UQSR and ANSI.", "Cryovault provides preservation certificate, CFU, HLA, CD34, CD45 and NBS.", "Cryovault provides unlimited expansion of Mesenchymal cells.", "Cryovault provides free GLOBAL SHIPMENT.", "Cryovault provides Quality Assurance up to RS.20 Lakhs.", "Cryovault Provides Medical Assistance up to RS.20 Lakhs.", "Cryovault offers free professional counselling from transplant specialist for enrolled clients."];
const medicalAssistance = ["Medical Assistance Team", "Pre-Collection: Kits ID & Client Details Verification.", "Post Collection: Proper Package, Maintain Cold Condition & Transported Within 48 Hours."];
const responsibilities = ["Main Power Resource", "Client, Sales & Lab Team Coordination", "Payment Follow-Up"];
const services = ["Service Approachment", "Presentation and Query Completion", "Registration / Enrollment & Client Consent to the CBIPL"];
const Aboutus = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 0px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
                <Typography variant="h1" className="title">
                  About Cryovault
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
                    About Cryovault
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="about_page_ot">
        <Box className="container">
          <Box className="row align-items-center">
            <Box className="col-md-3 text-center">
              <img className="main-img-2 sal-animate" src="assets/images/abt-01.png" width="280" />
            </Box>
            <Box className="col-md-9">
              <Box className="aabt-txt pl-35">
                <Typography>Cryovault was found to meet the needs of families in India who are considering umbilical cord blood stem cell storage. Established in 2015 under the leadership of 4 visionaries, we are an ethically driven company committed to delivering high quality service at highly affordable prices. We are accredited and licensed by the IFDA, DCGI, ANSI, and ISO 9001</Typography>
              </Box>
            </Box>
          </Box>

          <Box className="row align-items-center mt--20">
            <Box className="col-md-9">
              <Box className="aabt-txt pr-35 text-right">
                <Typography>Cryovault was found to meet the needs of families in India who are considering umbilical cord blood stem cell storage. Established in 2015 under the leadership of 4 visionaries, we are an ethically driven company committed to delivering high quality service at highly affordable prices. We are accredited and licensed by the IFDA, DCGI, ANSI, and ISO 9001</Typography>
              </Box>
            </Box>

            <Box className="col-md-3 text-center">
              <img className="main-img-2 sal-animate" src="assets/images/abt-02.png" width="280" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="edu-about-area about-style-7">
        <Box className="container">
          <Box className="row g-5 align-items-center">
            <Box className="col-lg-6">
              <Box className="about-image-gallery text-center">
                <img className="sal-animate" src="assets/images/abt-welcome.png" width="530" />
              </Box>
            </Box>
            <Box className="col-lg-6">
              <Box className="about-content">
                <Box className="section-title section-title_abt section-left sal-animate">
                  <Typography variant="h2" className="title">
                    Cryovault is India’s own Umbilical cord blood stem cell preservation center.
                  </Typography>
                  <Box class="heart_left">
                    <img src="assets/images/med-img blk heart.svg" width="30" />
                  </Box>
                  <Typography>For over 6 years parents have been preserving their baby’s umbilical cord blood stem cells for various medical treatments. Preserving your newborn’s umbilical cord provides your family a chance to save and change lives. Umbilical cord stem cells if not only perfectly match the baby but also the siblings, parents and other close family members in most cases.</Typography>
                  <Box className="about-btn sal-animate" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                    <Link href="#" className="edu-btn">
                      Book Appointment <i className="icon-4"></i>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="edu-categorie-area edu-categorie-abt categorie-area-5 edu-section-gap">
        <Box className="container">
          <Box className="is_ot">
            <span>
              <img src="assets/images/med-img blk heart.svg" width="42" />
            </span>
            <List dense={false} className="p-0">
              {reasons.map((reason, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon>
                    <FaRegArrowAltCircleRight edge="start" color="primary" disableRipple />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography sx={{ fontSize: "1.5rem" }}>{reason}</Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>

      <Box className="edu-campus-area">
        <Box className="container edublink-animated-shape">
          <Box className="row g-5 align-items-center">
            <Box className="col-xl-6 sal-animate">
              <Box className="campus-image-gallery">
                <Box className="campus-thumbnail">
                  <Box className="thumbnail">
                    <img src="assets/images/ourteam.png" alt="Campus" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-xl-6 sal-animate pl-40">
              <Box className="campus-content">
                <Box className="inner">
                  <Box className="section-title section-left mb-0">
                    <Typography variant="h2" className="title">
                      Our Team
                    </Typography>
                    <Box class="heart_left">
                      <img src="assets/images/med-img blk heart.svg" width="30" />
                    </Box>
                    <Typography>Private Umbilical Cord Blood Banking Licenced by Govt. India Lic. No : KTK/28F-05/2015 ” Accredited by ISO 9001:2015 and GMP</Typography>
                  </Box>
                  <Box className="features-list">
                    <Box className="features-box color-secondary-style">
                      <Box className="iconn">
                        <img src="assets/images/abt-team.png" width="75px" alt=" " />
                      </Box>
                      <Box className="content">
                        <Typography variant="h5" className="title">
                          Admin Team
                        </Typography>
                        <List dense={false} className="mb-0">
                          {responsibilities.map((responsibility, index) => (
                            <ListItem sx={{ margin: "0", padding: "0" }} key={index} disableGutters>
                              <ListItemText>
                                <Typography sx={{ fontSize: "1rem", margin: "0", padding: "0" }}>{responsibility}</Typography>
                              </ListItemText>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Box>
                    <Box className="features-box color-primary-style">
                      <Box className="iconn">
                        <img src="assets/images/abt-team2.png" width="75px" alt=" " />
                      </Box>
                      <Box className="content">
                        <Typography variant="h5" className="title">
                          Public Relation Team
                        </Typography>

                        <List dense={false} className="mb-0">
                          {services.map((service, index) => (
                            <ListItem sx={{ margin: "0", padding: "0" }} key={index} disableGutters>
                              <ListItemText>
                                <Typography sx={{ fontSize: "1rem", margin: "0", padding: "0" }}>{service}</Typography>
                              </ListItemText>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Box>
                    <Box className="features-box color-extra05-style">
                      <Box className="iconn">
                        <img src="assets/images/abt-team3.png" width="75px" alt=" " />
                      </Box>
                      <Box className="content">
                        <Typography variant="h5" className="title">
                          Medical Assistance Team
                        </Typography>

                        <List dense={false} className="mb-0">
                          {medicalAssistance.map((service, index) => (
                            <ListItem sx={{ margin: "0", padding: "0" }} key={index} disableGutters>
                              <ListItemText>
                                <Typography sx={{ fontSize: "1rem", margin: "0", padding: "0" }}>{service}</Typography>
                              </ListItemText>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="contr_rep_out">
        <OurStory />
      </Box>
      <ReachUs />
    </>
  );
};

export default Aboutus;
