import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import motherImage from "../../assets/images/motherImage.png";
import card from "../../assets/images/card.png";
const MotherDetails = () => {
  const [data, setData] = useState({
    name: {
      value: "",
      placeholder: "Expectant Mother's Name *",
      errorMessage: "",
      errorStatus: false,
      name: "name",
      id: "name",
    },
    dob: {
      value: "",
      placeholder: "Date of Birth *",
      errorMessage: "",
      errorStatus: false,
      name: "dob",
      id: "dob",
    },
    email: {
      value: "",
      placeholder: "Email Address *",
      errorMessage: "",
      errorStatus: false,
      name: "email",
      id: "email",
    },
    phone: {
      value: "",
      placeholder: "Phone Number *",
      errorMessage: "",
      errorStatus: false,
      name: "phone",
      id: "phone",
    },
    occupation: {
      value: "",
      placeholder: "Occupation *",
      errorMessage: "",
      errorStatus: false,
      name: "occupation",
      id: "occupation",
    },
    designation: {
      value: "",
      placeholder: "Designation *",
      errorMessage: "",
      errorStatus: false,
      name: "designation",
      id: "designation",
    },
    organization: {
      value: "",
      placeholder: "Organization *",
      errorMessage: "",
      errorStatus: false,
      name: "organization",
      id: "organization",
    },
    idValue: {
      value: "",
      placeholder: "ID Value",
      errorMessage: "",
      errorStatus: false,
      name: "idValue",
      id: "idValue",
    },

    idType: {
      value: "",
      placeholder: "ID Type",
      errorMessage: "",
      errorStatus: false,
      name: "idType",
      id: "idType",
    },
    other: {
      value: "",
      placeholder: "If Other, please specify",
      errorMessage: "",
      errorStatus: false,
      name: "other",
      id: "other",
    },
  });
  const handleOnChange = () => {};
  const [deliveryinputType, setDeliveryInputType] = useState("text");

  return (
    <Box sx={{ display: "flex", width: "100%" }} className="conatiner">
      <Box sx={{ width: "60%", border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Mother Details</Typography>
        <Box sx={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "2rem", gridRowGap: "3rem" }} className="MotherDetails">
          {Object.entries(data).map(([key, fieldData]) =>
            fieldData.name == "dob" ? (
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder}</InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    type={fieldData.type || "text"}
                    value={fieldData.value}
                    name={fieldData.name}
                    id={`outlined-adornment-${key}`}
                    placeholder={fieldData.placeholder}
                    type={deliveryinputType}
                    onFocus={() => setDeliveryInputType("date")}
                    onBlur={() => setDeliveryInputType("text")}
                    sx={{
                      border: fieldData.errorStatus ? "1px solid red" : "",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    onChange={handleOnChange}
                  />
                  {fieldData.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{fieldData.errorMessage}</Typography> : null}
                </FormControl>
              </Stack>
            ) : (
              <>
                <Stack sx={{ width: fieldData.name == "organization" || fieldData.name == "other" ? "208%" : "100%", gap: "0.5rem" }} key={key}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder}</InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={false}
                      type={fieldData.type || "text"}
                      value={fieldData.value}
                      name={fieldData.name}
                      id={`outlined-adornment-${key}`}
                      placeholder={fieldData.placeholder}
                      sx={{
                        border: fieldData.errorStatus ? "1px solid red" : "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                      onChange={handleOnChange}
                    />
                    {fieldData.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{fieldData.errorMessage}</Typography> : null}
                  </FormControl>
                </Stack>
                {fieldData.name == "organization" || fieldData.name == "other" ? <br /> : null}
              </>
            )
          )}
        </Box>
      </Box>

      <Box sx={{ flexDirection: "column", display: "flex", width: "45%" }} className="MotherPicture">
        <Box className="MotherPhoto" sx={{ border: "1px solid #e5e5e5", gap: "1rem", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Upload Mother Picture</Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            <Box sx={{ border: "1px solid #e5e5e5", gap: "1rem", display: "flex", padding: "2rem", borderRadius: "1rem" }}>
              <Box>
                <img src={motherImage} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "1.5rem", textAlign: "center", color: "gray" }}>Drop your new Profile Image here maximum (2MB)</Typography>
                <Typography sx={{ fontSize: "1.5rem", textAlign: "center", color: "gray" }}>Supported Formats: JPG, PNG, SVG</Typography>
                <Button sx={{ alignSelf: "center", fontSize: "1rem", textTransform: "none", marginTop: "1rem" }} variant="contained">
                  Choose File
                </Button>
              </Box>
            </Box>
            <Button variant="contained" sx={{ alignSelf: "end", fontSize: "1rem", textTransform: "none" }}>
              Upload Image
            </Button>
          </Box>
        </Box>
        <Box className="MotherID" sx={{ border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Upload Id Proof</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            <Box sx={{ border: "1px solid #e5e5e5", gap: "1rem", display: "flex", padding: "2rem", borderRadius: "1rem" }}>
              <Box>
                <img src={card} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "1.5rem", textAlign: "center", color: "gray" }}>Drop your ID Proof here maximum (2MB)</Typography>
                <Typography sx={{ fontSize: "1.5rem", textAlign: "center", color: "gray" }}>Supported Formats: JPG, PNG, SVG</Typography>
                <Button sx={{ alignSelf: "center", fontSize: "1rem", textTransform: "none", marginTop: "1rem" }} variant="contained">
                  Choose File
                </Button>
              </Box>
            </Box>
            <Button variant="contained" sx={{ alignSelf: "end", fontSize: "1rem", textTransform: "none" }}>
              Upload Image
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MotherDetails;
