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
              width: isMobile ? "90%" : "35vw",
              height: isMobile ? "100%" : "100%",
              borderRadius: "20px",
              margin: isMobile ? "10px" : "0px",
              backgroundColor:"#F8F9FC"
            }}
            style={{ marginLeft: isMobile ? "10px" : "40px" }}
          >
            <Box
              p={2}
              sx={{
                backgroundColor: "#2b2e64",
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
              <Box sx={{ marginTop: "50px" }}>
                <TextField id="baby Name" label="Baby Name" variant="standard" fullWidth />
              </Box>

              <Box sx={{ marginTop: "50px" }}>
                <TextField id="date of Birth" label="Date of Birth" variant="standard" fullWidth />
              </Box>
              <Box sx={{ marginTop: "50px" }}>
                <TextField id="time of Birth" label="Time of Birth" variant="standard" fullWidth />
              </Box>
              <Box sx={{ marginTop: "50px" }}>
                <TextField id="weight" label="Weight" variant="standard" fullWidth />
              </Box>
              <Box sx={{ marginTop: "50px" }}>
                <TextField id="Delivery Doctor Name" label="Delivery Doctor Name" variant="standard" fullWidth />
              </Box>
              <Box sx={{ marginTop: "50px" }}>
                <TextField id="Delivery Doctor Name" label="Place of Birth" variant="standard" fullWidth />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              width: isMobile ? "90%" : "35vw",
              borderRadius: "20px",
              margin: isMobile ? "20px" : "0px",
              height: isMobile ? "100%" : "100%",
              backgroundColor:"#F8F9FC"
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
                    marginLeft: isMobile ? "80px" : "150px",
                    width: "120px",
                    height: "180px",
                    borderRadius: "50px",
                  }}
                  //   src="../../assets/images/maledoc.png"
                  src={doc}
                  alt="doctor"
                />
              </Box>
              <Box sx={{ marginTop: "50px" }}>
                <TextField id="Doctor's Name" label="Doctor's Name" variant="standard" fullWidth />
              </Box>
              <Box sx={{ marginTop: "50px" }}>
                <TextField id="Hospital Name" label="Hospital Name" variant="standard" fullWidth />
              </Box>
              <Box sx={{ marginTop: "50px" }}>
                <TextField id="Hospital Address Line-1" label="Hospital Address Line-1" variant="standard" fullWidth />
              </Box>
              <Box sx={{ marginTop: "50px" }}>
                <TextField id="Hospital Address Line-2" label="Hospital Address Line-2" variant="standard" fullWidth />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default BabyDetails;
