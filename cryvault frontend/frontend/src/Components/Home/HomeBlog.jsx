// import { Container, Typography, Button, Box } from "@mui/material";
// import React from "react";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import useDeviceSize from "../../Utilities/useDeviceSize";
// const HomeBlog = () => {
//   const isMobile = useDeviceSize() === "xs";

//   return (
//     <Container sx={{ marginBottom: "5rem", marginTop: "15rem", display: "flex", gap: "1rem", flexDirection: "column", position: "relative" }}>
//       <img className={isMobile ? " blogAppleMobile position-ab appl-blg" : "position-ab appl-blg"} src="assets/images/apple-1.webp" style={{ right: isMobile ? "0" : "", left: isMobile ? "0" : "" }} alt="Shape"></img>
//       <img className={isMobile ? "blogCloudMobile position-ab clod-blg" : "position-ab clod-blg"} src="assets/images/cloud-3.webp" alt="Shape"></img>
//       <Container sx={{ marginTop: isMobile ? "5rem" : "0rem" }} className="blogText">
//         <Typography sx={{ fontWeight: "700", color: "#8A00AF" }} variant="h3">
//           Latest News Posts
//         </Typography>
//         <Typography sx={{ fontWeight: "600" }} variant={isMobile ? "h4" : "h2"}>
//           Get Know Our Weekly <br />
//           Update News
//         </Typography>
//       </Container>

//       <Box style={{ display: "flex", gap: "1rem", flexDirection: isMobile ? "column" : "row" }}>
//         <Box className="singleCard" style={{ width: isMobile ? "100%" : "40rem" }}>
//           <Typography sx={{ fontWeight: "700" }} variant={isMobile ? "h5" : "h3"}>
//             How Stem Cell Preservation Can Benefit for Upcoming Generation
//           </Typography>
//           <Button sx={{ borderBottom: "2px solid blue", fontSize: "1rem", fontWeight: "700", width: "35%" }} variant="text" endIcon={<ArrowForwardIcon />}>
//             Read more
//           </Button>
//         </Box>
//         <Box className="singleCard" style={{ width: isMobile ? "100%" : "40rem" }}>
//           <Typography sx={{ fontWeight: "700" }} variant={isMobile ? "h5" : "h3"}>
//             How Stem Cell Preservation Can Benefit for Upcoming Generation
//           </Typography>
//           <Button sx={{ borderBottom: "2px solid blue", fontSize: "1rem", fontWeight: "700", width: "35%" }} variant="text" endIcon={<ArrowForwardIcon />}>
//             Read more
//           </Button>
//         </Box>
//         <Box className="singleCard" style={{ width: isMobile ? "100%" : "40rem" }}>
//           <Typography sx={{ fontWeight: "700" }} variant={isMobile ? "h5" : "h3"}>
//             How Stem Cell Preservation Can Benefit for Upcoming Generation
//           </Typography>
//           <Button sx={{ borderBottom: "2px solid blue", fontSize: "1rem", fontWeight: "700", width: "35%" }} variant="text" endIcon={<ArrowForwardIcon />}>
//             Read more
//           </Button>
//         </Box>
//       </Box>

//       {/* <img className="position-ab rockets-ot" src="assets/images/rocket.webp" alt="Shape"></img> */}
//     </Container>
//   );
// };

// export default HomeBlog;
import { Box, Link, Typography } from "@mui/material";
import React from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";

const HomeBlog = () => {
  const isMobile = useDeviceSize() === "xs";
  return (
    <>
      <Box className="edu-event-area event-area-4 section-gap-equal position-relative pb-150">
        {isMobile ? null : (
          <>
            <img class="position-ab appl-blg" src="assets/images/apple-1.webp" alt="Shape"></img>
            <img class="position-ab clod-blg" src="assets/images/cloud-3.webp" alt="Shape"></img>
          </>
        )}

        <Box className="container edublink-animated-shape">
          <Box className="section-title section-center sal-animate">
            <span className="pre-title">Latest News Posts</span>
            <Typography variant="h2" className="title">
              Get Know Our Weekly <br />
              Update News
            </Typography>
          </Box>
          <Box className="row g-5">
            <Box className="col-lg-4 col-md-6 sal-animate">
              <Box className="edu-event event-style-1">
                <Box className="inner">
                  <Box className="thumbnail">
                    <Link href="#">
                      <img src="assets/images/2-Collect-.webp" alt="Blog Images" />
                    </Link>
                  </Box>
                  <Box className="content">
                    <Typography variant="h5" className="title">
                      <Link href="#">How Does Stem Cell Banking Work?...</Link>
                    </Typography>
                    <Typography>Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.</Typography>

                    <Box className="read-more-btn">
                      <Link className="edu-btn btn-small" href="#">
                        Read More <i className="icon-4"></i>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="col-lg-4 col-md-6 sal-animate">
              <Box className="edu-event event-style-1">
                <Box className="inner">
                  <Box className="thumbnail">
                    <Link href="#">
                      <img src="assets/images/2-Collect-.webp" alt="Blog Images" />
                    </Link>
                  </Box>
                  <Box className="content">
                    <Typography variant="h5" className="title">
                      <Link href="#">What is Stem Cell Banking, and Why Should You Consider ...</Link>
                    </Typography>
                    <Typography>Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.</Typography>

                    <Box className="read-more-btn">
                      <Link className="edu-btn btn-small" href="#">
                        Read More <i className="icon-4"></i>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="col-lg-4 col-md-6 sal-animate">
              <Box className="edu-event event-style-1">
                <Box className="inner">
                  <Box className="thumbnail">
                    <Link href="#">
                      <img src="assets/images/2-Collect-.webp" alt="Blog Images" />
                    </Link>
                  </Box>
                  <Box className="content">
                    <Typography variant="h5" className="title">
                      <Link href="#">How Does Stem Cell Banking Work?...</Link>
                    </Typography>
                    <Typography>Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.</Typography>

                    <Box className="read-more-btn">
                      <Link className="edu-btn btn-small" href="#">
                        Read More <i className="icon-4"></i>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {isMobile ? null : (
            <>
              <img class="position-ab rockets-ot" src="assets/images/rocket.webp" alt="Shape"></img>
            </>
          )}

          <ul className="shape-group">
            <li className="shape-1 sal-animate">
              <img className="rotateit" src="assets/images/about/shape-13.png" alt="Shape" />
            </li>
            <li className="shape-2 scene sal-animate">
              <span data-depth=".9"></span>
            </li>
          </ul>
        </Box>
      </Box>
    </>
  );
};

export default HomeBlog;
