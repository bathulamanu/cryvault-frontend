import React, { useState, useEffect, useRef } from "react";
import { Box, Card, Typography, Grid, TextField, IconButton, useMediaQuery, Button, FormControl, OutlinedInput, InputLabel, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import baby from "../../assets/images/baby.png";
import { getCustomerInfo } from "../../redux/reducers/UserReducer"
import { useDispatch, useSelector } from "react-redux";
import { getCustomerPaymentDetails, getGenders } from "../../redux/reducers/PaymentReducer"
import { uploadSingleFileApi } from '../../redux/reducers/api';
import { MultipleSelect, SingleSelect } from '../CheckoutDetails'
import { getCountry, getState, getCity } from "../../redux/reducers/PaymentReducer";
import { ToastContainer, toast } from "react-toastify";
import {
  getGenderIdList,
  getCityIdList,
  getNamesIdList,
  getStateIdList,
} from "../../globalFunctions";
import axios from "axios";
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
    "genderValue": "",
    "profilePhoto": ""
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
    console.log("cehck data lllllllllllllllllllll  ", customerpersonalInfo);
    dispatch(getCustomerPaymentDetails(customerpersonalInfo))
  }

  const fileIDProofInputRef = useRef(null);

  const handleButtonClick = () => {
    fileIDProofInputRef.current.click();
  };

  const UploadFile = async (name, fileName, e) => {
    // alert(name);
    const apiUrl = uploadSingleFileApi();
    const token = sessionStorage.getItem("token");
    const headers = {
      'Content-Type': 'multipart/form-data',
      authorization: `${token}`
    };
    const formData = new FormData();
    formData.append('file', e?.target?.files?.[0]);
    formData.append('folder', name);
    const response = await axios.post(apiUrl, formData, { headers });
    if (response?.data?.status == 200) {
      toast.success(response?.data?.message)

      setCustomerpersonalInfo((data) => ({
        ...data,
        [fileName]: response?.data?.data?.key
      }))
    }
    else {
      toast.error(response?.data?.message)
    }
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
          <Box style={{
            margin: isMobile ? 'none' : "60px", position: "relative",
            display: isMobile ? 'flex' : "block", alignItems: "center", justifyContent: "center"
          }}>

            {customerpersonalInfo.profilePhoto ?

              <img
                style={{
                  width: "150px",
                  height: "180px",
                  borderRadius: "50%",
                  marginBottom: "20px",
                }}
                src={"https://flyingbyts.s3.ap-south-2.amazonaws.com/" + customerpersonalInfo.profilePhoto}
                alt="Father-son"
              />
              :
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
            }
            {isMobile ? (
              <IconButton
                style={{
                  position: "absolute",
                  bottom: "30px",
                  right: "90px",
                  backgroundColor: "whitesmoke",
                }}
                aria-label="edit"
                onClick={handleButtonClick}
              >
                <EditIcon />
                <input
                  type="file"
                  ref={fileIDProofInputRef}
                  style={{ display: 'none' }}
                  onChange={(e) => UploadFile("CustomerProfile", 'profilePhoto', e)}
                />
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
                onClick={handleButtonClick}
              >
                <EditIcon />{" "}
                <input
                  type="file"
                  ref={fileIDProofInputRef}
                  style={{ display: 'none' }}
                  onChange={(e) => UploadFile("CustomerProfile", 'profilePhoto', e)}
                />
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
              <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
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
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
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
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
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
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Gender</InputLabel>
                <FormControl variant="outlined" size="small">

                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    disabled={false}
                    data={gendersList}
                    value={customerpersonalInfo?.gender}
                    onChange={(e) => { handleInputChange(e, "gender") }}
                  />
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
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
              </Stack>
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
              <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
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
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>City</InputLabel>
                <FormControl variant="outlined" size="small">

                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    disabled={false}
                    data={cityList}
                    value={customerpersonalInfo?.city}
                    onChange={(e) => { handleInputChange(e, "city") }}
                  />
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
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
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
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
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack sx={{ width: "80%", gap: "0.5rem" }} key={'key'}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Country</InputLabel>
                <FormControl variant="outlined" size="small">

                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    disabled={true}
                    data={upDatedCountryList}
                    value={customerpersonalInfo?.country}
                    onChange={(e) => { handleInputChange(e.target.value, "country") }}
                  />
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <Stack sx={{ width: "50%", gap: "0.5rem" }} key={'key'}>
                <Button variant="contained" onClick={SaveUserData}> Save</Button>
              </Stack> */}
              <Box style={{ marginLeft: "30px", marginBottom: "20px" }}>
                <Button
                  style={{
                    width: "90px",
                    height: "30px",
                    borderRadius: "10px",
                    backgroundColor: "#2b2e64",
                    color: "white",
                    border: "none",
                    marginTop: 30
                  }}
                  onClick={SaveUserData}
                >
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default SettingsPage;
