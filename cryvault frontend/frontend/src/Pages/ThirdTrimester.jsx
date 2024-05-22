import React from "react";
import { Box, Breadcrumbs, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import ReachUs from "../Components/Common/ReachUs";
import useDeviceSize from "../Utilities/useDeviceSize";

const ThirdTrimester = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 90px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box sx={{ justifyContent: isMobile ? " center" : "start " }} className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: "75% !important" }}>
                <Typography variant="h1" className="title">
                  Third Trimester
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
                    Third Trimester
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
            <Typography variant="h4">Third Trimester​</Typography>
            <Typography variant="h3">7-9 Months​​</Typography>
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
                      <Typography variant="h3"  sx={{ textAlign: isMobile ? "center" : "start" }} >Experience the first “blink”</Typography>
                      <Typography variant="body1">
                        Baby is about 10-12 inches long
                        <br />
                        Baby weighs around 700 to 900 g<br />
                        Baby is active and changes its position often
                        <br />
                        Baby can blink now
                        <br />
                        The baby now uses the four senses of vision, hearing, taste and touch
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
                      <Typography variant="h3"  sx={{ textAlign: isMobile ? "center" : "start" }}>Experience the baby’s “Reaction”</Typography>
                      <Typography variant="body1" sx={{ textAlign: isMobile ? "start" : "right" }}>
                        The baby is about 14-16 inches long and weighs around 1.5 to 1.8kg
                        <br />
                        The baby’s skin has fewer wrinkles as a layer of fat starts to form under the skin
                        <br />
                        Between now and delivery, your baby will gain up to half the birth weight
                        <br />
                        Baby has probably turned head-down in preparation for birth
                        <br />
                        Baby may react to noises with a more pronounced movement
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
                      <Typography variant="h3"  sx={{ textAlign: isMobile ? "center" : "start" }}>“Experience”your moment of joy</Typography>
                      <Typography variant="body1">
                        Baby is about 17-18 inches long and weighs around 2.5 to 3 kg
                        <br />
                        The brain has been developing rapidly&lungs are nearly fully developed
                        <br />
                        Baby’s movement slows down due to lack of room
                        <br />
                        The baby is ready to experience the outside world
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
                <Typography variant="h3" >Exercise During Third Trimester</Typography>
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
                      <Typography variant="body2">Regular mild exercise during pregnancy can improve posture, decrease common discomforts (backaches, constipation, bloating), reduce swelling and fatigue, and enhance mood and sleep.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Aim for 3-4 exercise sessions per week during the first month if you have no pre-existing health problems.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Walking is an excellent starting exercise, especially if you weren't active before pregnancy.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">Consult your doctor before starting an exercise program during pregnancy. They can provide personalized guidelines based on your medical history.</Typography>
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
            <Box className="col-md-12">
              <Box className="excercise_blo">
                <Typography variant="h3">YOUR NUTRITION GUIDE TO Third TRIMESTER</Typography>
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
                      <Typography variant="body2">In your third trimester (28 weeks-plus), vitamin C, fiber, vitamin K, and thiamine (vitamin B1) are especially important. You'll get enough of these nutrients with a varied, healthy diet. Remember, you need an extra 200-300 calories a day at this stage.</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        <b>Protein:</b> Your baby needs a lot of protein at this stage for muscle and tissue development.
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        <b>Choline:</b> Eggs contain choline, a nutrient that aids in proper cell function. This is crucial for your baby's rapid development.
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BiSolidChevronRightCircle style={{ color: "#2196F3" }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body2">
                        <b>Omega-3 fatty acids:</b> Your baby's brain development is rapid in the third trimester, and omega-3 fatty acids support this growth. DHA, a specific omega-3 fatty acid, promotes the formation and development of your baby's nervous system.
                      </Typography>
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

export default ThirdTrimester;
