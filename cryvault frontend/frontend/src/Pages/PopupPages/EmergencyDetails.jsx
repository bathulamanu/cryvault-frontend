import React, { useState } from "react";
import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel, Box } from "@mui/material";

const EmergencyDetails = () => {
  const [formData, setFormData] = useState({
    expectantMotherName: "",
    dateOfBirth: "",
    mobile: "",
    email: "",
    occupation: "",
    designation: "",
    organizationName: "",
    idProof: "",
    idProofNo: "",
    otherIdProof: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    isPermanentAddressSame: false,
    permanentCity: "",
    permanentState: "",
    permanentCountry: "",
    permanentPincode: "",
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked !== undefined ? checked : value,
    }));
  };

  return (
    <Box className="innerPage">
      <Box className="innerPageHeading">
        <Typography sx={{ fontSize: "2rem", color: "white" }}> CLIENT INFORMATION</Typography>
      </Box>
      <Box className="formBox">
        <Box className="formBox1">
          <Box className="innerPageHeading1">
            <Typography sx={{ fontSize: "2rem", color: "white" }}>Emergency Contact Details </Typography>
          </Box>
          <Box className="field">
            <Typography className="fieldName">Name:</Typography>
            <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
          </Box>
          <Box className="field">
            <Typography className="fieldName">Relatinship:</Typography>
            <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
          </Box>

          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "100%" }} className="field">
              <Typography className="fieldName" sx={{ whiteSpace: "nowrap" }}>
                Mobile-1:
              </Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
            </Box>
            <Box sx={{ width: "100%" }} className="field">
              <Typography className="fieldName" sx={{ whiteSpace: "nowrap" }}>
                Mobile-2:
              </Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <ApplicableDetails />
      <SignatureBoxes />
      <BankDetails />
    </Box>
  );
};

export const ApplicableDetails = () => {
  const [formData, setFormData] = useState({
    expectantMotherName: "",
    dateOfBirth: "",
    mobile: "",
    email: "",
    occupation: "",
    designation: "",
    organizationName: "",
    idProof: "",
    idProofNo: "",
    otherIdProof: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    isPermanentAddressSame: false,
    permanentCity: "",
    permanentState: "",
    permanentCountry: "",
    permanentPincode: "",
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked !== undefined ? checked : value,
    }));
  };

  return (
    <Box>
      <Box className="formBox">
        <Box className="formBox1">
          <Box className="innerPageHeading1">
            <Typography sx={{ fontSize: "2rem", color: "white" }}>Tick as applicable for Cryovault Biotech India Pvt. Ltd.</Typography>
          </Box>
          <Box sx={{ flexDirection: "column" }} className="field">
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <Checkbox
                sx={{
                  height: "4rem",
                  width: "4rem",
                  "& .MuiSvgIcon-root": {
                    fontSize: "3rem",
                    width: "1em",
                    height: "2em",
                  },
                }}
              />
              <Typography sx={{ fontSize: "2rem" }} className="fieldName">
                Requesting bank to arrange for pickup of meternal sample & Umbilical cord bleed
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <Checkbox
                sx={{
                  height: "4rem",
                  width: "4rem",
                  "& .MuiSvgIcon-root": {
                    fontSize: "3rem",
                    width: "1em",
                    height: "2em",
                  },
                }}
              />
              <Typography sx={{ fontSize: "2rem" }} className="fieldName">
                Requesting bank to organise for Phledopomist
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "2rem" }} className="fieldName">
              We conform that the information provide above is correct to the best of my knowledge and we also agree to keep Cryovoult informed in case of change of above details for future communications.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const SignatureBoxes = () => {
  return (
    <Box sx={{ display: "flex", gap: "1rem", width: "100%", justifyContent: "center" }}>
      <Box sx={{ border: "1px solid #e5e5e5", padding: "30px", maxWidth: "33%" }}>
        <TextField label="Signature of Mother / Legal Guardian" variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />

        <Box sx={{ display: "flex", width: "100%", marginTop: "20px" }} className="field">
          <Typography className="fieldName" sx={{ fontSize: "2rem", whiteSpace: "nowrap" }}>
            Name:
          </Typography>
          <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
        </Box>
      </Box>
      <Box sx={{ border: "1px solid #e5e5e5", padding: "30px", maxWidth: "33%" }}>
        <TextField label="Signature of Father / Legal Guardian" variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />

        <Box sx={{ display: "flex", width: "100%", marginTop: "20px" }} className="field">
          <Typography className="fieldName" sx={{ fontSize: "2rem", whiteSpace: "nowrap" }}>
            Name:
          </Typography>
          <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
        </Box>
      </Box>
      <Box sx={{ border: "1px solid #e5e5e5", padding: "30px", maxWidth: "33%" }}>
        <TextField label="Signature of Medical Director CBIPL" variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />

        <Box sx={{ display: "flex", width: "100%", marginTop: "20px" }} className="field">
          <Typography className="fieldName" sx={{ fontSize: "2rem", whiteSpace: "nowrap" }}>
            Name:
          </Typography>
          <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export const BankDetails = () => {
  const [formData, setFormData] = useState({
    expectantMotherName: "",
    dateOfBirth: "",
    mobile: "",
    email: "",
    occupation: "",
    designation: "",
    organizationName: "",
    idProof: "",
    idProofNo: "",
    otherIdProof: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    isPermanentAddressSame: false,
    permanentCity: "",
    permanentState: "",
    permanentCountry: "",
    permanentPincode: "",
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked !== undefined ? checked : value,
    }));
  };

  return (
    <Box className="innerPage">
      <Box className="formBox">
        <Box className="formBox1">
          <Box className="innerPageHeading1">
            <Typography sx={{ fontSize: "2rem", color: "white" }} className="fieldName">
              For bank use only
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", marginTop: "1rem", padding: "10px 20px 10px 20px " }}>
            <Box sx={{ display: "flex" }}>
              <Box className="field">
                <Typography className="fieldName">Name of excutive:</Typography>
                <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
              </Box>
              <Box className="field">
                <Typography className="fieldName">Employee code:</Typography>
                <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box className="field">
                <Typography className="fieldName">Name of manager:</Typography>
                <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
              </Box>
              <Box className="field">
                <Typography className="fieldName">Area / Region:</Typography>
                <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box className="field">
                <Typography className="fieldName">Date:</Typography>
                <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
              </Box>
            </Box>
          </Box>

          <Box sx={{ maxWidth: "33%" }}>
            <TextField label="Signature of Mother / Legal Guardian" variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />

            <Box sx={{ display: "flex", width: "100%", marginTop: "20px" }} className="field">
              <Typography className="fieldName" sx={{ fontSize: "2rem", whiteSpace: "nowrap" }}>
                Name:
              </Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default EmergencyDetails;
