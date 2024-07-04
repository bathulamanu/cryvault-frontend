import { Card, Box, Typography, TextField, Button, Grid, useMediaQuery, FormControl, OutlinedInput, InputLabel, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import refferal from "../../assets/images/refferal.jpg";

const Refferals = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [RefferalInfo, setRefferalInfo] = useState({
    "customerID": null,
    "refferalCode": "",
    "EmailToRef": "",
    "clientName": "",
    "EDD": "",
    "area": "",
    "HospitalDetails": "",
    "phoneNumber": "",
    "alternativeNumber": null,
    "email": ""
  })
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRefferalInfo((data) => ({
      ...data,
      [name]: value
    }))
  };

  return (
    <Box style={{ marginTop: isMobile ? "20px" : "0px", height: "100%" }}>
      <Card
        sx={{
          // width: isMobile ? "90%" : "90%",
          marginLeft: "20px",
          borderRadius: "20px",
          margin: isMobile ? "10px" : "s",
        }}
      >
        <Box>
          <Box p={2} sx={{ backgroundColor: "#2b2e64" }}>
            <Typography sx={{ color: "white" }} variant="h4">
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
                {/* <TextField label="Enter Referral Code" variant="standard" sx={{ width: "350px" }} /> */}
                <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Enter Referral Code</InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    type="text"
                    value={RefferalInfo.refferalCode}
                    name="refferalCode"
                    id={`outlined-adornment`}
                    placeholder="Enter Referral Code"
                    sx={{
                      border: "",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    onChange={handleOnChange}
                  />
                </FormControl>
              </Stack>
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
                  {/* <TextField label="Enter Your Email" variant="standard" /> */}
                  <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Enter Your Email</InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    type="text"
                    value={RefferalInfo.EmailToRef}
                    name="EmailToRef"
                    id={`outlined-adornment`}
                    placeholder="Enter Your Email"
                    sx={{
                      border: "",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    onChange={handleOnChange}
                  />
                </FormControl>
              </Stack>
                </Box>
                <Box sx={{ margin: "60px 0px 0px 80px" }}>
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
          margin: isMobile ? "10px" : "s",
        }}
      >
        <Box p={2} sx={{ backgroundColor: "#2b2e64" }}>
          <Typography sx={{ color: "white" }} variant="h4">
            Reference
          </Typography>
        </Box>
        <Box sx={{ marginLeft: isMobile ? "10px" : "20px", padding: "10px" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Client Name</InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    type="text"
                    value={RefferalInfo.clientName}
                    name="clientName"
                    id={`outlined-adornment`}
                    placeholder="Client Name"
                    sx={{
                      border: "",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    onChange={handleOnChange}
                  />
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>EDD</InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    type="text"
                    value={RefferalInfo.EDD}
                    name="EDD"
                    id={`outlined-adornment`}
                    placeholder="EDD"
                    sx={{
                      border: "",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    onChange={handleOnChange}
                  />
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Area</InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    type="text"
                    value={RefferalInfo.area}
                    name="area"
                    id={`outlined-adornment`}
                    placeholder="Area"
                    sx={{
                      border: "",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    onChange={handleOnChange}
                  />
                </FormControl>
              </Stack>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              {/* <TextField fullWidth variant="standard" label="Hospital Details" /> */}
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Hospital Details</InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    type="text"
                    value={RefferalInfo.HospitalDetails}
                    name="HospitalDetails"
                    id={`outlined-adornment`}
                    placeholder="Hospital Details"
                    sx={{
                      border: "",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    onChange={handleOnChange}
                  />
                </FormControl>
              </Stack>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              {/* <TextField variant="standard" label="Mobile Number" /> */}
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Mobile Number</InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    type="text"
                    value={RefferalInfo.phoneNumber}
                    name="phoneNumber"
                    id={`outlined-adornment`}
                    placeholder="Mobile Number"
                    sx={{
                      border: "",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    onChange={handleOnChange}
                  />
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              {/* <TextField variant="standard" label="Alternative Number" /> */}
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Alternative Number</InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    type="text"
                    value={RefferalInfo.alternativeNumber}
                    name="alternativeNumber"
                    id={`outlined-adornment`}
                    placeholder="Alternative Number"
                    sx={{
                      border: "",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    onChange={handleOnChange}
                  />
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              {/* <TextField variant="standard" label="Email Address" /> */}
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Email Address</InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    type="text"
                    value={RefferalInfo.email}
                    name="email"
                    id={`outlined-adornment`}
                    placeholder="Email Address"
                    sx={{
                      border: "",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    onChange={handleOnChange}
                  />
                </FormControl>
              </Stack>
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
