import { Grid, Typography,Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import "./Home.css";
import useDeviceSize from "../../Utilities/useDeviceSize";
const HowItWorks = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Box style={{ background: "#F9F6EF", position: "relative", marginTop: "50rem" }}>
      {isMobile ? null : <img style={{ position: "absolute" }} className=" spectrum-circl" src="assets/images/anim-icon-10.webp" alt="Shape" />}

      <Box style={{ padding: isMobile ? "2rem" : "10rem" }}>
        <Typography variant="h3" sx={{ textAlign: "center", color: "#00215C", fontWeight: "600" }}>
          How it works
        </Typography>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Cryovault provides 3 easy steps to preserve your child’s cord blood stem cells.
        </Typography>
      </Box>
      <Box style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-evenly", alignItems: "center", paddingBottom: "10rem" }}>
        <Card sx={{ maxWidth: 345, background: "#F9F6EF", boxShadow: "none" }}>
          <CardActionArea>
            <CardMedia sx={{ borderRadius: "50%", width: isMobile ? "10rem" : "100%", margin: isMobile ? "auto" : "" }} component="img" height={isMobile ? "10rem" : "140"} image="assets/images/kit-pregnant-mom.webp" alt="green iguana" />
            <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
              <Typography gutterBottom variant="h5" component="Box">
                Enroll
              </Typography>
              <Typography sx={{ textAlign: "center" }} variant="body1" color="text.secondary">
                Sign up through our easy enrollment page and the CBR collection kit will be sent to you. Call our toll free number <br /> 18001 024 026
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, background: "#F9F6EF", boxShadow: "none" }}>
          <CardActionArea>
            <CardMedia sx={{ borderRadius: "50%", width: isMobile ? "10rem" : "100%", margin: isMobile ? "auto" : "" }} component="img" height={isMobile ? "10rem" : "140"} image="assets/images/2-Collect-.webp" alt="green iguana" />
            <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
              <Typography gutterBottom variant="h5" component="Box">
                Collect
              </Typography>
              <Typography sx={{ textAlign: "center" }} variant="body1" color="text.secondary">
                At birth, the umbilical cord blood (and tissue if selected) will be placed into your CBR collection kit. Call our toll free number <br /> 18001 024 026
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, background: "#F9F6EF", boxShadow: "none" }}>
          <CardActionArea>
            <CardMedia sx={{ borderRadius: "50%", width: isMobile ? "10rem" : "100%", margin: isMobile ? "auto" : "" }} component="img" height={isMobile ? "10rem" : "140"} image="assets/images/kit-pregnant-mom.webp" alt="green iguana" />
            <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
              <Typography gutterBottom variant="h5" component="Box">
                Preserve
              </Typography>
              <Typography sx={{ textAlign: "center" }} variant="body1" color="text.secondary">
                Following delivery and collection of stem cells, you will need to call our medical courier at 18001 024 026 to arrange transfer to Cryovault laboratory for processing.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default HowItWorks;
