import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import offerImg from "../../assets/images/offerImg.png";

const Offers = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      <Card
        sx={{
          // Adjust margin based on screen size
          margin: isMobile ? "20px" : "0px",
          width: isMobile ? "90%" : "1100px", // Adjust width based on screen size
          height: isMobile ? "650px" : "550px",
          borderRadius: "20px",
        }}
        style={{ marginLeft: isMobile ? "10px" : "20px" }}
      >
        <Box sx={{ color: "white", backgroundColor: "#2B2E64", padding: "20px" }}>
          <Typography variant="h5">Offers and Updates</Typography>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <img
            style={{
              //   marginLeft: isMobile ? "30px" : "350px",
              width: isMobile ? "300px" : "400px",
            }}
            src={offerImg}
            alt="offer"
          />
        </Box>
        <Box
          sx={{
            color: "black",
            // marginLeft: isMobile ? "50px" : "350px",
            justifyContent: "center",
            display: "flex",
          }}
          style={{ fontWeight: "bold" }}
        >
          <Typography sx={{ fontSize: "4rem", fontWeight: "600" }} variant="h4">
            Offers are coming soon!
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Offers;
