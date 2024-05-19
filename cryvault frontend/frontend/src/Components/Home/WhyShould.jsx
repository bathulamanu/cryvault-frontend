import React from "react";
import "./Home.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import useDeviceSize from "../../Utilities/useDeviceSize";

const WhyShould = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", position: "absolute", width: "100%" }}>
      {isMobile ? null : <img className=" position-ab triangle-btn" src="assets/images/anim-icon-9.webp" alt="Shape" />}

      <Box className="WhyShouldContent" style={{ marginTop: isMobile ? "5rem" : "14rem", width: isMobile ? " 70%" : "95%" }}>
        <Typography variant={isMobile ? "h4" : "h1"} sx={{ textAlign: "center", fontWeight: "600", whiteSpace: "nowrap" }}>
          Why Should Your Family Bank Cord Blood?
        </Typography>

        <Box className={isMobile ? "shape_inMobile shape_inMobile-bk" : "shape_in shape_in-bk"} style={{ display: "flex", justifyContent: "center" }}>
          <img src="assets/images/med-img blk.svg" width="30" />
        </Box>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Cord blood provides a valuable source of stem cells that can be used in the treatment of various medical conditions, such as leukemia and other blood disorders. These stem cells, collected from the umbilical cord at birth, offer potential therapeutic options for both the child and, in some cases, compatible family members.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "#D5008D", color: "white", fontSize: "1rem", fontWeight: "500" }} size="lg">
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default WhyShould;
