import { Box, FormControl, FormHelperText, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const FatherDetails = () => {
  const [data, setData] = useState({
    name: {
      value: "",
      placeholder: "Expectant Father's Name *",
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
  return (
    <Box sx={{ display: "flex", width: "100%", gap: "2rem" }} className="conatiner">
      <Box sx={{border:"1px sold #e5e5e5", borderRadius:"1rem"}}>
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Father Details</Typography>
        <Box sx={{ flexDirection: "column", display: "flex", width: "60%" }} className="fatherDetails">
          <form>
            {Object.entries(data).map(([fieldName, fieldData]) => (
              <FormControl key={fieldName} variant="outlined" margin="dense" error={fieldData.errorStatus}>
                <Typography sx={{ fontSize: "2rem" }} htmlFor={fieldData.id}>
                  {fieldData.placeholder}
                </Typography>
                <br />
                <br />
                <TextField style={{ height: "40px", fontSize: "2rem", padding: "25px !important" }} id="outlined-basic" label="" variant="outlined" />
                {fieldData.errorStatus && <FormHelperText>{fieldData.errorMessage}</FormHelperText>}
              </FormControl>
            ))}
          </form>
        </Box>
      </Box>

      <Box sx={{ flexDirection: "column", display: "flex", width: "40%" }} className="fatherPicture">
        <Box className="fatherPhoto"></Box>
        <Box className="fatherID"></Box>
      </Box>
    </Box>
  );
};

export default FatherDetails;
