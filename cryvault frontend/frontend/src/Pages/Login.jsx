import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Input } from "../styles/Input";
import useDeviceSize from "../Utilities/useDeviceSize";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/reducers/UserReducer";
import { useDispatch } from "react-redux";

export const Login = () => {
  const theme = useTheme();
  const isMobile = useDeviceSize() === "xs";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ countryCode: "+91", phoneNumber: "" });

  const handleUserData = (e) => setUserData({ ...userData, phoneNumber: e.target.value });
  const handleOTPScreen = () => navigate("/OTP", { state: { countryCode: "+91", phoneNumber: userData.phoneNumber } });
  const handleSendOTP = () => {
    dispatch(login({ payload: userData, callback: handleOTPScreen }));
  };
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

        <Button variant="contained" color="primary" sx={{ mt: 4, mb: 2, width: "100%" }} onClick={handleSendOTP} className="edu-btn">
          SEND OTP
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
