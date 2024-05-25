// import { Grid, Typography,Box } from "@mui/material";
// import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";

// import "./Home.css";
// import useDeviceSize from "../../Utilities/useDeviceSize";
// const HowItWorks = () => {
//   const isMobile = useDeviceSize() === "xs";

//   return (
//     <Box style={{ background: "#F9F6EF", position: "relative", marginTop: "50rem" }}>
//       {isMobile ? null : <img style={{ position: "absolute" }} className=" spectrum-circl" src="assets/images/anim-icon-10.webp" alt="Shape" />}

//       <Box style={{ padding: isMobile ? "2rem" : "10rem" }}>
//         <Typography variant="h3" sx={{ textAlign: "center", color: "#00215C", fontWeight: "600" }}>
//           How it works
//         </Typography>
//         <Typography variant="h3" sx={{ textAlign: "center" }}>
//           Cryovault provides 3 easy steps to preserve your child’s cord blood stem cells.
//         </Typography>
//       </Box>
//       <Box style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-evenly", alignItems: "center", paddingBottom: "10rem" }}>
//         <Card sx={{ maxWidth: 345, background: "#F9F6EF", boxShadow: "none" }}>
//           <CardActionArea>
//             <CardMedia sx={{ borderRadius: "50%", width: isMobile ? "10rem" : "100%", margin: isMobile ? "auto" : "" }} component="img" height={isMobile ? "10rem" : "140"} image="assets/images/kit-pregnant-mom.webp" alt="green iguana" />
//             <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
//               <Typography gutterBottom variant="h5" component="Box">
//                 Enroll
//               </Typography>
//               <Typography sx={{ textAlign: "center" }} variant="body1" color="text.secondary">
//                 Sign up through our easy enrollment page and the CBR collection kit will be sent to you. Call our toll free number <br /> 18001 024 026
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//         <Card sx={{ maxWidth: 345, background: "#F9F6EF", boxShadow: "none" }}>
//           <CardActionArea>
//             <CardMedia sx={{ borderRadius: "50%", width: isMobile ? "10rem" : "100%", margin: isMobile ? "auto" : "" }} component="img" height={isMobile ? "10rem" : "140"} image="assets/images/2-Collect-.webp" alt="green iguana" />
//             <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
//               <Typography gutterBottom variant="h5" component="Box">
//                 Collect
//               </Typography>
//               <Typography sx={{ textAlign: "center" }} variant="body1" color="text.secondary">
//                 At birth, the umbilical cord blood (and tissue if selected) will be placed into your CBR collection kit. Call our toll free number <br /> 18001 024 026
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//         <Card sx={{ maxWidth: 345, background: "#F9F6EF", boxShadow: "none" }}>
//           <CardActionArea>
//             <CardMedia sx={{ borderRadius: "50%", width: isMobile ? "10rem" : "100%", margin: isMobile ? "auto" : "" }} component="img" height={isMobile ? "10rem" : "140"} image="assets/images/kit-pregnant-mom.webp" alt="green iguana" />
//             <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
//               <Typography gutterBottom variant="h5" component="Box">
//                 Preserve
//               </Typography>
//               <Typography sx={{ textAlign: "center" }} variant="body1" color="text.secondary">
//                 Following delivery and collection of stem cells, you will need to call our medical courier at 18001 024 026 to arrange transfer to Cryovault laboratory for processing.
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Box>
//     </Box>
//   );
// };

// export default HowItWorks;

import { Box, Typography } from "@mui/material";
import React from "react";

const HowitWorks = () => {
  return (
    <>
      <Box className="edu-categorie-area categorie-area-5 edu-section-gap">
        <img className=" position-ab spectrum-circl" src="assets/images/anim-icon-10.webp" alt="Shape" />

        <Box className="container how-ts-containr">
          <Box className="section-title section-center sal-animate cd-headline">
            <Typography variant="h2" className="title">
              How it works{" "}
            </Typography>
            <Box className="shape_in shape_in-bk" style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <img src="assets/images/med-img blk.svg" width="30" />
            </Box>

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
                      <Typography className="title">Preserve</Typography>
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
