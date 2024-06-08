import React from "react";
import ReachUs from "../Components/Common/ReachUs";
import TableContents from "../Components/Common/TableContents";
import { Box, List, ListItem, ListItemText, Link, Breadcrumbs, Typography } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";
const reasons = [
  {
    title: "80+ Blood Related Disorders:",
    explanation: 'With the help of stem cells, we can cure these types of disorders. "Like" Leukemia, anemia, Thalassemia, sickle cells, breast cancers, etc.',
  },
  {
    title: "Degenerative Disorders:",
    explanation: "As we grow older, we may suffer from some disorders. Like, joint pains, kidney problems, liver problems, loss of hearing, etc.",
  },
  {
    title: "Congenital Disorders:",
    explanation: "Disorders may come by birth or at the time of birth. Like, hole in the heart, loss of hearing, etc. These disorders are treated only by stem cells.",
  },
  {
    title: "Autologous and Allogeneic Purpose:",
    explanation: "Stem cells are not only useful for autologous (baby's own purpose) but also helpful for allogeneic purpose (baby's biological siblings, parents, grandparents).",
  },
];
const Benifitscellbank = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "60px 100px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "65% !important" }}>
                <Typography  sx={{ fontSize: isMobile ? "24px !important" : "25px !important" }} variant="h1" className="title">
                  Benifits of Stem Cells
                </Typography>
              </Box>
              {isMobile ? null : (
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    <Typography variant="body2" color="text.primary">
                      Stem Cell Banking
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.primary">
                    Benifits of Stem Cells
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
                <Typography variant="h3">Uses and advantages of stem cells:</Typography>
                <List sx={{ paddingLeft: isMobile ? "0px !important" : "35px" }} dense={false}>
                  {reasons.map((reason, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemText>
                        <Typography variant="h4" component="span">
                          <b>{reason.title}</b>
                        </Typography>
                        <br />
                        <Typography variant="body2">{reason.explanation}</Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
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

export default Benifitscellbank;
