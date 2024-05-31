import { Box, FormControl, FormHelperText, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
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
      <Box sx={{ width: "60%", border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Father Details</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: "auto auto" }} className="fatherDetails">
          {Object.entries(data).map(([fieldName, fieldData]) => (
            // <Box>
            //   <Typography sx={{ fontSize: "2rem" }} htmlFor={fieldData.id}>
            //     {fieldData.placeholder}
            //   </Typography>
            //   <br />
            //   <br />
            //   <TextField
            //     style={{
            //       "& .MuiInputBase-root-MuiOutlinedInput-root": {
            //         height: "40px",
            //         border:"1px solid green"

            //       },
            //       "& .MuiInputBase-input-MuiOutlinedInput-input": {
            //         height: "40px",
            //         border:"1px solid red"
            //       },
            //       border: "1px solid #e5e5e5",
            //       borderRadius: "0.5rem",
            //       fontSize: "2rem",
            //     }}
            //     id="outlined-basic"
            //     label=""
            //     variant="outlined"
            //   />
            //   {fieldData.errorStatus && <Typography>{fieldData.errorMessage}</Typography>}

            // </Box>
            <Stack key={"pincode"}>
              <InputLabel sx={{ fontSize: "2rem" }} htmlFor={"pincode"}>
                Pincode
              </InputLabel>
              <FormControl variant="outlined" size="small">
                <OutlinedInput readOnly={false} type={"text"} value={fieldData.value} name={fieldData.name} id="outlined-adornment-password" placeholder={fieldData.placeholder} sx={{ border: fieldData.errorStatus ? "1px solid red" : "", height: "57px" }} onChange={handleOnChange} />
                {fieldData.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}> {fieldData.errorMessage} </Typography> : null}
              </FormControl>
            </Stack>
          ))}
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
