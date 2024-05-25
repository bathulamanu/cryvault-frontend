import { Box, Card, Typography, IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import { Download } from "@mui/icons-material";

const Services = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{height:"100%"}}>
      <Card
        sx={{
          width: isMobile ? "90%" : "1100px", // Adjust width based on screen size
          height: "100%",
          margin: isMobile ? "10px" : "0px",
          borderRadius: "20px",
        }}
        style={{ marginLeft: isMobile ? "10px" : "20px", backgroundColor: "#F8F9FC" }}
      >
        <Box sx={{ backgroundColor: "#2b2e64", p: 2, color: "white" }}>
          <Typography sx={{ color: "white" }} variant="h4">
            Services
          </Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography style={{ fontSize: "2rem", fontWeight: "bold" }} variant="h6">
            Cd 5R
          </Typography>
          <Card
            sx={{
              color: "black",
              bgcolor: "white",
              p: 2,
              mt: 1,
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: "40px",
              width: isMobile ? "90%" : "700px", // Adjust width based on screen size
              height: "50px",
              border: "0.5px solid #BEBEBE",
              backgroundColor: "rgb(239 239 239 / 67%)",
            }}
          >
            <Typography style={{ fontSize: "2rem", fontWeight:'600' }} variant="h6">
              Ram
            </Typography>
            <Typography style={{ fontSize: "2rem", fontWeight:'600' }} variant="body1">
              12345
            </Typography>
            <IconButton>
              <Download style={{ fontSize: "2rem", fontWeight:'600' }} />
            </IconButton>
          </Card>

          <Typography style={{ fontSize: "2rem", fontWeight: "bold" }} variant="h6">
            Cd 787R
          </Typography>

          <Card
            sx={{
              color: "black",
              bgcolor: "white",
              p: 2,
              mt: 1,
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: isMobile ? "90%" : "700px", // Adjust width based on screen size
              height: "50px",
              border: "0.5px solid #BEBEBE",
              backgroundColor: "rgb(239 239 239 / 67%)",
            }}
          >
            <Typography style={{ fontSize: "2rem", fontWeight:'600' }} variant="h6">
              Hari
            </Typography>
            <Typography style={{ fontSize: "2rem", fontWeight:'600' }} variant="body1">
              54321
            </Typography>
            <IconButton>
              <Download style={{ fontSize: "2rem", fontWeight:'600' }} />
            </IconButton>
          </Card>
        </Box>
      </Card>
    </Box>
  );
};

export default Services;
