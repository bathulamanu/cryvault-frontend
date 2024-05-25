import { Card, Box, Typography, TextField, Button, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import refferal from "../../assets/images/refferal.jpg";

const Refferals = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box style={{ marginTop: isMobile ? "20px" : "0px", height: "100%" }}>
      <Card
        sx={{
          // width: isMobile ? "90%" : "90%",
          marginLeft: "20px",
          borderRadius: "20px",
        }}
      >
        <Box>
          <Box sx={{ backgroundColor: "#2b2e64", padding: "10px" }}>
            <Typography sx={{ color: "white" }} variant="h6">
              Referral Links
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              width: "100%",
              justifyContent: " space-between",
              padding: "2rem 2rem",
            }}
          >
            <Box>
              <Box style={{ marginTop: "10px" }}>
                <Box
                  sx={{
                    marginLeft: "20px",
                    width: isMobile ? "300px" : "500px",
                  }}
                >
                  <Typography sx={{ color: "#000000" }} style={{ fontSize: "2rem" }}>
                    Refer a friend to Cryovault and you'll each get ₹200 off your next order!
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginLeft: "20px",
                    width: isMobile ? "300px" : "500px",
                  }}
                >
                  <Typography sx={{ color: "#000000" }} style={{ fontSize: "2rem" }}>
                    Share your unique link below or use the share Buttons to spread the word
                  </Typography>
                </Box>
              </Box>
              <Box
                style={{
                  marginLeft: "20px",
                  marginTop: "10px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Card
                  sx={{
                    backgroundColor: "#2b2e64",
                    width: "90px",
                    height: "30px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <Button sx={{ fontSize: "10px", color: "white" }}>Facebook</Button>
                </Card>
                <Card
                  sx={{
                    backgroundColor: "#2b2e64",
                    width: "90px",
                    height: "30px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <Button sx={{ fontSize: "10px", color: "white" }}>Twitter</Button>
                </Card>
                <Card
                  sx={{
                    backgroundColor: "#2b2e64",
                    width: "90px",
                    height: "30px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <Button sx={{ fontSize: "10px", color: "white" }}>Instagram</Button>
                </Card>
                <Card
                  sx={{
                    backgroundColor: "#2b2e64",
                    width: "90px",
                    height: "30px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <Button sx={{ fontSize: "10px", color: "white" }}>Whatsapp</Button>
                </Card>
              </Box>
              <Box sx={{ marginLeft: "20px", marginTop: "10px" }}>
                <Typography sx={{ color: "#000000" }} style={{ fontSize: "2rem" }}>
                  Your Referral Code
                </Typography>
                <TextField label="Enter Referral Code" variant="standard" sx={{ width: "350px" }} />
              </Box>
              <Box sx={{ margin: "10px 0px 10px 40px" }}>
                <Button
                  style={{
                    width: "250px",
                    height: "30px",
                    borderRadius: "10px",
                    backgroundColor: "#2b2e64",
                    color: "white",
                    border: "none",
                  }}
                >
                  Copy Link
                </Button>
              </Box>
              <Box
                style={{
                  margin: "0px 0px 20px 20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography sx={{ color: "#000000" }} style={{ fontSize: "2rem" }}>
                    Send Invitation
                  </Typography>
                  <TextField label="Enter Your Email" variant="standard" />
                </Box>
                <Box sx={{ margin: "20px 0px 0px 80px" }}>
                  <Button
                    style={{
                      width: "90px",
                      height: "30px",
                      borderRadius: "10px",
                      backgroundColor: "#2b2e64",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box>
              <img
                src={refferal}
                alt="reference"
                style={{
                  width: "300px",
                  height: "300px",
                  marginTop: "10px",
                  marginLeft: "30px",
                  borderRadius: "30px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Card>
      <Card
        sx={{
          marginTop: "20px",
          marginLeft: "20px",
          borderRadius: "20px",
          // width: isMobile ? "90%" : "90%",
          height: " 40%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Box sx={{ backgroundColor: "#2b2e64", padding: "10px" }}>
          <Typography sx={{ color: "white" }} variant="h4">
            Reference
          </Typography>
        </Box>
        <Box sx={{ marginLeft: isMobile ? "10px" : "20px", padding: "10px" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField variant="standard" label="Client Name" />
            </Grid>
            <Grid item xs={4}>
              <TextField variant="standard" label="EDD" />
            </Grid>
            <Grid item xs={4}>
              <TextField variant="standard" label="Area" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField fullWidth variant="standard" label="Hospital Details" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField variant="standard" label="Mobile Number" />
            </Grid>
            <Grid item xs={4}>
              <TextField variant="standard" label="Alternative Number" />
            </Grid>
            <Grid item xs={4}>
              <TextField variant="standard" label="Email Address" />
            </Grid>
          </Grid>
        </Box>
        <Box style={{ marginLeft: "30px", marginBottom: "20px" }}>
          <Button
            style={{
              width: "90px",
              height: "30px",
              borderRadius: "10px",
              backgroundColor: "#2b2e64",
              color: "white",
              border: "none",
            }}
          >
            Send
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Refferals;
