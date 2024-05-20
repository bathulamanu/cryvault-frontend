import { Container, Typography, Button,Box } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useDeviceSize from "../../Utilities/useDeviceSize";
const HomeBlog = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Container sx={{ marginTop:  "15rem", display: "flex", gap: "1rem", flexDirection: "column",position:"relative" }}>
      <img className={ isMobile? " blogAppleMobile position-ab appl-blg" :  "position-ab appl-blg"} src="assets/images/apple-1.webp" style={{ right: isMobile ? "0" : "", left: isMobile ? "0" : "" }} alt="Shape"></img>
      <img className={isMobile? "blogCloudMobile position-ab clod-blg" : "position-ab clod-blg"} src="assets/images/cloud-3.webp" alt="Shape"></img>
      <Container sx={{ marginTop: isMobile  ? "5rem" : "0rem"}} className="blogText">
        <Typography sx={{ fontWeight: "700", color: "#8A00AF" }} variant="h3">
          Latest News Posts
        </Typography>
        <Typography sx={{ fontWeight: "600" }} variant={isMobile ? "h4" : "h2"}>
          Get Know Our Weekly <br />
          Update News
        </Typography>
      </Container>

      <Box style={{ display: "flex", gap: "1rem", flexDirection: isMobile ? "column" : "row" }}>
        <Box className="singleCard" style={{ width: isMobile ? "100%" : "40rem" }}>
          <Typography sx={{ fontWeight: "700" }} variant={isMobile ? "h5" : "h3"}>
            How Stem Cell Preservation Can Benefit for Upcoming Generation
          </Typography>
          <Button sx={{ borderBottom: "2px solid blue", fontSize: "1rem", fontWeight: "700", width: "35%" }} variant="text" endIcon={<ArrowForwardIcon />}>
            Read more
          </Button>
        </Box>
        <Box className="singleCard" style={{ width: isMobile ? "100%" : "40rem" }}>
          <Typography sx={{ fontWeight: "700" }} variant={isMobile ? "h5" : "h3"}>
            How Stem Cell Preservation Can Benefit for Upcoming Generation
          </Typography>
          <Button sx={{ borderBottom: "2px solid blue", fontSize: "1rem", fontWeight: "700", width: "35%" }} variant="text" endIcon={<ArrowForwardIcon />}>
            Read more
          </Button>
        </Box>
        <Box className="singleCard" style={{ width: isMobile ? "100%" : "40rem" }}>
          <Typography sx={{ fontWeight: "700" }} variant={isMobile ? "h5" : "h3"}>
            How Stem Cell Preservation Can Benefit for Upcoming Generation
          </Typography>
          <Button sx={{ borderBottom: "2px solid blue", fontSize: "1rem", fontWeight: "700", width: "35%" }} variant="text" endIcon={<ArrowForwardIcon />}>
            Read more
          </Button>
        </Box>
      </Box>

      {/* <img className="position-ab rockets-ot" src="assets/images/rocket.webp" alt="Shape"></img> */}
    </Container>
  );
};

export default HomeBlog;
