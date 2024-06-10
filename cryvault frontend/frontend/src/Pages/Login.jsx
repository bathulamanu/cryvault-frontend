import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Input } from "../styles/Input";
import useDeviceSize from "../Utilities/useDeviceSize";
import { useNavigate } from "react-router-dom";
import { decrementTimer, login, startTimerWithCallback } from "../redux/reducers/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { validatePhoneNumber } from "../Components/Contact/ContactForm";

export const Login = () => {
  const theme = useTheme();
  const isMobile = useDeviceSize() === "xs";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ countryCode: "+91", phoneNumber: "", errorStatus: false, errorMessage: "" });
  const timer = useSelector((state) => state.user.timer);
  const error = useSelector((state) => state.user.timerError);
  const handleUserData = (e) => setUserData({ ...userData, phoneNumber: e.target.value, errorStatus: false, errorMessage: "" });
  const handleOTPScreen = () => navigate("/OTP", { state: { countryCode: "+91", phoneNumber: userData.phoneNumber } });
  const handleSendOTP = () => {
    // dispatch(setTimer(60));
    // dispatch(setError('Please wait for the countdown to finish before resending the OTP.'));
    const isMobileInvalid = !validatePhoneNumber(userData.phoneNumber, String(userData.countryCode) || "91");
    if (isMobileInvalid) {
      setUserData((prevData) => ({
        ...prevData,
        errorStatus: true,
        errorMessage: "Enter Valid Phone Number",
      }));
      return;
    }
    dispatch(startTimerWithCallback());
    dispatch(login({ payload: userData, callback: handleOTPScreen }));
  };

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        dispatch(decrementTimer());
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [timer, dispatch]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        marginTop: "13rem",
        marginBottom: "13rem",
      }}
    >
      <Box sx={{ bgcolor: "#EDF2F7", borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[2], padding: isMobile ? "1rem" : "3rem", margin: "3rem" }}>
        <Typography variant="h3" sx={{ mb: 4, fontWeight: "600" }}>
          Log In
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img src="/images/img_barcode.svg" alt="Barcode Image" style={{ width: "4.5rem", height: "4.5rem" }} />
          <Typography variant="h4" sx={{ ml: 1, fontWeight: "500", fontSize: "2rem", width: "15%" }}>
            +91
          </Typography>
          <Input
            value={userData.phoneNumber}
            onChange={handleUserData}
            label="Enter Phone Number"
            placeholder="Enter Phone Number"
            variant="outlined"
            style={{ fontSize: "2rem !important", ml: 1, "& .MuiOutlinedInputRoot": { borderRadius: "0.25rem" } }} // Consistent border radius
            id="phoneNumberInput"
          />
        </Box>
        {userData.errorStatus ? <Typography style={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{userData.errorMessage}</Typography> : null}

        <Button variant="contained" color="primary" sx={{ mt: 4, mb: 2, width: "100%" }} onClick={handleSendOTP} className="edu-btn">
          SEND OTP
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
