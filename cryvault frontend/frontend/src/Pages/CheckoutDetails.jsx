import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import useDeviceSize from "../Utilities/useDeviceSize";

const CheckoutDetails = () => {
  const [userData, setUserData] = useState({
    firstName: {
      value: "",
      placeholder: "First Name",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "firstName",
      id: "firstName",
    },
    lastName: {
      value: "",
      placeholder: "Last Name",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "lastName",
      id: "lastName",
    },
    email: {
      value: "",
      placeholder: "Email",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "email",
      name: "email",
      id: "email",
    },
    phone: {
      value: "",
      placeholder: "Phone Number",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "tel",
      name: "phone",
      id: "phone",
    },
    addressLine1: {
      value: "",
      placeholder: "Address line 1",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "addressLine1",
      id: "addressLine1",
    },
    addressLine2: {
      value: "",
      placeholder: "Address line 2",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "addressLine2",
      id: "addressLine2",
    },
    nearLandMark: {
      value: "",
      placeholder: "Near Landmark",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "nearLandMark",
      id: "nearLandMark",
    },
    city: {
      value: "",
      placeholder: "City",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "city",
      id: "city",
    },
    state: {
      value: "",
      placeholder: "State",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "state",
      id: "state",
    },
    pincode: {
      value: "",
      placeholder: "Pincode",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "pincode",
      id: "pincode",
    },
    country: {
      value: "",
      placeholder: "Country",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "country",
      id: "country",
    },
    gender: {
      value: "Female",
      name: "gender",
      options: [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Other", value: "Other" },
      ],
    },
  });
  const isMobile = useDeviceSize() === "xs";

  const userDetails = Object.entries(userData);
  console.log(userDetails);
  const otherUserData = userDetails.filter((data) => data[1].name !== "gender");
  const isOdd = userDetails.length % 2 !== 0;
  const handleGenderChange = (event) => {
    setUserData((prevData) => ({
      ...prevData,
      gender: {
        ...prevData.gender,
        value: event.target.value,
      },
    }));
    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setUserData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  };
  return (
    <Box style={{ marginTop: isMobile ? "3rem" : "10rem", padding: isMobile ? "0rem 2rem" : "3rem 5rem" }}>
      <Typography variant="h2" sx={{ fontWeight: "600" }}>
        {" "}
        Billing Details
      </Typography>
      <Box style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
        <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: isMobile ? "100%" : "60%" }}>
          {otherUserData.map((data, index) => (
            <Stack key={data[0]}>
              <InputLabel sx={{ fontSize: "2rem" }} htmlFor={data[1].name}>
                {data[1].placeholder}
              </InputLabel>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  type={data[1].type}
                  value={data[1].value}
                  name={data[1].name}
                  id="outlined-adornment-password"
                  placeholder={data[1].placeholder}
                  sx={{ height: "40px" }}
                  // onChange={handleOnChange}
                />
              </FormControl>
            </Stack>
          ))}
          <Box>
            {/* <Typography sx={{ fontSize: "2rem" }}>Gender</Typography> */}
            <FormControlLabel
              control={
                <RadioGroup
                  name="gender"
                  value={userData.gender.value} // Set the selected value
                  onChange={handleGenderChange}
                  sx={{ flexDirection: "row" }}
                >
                  {userData.gender.options.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      labelPlacement="top"
                      value={option.value}
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 28,
                            },
                          }}
                        />
                      }
                      label={option.value}
                      sx={{ "& .MuiFormControlLabel-label": { fontSize: "2rem", height: "2rem", lineHeight: "2rem" } }}
                    />
                  ))}
                </RadioGroup>
              }
            />
          </Box>
        </Box>

        <Box style={{ marginBottom: isMobile ? "2rem" : "0rem", width: isMobile ? "100%" : "40%", padding: "2rem", display: "flex", flexDirection: "column", gap: "3rem", border: "1px solid #e5e5e5", justifyContent: "space-between" }}>
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            Order Details
          </Typography>

          <Box sx={{ flexDirection: "column", display: "flex", gap: "2rem" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">Poduct</Typography>
              <Typography variant="h4">Total</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">bame</Typography>
              <Typography variant="h4">345345</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">Subtotal</Typography>
              <Typography variant="h4">34534534</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">Total</Typography>
              <Typography variant="h4">345345345</Typography>
            </Box>
          </Box>

          <OutlinedInput
            id="outlined-adornment-password"
            type={"text"}
            placeholder="Promo Code"
            size="small"
            sx={{ height: "36px" }}
            name="coupon"
            // value={loginData?.password}
            // onChange={handleOnChange}
          />

          <Button
            className="edu-btn"
            sx={{ width: "100%" }}
            // onClick={pay}
          >
            Make Order
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutDetails;
