import React, { useState, useEffect } from "react";
import { Box, Card, Typography, Grid, TextField, IconButton, useMediaQuery, Button, FormControl, OutlinedInput, InputLabel, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import baby from "../../assets/images/baby.png";
import { getCustomerInfo } from "../../redux/reducers/UserReducer"
import { useDispatch, useSelector } from "react-redux";
import { getCustomerPaymentDetails,getGenders } from "../../redux/reducers/PaymentReducer"
import { MultipleSelect, SingleSelect } from '../CheckoutDetails'
import { getCountry, getState, getCity } from "../../redux/reducers/PaymentReducer";
import {
  getGenderIdList,
  getCityIdList,
  getNamesIdList,
  getStateIdList,
} from "../../globalFunctions";

const SettingsPage = () => {
  const dispatch = useDispatch()
  const isMobile = useMediaQuery("(max-width:600px)");
  const userDetails = useSelector((state) => state.user.userDetails);
  const countries = useSelector((state) => state.payment.countries);
  const states = useSelector((state) => state.payment.states);
  const cities = useSelector((state) => state.payment.cities);
  const genders = useSelector((state) => state.payment.genders);

  const upDatedCountryList = getNamesIdList(countries);
  const stateList = getStateIdList(states);
  const cityList = getCityIdList(cities);
  const gendersList = getGenderIdList(genders);
  
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
    const dataToSend = customerpersonalInfo.country;
    dispatch(getState({ payload: dataToSend }));
  }, [customerpersonalInfo.country]);

  useEffect(() => {
    const dataToSend = customerpersonalInfo.state
    dispatch(getCity({ payload: dataToSend }));
  }, [customerpersonalInfo.state]);

  useEffect(() => {
    dispatch(getCountry());
    dispatch(getGenders())
    dispatch(getCustomerInfo())
  }, [])

  const handleInputChange = (value, name) => {
    const exp = /^\d*$/
    if (name == "pincode" && !exp.test(value)) {
      return
    }
    setCustomerpersonalInfo((data) => ({
      ...data,
      [name]: value
    }))
  }

  const SaveUserData = () => {
    console.log("cehck data ", customerpersonalInfo);
    dispatch(getCustomerPaymentDetails(customerpersonalInfo))
  }

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
        <Box p={2} sx={{ backgroundColor: "#2b2e64" }}>
          <Typography sx={{ color: "white" }} variant="h4">
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
          <Box style={{ margin: isMobile ? 'none' : "60px", position: "relative", display: isMobile ? 'flex' : "block", alignItems: "center", justifyContent: "center" }}>
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
            {isMobile ? (
              <IconButton
                style={{
                  position: "absolute",
                  bottom: "30px",
                  right: "90px",
                  backgroundColor: "whitesmoke",
                }}
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            ) : (
              <IconButton
                style={{
                  position: "absolute",
                  top: "140px",
                  right: "0px",
                  backgroundColor: "whitesmoke",
                }}
                aria-label="edit"
              >
                <EditIcon />{" "}
              </IconButton>
            )}
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
              {/* <TextField label="First Name" sx={{ width: isMobile ? "100%" : "180px", marginBottom: "3rem" }} variant="standard" value={customerpersonalInfo?.firstName} onChange={(e) => { handleInputChange(e.target.value, "firstName") }} /> */}
              <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>First Name</InputLabel>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  readOnly={false}
                  type="text"
                  value={customerpersonalInfo?.firstName}
                  onChange={(e) => { handleInputChange(e.target.value, "firstName") }}
                  name="firstName"
                  id={`outlined-adornment`}
                  placeholder="First Name"
                  sx={{
                    border: "",
                    height: "40px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField label="Second Name" sx={{ width: isMobile ? "100%" : "180px", marginBottom: "3rem" }} variant="standard" 
              value={customerpersonalInfo?.lastName} onChange={(e) => { handleInputChange(e.target.value, "lastName") }} /> */}
              <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Second Name</InputLabel>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  readOnly={false}
                  type="text"
                  value={customerpersonalInfo?.lastName}
                  onChange={(e) => { handleInputChange(e.target.value, "lastName") }}
                  name="lastName"
                  id={`outlined-adornment`}
                  placeholder="Second Name"
                  sx={{
                    border: "",
                    height: "40px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField label="Phone Number" sx={{ width: isMobile ? "100%" : "180px", marginBottom: "3rem" }} variant="standard" value={customerpersonalInfo?.phoneNumber} /> */}
              <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Phone Number</InputLabel>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  readOnly={false}
                  type="text"
                  value={customerpersonalInfo?.phoneNumber}
                  // onChange={(e) => { handleInputChange(e.target.value, "phoneNumber") }}
                  name="phoneNumber"
                  id={`outlined-adornment`}
                  placeholder="Second Name"
                  sx={{
                    border: "",
                    height: "40px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField label="Gender" sx={{ width: isMobile ? "100%" : "180px", marginBottom: "3rem" }} variant="standard" value={customerpersonalInfo?.genderValue} onChange={(e) => { handleInputChange(e.target.value, "gender") }} /> */}
              <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Gender</InputLabel>
              <FormControl variant="outlined" size="small">
                {/* <OutlinedInput
                  readOnly={false}
                  type="text"
                  value={customerpersonalInfo?.genderValue}
                  onChange={(e) => { handleInputChange(e.target.value, "genderValue") }}
                  name="genderValue"
                  id={`outlined-adornment`}
                  placeholder="Second Name"
                  sx={{
                    border: "",
                    height: "40px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                /> */}
                 <SingleSelect
                  Placeholder={"Select"}
                  width={"100%"}
                  disabled={false}
                  data={gendersList}
                  value={customerpersonalInfo?.gender}
                  onChange={(e) => { handleInputChange(e, "gender") }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField label="Email Address" sx={{ width: isMobile ? "100%" : "300px", marginBottom: "3rem" }} variant="standard" value={customerpersonalInfo?.email} /> */}
              <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Email Address</InputLabel>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  readOnly={false}
                  type="text"
                  value={customerpersonalInfo?.email}
                  // onChange={(e) => { handleInputChange(e.target.value, "email") }}
                  name="email"
                  id={`outlined-adornment`}
                  placeholder="Second Name"
                  sx={{
                    border: "",
                    height: "40px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
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
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
                {/* <TextField label="Address line-1" sx={{ width: isMobile ? "100%" : "600px", marginBottom: "3rem" }} variant="standard" value={customerpersonalInfo?.addressLine1} onChange={(e) => { handleInputChange(e.target.value, "addressLine1") }} /> */}
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Address line-1</InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    type="text"
                    value={customerpersonalInfo?.addressLine1}
                    onChange={(e) => { handleInputChange(e.target.value, "addressLine1") }}
                    name="addressLine1"
                    id={`outlined-adornment`}
                    placeholder="Second Name"
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
            </Grid>
            <Grid item xs={12}>
              {/* <TextField label="Address line-2" sx={{ width: isMobile ? "100%" : "600px", marginBottom: "3rem" }} variant="standard" value={customerpersonalInfo?.addressLine2} onChange={(e) => { handleInputChange(e.target.value, "addressLine2") }} /> */}
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Address line-2</InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    type="text"
                    value={customerpersonalInfo?.addressLine2}
                    onChange={(e) => { handleInputChange(e.target.value, "addressLine2") }}
                    name="addressLine2"
                    id={`outlined-adornment`}
                    placeholder="Second Name"
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
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField label="Near Land Mark" variant="standard" sx={{ marginBottom: "3rem" }} fullWidth value={customerpersonalInfo?.nearLandMark} onChange={(e) => { handleInputChange(e.target.value, "nearLandMark") }} /> */}
              <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Near Land Mark</InputLabel>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  readOnly={false}
                  type="text"
                  value={customerpersonalInfo?.nearLandMark}
                  onChange={(e) => { handleInputChange(e.target.value, "nearLandMark") }}
                  name="nearLandMark"
                  id={`outlined-adornment`}
                  placeholder="Second Name"
                  sx={{
                    border: "",
                    height: "40px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField label="City" variant="standard" sx={{ marginBottom: "3rem" }} fullWidth value={customerpersonalInfo?.city} onChange={(e) => { handleInputChange(e.target.value, "city") }} /> */}
              <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>City</InputLabel>
              <FormControl variant="outlined" size="small">
                {/* <OutlinedInput
                  readOnly={false}
                  type="text"
                  value={customerpersonalInfo?.city}
                  onChange={(e) => { handleInputChange(e.target.value, "city") }}
                  name="city"
                  id={`outlined-adornment`}
                  placeholder="Second Name"
                  sx={{
                    border: "",
                    height: "40px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                /> */}
                <SingleSelect
                  Placeholder={"Select"}
                  width={"100%"}
                  disabled={false}
                  data={cityList}
                  value={customerpersonalInfo?.city}
                  onChange={(e) => { handleInputChange(e, "city") }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField label="State" variant="standard" sx={{ marginBottom: "3rem" }} fullWidth value={customerpersonalInfo?.state} 
              onChange={(e) => { handleInputChange(e.target.value, "state") }} /> */}
              <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>State</InputLabel>
              <FormControl variant="outlined" size="small">

                <SingleSelect
                  Placeholder={"Select"}
                  width={"100%"}
                  disabled={false}
                  data={stateList}
                  value={customerpersonalInfo?.state}
                  onChange={(e) => { handleInputChange(e, "state") }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField label="Pincode" variant="standard" sx={{ marginBottom: "3rem" }} inputProps={{ maxLength: 6 }} fullWidth
               value={customerpersonalInfo?.pincode} onChange={(e) => { handleInputChange(e.target.value, "pincode") }} /> */}
              <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Pincode</InputLabel>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  readOnly={false}
                  type="text"
                  value={customerpersonalInfo?.pincode}
                  onChange={(e) => { handleInputChange(e.target.value, "pincode") }}
                  name="pincode"
                  id={`outlined-adornment`}
                  placeholder="Second Name"
                  sx={{
                    border: "",
                    height: "40px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                  inputProps={{ maxLength: 6 }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              {/* <TextField label="Country" sx={{ width: "400px", marginBottom: "3rem" }} variant="standard" 
              value={customerpersonalInfo?.country} onChange={(e) => { handleInputChange(e.target.value, "country") }} /> */}
              <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Country</InputLabel>
              <FormControl variant="outlined" size="small">
                {/* <OutlinedInput
                  readOnly={false}
                  type="text"
                  value={customerpersonalInfo?.country}
                  onChange={(e) => { handleInputChange(e.target.value, "country") }}
                  name="country"
                  id={`outlined-adornment`}
                  placeholder="Second Name"
                  sx={{
                    border: "",
                    height: "40px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                /> */}
                <SingleSelect
                  Placeholder={"Select"}
                  width={"100%"}
                  disabled={true}
                  data={upDatedCountryList}
                  value={customerpersonalInfo?.country}
                  onChange={(e) => { handleInputChange(e.target.value, "country") }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={SaveUserData}> Save</Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default SettingsPage;
