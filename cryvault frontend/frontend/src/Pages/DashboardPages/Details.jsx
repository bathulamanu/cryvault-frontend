

import React, { useEffect, useMemo, useState } from "react";
import { Box, TextField, Grid, useMediaQuery, FormControl, OutlinedInput, InputLabel } from "@mui/material";
import "../../Components/DashboardComponents/Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnnexureInfo, getClientInfo } from "../../redux/reducers/DashboardReducer";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../globalFunctions"
import { getCustomerInfo } from "../../redux/reducers/UserReducer"

const Details = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const UserData = useSelector((state) => state.dashboard.SubscribedUserData);
  const userDetails = useSelector((state) => state.user.userDetails);
  const [isUserFillTheForm, setisUserFillTheForm] = useState(false)
  const [afterSubmittingUserData, setafterSubmittingUserData] = useState({
    "customerAnnexureInformationId": null,
    "customerID": null,
    "CustomerClientMotherDetails": {
      "ExpectantMotherName": "",
      "ExpectantMotherDOB": "",
      "ExpectantMotherEmail": "",
      "ExpectantMotherMobile": "",
      "ExpectantMotherOccupation": "",
      "ExpectantMotherDesignation": "",
      "ExpectantMotherOrganizationName": "",
      "ExpectantMotherIDproof": null,
      "ExpectantMotherIdproofNo": "",
      "ExpectantMotherOtherInfo": "",
      "ExpectantMotherIDproofPhoto": "",
      "ExpectantMotherProfilePhoto": "",
      "ExpectantMotherIDproofValue": ""
    },
    "CustomerClientFatherDetails": {
      "ExpectantFatherName": "",
      "ExpectantFatherDOB": "",
      "ExpectantFatherEmail": "",
      "ExpectantFatherMobile": "",
      "ExpectantFatherOccupation": "",
      "ExpectantFatherDesignation": "",
      "ExpectantFatherOrganizationName": "",
      "ExpectantFatherIDproof": null,
      "ExpectantFatherIdproofNo": "",
      "ExpectantFatherOtherInfo": "",
      "ExpectantFatherIDproofPhoto": "",
      "ExpectantFatherProfilePhoto": "",
      "ExpectantFatherIDproofValue": ""
    }
  })
  const [customerpersonalInfo, setCustomerpersonalInfo] = useState({
    "customerID": null,
    "firstName": "",
    "lastName": "",
    "email": "",
    "countryCode": "",
    "phoneNumber": "",
    "gender": null,
    "createdTime": "",
    "subscriptionPlanId": null,
    "addressLine1": "",
    "addressLine2": "",
    "nearLandMark": "",
    "city": null,
    "state": null,
    "pincode": "",
    "country": 352,
    "registrationCRNid": "",
    "LocationInfo": {
      "cityID": null,
      "cityName": "",
      "stateID": null,
      "stateName": "",
      "countryID": null,
      "countryName": ""
    },
    "genderValue": ""
  })
  useEffect(() => {
    setCustomerpersonalInfo(userDetails);
  }, [userDetails])

  useEffect(() => {
    setisUserFillTheForm(UserData?.isUserEnteredAllMandatoryFileds);
    localStorage.setItem("isFillForm", UserData?.isUserEnteredAllMandatoryFileds);
    console.log("check data ", UserData);
    setafterSubmittingUserData(UserData)
  }, [UserData])

  useEffect(() => {
    dispatch(getCustomerInfo())
    dispatch(getAnnexureInfo())
  }, [])

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

          {isUserFillTheForm ? <Box mt={2} sx={{ padding: "20px" }}>
            <Grid container spacing={2}>
              <Grid xs={isMobile ? 12 : 6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Mother's Name</InputLabel>
                      <FormControl variant="outlined" size="small">
                        <OutlinedInput
                          readOnly={true}
                          value={afterSubmittingUserData?.CustomerClientMotherDetails?.ExpectantMotherName}
                          sx={{
                            border: "",
                            height: "40px",
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                          }}
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Date of Birth</Typography> */}
                      {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>{formatDate(afterSubmittingUserData?.CustomerClientMotherDetails?.ExpectantMotherDOB)}</Typography> */}
                      <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Date of Birth</InputLabel>
                      <FormControl variant="outlined" size="small">
                        <OutlinedInput
                          readOnly={true}
                          value={formatDate(afterSubmittingUserData?.CustomerClientMotherDetails?.ExpectantMotherDOB)}
                          sx={{
                            border: "",
                            height: "40px",
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                          }}
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Mobile Number</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>{afterSubmittingUserData?.CustomerClientMotherDetails?.ExpectantMotherMobile}</Typography> */}
                      <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Mobile Number</InputLabel>
                      <FormControl variant="outlined" size="small">
                        <OutlinedInput
                          readOnly={true}
                          value={afterSubmittingUserData?.CustomerClientMotherDetails?.ExpectantMotherMobile}
                          sx={{
                            border: "",
                            height: "40px",
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                          }}
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Email Address</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>{afterSubmittingUserData?.CustomerClientMotherDetails?.ExpectantMotherEmail}</Typography> */}
                      <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Email Address</InputLabel>
                      <FormControl variant="outlined" size="small">
                        <OutlinedInput
                          readOnly={true}
                          value={afterSubmittingUserData?.CustomerClientMotherDetails?.ExpectantMotherEmail}
                          sx={{
                            border: "",
                            height: "40px",
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                          }}
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Occupation</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>
                      {afterSubmittingUserData?.CustomerClientMotherDetails?.ExpectantMotherOccupation}</Typography> */}
                      <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Occupation</InputLabel>
                      <FormControl variant="outlined" size="small">
                        <OutlinedInput
                          readOnly={true}
                          value={afterSubmittingUserData?.CustomerClientMotherDetails?.ExpectantMotherOccupation}
                          sx={{
                            border: "",
                            height: "40px",
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                          }}
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {/* <Typography sx={{ whiteSpace: "nowrap", fontWeight: "600", fontSize: "2rem", color: "gray" }}>Organization Name</Typography>
                      <Typography sx={{ whiteSpace: "nowrap", fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>
                      {afterSubmittingUserData?.CustomerClientMotherDetails?.ExpectantMotherOrganizationName}</Typography> */}
                      <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Organization Name</InputLabel>
                      <FormControl variant="outlined" size="small">
                        <OutlinedInput
                          readOnly={true}
                          value={afterSubmittingUserData?.CustomerClientMotherDetails?.ExpectantMotherOrganizationName}
                          sx={{
                            border: "",
                            height: "40px",
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                          }}
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              {/* Father's Details Grid */}
              <Grid xs={isMobile ? 12 : 6} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Father's Name</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>
                      {afterSubmittingUserData?.CustomerClientFatherDetails?.ExpectantFatherName}</Typography> */}
                      <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Father's Name</InputLabel>
                      <FormControl variant="outlined" size="small">
                        <OutlinedInput
                          readOnly={true}
                          value={afterSubmittingUserData?.CustomerClientFatherDetails?.ExpectantFatherName}
                          sx={{
                            border: "",
                            height: "40px",
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                          }}
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Date of Birth</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>
                      {formatDate(afterSubmittingUserData?.CustomerClientFatherDetails?.ExpectantFatherDOB)}</Typography> */}
                      <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Date of Birth</InputLabel>
                      <FormControl variant="outlined" size="small">
                        <OutlinedInput
                          readOnly={true}
                          value={formatDate(afterSubmittingUserData?.CustomerClientFatherDetails?.ExpectantFatherDOB)}
                          sx={{
                            border: "",
                            height: "40px",
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                          }}
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Mobile Number</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>{
                      afterSubmittingUserData?.CustomerClientFatherDetails?.ExpectantFatherMobile}</Typography> */}
                      <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Mobile Number</InputLabel>
                      <FormControl variant="outlined" size="small">
                        <OutlinedInput
                          readOnly={true}
                          value={afterSubmittingUserData?.CustomerClientFatherDetails?.ExpectantFatherMobile}
                          sx={{
                            border: "",
                            height: "40px",
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                          }}
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Email Address</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>{af
                      terSubmittingUserData?.CustomerClientFatherDetails?.ExpectantFatherEmail}</Typography> */}
                      <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Email Address</InputLabel>
                      <FormControl variant="outlined" size="small">
                        <OutlinedInput
                          readOnly={true}
                          value={afterSubmittingUserData?.CustomerClientFatherDetails?.ExpectantFatherEmail}
                          sx={{
                            border: "",
                            height: "40px",
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                          }}
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Occupation</Typography>
                      <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>
                      {afterSubmittingUserData?.CustomerClientFatherDetails?.ExpectantFatherOccupation}</Typography> */}
                      <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Occupation</InputLabel>
                      <FormControl variant="outlined" size="small">
                        <OutlinedInput
                          readOnly={true}
                          value={afterSubmittingUserData?.CustomerClientFatherDetails?.ExpectantFatherOccupation}
                          sx={{
                            border: "",
                            height: "40px",
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                          }}
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} style={{ marginRight: "2px", marginTop: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {/* <Typography sx={{ whiteSpace: "nowrap", fontWeight: "600", fontSize: "2rem", color: "gray" }}>Organization Name</Typography>
                      <Typography sx={{ whiteSpace: "nowrap", fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>
                      {afterSubmittingUserData?.CustomerClientFatherDetails?.ExpectantFatherOrganizationName}</Typography> */}
                      <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Organization Name</InputLabel>
                      <FormControl variant="outlined" size="small">
                        <OutlinedInput
                          readOnly={true}
                          value={afterSubmittingUserData?.CustomerClientFatherDetails?.ExpectantFatherOrganizationName}
                          sx={{
                            border: "",
                            height: "40px",
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                          }}
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              {/* Remaining Address Details */}
              <Grid item xs={12} style={{ marginRight: "2px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Address line 1</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>
                  {customerpersonalInfo?.addressLine1}</Typography> */}
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Address line 1</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerpersonalInfo?.addressLine1}
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} style={{ marginRight: "2px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Address line 2</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>{customerpersonalInfo?.addressLine2}</Typography> */}
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Address line 2</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerpersonalInfo?.addressLine2}
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={4} style={{ marginRight: "25px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Near Land Mark</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>{customerpersonalInfo?.nearLandMark}</Typography> */}
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Near Land Mark</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerpersonalInfo?.nearLandMark}
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={4} style={{ marginRight: "25px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>City</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>{customerpersonalInfo?.LocationInfo?.cityName}</Typography> */}
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>City</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerpersonalInfo?.LocationInfo?.cityName}
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={4} style={{ marginRight: "25px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>State</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>{customerpersonalInfo?.LocationInfo?.stateName}</Typography> */}
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>State</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerpersonalInfo?.LocationInfo?.stateName}
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={2} style={{ marginRight: "25px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Pincode</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>{customerpersonalInfo?.pincode}</Typography> */}
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Pincode</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerpersonalInfo?.pincode}
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={2} style={{ marginRight: "25px", marginTop: "20px", padding: "1rem 0 " }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "gray" }}>Country</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "2rem", color: "black", borderBottom: "2px solid gray" }}>
                  {customerpersonalInfo?.LocationInfo?.countryName}</Typography> */}
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Country</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={true}
                      value={customerpersonalInfo?.LocationInfo?.countryName}
                      sx={{
                        border: "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </Box> :
            <Box mt={2} sx={{ padding: "20px" }}>
              <Card sx={{ maxWidth: 345, margin: '20px auto', padding: '10px', textAlign: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                      Please Fill the Form
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button className="edu-btn" borderRadius={"35px !important"} onClick={() => navigate("/popup")}>
                      Go To Form
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Box>
          }
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
