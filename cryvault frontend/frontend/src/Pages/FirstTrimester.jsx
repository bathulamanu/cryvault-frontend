import React from "react";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import ReachUs from "../Components/Common/ReachUs";
import { List, ListItem, ListItemIcon, ListItemText, Breadcrumbs, Link, Box, Typography } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";

const FirstTrimester = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 90px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box sx={{ justifyContent: isMobile ? " center" : "start " }} className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: "75% !important" }}>
                <Typography variant="h1" className="title">
                  First Trimester
                </Typography>
              </Box>

              {isMobile ? null : (
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/pregnancy">
                    <Typography variant="body2" color="text.primary">
                      Pregnancy
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.primary">
                    First Trimester
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="py-5">
        <Box className="container">
          <Box className="section-title section-center pregnan_title">
            <Typography variant="h4">First Trimester​</Typography>
            <Typography variant="h3">0-3 Months​</Typography>
            <Box className="shape_in shape_in-bk excer_ot">
              {" "}
              <img src="assets/images/med-img blk heart.svg" width="45" />
            </Box>
          </Box>

          <Box className="trimster_out">
            <Box className="row ">
              <Box className="col-md-2"></Box>
              <Box className="col-md-8">
                <Box className="trimet_out">
                  <Box className={isMobile ? "mobileSingleStage d-flex" : "d-flex"}>
                    <img src="assets/images/1.webp" />
                    <Box className="babi_out">
                      <Typography variant="h3" sx={{ textAlign: isMobile ? "center" : "start" }}>
                        BABY GETS ITS “SHAPE”
                      </Typography>
                      <Typography variant="body1">
                        Cell Division takes place and at the end of two weeks the baby is the size of a pin-head.
                        <br />
                        Internal organs and circulatory system begins to form.
                        <br />
                        Heart continues to develop.
                        <br />
                        Small bumps show the beginnings of arms and legs.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="col-md-2"></Box>
            </Box>
          </Box>
          <Box className="trimster_out">
            <Box className="row ">
              <Box className="col-md-2"></Box>
              <Box className="col-md-8">
                <Box className="trimet_out trimet_out_mddle">
                  <Box className={isMobile ? "mobileSingleStage colReverse d-flex" : "d-flex"}>
                    <Box className="babi_out">
                      <Typography variant="h3" sx={{ textAlign: isMobile ? "center" : "start" }}>
                        BABY GETS ITS “LIMBS & FACE”
                      </Typography>
                      <Typography variant="body1" sx={{ textAlign: isMobile ? "start" : "right" }}>
                        At 5 weeks baby is about ½ inch long. <br />
                        Amniotic fluid surrounds the baby.
                        <br />
                        Eyelids & ears are forming and you can see the tip of the nose.
                        <br />
                        The arms and legs are well formed.
                        <br />
                        The fingers and toes grow longer and more distinct.
                      </Typography>
                    </Box>
                    <img src="assets/images/2.webp" />
                  </Box>
                </Box>
              </Box>
              <Box className="col-md-2"></Box>
            </Box>
          </Box>
          <Box className="trimster_out trimster_out_la">
            <Box className="row ">
              <Box className="col-md-2"></Box>
              <Box className="col-md-8">
                <Box className="trimet_out">
                  <Box className={isMobile ? "mobileSingleStage d-flex" : "d-flex"}>
                    <img src="assets/images/3.webp" />
                    <Box className="babi_out">
                      <Typography variant="h3" sx={{ textAlign: isMobile ? "center" : "start" }}>
                        EXPERIENCE THE “HEART BEAT” OF BABY
                      </Typography>
                      <Typography variant="body1">
                        The baby measures about 2 inches.
                        <br />
                        Doctor may hear the baby’s heartbeat with special instruments.
                        <br />
                        Nostrils, mouth, lips, teeth buds and eyelids are formed.
                        <br />
                        Fingers and toes are almost complete.
                        <br />
                        All internal organs are present, but aren’t ready to function.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="col-md-2"></Box>
            </Box>
          </Box>

          <Box className="row align-items-center mt-4">
            <Box className="col-md-6">
              <img src="assets/images/0-3months.webp" />
            </Box>
            <Box className="col-md-6">
              <Box className="excercise_blo">
                <Typography variant="h3">Exercise During First Trimester</Typography>
                <Box className="shape_in shape_in-bk  text-center">
                  {" "}
                  <img src="assets/images/med-img blk heart.svg" width="45" />
                </Box>

                <List dense component="ul">
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Regular mild exercise during pregnancy can improve posture and decrease some common discomforts such as backaches, constipation, bloating, and decreases swelling and fatigue. Exercise can also improve mood & assist with sleep.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Begin exercising 3-4 times per week during the first month if you do not have any existing health problems.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Walking is a great exercise to start with, if you have not been active prior to your pregnancy.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Every pregnant woman should consult with her doctor before beginning an exercise program. A doctor can give personal exercise guidelines based on the medical history.</Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
          <br></br>
          <Box className="shape_in shape_in-bk excer_ot text-center mt-5 mb-5">
            {" "}
            <img src="assets/images/med-img blk heart.svg" width="45" />
          </Box>
          <br></br>

          <Box className="row align-items-start    mt-4">
            <Box className="col-md-6">
              <Box className="excercise_blo excercise_blo_col6">
                <Typography variant="h3">YOUR NUTRITION GUIDE TO FIRST TRIMESTER</Typography>
                <Box className="shape_in shape_in-bk  text-center">
                  {" "}
                  <img src="assets/images/med-img blk heart.svg" width="45" />
                </Box>

                <ListItem dense>
                  <ListItemIcon>
                    <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">During pregnancy, it is important to eat healthily. But, eating healthy food becomes difficult during the first trimester if you have morning sickness. Eating small regular meals and including plenty of fluids can help in combatting nausea during your first trimester.</Typography>
                  </ListItemText>
                </ListItem>
              </Box>
            </Box>
            <Box className="col-md-6">
              <Box className="excercise_blo excercise_blo_col6">
                <Typography variant="h3">FOODS TO INCLUDE IN YOUR DIET</Typography>
                <Box className="shape_in shape_in-bk  text-center">
                  {" "}
                  <img src="assets/images/med-img blk heart.svg" width="45" />
                </Box>

                <List dense component="ul">
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Variety of Fruits and Vegetables</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Starchy foods, such as rice, rotis (including mixed grain or stuffed roti)</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Whole grain bread, pasta, and baked/boiled potatoes</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Foods rich in protein, such as lean meat and chicken, eggs, pulses (such as beans and lentils) and soya nuggets.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Dairy foods, such as milk, cheese, cottage cheese (panner) and curd/yoghurt.</Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <ReachUs />
    </>
  );
};

export default FirstTrimester;
