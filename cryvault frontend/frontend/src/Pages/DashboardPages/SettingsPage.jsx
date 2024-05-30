import React from "react";
import { Box, Card, Typography, Grid, TextField, IconButton, useMediaQuery } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import baby from "../../assets/images/baby.png";

const SettingsPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box style={{ marginLeft: isMobile ? "0px" : "20px", height: "100%" }}>
      <Card
        sx={{
          flexDirection: isMobile ? "column" : "row",
          borderRadius: "20px",
          height: "100%",
          margin: isMobile ? "20px" : "0px",
        }}
      >
        <Box p={2} sx={{ backgroundColor: "#2b2e64",}}>
          <Typography sx={{ color: "white"}} variant="h4">
            Settings
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            padding: "20px",
          }}
        >
          <Box style={{ margin: "60px", position: "relative" }}>
            <img
              style={{
                width: "150px",
                height: "180px",
                borderRadius: "50%",
                marginBottom: "20px",
              }}
              src={baby}
              alt="Father-son"
            />
            <IconButton
              style={{
                position: "absolute",
                top: isMobile ? "140px" : "140px",
                right: isMobile ? "30px" : "0px",
                backgroundColor: "whitesmoke",
              }}
              aria-label="edit"
            >
              <EditIcon />
            </IconButton>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography style={{ fontWeight: "bold" }} variant="h4">
                General Information
                <span>
                  {" "}
                  <EditIcon />
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="First Name" sx={{ width: isMobile ? "100%" : "180px", marginBottom: "3rem" }} variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Second Name" sx={{ width: isMobile ? "100%" : "180px", marginBottom: "3rem" }} variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Phone Number" sx={{ width: isMobile ? "100%" : "180px", marginBottom: "3rem" }} variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Gender" sx={{ width: isMobile ? "100%" : "180px", marginBottom: "3rem" }} variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Email Address" sx={{ width: isMobile ? "100%" : "300px", marginBottom: "3rem" }} variant="standard" />
            </Grid>

            <Grid item xs={12}>
              <Typography style={{ fontWeight: "bold" }} variant="h4">
                Address{" "}
                <span>
                  <EditIcon />
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Address line-1" sx={{ width: isMobile ? "100%" : "600px", marginBottom: "3rem" }} variant="standard" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Address line-2" sx={{ width: isMobile ? "100%" : "600px", marginBottom: "3rem" }} variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Near Land Mark" variant="standard" sx={{ marginBottom: "3rem" }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="City" variant="standard" sx={{ marginBottom: "3rem" }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="State" variant="standard" sx={{ marginBottom: "3rem" }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Pincode" variant="standard" sx={{ marginBottom: "3rem" }} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Country" sx={{ width: "400px", marginBottom: "3rem" }} variant="standard" />
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default SettingsPage;
