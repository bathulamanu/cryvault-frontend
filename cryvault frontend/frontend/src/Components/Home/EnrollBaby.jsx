import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";

const EnrollBaby = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Container sx={{  marginTop: "15rem", display: "flex", flexDirection: isMobile ? " column" : "row ", gap: "1rem" }}>
      <Box className="enrollText" style={{alignItems:isMobile ? 'center':"start", width : isMobile ? "100%" :"50%"}}>
        <Typography sx={{ textAlign: isMobile ?"center" :"start", fontSize : isMobile ? "2.5rem" : '6rem', fontWeight:"700" }}  variant="h1">
          Be Prepared for the Unknown.
        </Typography>
        <Typography sx={{ textAlign: isMobile ?"center" :"start", fontWeight: isMobile ? "400" : "600" }} variant="h4">
          You only have one chance to preserve your baby’s life-saving stem cells, and that’s the day they are born. Secure your family’s healthy future by enrolling in stem cell banking today.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "#D5008D", color: "white", fontSize: "1rem", fontWeight: "700", width: isMobile ? "40%" :"25%",whiteSpace:"nowrap", padding: "15px 30px" }} size="lg">
          Enroll Now
        </Button>
      </Box>
      <Box className="enrollImage">
        <img className="main-img-1 sal-animate" src="assets/images/img-1-2.webp" width="550" />
      </Box>
    </Container>
  );
};

export default EnrollBaby;
