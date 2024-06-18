import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React, { useState ,forwardRef, useImperativeHandle} from "react";
import motherImage from "../../assets/images/motherImage.png";
import card from "../../assets/images/card.png";
const redStarStyle = {
  color: "red",
  marginLeft: "4px",
};

const MotherDetails = forwardRef((props, ref) => {
  const [data, setData] = useState({
    ExpectantMotherName: {
      value: "",
      placeholder: "Expectant Mother's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherName",
      id: "ExpectantMotherName",
    },
    ExpectantMotherDOB: {
      value: "",
      placeholder: "Date of Birth",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherDOB",
      id: "ExpectantMotherDOB",
    },
    ExpectantMotherEmail: {
      value: "",
      placeholder: "Email Address",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherEmail",
      id: "ExpectantMotherEmail",
    },
    ExpectantMotherMobile: {
      value: "",
      placeholder: "Phone Number",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherMobile",
      id: "ExpectantMotherMobile",
    },
    ExpectantMotherOccupation: {
      value: "",
      placeholder: "Occupation",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherOccupation",
      id: "ExpectantMotherOccupation",
    },
    ExpectantMotherDesignation: {
      value: "",
      placeholder: "Designation",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherDesignation",
      id: "ExpectantMotherDesignation",
    },
    ExpectantMotherOrganizationName: {
      value: "",
      placeholder: "Organization",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherOrganizationName",
      id: "ExpectantMotherOrganizationName",
    },
    ExpectantMotherIDproof: {
      value: "",
      placeholder: "ID Proof",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherIDproof",
      id: "ExpectantMotherIDproof",
    },
    ExpectantMotherIdproofNo: {
      value: "",
      placeholder: "ID proof Number",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherIdproofNo",
      id: "ExpectantMotherIdproofNo",
    },
    ExpectantMotherOtherInfo: {
      value: "",
      placeholder: "If Other, please specify",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherOtherInfo",
      id: "ExpectantMotherOtherInfo",
    }
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));
  };
  const [deliveryinputType, setDeliveryInputType] = useState("text");

  useImperativeHandle(ref, () => ({
    getMotherDetails: () => {
      return data;
    }
  }))

  const Save = () => {
    console.log("mother details kkkkkkkkkkkkkkkkkkkkkkkkk ", data);
  }
  return (
    <Box sx={{ display: "flex", width: "100%" }} className="conatiner">
      <Box sx={{ width: "60%", border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Mother Details</Typography>
        <Box sx={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "2rem", gridRowGap: "3rem" }} className="MotherDetails">
          {Object.entries(data).map(([key, fieldData]) =>
            fieldData.name == "ExpectantMotherDOB" ? (
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder}<span style={redStarStyle}>*</span></InputLabel>
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
                <Stack sx={{ width: fieldData.name == "ExpectantMotherOrganizationName" || fieldData.name == "ExpectantMotherOtherInfo" ? "208%" : "100%", gap: "0.5rem" }} key={key}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder}<span style={redStarStyle}>*</span></InputLabel>
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
                {fieldData.name == "ExpectantMotherOrganizationName" || fieldData.name == "ExpectantMotherOtherInfo" ? <br /> : null}
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

export default MotherDetails;
