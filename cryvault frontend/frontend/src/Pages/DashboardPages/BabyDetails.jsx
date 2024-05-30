import { Grid, Box, Card, CardContent, Typography, TextField, useMediaQuery } from "@mui/material";
import React from "react";
import doc from "../../assets/images/maledoc.png";
import baby from "../../assets/images/baby.png";
const BabyDetails = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          gap: "30px",
        }}
        container
        spacing={3}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              width: isMobile ? "9a0%" : "35vw",
              height: isMobile ? "100%" : "100%",
              borderRadius: "20px",
              margin: isMobile ? "10px" : "0px",
              backgroundColor: "#F8F9FC",
            }}
            style={{ marginLeft: isMobile ? "10px" : "40px" }}
          >
            <Box
              p={2}
              sx={{
                backgroundColor: "#2b2e64"
              }}
            >
              <Typography sx={{ paddingLeft: "10px", color: "white" }} variant="h4">
                Baby Details
              </Typography>
            </Box>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  style={{
                    marginTop: "10px",
                    // marginLeft: isMobile ? "80px" : "150px",
                    width: "120px",
                    height: "180px",
                    borderRadius: "50px",
                  }}
                  src={baby}
                  alt="baby"
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Baby Name</Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Baby Name</Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Date of Birth</Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Date of Birth</Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Time of Birth</Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Time of Birth</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Weight</Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Weight</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Delivery Doctor Name</Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Delivery Doctor Name</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Place of Birth</Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Place of Birth</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              width: isMobile ? "9a0%" : "35vw",
              borderRadius: "20px",
              margin: isMobile ? "20px" : "0px",
              height: isMobile ? "100%" : "100%",
              backgroundColor: "#F8F9FC",
            }}
            style={{ marginLeft: isMobile ? "10px" : "150px" }}
          >
            <Box
              p={2}
              sx={{
                color: "white",
                backgroundColor: "#2b2e64",
              }}
            >
              <Typography sx={{ paddingLeft: "10px", color: "white" }} variant="h4">
                Doctor Details
              </Typography>
            </Box>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  style={{
                    marginTop: "10px",
                    marginLeft: isMobile ? "0px" : "150px",
                    width: "120px",
                    height: "180px",
                    borderRadius: "50px",
                  }}
                  //   src="../../assets/images/maledoc.png"
                  src={doc}
                  alt="doctor"
                />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Doctor's Name</Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Doctor's Name</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Hospital Name</Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Hospital Name</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Hospital Address Line-1</Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Hospital Address Line-1</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Hospital Address Line-2</Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Hospital Address Line-2</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default BabyDetails;
