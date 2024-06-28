import { Grid, Box, Card, CardContent, Typography, TextField, useMediaQuery, FormControl, OutlinedInput, InputLabel, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import doc from "../../assets/images/maledoc.png";
import baby from "../../assets/images/baby.png";
import { formatDate } from "../../globalFunctions";
const BabyDetails = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [customerbabyDetails, setcustomerbabyDetails] = useState({
    "customerID": null,
    babyProfile: "",
    babyName: "Baby Name",
    babyDOB: "2023-07-07T12:40:00.000Z",
    timeOfBirth: "12:40 PM",
    weight: "3.4 Kg",
    DeliveryDoctorName: "priyanka",
    placeOfBirth: "Naraynkhed",
    NomineeName: "Prashnath",
    NomineeRelationship: "Fother",
    DoctorProfile: "",
    DoctorName: "Dcotor Name",
    HospitalName: "Hospital Name",
    HospitalAddressLine1: "Address Line 1",
    HospitalAddressLine2: "Address Line 2",
  });

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
        <Grid sx={{ padding: "0 !important", paddingTop: "24px !important" }} item xs={12} sm={6} md={4}>
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
                {customerbabyDetails?.babyProfile ? <img
                  style={{
                    marginTop: "10px",
                    width: "120px",
                    height: "180px",
                    borderRadius: "50px",
                  }}
                  src={"https://flyingbyts.s3.ap-south-2.amazonaws.com/" + customerbabyDetails?.babyProfile}
                  alt="Baby Profile"
                />
                  : <img
                    style={{
                      marginTop: "10px",
                      width: "120px",
                      height: "180px",
                      borderRadius: "50px",
                    }}
                    src={baby}
                    alt="baby"
                  />}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Baby Name</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerbabyDetails?.babyName}
                      id={`outlined-adornment`}
                      placeholder="Baby Name"
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Date of Birth</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={formatDate(customerbabyDetails?.babyDOB)}
                      id={`outlined-adornment`}
                      placeholder="Baby DOB"
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Time of Birth</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerbabyDetails?.timeOfBirth}
                      id={`outlined-adornment`}
                      placeholder="Time of Birth"
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Weight</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerbabyDetails?.weight}
                      id={`outlined-adornment`}
                      placeholder="Weight"
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Delivery Doctor Name</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerbabyDetails?.DeliveryDoctorName}
                      id={`outlined-adornment`}
                      placeholder="Delivery Doctor Name"
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Place of Birth</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerbabyDetails?.placeOfBirth}
                      id={`outlined-adornment`}
                      placeholder="Place Of Birth"
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Stack>
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

                {customerbabyDetails?.DoctorProfile ? <img
                  style={{
                    marginTop: "10px",
                    marginLeft: isMobile ? "0px" : "0px",
                    width: "120px",
                    height: "180px",
                    borderRadius: "50px",
                  }}
                  src={"https://flyingbyts.s3.ap-south-2.amazonaws.com/" + customerbabyDetails?.DoctorProfile}
                  alt="Doctor Profile"
                />
                  : <img
                    style={{
                      marginTop: "10px",
                      marginLeft: isMobile ? "0px" : "0px",
                      width: "120px",
                      height: "180px",
                      borderRadius: "50px",
                    }}
                    src={doc}
                    alt="Doctor Profile"
                  />
                }
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Doctor's Name</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerbabyDetails?.DoctorName}
                      id={`outlined-adornment`}
                      placeholder="Doctor Name"
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Hospital Name</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerbabyDetails?.HospitalName}
                      id={`outlined-adornment`}
                      placeholder="Hospital Name"
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Hospital Address Line-1</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerbabyDetails?.HospitalAddressLine1}
                      id={`outlined-adornment`}
                      placeholder="Hospital Address Line 1"
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "50px" }}>
                <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Hospital Address Line-2</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerbabyDetails?.HospitalAddressLine2}
                      id={`outlined-adornment`}
                      placeholder="Hospital Address Line 2 "
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default BabyDetails;
