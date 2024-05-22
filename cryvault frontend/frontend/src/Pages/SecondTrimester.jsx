import React from "react";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import { Box, Breadcrumbs, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import ReachUs from "../Components/Common/ReachUs";
import useDeviceSize from "../Utilities/useDeviceSize";
const SecondTimester = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 90px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box sx={{ justifyContent: isMobile ? " center" : "start " }} className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: "75% !important" }}>
                <Typography variant={isMobile ? "h3" : "h1"} className="title">
                  Second Trimester
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
                    Second Trimester
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
            <Typography variant="h4">Second Trimester​</Typography>
            <Typography variant="h3">4-6 Months​​</Typography>
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
                      <Typography variant="h3"  sx={{ textAlign: isMobile ? "center" : "start" }}>BABY GETS ITS “SHAPE”</Typography>
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
                      <Typography variant="h3" sx={{ textAlign: isMobile ? "center " : "start" }}> Experience the first “movement”</Typography>
                      <Typography variant="body1" sx={{ textAlign: isMobile ? "start" : "right" }}>
                        The Baby is about 6 inches long and weights around 280 g<br />
                        A protective coating called vernix begins to form on the baby’s skin
                        <br />
                        Baby’s heartbeat can be heard clearly
                        <br />
                        This may be when you feel your baby’s first movement called “Quickening”
                        <br />
                        The baby can suck a thumb, yawn, stretch, and make faces
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
                      <Typography variant="h3" sx={{ textAlign: isMobile ? "center" : "start" }}> Experience the first “talk” with baby</Typography>
                      <Typography variant="body1">
                        The baby is about 8-10 inches long and weighs around 630 g<br />
                        Baby responds to sound by moving or increasing the pulse
                        <br />
                        if you talk or sing, your baby can hear you
                        <br />
                        Fat is starting to deposit under the skin
                        <br />
                        Baby’s lungs begin to stretch preparing for breathing
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
                      <Typography variant="body2">Regular mild exercise during pregnancy can improve posture, decrease some common discomforts (backaches, constipation, bloating), reduce swelling and fatigue, and improve mood & sleep.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Begin exercising 3-4 times per week during the first month if you have no existing health problems.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Walking is a great exercise to start with, if you haven't been active before your pregnancy.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Every pregnant woman should consult with her doctor before beginning an exercise program. A doctor can give personal exercise guidelines based on medical history.</Typography>
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

          <Box className="row align-items-start mt-4">
            <Box className="col-md-12">
              <Box className="excercise_blo">
                <Typography variant="h3">YOUR NUTRITION GUIDE TO Second TRIMESTER</Typography>
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
                      <Typography variant="body2">Eating a healthy balanced diet continues to be important during this trimester. Try to include the following in your diet:</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">5 portions of fruits and vegetables a day. Include a variety of green leafy vegetables (e.g., broccoli, kale, spinach, cabbage) to improve your folic acid and iron intake.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Starchy wholegrain carbohydrates at every meal, e.g., bread, cereals, potatoes, pasta, and rice.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Low-fat dairy products 2-3 times a day to ensure you consume enough calcium.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Protein-rich foods (e.g., lean meats, fish, eggs, beans, lentils, and tofu) twice a day. This will help you meet your protein and iron needs.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Oily fish at least once a week (but no more than twice a week) – this ensures you get your fix of essential omega-3 fatty acids for your baby's brain development.</Typography>
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

export default SecondTimester;
