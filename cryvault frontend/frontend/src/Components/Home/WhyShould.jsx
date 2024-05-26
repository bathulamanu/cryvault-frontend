// import React from "react";
// import "./Home.css";
// import { Box, Button, Grid, Typography } from "@mui/material";
// import useDeviceSize from "../../Utilities/useDeviceSize";

// const WhyShould = () => {
//   const isMobile = useDeviceSize() === "xs";

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", position: "absolute", width: "100%" }}>
//       {isMobile ? null : <img className=" position-ab triangle-btn" src="assets/images/anim-icon-9.webp" alt="Shape" />}

//       <Box className="WhyShouldContent" style={{ marginTop: isMobile ? "5rem" : "14rem", width: isMobile ? " 70%" : "95%" }}>
//         <Typography variant={isMobile ? "h4" : "h1"} sx={{ textAlign: "center", fontWeight: "600", whiteSpace: "nowrap" }}>
//           Why Should Your Family Bank Cord Blood?
//         </Typography>

//         <Box className={isMobile ? "shape_inMobile shape_inMobile-bk" : "shape_in shape_in-bk"} style={{ display: "flex", justifyContent: "center" }}>
//           <img src="assets/images/med-img blk.svg" width="30" />
//         </Box>
//         <Typography variant="h5" sx={{ textAlign: "center" }}>
//           Cord blood provides a valuable source of stem cells that can be used in the treatment of various medical conditions, such as leukemia and other blood disorders. These stem cells, collected from the umbilical cord at birth, offer potential therapeutic options for both the child and, in some cases, compatible family members.
//         </Typography>
//         <Button variant="contained" sx={{ backgroundColor: "#D5008D", color: "white", fontSize: "1rem", fontWeight: "500" }} size="lg">
//           Learn More
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default WhyShould;
import { Box, Link, Typography } from "@mui/material";
import React from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";
const WhyShould = () => {
  const isMobile = useDeviceSize() === "xs";
  return (
    <>
      <Box className="gap-tb-text position-relative overflow-hidden">
        <Box className="container">
          <Box className="section-title section-center">
            <Typography variant="h2" className="title">
              Why Should Your Family Bank Cord Blood?
            </Typography>
            <Box className="shape_in shape_in-bk" style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <img src="assets/images/med-img blk.svg" width="30" />
            </Box>
            <Typography>
              Cord blood provides a valuable source of stem cells that can be used in the treatment of various medical conditions, such as leukemia and<br></br> other blood disorders. These stem cells, collected from the umbilical cord at birth, offer potential therapeutic options for both the child and, in some cases, compatible family members.
            </Typography>
            <Box className="about-btn sal-animate" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
              <Link href="#" className="edu-btn">
                Learn more <i className="icon-4"></i>
              </Link>
            </Box>
          </Box>
        </Box>
        {isMobile ? null : <img className=" position-ab triangle-btn" src="assets/images/anim-icon-9.webp" alt="Shape" />}

        {/* <img className=" position-ab rainbow-img" src="assets/images/rainbow-star.webp" alt="Shape" /> */}
      </Box>
    </>
  );
};

export default WhyShould;
