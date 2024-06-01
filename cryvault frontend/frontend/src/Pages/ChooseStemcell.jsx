import React from "react";
import ReachUs from "../Components/Common/ReachUs";
import TableContents from "../Components/Common/TableContents";
import { List, ListItem, ListItemIcon, ListItemText, Link, Box, Breadcrumbs, Typography } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";

const reasons = [{ text: "A high-risk family medical history of disease(s) currently treatable by cord blood." }, { text: "A sibling has a medical condition treatable with cord blood." }, { text: "There is high risk of premature delivery." }, { text: "You are a mixed-race couple, thereby making it difficult to get a bone marrow match." }];

// const useStyles = makeStyles(() => ({
//   listItem: {
//     paddingLeft: 24, // Adjust padding for bullet point indentation
//     "&::marker": {
//       content: '"•"', // Bullet point character (replace with desired symbol)
//     },
//   },
// }));

const ChooseStemcell = () => {
  const isMobile = useDeviceSize() === "xs";
  // const classes = useStyles();
  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 40px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
          <Box className="breadcrumb-inner" sx={{ display: "flex" }}>
            <Box className="page-title d-flex align-items-center" sx={{width: isMobile ? "100% !important" : "59% !important"}}>
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "100% !important" }}>
                <Typography sx={{ fontSize: isMobile ? "24px !important" : "45px !important" }} variant="h1" className="title">
                  Why to Choose Stem Cell Banking
                </Typography>
              </Box>
            </Box>
            {isMobile ? null : (
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/pregnancy">
                  <Typography variant="body2" sx={{fontSize:"20px"}} color="text.primary">
                    Stem Cell Banking
                  </Typography>
                </Link>
                <Typography variant="body2" sx={{fontSize:"20px"}}  color="text.primary">
                  Why to Choose Stem Cell Banking
                </Typography>
              </Breadcrumbs>
            )}
          </Box>
        </Box>
      </Box>

      <Box className="edu-section-gap course-details-area">
        <Box className="container">
          <Box className="row row--30">
            <Box className="col-lg-8">
              <Box className="course-details-content course-details-2">
                <Box className="course-overview">
                  <Typography>
                    Stem Cells are used in medicine for the regeneration of damaged cells or tissues
                    <br />
                    in our bodies.Its application is vast,covering a wide range of over 80 diseases.
                    <br />
                    As parents,we take utmost care protecting the baby,from child-proofing the house
                    <br />
                    to giving the best of everything.:Preserving the cord blood stem cells is a way to ensure the availability of stem cells at the time of need in the future.
                  </Typography>
                </Box>

                <Box className="stem-serv_out">
                  <Box className="section-title section-center sal-animate mb-5 pt-5 pb-5">
                    <Box className="shape_in shape_in-bk" style={{ display: "flex", justifyContent: "center" }}>
                      {" "}
                      <img src="assets/images/med-img blk.svg" width="30" />
                    </Box>
                  </Box>
                  <List dense={false}>
                    {reasons.map((reason, index) => (
                      // <ListItem style={{ paddingLeft: 24 }} key={index} disableGutters className={classes.listItem}>
                      <ListItem style={{ paddingLeft: 24 }} key={index} disableGutters>
                        <ListItemText>
                          <Typography sx={{ fontSize: "1rem", margin: "0rem !important" }} color="text.primary">
                            <span style={{ content: '"•"' }}> {/* Bullet point symbol */} </span> {reason.text}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
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

export default ChooseStemcell;
