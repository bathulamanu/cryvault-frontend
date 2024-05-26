import { Box, Breadcrumbs, Button, FormControl, FormControlLabel, IconButton, Link, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import useDeviceSize from "../Utilities/useDeviceSize";
const Carrers = () => {
  const isMobile = useDeviceSize() === "xs";
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    city: "",
    state: "",
    areaOfInterest: "",
    file: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileUpload = (event) => {
    setFormData(event.target.files[0]); // Assuming single file upload
  };

  // Form submission logic (replace with your implementation)
  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, firstName, lastName, ...rest } = formData; // Destructure file separately
    console.log("Submitted data:", { title, firstName, lastName, ...rest });
    // Handle file upload (if applicable)
    // ...
  };
  return (
    <>
      <Box className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box style={{ width: "100%" }}>
                <Typography variant="h1" className="title">
                  Carrers
                </Typography>
              </Box>

              {isMobile ? null : (
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/pregnancy">
                    <Typography variant="body2" color="text.primary">
                      About
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.primary">
                    Carrers
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="account-page-area section-gap-equal">
        <Box className="container position-relative">
          <Box className="row g-5 justify-content-center">
            <Box className="col-lg-12">
              <Box sx={{ padding: isMobile ? "15px 10px !important" : "70px 50px" }} className="login-form-box">
                <Box className="section-title section-center sal-animate">
                  <span className="pre-title pre-textsecondary">Work with us</span>
                  <Typography variant="h2" className="title" sx={{ fontFamily: "Roboto" }}>
                    Drop your Resume
                  </Typography>
                  <Box className="shape_in shape_in-bk" style={{ display: "flex", justifyContent: "center" }}>
                    {" "}
                    <img src="assets/images/med-img blk.svg" width="30" />
                  </Box>
                  <Typography>join our mission to connect the right talent with the Right Opportunity.</Typography>
                </Box>

                <Box className="form-group col-md-12">
                  <label>Let's build together the best place to work....! *</label>
                </Box>
                <form>
                  <Box className="d-flex">
                    <Box className="form-group mr-4">
                      <Box className="edu-form-check">
                        <input type="radio" id="mr" name="payment" />
                        <label for="mr">Mr</label>
                      </Box>
                    </Box>
                    <Box className="form-group mr-4">
                      <Box className="edu-form-check">
                        <input type="radio" id="mrs" name="payment" />
                        <label for="mrs">Mrs</label>
                      </Box>
                    </Box>
                    <Box className="form-group mr-4">
                      <Box className="edu-form-check">
                        <input type="radio" id="ms" name="payment" />
                        <label for="ms">Ms</label>
                      </Box>
                    </Box>
                    <Box className="form-group mr-4">
                      <Box className="edu-form-check">
                        <input type="radio" id="dr" name="payment" />
                        <label for="dr">Dr</label>
                      </Box>
                    </Box>
                  </Box>

                  <Box className="row">
                    <Box className="form-group col-md-6">
                      <label for="current-log-email">First Name*</label>
                      <input type="text" name="current-log-email" id="current-log-email" />
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-email">Last Name*</label>
                      <input type="text" name="current-log-email" id="current-log-email" />
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-email">Phone Number</label>
                      <input type="email" name="current-log-email" id="current-log-email" />
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-email">Enter Email</label>
                      <input type="email" name="current-log-email" id="current-log-email" />
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-password">Enter your City*</label>
                      <input type="text" id="current-log-password" placeholder="Enter your City " />
                      <span className="password-show">
                        <i className="icon-76"></i>
                      </span>
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-password">Enter Your State*</label>
                      <input type="text" id="current-log-password" />
                      <span className="password-show">
                        <i className="icon-76"></i>
                      </span>
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-password">Applying for ( Area of interest ) *</label>
                      <input type="text" id="current-log-password" />
                      <span className="password-show">
                        <i className="icon-76"></i>
                      </span>
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-password">Attach your Resume Here* *</label>
                      <Box style={{ borderWidth: 1, display: "flex", justifyContent: "end", height: "50px", alignItems: "center", paddingRight: "2%" }}>
                        <input
                          type="file"
                          display="none"
                          // onChange={handleFileUpload}
                        />

                        <FaCloudUploadAlt fontSize={40} name="attachment" onClick={() => document.querySelector('input[type="file"]').click()} cursor="pointer" />
                      </Box>
                    </Box>

                    <Box className="form-group">
                      <Button type="button" className="edu-btn btn-medium">
                        Submit <i className="icon-4"></i>
                      </Button>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Carrers;
{
  /* <form>
                  <FormControl component="fieldset">
                    <Typography variant="h6">Title</Typography>
                    <RadioGroup row aria-label="title" name="title" value={formData.title} onChange={handleChange}>
                      <FormControlLabel value="mr" control={<Radio />} label="Mr" />
                      <FormControlLabel value="mrs" control={<Radio />} label="Mrs" />
                      <FormControlLabel value="ms" control={<Radio />} label="Ms" />
                      <FormControlLabel value="dr" control={<Radio />} label="Dr" />
                    </RadioGroup>
                  </FormControl>

                  <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
                    <TextField margin="normal" required fullWidth id="firstName" label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <TextField margin="normal" required fullWidth id="lastName" label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <TextField margin="normal" fullWidth id="phoneNumber" label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                    <TextField margin="normal" required fullWidth id="email" label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                    <TextField margin="normal" required fullWidth id="city" label="City" name="city" value={formData.city} onChange={handleChange} />
                    <TextField margin="normal" required fullWidth id="state" label="State" name="state" value={formData.state} onChange={handleChange} />
                    <TextField margin="normal" required fullWidth id="areaOfInterest" label="Applying for (Area of interest)" name="areaOfInterest" value={formData.areaOfInterest} onChange={handleChange} />
                    <FormControl fullWidth variant="standard" margin="normal">
                      <Typography variant="body2">Attach your Resume Here*</Typography>
                      <input accept=".pdf,.docx,.doc" type="file" id="file" name="file" onChange={handleChange} style={{ display: "none" }} />
                      <IconButton onClick={() => document.getElementById("file").click()}>
                        <FaCloudUploadAlt fontSize={40} name="attachment" onClick={() => document.querySelector('input[type="file"]').click()} cursor="pointer" />
                      </IconButton>
                    </FormControl>
                  </Box>

                  <Button variant="contained" type="button" onClick={handleFileUpload}>
                    Submit
                  </Button>
                </form> */
}
