import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React, { useState,forwardRef, useImperativeHandle } from "react";
import fatherImage from "../../assets/images/father image.png";
import card from "../../assets/images/card.png";

const redStarStyle = {
  color: "red",
  marginLeft: "4px",
};


const FatherDetails = forwardRef((props, ref) => {
  const [data, setData] = useState({
    ExpectantFatherName: {
      value: "",
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName",
    },
    ExpectantFatherDOB: {
      value: "",
      placeholder: "Date of Birth",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherDOB",
      id: "ExpectantFatherDOB",
    },
    ExpectantFatherEmail: {
      value: "",
      placeholder: "Email Address",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherEmail",
      id: "ExpectantFatherEmail",
    },
    ExpectantFatherMobile: {
      value: "",
      placeholder: "Phone Number",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherMobile",
      id: "ExpectantFatherMobile",
    },
    ExpectantFatherOccupation: {
      value: "",
      placeholder: "Occupation",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherOccupation",
      id: "ExpectantFatherOccupation",
    },
    ExpectantFatherDesignation: {
      value: "",
      placeholder: "Designation",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherDesignation",
      id: "ExpectantFatherDesignation",
    },
    ExpectantFatherOrganizationName: {
      value: "",
      placeholder: "Organization",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherOrganizationName",
      id: "ExpectantFatherOrganizationName",
    },
    ExpectantFatherIDproof: {
      value: "",
      placeholder: "ID Proof",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherIDproof",
      id: "ExpectantFatherIDproof",
    },
    ExpectantFatherIdproofNo: {
      value: "",
      placeholder: "ID proof Number",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherIdproofNo",
      id: "ExpectantFatherIdproofNo",
    },
    ExpectantFatherOtherInfo: {
      value: "",
      placeholder: "If Other, please specify",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherOtherInfo",
      id: "ExpectantFatherOtherInfo",
    }
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));
  };


  useImperativeHandle(ref, () => ({
    getChildData: () => {
      return data;
    }
  }))
  const [deliveryinputType, setDeliveryInputType] = useState("text");

  const Save = () => {
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkk ", data);
  }

  return (
    <Box sx={{ display: "flex", width: "100%" }} className="conatiner">
      <Box sx={{ width: "60%", border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Father Details</Typography>
        <Box sx={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "2rem", gridRowGap: "3rem" }} className="fatherDetails">
          {Object.entries(data).map(([key, fieldData]) =>
            fieldData.name == "ExpectantFatherDOB" ? (
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder} <span style={redStarStyle}>*</span></InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    type={fieldData.type || "text"}
                    value={fieldData.value}
                    name={fieldData.name}
                    id={`outlined-adornment-${key}`}
                    placeholder={fieldData.placeholder}
                    // type={deliveryinputType}
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
                <Stack sx={{ width: fieldData.name == "ExpectantFatherOrganizationName" || fieldData.name == "ExpectantFatherOtherInfo" ? "208%" : "100%", gap: "0.5rem" }} key={key}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder} <span style={redStarStyle}>*</span></InputLabel>
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
                {fieldData.name == "ExpectantFatherOrganizationName" || fieldData.name == "ExpectantFatherOtherInfo" ? <br /> : null}
              </>
            )
          )}
        </Box>
      </Box>

      <Box sx={{ flexDirection: "column", display: "flex", width: "45%" }} className="fatherPicture">
        <Box className="fatherPhoto" sx={{ border: "1px solid #e5e5e5", gap: "1rem", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Upload Father Picture</Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            <Box sx={{ border: "1px solid #e5e5e5", gap: "1rem", display: "flex", padding: "2rem", borderRadius: "1rem" }}>
              <Box>
                <img src={fatherImage} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "1.5rem", textAlign: "center", color: "gray" }}>Drop your new Profile Image here maximum (2MB)</Typography>
                <Typography sx={{ fontSize: "1.5rem", textAlign: "center", color: "gray" }}>Supported Formats: JPG, PNG, SVG</Typography>
                <Button sx={{ alignSelf: "center", fontSize: "1rem", textTransform: "none", marginTop: "1rem" }} variant="contained" disabled>
                  Choose File
                </Button>
              </Box>
            </Box>
            <Button variant="contained" sx={{ alignSelf: "end", fontSize: "1rem", textTransform: "none" }}>
              Upload Image
            </Button>
          </Box>
        </Box>
        <Box className="fatherID" sx={{ border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Upload Id Proof</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            <Box sx={{ border: "1px solid #e5e5e5", gap: "1rem", display: "flex", padding: "2rem", borderRadius: "1rem" }}>
              <Box>
                <img src={card} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "1.5rem", textAlign: "center", color: "gray" }}>Drop your ID Proof here maximum (2MB)</Typography>
                <Typography sx={{ fontSize: "1.5rem", textAlign: "center", color: "gray" }}>Supported Formats: JPG, PNG, SVG</Typography>
                <Button sx={{ alignSelf: "center", fontSize: "1rem", textTransform: "none", marginTop: "1rem" }} variant="contained" disabled>
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
      <button onClick={Save()}>kkkkk</button>
    </Box>
  );
});

export default FatherDetails;
