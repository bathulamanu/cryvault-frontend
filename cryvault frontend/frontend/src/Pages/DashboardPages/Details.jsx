

import React, { useEffect, useMemo } from "react";
import { Box, Card, CardContent, Typography, TextField, Grid, useMediaQuery } from "@mui/material";
import "../../Components/DashboardComponents/Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getClientInfo } from "../../redux/reducers/DashboardReducer";

const Details = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ height: "100%" }}>
      <Card
        sx={{
          width: isMobile ? "90%" : "80vw",
          border: "0.5px solid lightgrey",
          borderRadius: "20px",
          margin: isMobile ? "10px" : "0px",
          backgroundColor: "#F8F9FC",
          height: "100%",
        }}
        style={{ marginLeft: isMobile ? "10px" : "20px" }}
      >
        <Box p={2} style={{ backgroundColor: "#2b2e64" }}>
          <Typography variant="h4" style={{ color: "white" }}>
            Details
          </Typography>
        </Box>
        <CardContent>
          <Box mt={2} sx={{ padding: "20px" }}>
            <Grid container spacing={2}>
              <Grid xs={isMobile ? 12 : 6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Mother's Name</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Mother's Name</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Date of Birth</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Date of Birth</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Mobile Number</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Mobile Number</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Email Address</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Email Address</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Occupation</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Occupation</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ whiteSpace: "nowrap", fontWeight: "600", fontSize: "2rem", color: "gray" }}>Organization Name</Typography>
                      <Typography sx={{ whiteSpace: "nowrap", fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Organization Name</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              {/* Father's Details Grid */}
              <Grid xs={isMobile ? 12 : 6} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Father's Name</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Father's Name</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Date of Birth</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Date of Birth</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Mobile Number</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Mobile Number</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Email Address</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Email Address</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Occupation</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Occupation</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ whiteSpace: "nowrap", fontWeight: "600", fontSize: "2rem", color: "gray" }}>Organization Name</Typography>
                      <Typography sx={{ whiteSpace: "nowrap", fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Organization Name</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              {/* Remaining Address Details */}
              <Grid item xs={12} style={{ marginRight: "2px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Address line 1</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Address line 1</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} style={{ marginRight: "2px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Address line 2</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Address line 2</Typography>
                </Box>
              </Grid>
              <Grid item xs={4} style={{ marginRight: "25px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Near Land Mark</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Near Land Mark</Typography>
                </Box>
              </Grid>
              <Grid item xs={4} style={{ marginRight: "25px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>City</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>City</Typography>
                </Box>
              </Grid>
              <Grid item xs={4} style={{ marginRight: "25px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>State</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>State</Typography>
                </Box>
              </Grid>
              <Grid item xs={2} style={{ marginRight: "25px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Pincode</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Pincode</Typography>
                </Box>
              </Grid>
              <Grid item xs={2} style={{ marginRight: "25px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Country</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Country</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export const MobileDetails = () => {
  // const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const clientData = useSelector((state) => state.dashboard.clientData);

  const info = useMemo(() => {
    const clientInfo = {
      motherName: clientData?.CustomerClientDetails?.ExpectantMotherName || "",
      motherDOB: clientData?.CustomerClientDetails?.ExpectantMotherDOB || "",
      motherEmail: clientData?.CustomerClientDetails?.ExpectantMotherEmail || "",
      motherMobile: clientData?.CustomerClientDetails?.ExpectantMotherMobile || "",
      motherOccupation: clientData?.CustomerClientDetails?.ExpectantMotherOccupation || "",
      motherOrganizationName: clientData?.CustomerClientDetails?.ExpectantMotherOrganizationName || "",
      fatherName: clientData?.CustomerClientDetails?.ExpectantFatherName || "",
      fatherDOB: clientData?.CustomerClientDetails?.ExpectantFatherDOB || "",
      fatherEmail: clientData?.CustomerClientDetails?.ExpectantFatherEmail || "",
      fatherMobile: clientData?.CustomerClientDetails?.ExpectantFatherMobile || "",
      fatherOccupation: clientData?.CustomerClientDetails?.ExpectantFatherOccupation || "",
      fatherOrganizationName: clientData?.CustomerClientDetails?.ExpectantFatherOrganizationName || "",
      Address: clientData?.CustomerCommunicationDetails?.Address || "",
      city: clientData?.CustomerCommunicationDetails?.City || "",
      State: clientData?.CustomerCommunicationDetails?.State || "",
      State: clientData?.CustomerCommunicationDetails?.State || "",
      Country: clientData?.CustomerCommunicationDetails?.Country || "",
    };

    return clientInfo;
  }, [clientData]);
  useEffect(() => {
    dispatch(getClientInfo());
  }, []);
  return (
    <Box sx={{ height: "100%" }}>
      <Card
        sx={{
          border: "0.5px solid lightgrey",
          borderRadius: "20px",
          margin: "10px",
          backgroundColor: "#F8F9FC",
          height: "100%",
        }}
      >
        <Box style={{ backgroundColor: "#2b2e64", padding: "16px" }}>
          <Typography variant="h4" style={{ color: "white" }}>
            Details
          </Typography>
        </Box>
        <CardContent>
          <Box mt={2} sx={{ padding: "20px" }}>
            <Grid container spacing={2}>
              <Grid xs={isMobile ? 12 : 6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Mother's Name</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Mother's Name</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Date of Birth</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Date of Birth</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Mobile Number</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Mother's Name</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Email Address</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Email Address</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Occupation</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Occupation</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Organization Name</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Organization Name</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              {/* Father's Details Grid */}

              <Grid xs={isMobile ? 12 : 6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Mother's Name</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Mother's Name</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Date of Birth</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Date of Birth</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Mobile Number</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Mother's Name</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Email Address</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Email Address</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Occupation</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Occupation</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Organization Name</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Organization Name</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              {/* Remaining Address Details */}
              <Grid item xs={isMobile ? 12 : 6} sx={{ padding: "0px !important" }}>
                <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Address line 1</Typography>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Address line 1</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Address line 2</Typography>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Address line 2</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} md={4} style={{ marginRight: "2px", marginTop: "20px", maxWidth: "100%" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Near Land Mark</Typography>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Near Land Mark</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} md={4} style={{ marginRight: "2px", marginTop: "20px", maxWidth: "100%" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>City</Typography>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>City</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} md={4} style={{ marginRight: "2px", marginTop: "20px", maxWidth: "100%" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>State</Typography>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>State</Typography>
                  </Box>
                </Grid>
                <Grid item xs={2} md={4} style={{ marginRight: "2px", marginTop: "20px", maxWidth: "100%" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Pincode</Typography>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Pincode</Typography>
                  </Box>
                </Grid>
                <Grid item xs={2} md={4} style={{ marginRight: "2px", marginTop: "20px", maxWidth: "100%" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Country</Typography>
                    <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>Country</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Details;
