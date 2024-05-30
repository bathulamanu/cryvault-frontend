import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Image } from "@mui/icons-material";
import { Input } from "../styles/Input";
import useDeviceSize from "../Utilities/useDeviceSize";
import { login, verifyOTP } from "../redux/reducers/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const OTP = () => {
  const theme = useTheme();
  const [otp, setOTP] = useState("");
  const isMobile = useDeviceSize() === "xs";
  const userData = useSelector((state) => state.user.userData);
  const userDetails = useSelector((state) => state.user.userDetails);

  const location = useLocation();
  const navigate = useNavigate();
  const countrycode = location.state?.countryCode;
  const phonenumber = location.state?.phoneNumber;
  const OTPid = userData?.data?.OTPid;

  const dispatch = useDispatch();
  const handleSendOTP = () => {
    const dataToSend = {
      OTPid: OTPid,
      OTP: otp,
      countryCode: countrycode,
      phoneNumber: phonenumber,
    };
    dispatch(verifyOTP({ payload: dataToSend, callback: goTodashBoard }));
  };
  const hiddenDigits = "*".repeat(phonenumber?.length - 4);
  const lastFourDigits = phonenumber?.slice(-4);
  const ResendOTP = () => {
    const dataToSend = {
      countryCode: countrycode,
      phoneNumber: phonenumber,
    };

    dispatch(login({ payload: dataToSend }));
  };
  const goTodashBoard = () => {
    const isCheckingOut = localStorage.getItem("isCheckingOut") == 'true';
    if (isCheckingOut) navigate("/checkout");
    else if (userDetails?.subscriptionPlanId?.toString()?.length > 0) navigate("/dashboard");
    else navigate("/plan");
  };

  console.log(userDetails?.subscriptionPlanId !== null || userDetails?.subscriptionPlanId !== undefined, userDetails?.subscriptionPlanId);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        marginTop: "13rem",
      }}
    >
      <Box sx={{ bgcolor: "#EDF2F7", borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[2], padding: isMobile ? "2rem" : "3rem", margin: "0rem" }}>
        <Typography variant="h2" sx={{ mb: 4, fontWeight: "600", fontSize: "2rem" }}>
          Enter the 6 Digit Verification code sent to <br />({hiddenDigits}
          {lastFourDigits})
        </Typography>

        <Typography variant="h4" sx={{ mb: 2, ml: 1, fontWeight: "500", fontSize: "2rem" }}>
          OTP Verification
        </Typography>
        <Input
          label="Enter Phone Number"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          placeholder="Enter Phone Number"
          variant="outlined"
          style={{ fontSize: "2rem !important", ml: 1, "& .MuiOutlinedInput-root": { borderRadius: "0.25rem" } }} // Consistent border radius
          id="phoneNumberInput"
        />
        <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
          <Typography variant="h4" fontWeight={500}>
            Didn&#39;t receive the OTP ?&nbsp;
          </Typography>
          <Button sx={{ fontSize: "1rem" }} variant="text" onClick={ResendOTP}>
            Resend OTP
          </Button>
        </Box>
        <Button variant="contained" sx={{ mt: 4, mb: 2, width: "100%" }} onClick={handleSendOTP} className="edu-btn">
          Verify
        </Button>
      </Box>
    </Box>
  );
};

export default OTP;
