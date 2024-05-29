import { Diversity1 } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";

const CallUs = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Box style={{ position: "relative", marginTop: "10rem",marginBottom:"5rem", border: "1px solid #e5e5e5" }}>
      <img src="assets/images/rainbow-cloud.webp" className="position-ab cloud-up" alt="pencil" />
      <Container className="callUsContainer" sx={{ padding: isMobile ? "25rem 2rem  3rem" : "10rem" }}>
        <Typography sx={{ fontWeight: "700" }} variant={isMobile ? "h3" : "h1"}>
          Call To Enroll Your Child
        </Typography>
        <Typography sx={{ fontWeight: "600" }} variant={isMobile ? "h5" : "h4"}>
          <a href="tel:18001 024 026">18001 024 026</a>
        </Typography>
        <img src="assets/images/booknow.webp" className="m-auto" width={96} />
      </Container>
      {
        isMobile ? null : 

      <img className="position-ab butterfly_ot" src="assets/images/butterfly-4.webp" style={{ right: isMobile ? " 0%" : "", top: isMobile ? "64%" : "" }} alt="Shape"></img>
      }
    </Box>
  );
};

export default CallUs;
