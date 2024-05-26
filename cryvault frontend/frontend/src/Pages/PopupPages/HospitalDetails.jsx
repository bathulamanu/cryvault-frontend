import React, { useState } from "react";
import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel, Box } from "@mui/material";

const HospitalDetails = () => {
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
      {/*  */}
      <Box className="formBox">
        <Box className="formBox1">
          <Box className="innerPageHeading1">
            <Typography sx={{ fontSize: "2rem", color: "white" }}>Hospital & birthing Details (To inform bank of any changes prior to delivery)</Typography>
          </Box>
          <Box className="field">
            <Typography className="fieldName">Expected date of delivery</Typography>
            <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box className="field">
              <Typography className="fieldName">Tyepe of pregnancy (Tick): </Typography>
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
                <Typography className="fieldName">Single Birth</Typography>
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
                <Typography className="fieldName">Twins</Typography>
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
                <Typography className="fieldName">Triplets</Typography>
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
                <Typography className="fieldName">Quads</Typography>
              </Box>
            </Box>
            <Box className="field">
              <Typography className="fieldName">How many childrens do you have alredy</Typography>
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
                <Typography className="fieldName">One</Typography>
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
                <Typography className="fieldName">Two</Typography>
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
                <Typography className="fieldName">Three</Typography>
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
                <Typography className="fieldName">Four</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="field">
            <Typography className="fieldName">Consulting Gynocologist:</Typography>
            <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field" sx={{ width: "100%" }}>
              <Typography className="fieldName">Consulting Hospital</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
            </Box>
          </Box>
          <Box className="field">
            <Typography className="fieldName">Address:</Typography>
            <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">City:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">State:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">Country:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">Pincode:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">Telephone:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">Mobile:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
          </Box>

          <Box sx={{ flexDirection: "column" }} className="field">
            <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Typography sx={{ fontSize: "2rem" }} className="fieldName">
                Delivering hospital details: If delivering hospital is same as above (Tick){" "}
              </Typography>

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
            </Box>
            <Typography sx={{ fontSize: "2rem" }}>(If different from consulting gynaecologist)</Typography>
            <Typography className="fieldName">Address:</Typography>
            <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">City:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">State:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">Country:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">Pincode:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">Telephone:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">Mobile:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <ReferenceDetails />
      <ShipmentDetails />
    </Box>
  );
};

export const ReferenceDetails = () => {
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
            <Typography sx={{ fontSize: "2rem", color: "white" }}>Details of reference / Details of returning Cryovault client</Typography>
          </Box>
          <Box sx={{ flexDirection: "column" }} className="field">
            <Typography className="fieldName">If you are existing Cryovault client, please provide details as below:</Typography>
            <Box className="field">
              <Typography className="fieldName">UIN:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
            </Box>
          </Box>
          <Box sx={{ flexDirection: "column" }} className="field">
            <Typography className="fieldName">If referred by an existing client, please provide details as below:</Typography>
            <Box className="field">
              <Typography className="fieldName">Referring clients name:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "100%" }} />
            </Box>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">Mobile-1:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">Mobile-2:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "50%" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const ShipmentDetails = () => {
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
              Shipment Details
            </Typography>
          </Box>

          <Box sx={{ display: "flex", marginTop:"1rem",padding: '10px 20px 10px 20px '}}>
            <Typography sx={{ fontSize: "2rem" }} className="fieldName">
              Send collection kit to (Tick):
            </Typography>
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
                Correspondence Address
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
                Permanent Address
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default HospitalDetails;
