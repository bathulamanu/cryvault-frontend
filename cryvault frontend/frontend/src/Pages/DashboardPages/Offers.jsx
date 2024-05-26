import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import offerImg from "../../assets/images/offerImg.png";

const Offers = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ height: "100%" }}>
      <Card
        sx={{
          // Adjust margin based on screen size
          margin: isMobile ? "20px" : "0px",
          width: isMobile ? "90%" : "1100px", // Adjust width based on screen size
          height: isMobile ? "650px" : "100%",
          borderRadius: "20px",
        }}
        style={{ marginLeft: isMobile ? "none" : "20px" }}
      >
        <Box sx={{ backgroundColor: "#2B2E64", padding: "20px" }}>
          <Typography sx={{ color: "white" }} variant="h4">
            Offers and Updates
          </Typography>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: "75%",
          }}
        >
          <img
            style={{
              width: isMobile ? "300px" : "400px",
            }}
            src={offerImg}
            alt="offer"
          />
          <Typography sx={{ fontSize: "4rem", fontWeight: "600" }} variant="h4">
            Offers are coming soon!
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Offers;
