import React, { useState } from "react";
import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel, Box } from "@mui/material";


const ClientDetails = () => {
  const [customerClientDetails, setCustomerClientDetails] = useState({
    ExpectantMotherName: " ",
    ExpectantMotherDOB: "",
    ExpectantMotherMobile: "",
    ExpectantMotherEmail: "",
    ExpectantMotherOccupation: "  ",
    ExpectantMotherDesignation: " ",
    ExpectantMotherOrganizationName: "",
    ExpectantMotherIDproof: "",
    ExpectantMotherIDproofPhoto: "",
    ExpectantMotherProfilePhoto: "",
    ExpectantMotherIdproofNo: "",
    ExpectantMotherOtherInfo: "",
    ExpectantFatherName: "",
    ExpectantFatherDOB: "",
    ExpectantFatherMobile: "",
    ExpectantFatherEmail: "",
    ExpectantFatherOccupation: "",
    ExpectantFatherDesignation: "",
    ExpectantFatherOrganizationName: "",
    ExpectantFatherIDproof: "",
    ExpectantFatherIDproofPhoto: "",
    ExpectantFatherProfilePhoto: "",
    ExpectantFatherIdproofNo: "",
    ExpectantFatherOtherInfo: "",
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setCustomerClientDetails((prevData) => ({
      ...prevData,
      [name]: checked !== undefined ? checked : value,
    }));
  };

  return (
    <Box className="innerPage">
      <Box className="innerPageHeading">
        <Typography sx={{ fontSize: "2rem", color: "white" }}>ANNEXURE - 1: CLIENT INFORMATION</Typography>
      </Box>
      {/*  */}
      <Box className="formBox">
        <Box className="formBox1">
          <Box className="innerPageHeading1">
            <Typography sx={{ fontSize: "2rem", color: "white" }}>Client Details</Typography>
          </Box>
          <Box className="field">
            <Typography className="fieldName">Expectant Mother’s Name:</Typography>
            <TextField variant="standard" sx={{ marginLeft: "10px", width: "550px" }} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">Date of Birth:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "300px" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">Mobile:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "300px" }} />
            </Box>
          </Box>
          <Box className="field">
            <Typography className="fieldName">E-mail:</Typography>
            <TextField variant="standard" sx={{ marginLeft: "10px", width: "700px" }} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">Occupation:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "300px" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">Designation:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "300px" }} />
            </Box>
          </Box>
          <Box className="field">
            <Typography className="fieldName">Organization Name: </Typography>
            <TextField variant="standard" sx={{ marginLeft: "10px", width: "700px" }} />
          </Box>
          <Box className="field">
            <Box sx={{ display: "flex", width: "100%", gap: "2rem" }}>
              <Typography className="fieldName">ID Proof:</Typography>
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
                <Typography className="fieldName">Pan Card</Typography>
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
                <Typography className="fieldName">Aadhar Card</Typography>
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
                <Typography className="fieldName">Passport</Typography>
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
                <Typography className="fieldName">Driving License</Typography>
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
                <Typography className="fieldName">Voter ID</Typography>
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
                <Typography className="fieldName">Other</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">ID Proof No.:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">If Other, please specify:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "350px" }} />
              <TextField variant="standard" sx={{ marginLeft: "30px", width: "350px" }} />
              <TextField variant="standard" sx={{ marginLeft: "30px", width: "350px" }} />
            </Box>
          </Box>
          <br />
          <Box className="field">
            <Typography className="fieldName">Expectant Father’s Name:</Typography>
            <TextField variant="standard" sx={{ marginLeft: "10px", width: "550px" }} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">Date of Birth:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "300px" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">Mobile:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "300px" }} />
            </Box>
          </Box>
          <Box className="field">
            <Typography className="fieldName">E-mail:</Typography>
            <TextField variant="standard" sx={{ marginLeft: "10px", width: "700px" }} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">Occupation:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "300px" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">Designation:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "300px" }} />
            </Box>
          </Box>
          <Box className="field">
            <Typography className="fieldName">Organization Name: </Typography>
            <TextField variant="standard" sx={{ marginLeft: "10px", width: "700px" }} />
          </Box>
          <Box className="field">
            <Box sx={{ display: "flex", width: "100%", gap: "2rem" }}>
              <Typography className="fieldName">ID Proof:</Typography>
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
                <Typography className="fieldName">Pan Card</Typography>
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
                <Typography className="fieldName">Aadhar Card</Typography>
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
                <Typography className="fieldName">Passport</Typography>
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
                <Typography className="fieldName">Driving License</Typography>
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
                <Typography className="fieldName">Voter ID</Typography>
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
                <Typography className="fieldName">Other</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">ID Proof No.:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">If Other, please specify:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "350px" }} />
              <TextField variant="standard" sx={{ marginLeft: "30px", width: "350px" }} />
              <TextField variant="standard" sx={{ marginLeft: "30px", width: "350px" }} />
            </Box>
          </Box>
        </Box>
        <Box className="formBox1">
          <Box className="innerPageHeading1">
            <Typography sx={{ fontSize: "2rem", color: "white" }}>Communication Details</Typography>
          </Box>
          <Box className="field">
            <Typography className="fieldName">Address</Typography>
            <TextField variant="standard" fullWidth sx={{ marginLeft: "10px" }} />
          </Box>
          <Box className="field">
            <TextField variant="standard" fullWidth sx={{ marginLeft: "10px" }} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">Date of Birth:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">Mobile:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="field">
              <Typography className="fieldName">Country:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
            </Box>
            <Box className="field">
              <Typography className="fieldName">Pin Code:</Typography>
              <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
            </Box>
          </Box>
          <Box className="field">
            <Typography className="fiel"></Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientDetails;
