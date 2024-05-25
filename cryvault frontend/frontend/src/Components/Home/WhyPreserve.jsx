// import { Grid, Typography } from "@mui/material";
// import React from "react";
// import WaterDropIcon from "@mui/icons-material/WaterDrop";
// import "./Home.css";
// import useDeviceSize from "../../Utilities/useDeviceSize";

// const WhyPreserve = () => {
//   const isMobile = useDeviceSize() === "xs";

//   return (
//     <>
//       <Box style={{ backgroundColor: "#88D4F2", position: "relative", marginTop: "55rem" }}>
//         <img className="basketball" src="https://www.cryovault.in/wp-content/uploads/2024/01/busket-ball.png" alt=""></img>

//         <Box className="whyPreserveContent" style={{ padding: isMobile ? "10rem 2rem" : "15rem" }}>
//           <Typography variant="h3" sx={{ textAlign: "center", color: "#00215C", fontWeight: "600" }}>
//             Why Preserve Your Newborn Stem Cells
//           </Typography>
//           <Box className={isMobile ? "shape_inMobile " :"shape_in "}>
//             {" "}
//             <img src="assets/images/med-img.svg" width="30" />
//           </Box>
//           <Typography variant={isMobile ? "h5" : "h3"} sx={{ textAlign: "center" }}>
//             Your newborn’s umbilical cord contains life-saving stem cells. They can be used to treat over 80 different diseases, including cancer, blood disorders, and immune system disorders. Banking your baby’s cord blood gives your child a chance to receive life-saving treatment with their stem cells, but may also give a chance to treat their siblings, parents, and other close relatives.
//           </Typography>
//         </Box>

//         <WhyPreserveCards />

//        { isMobile ? null :  <img style={{ position: "absolute", bottom: "0", right: "50px" }} src="https://www.cryovault.in/wp-content/uploads/2024/01/cloud-3.png" alt=""/>}
//       </Box>
//       <Box className="shaps_inr">
//         <img src="assets/images/home-1_section_04.png" />
//       </Box>
//     </>
//   );
// };

// export const WhyPreserveCards = React.memo(() => {
//   const isMobile = useDeviceSize() === "xs";

//   return (
//     <Grid
//      item
//       spacing={4}
//       sx={{
//         padding: isMobile ? " 0rem 3rem" : "4rem 6rem",
//         flexGrow: 1,

//         gap: " 2rem",
//         display: "flex",
//         flexDirection: isMobile ? "column" : "row",
//       }}
//     >
//       <Grid className="whyPreserveCard" container item xs={12} md={4} sm={12}>
//         <WaterDropIcon sx={{ fontSize: "3rem" }} />
//         <Typography variant="h4" gutterBottom>
//           Amazing Potential
//         </Typography>
//         <Typography variant="h5" component="Box">
//           Each baby comes into this world with amazing potential to save or improve their own life or the life of others.
//         </Typography>
//       </Grid>
//       <Grid className="whyPreserveCard" container item xs={12} md={4} sm={12}>
//         <WaterDropIcon sx={{ fontSize: "3rem" }} />
//         <Typography variant="h4" gutterBottom>
//           Building Blocks
//         </Typography>
//         <Typography variant="h5" component="Box">
//           Stem cells are the “building blocks” or “master cells” of our bodies with the ability to become different types of cells.
//         </Typography>
//       </Grid>
//       <Grid className="whyPreserveCard" container item xxs={12} md={4} sm={12}>
//         <WaterDropIcon sx={{ fontSize: "3rem" }} />
//         <Typography variant="h4" gutterBottom>
//           Life-Saving
//         </Typography>
//         <Typography variant="h5" component="Box">
//           To date there have been over 60,000 cord blood transplants that have been performed worldwide. StemCyte provided 1 out of every 26 cord blood transplants
//         </Typography>
//       </Grid>
//     </Grid>
//   );
// });

// export default WhyPreserve;

import { Box, Typography } from "@mui/material";
import React from "react";

const WhyPreserve = () => {
  return (
    <>
      <Box sx={{ marginTop: "55rem"}} className="features-area-5 edu-course-area course-area-7">
        <Box className="container">
          <Box className="section-title section-center sal-animate">
            <Typography variant="h2" className="title">
              Why Preserve Your Newborn Stem Cells
            </Typography>
            <Box className="shape_in">
              {" "}
              <img src="assets/images/med-img.svg" width="30" />
            </Box>
            <Typography>
              Your newborn’s umbilical cord contains life-saving stem cells. They can be used to treat over 80 different diseases, including cancer, blood
              <br /> disorders, and immune system disorders. Banking your baby’s cord blood gives your child a chance to receive life-saving treatment with their
              <br /> stem cells, but may also give a chance to treat their siblings, parents, and other close relatives.
            </Typography>
          </Box>

          <Box className="row g-5 ">
            <Box className="col-lg-4 sal-animate" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
              <Box className="features-box color-primary-style edublink-svg-animate">
                <Box className="content">
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-tint" viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
                  </svg>
                  <Typography variant="h5" className="title">
                    Amazing Potential
                  </Typography>
                  <Typography>Each baby comes into this world with amazing potential to save or improve their own life or the life of others.</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-4 sal-animate" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
              <Box className="features-box color-secondary-style edublink-svg-animate">
                <Box className="content">
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-tint" viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
                  </svg>
                  <Typography variant="h5" className="title">
                    Building Blocks
                  </Typography>
                  <Typography>Stem cells are the “building blocks” or “master cells” of our bodies with the ability to become different types of cells.</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-4 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
              <Box className="features-box color-extra06-style edublink-svg-animate">
                <Box className="content">
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-tint" viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
                  </svg>
                  <Typography variant="h5" className="title">
                    Life-Saving
                  </Typography>
                  <Typography>To date there have been over 60,000 cord blood transplants that have been performed worldwide. StemCyte provided 1 out of every 26 cord blood transplants.</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <img class="position-ab cloud-smle" src="assets/images/cloud-3.webp" alt="Shape"></img>
      </Box>
      <Box className="shaps_inr">
        <img src="assets/images/home-1_section_04.png" />
      </Box>
    </>
  );
};

export default WhyPreserve;
