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
  const [selectedIdProof, setSelectedIdProof] = useState(""); // Initial state

  const handleCheckboxChange = (event) => {
    setSelectedIdProof(event.target.value); // Set the new selected value
  };
  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setCustomerClientDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImage = () => {};

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
          <Box>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Box className="field">
                  <Typography className="fieldName">Expectant Mother’s Name:</Typography>
                  <TextField onChange={handleChange} name="ExpectantMotherName" value={customerClientDetails.ExpectantMotherName} variant="standard" sx={{ marginLeft: "10px", width: "100% " }} />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box className="field">
                    <Typography className="fieldName">Date of Birth:</Typography>
                    {/* <TextField onChange={handleChange} name='ExpectantMotherDOB' variant="standard" value={customerClientDetails.ExpectantMotherDOB} sx={{ marginLeft: "10px", width: "300px" }} /> */}
                  </Box>
                  <Box className="field">
                    <Typography className="fieldName">Mobile:</Typography>
                    <TextField onChange={handleChange} variant="standard" name="ExpectantMotherMobile" value={customerClientDetails.ExpectantMotherMobile} sx={{ marginLeft: "10px", width: "300px" }} />
                  </Box>
                </Box>
                <Box className="field">
                  <Typography className="fieldName">E-mail:</Typography>
                  <TextField onChange={handleChange} variant="standard" name="ExpectantMotherEmail" value={customerClientDetails.ExpectantMotherEmail} sx={{ marginLeft: "10px", width: "700px" }} />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box className="field">
                    <Typography className="fieldName">Occupation:</Typography>
                    <TextField onChange={handleChange} variant="standard" name="ExpectantMotherOccupation" value={customerClientDetails.ExpectantMotherOccupation} sx={{ marginLeft: "10px", width: "300px" }} />
                  </Box>
                  <Box className="field">
                    <Typography className="fieldName">Designation:</Typography>
                    <TextField variant="standard" onChange={handleChange} name="ExpectantMotherDesignation" value={customerClientDetails.ExpectantMotherDesignation} sx={{ marginLeft: "10px", width: "300px" }} />
                  </Box>
                </Box>
                <Box className="field">
                  <Typography className="fieldName">Organization Name: </Typography>
                  <TextField variant="standard" onChange={handleChange} name="ExpectantMotherOrganizationName" value={customerClientDetails.ExpectantMotherOrganizationName} sx={{ marginLeft: "10px", width: "700px" }} />
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
                        value="MpanCard"
                        checked={selectedIdProof === "MpanCard"}
                        onChange={handleCheckboxChange}
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
                        value="MaadharCard"
                        checked={selectedIdProof === "MaadharCard"}
                        onChange={handleCheckboxChange}
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
                        value="Mpassport"
                        checked={selectedIdProof === "Mpassport"}
                        onChange={handleCheckboxChange}
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
                        value="MdrivingLicense"
                        checked={selectedIdProof === "MdrivingLicense"}
                        onChange={handleCheckboxChange}
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
                        value="MvoterID"
                        checked={selectedIdProof === "MvoterID"}
                        onChange={handleCheckboxChange}
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
                        value="Mother"
                        checked={selectedIdProof === "Mother"}
                        onChange={handleCheckboxChange}
                      />
                      <Typography className="fieldName">Other</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box onClick={() => document.getElementById("imageInput").click()} sx={{ border: "1px solid black", maxHeight: "30vh", width: "80%", margin: "10px 20px 10px 20px", background: "#e5e5e5" }}>
                {false ? (
                  <img src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600" />
                ) : (
                  <input
                    type="file"
                    id="imageInput"
                    accept="image/*" // Restrict file selection to images
                    hidden
                    onChange={handleImage}
                  />
                )}
              </Box>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Box className="field">
                <Typography className="fieldName">ID Proof No.:</Typography>
                <TextField variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
              </Box>
              <Box className="field">
                <Typography className="fieldName">If Other, please specify:</Typography>
                <TextField value={customerClientDetails.ExpectantMotherOtherInfo} variant="standard" sx={{ marginLeft: "10px", width: "400px" }} />
              </Box>
            </Box>
          </Box>

          <br />
          <Box>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Box className="field">
                  <Typography className="fieldName">Expectant Father’s Name:</Typography>
                  <TextField variant="standard" name="ExpectantFatherName" onChange={handleChange} value={customerClientDetails.ExpectantFatherName} sx={{ marginLeft: "10px", width: "550px" }} />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box className="field">
                    <Typography className="fieldName">Date of Birth:</Typography>
                    <TextField variant="standard" name="ExpectantFatherDOB" onChange={handleChange} value={customerClientDetails.ExpectantFatherDOB} sx={{ marginLeft: "10px", width: "300px" }} />
                  </Box>
                  <Box className="field">
                    <Typography className="fieldName">Mobile:</Typography>
                    <TextField variant="standard" onChange={handleChange} name="ExpectantFatherMobile" value={customerClientDetails.ExpectantFatherMobile} sx={{ marginLeft: "10px", width: "300px" }} />
                  </Box>
                </Box>
                <Box className="field">
                  <Typography className="fieldName">E-mail:</Typography>
                  <TextField variant="standard" onChange={handleChange} name="ExpectantFatherEmail" value={customerClientDetails.ExpectantFatherEmail} sx={{ marginLeft: "10px", width: "700px" }} />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box className="field">
                    <Typography className="fieldName">Occupation:</Typography>
                    <TextField variant="standard" onChange={handleChange} value={customerClientDetails.ExpectantFatherOccupation} sx={{ marginLeft: "10px", width: "300px" }} />
                  </Box>
                  <Box className="field">
                    <Typography className="fieldName">Designation:</Typography>
                    <TextField variant="standard" onChange={handleChange} name="ExpectantFatherDesignation" value={customerClientDetails.ExpectantFatherDesignation} sx={{ marginLeft: "10px", width: "300px" }} />
                  </Box>
                </Box>
                <Box className="field">
                  <Typography className="fieldName">Organization Name: </Typography>
                  <TextField variant="standard" onChange={handleChange} name="ExpectantFatherOrganizationName" value={customerClientDetails.ExpectantFatherOrganizationName} sx={{ marginLeft: "10px", width: "700px" }} />
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
                        value="FpanCard"
                        checked={selectedIdProof === "FpanCard"}
                        onChange={handleCheckboxChange}
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
                        value="FaadharCard"
                        checked={selectedIdProof === "FaadharCard"}
                        onChange={handleCheckboxChange}
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
                        value="Fpassport"
                        checked={selectedIdProof === "Fpassport"}
                        onChange={handleCheckboxChange}
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
                        value="FdrivingLicense"
                        checked={selectedIdProof === "FdrivingLicense"}
                        onChange={handleCheckboxChange}
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
                        value="FvoterID"
                        checked={selectedIdProof === "FvoterID"}
                        onChange={handleCheckboxChange}
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
                        value="Fother"
                        checked={selectedIdProof === "Fother"}
                        onChange={handleCheckboxChange}
                      />
                      <Typography className="fieldName">Other</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box onClick={() => document.getElementById("imageInput").click()} sx={{ border: "1px solid black", maxHeight: "30vh", width: "80%", margin: "10px 20px 10px 20px", background: "#e5e5e5" }}>
                {false ? (
                  <img src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600" />
                ) : (
                  <input
                    type="file"
                    id="imageInput"
                    accept="image/*" // Restrict file selection to images
                    hidden
                    onChange={handleImage}
                  />
                )}
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
    </Box>
  );
};

export default ClientDetails;
