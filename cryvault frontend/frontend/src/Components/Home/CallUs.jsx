import { Diversity1 } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import React from "react";

const CallUs = () => {
  return (
    <div style={{position:"relative", marginTop:"10rem",     border: "1px solid #e5e5e5"}}>
      <img src="assets/images/rainbow-cloud.webp" className="position-ab cloud-up" alt="pencil" />
      <Container  className="callUsContainer" sx={{padding:"10rem"}}>
        <Typography sx={{ fontWeight: "700" }} variant="h1">
          Call To Enroll Your Child
        </Typography>
        <Typography sx={{ fontWeight: "600" }} variant="h4">
          <a href="tel:18001 024 026">18001 024 026</a>
        </Typography>
        <img src="assets/images/booknow.webp" className="m-auto" width={96} />
      </Container>
      <img class="position-ab butterfly_ot" src="assets/images/butterfly-4.webp" alt="Shape"></img>
    </div>
  );
};

export default CallUs;
