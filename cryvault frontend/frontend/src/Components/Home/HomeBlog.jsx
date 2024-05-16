import { Container, Typography, Button } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const HomeBlog = () => {
  return (
    <Container sx={{ marginTop: "15rem", display: "flex", gap: "1rem", flexDirection: "column" }}>
      <img class="position-ab appl-blg" src="assets/images/apple-1.webp" alt="Shape"></img>
      <img class="position-ab clod-blg" src="assets/images/cloud-3.webp" alt="Shape"></img>
      <Container className="blogText">
        <Typography sx={{ fontWeight: "700", color: "#8A00AF" }} variant="h3">
          Latest News Posts
        </Typography>
        <Typography sx={{ fontWeight: "600" }} variant="h2">
          Get Know Our Weekly <br />
          Update News
        </Typography>
      </Container>

      <div style={{display:"flex", gap:"1rem"}}>
        <div className="singleCard">
          <Typography sx={{ fontWeight: "700" }} variant="h3">
            How Stem Cell Preservation Can Benefit for Upcoming Generation
          </Typography>
          <Button sx={{ borderBottom: "2px solid blue", fontSize: "1rem", fontWeight: "700", width: "35%" }} variant="text" endIcon={<ArrowForwardIcon />}>
            Read more
          </Button>
        </div>
        <div className="singleCard">
          <Typography sx={{ fontWeight: "700" }} variant="h3">
            How Stem Cell Preservation Can Benefit for Upcoming Generation
          </Typography>
          <Button sx={{ borderBottom: "2px solid blue", fontSize: "1rem", fontWeight: "700", width: "35%" }} variant="text" endIcon={<ArrowForwardIcon />}>
            Read more
          </Button>
        </div>
        <div className="singleCard">
          <Typography sx={{ fontWeight: "700" }} variant="h3">
            How Stem Cell Preservation Can Benefit for Upcoming Generation
          </Typography>
          <Button sx={{ borderBottom: "2px solid blue", fontSize: "1rem", fontWeight: "700", width: "35%" }} variant="text" endIcon={<ArrowForwardIcon />}>
            Read more
          </Button>
        </div>
      </div>

      {/* <img class="position-ab rockets-ot" src="assets/images/rocket.webp" alt="Shape"></img> */}
    </Container>
  );
};

export default HomeBlog;
