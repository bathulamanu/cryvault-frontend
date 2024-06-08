import { Box, Breadcrumbs, Button, FormControl, FormControlLabel, IconButton, Link, Radio, RadioGroup, TextField, Typography }
 from "@mui/material";
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import useDeviceSize from "../Utilities/useDeviceSize";
import { useDispatch, useSelector } from "react-redux";
import "./Carrer.css";
import { addCareerProfile, uploadSingleFile } from "../redux/reducers/HomePageReducer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const initialState = {
  firstName: {
    value: "",
    placeholder: "First Name",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "text",
    name: "firstName",
    id: "firstName",
  },
  lastName: {
    value: "",
    placeholder: "Last Name",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "text",
    name: "lastName",
    id: "lastName",
  },
  email: {
    value: "",
    placeholder: "Email",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "email",
    name: "email",
    id: "email",
  },
  phone: {
    value: "",
    placeholder: "Phone Number",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "tel",
    name: "phone",
    id: "phone",
  },

  city: {
    value: "",
    placeholder: "city",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "text",
    name: "city",
    id: "city",
  },
  state: {
    value: "",
    placeholder: "State",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "text",
    name: "state",
    id: "state",
  },
  area: {
    value: "",
    placeholder: "Applying for ( Area of interest )",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "text",
    name: "area",
    id: "area",
  },
  resume: {
    value: "",
    placeholder: "Attach your Resume Here",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "file",
    name: "resume",
    id: "resume",
  },
};

const Carrers = () => {
  const isMobile = useDeviceSize() === "xs";
  const [PrefixValue, setPrefixValue] = useState("");
  const [prefixError, setPrefixError] = useState({ errorStatus: false, errorMessage: "" });
  const [userData, setUserData] = useState({
    firstName: {
      value: "",
      placeholder: "First Name",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "firstName",
      id: "firstName",
    },
    lastName: {
      value: "",
      placeholder: "Last Name",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "lastName",
      id: "lastName",
    },

    phoneNumber: {
      value: "",
      placeholder: "Phone Number",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "tel",
      name: "phoneNumber",
      id: "phoneNumber",
    },
    email: {
      value: "",
      placeholder: "Email",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "email",
      name: "email",
      id: "email",
    },
    city: {
      value: "",
      placeholder: "City",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "city",
      id: "city",
    },
    state: {
      value: "",
      placeholder: "State",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "state",
      id: "state",
    },
    area: {
      value: "",
      placeholder: "Applying for ( Area of interest )",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "area",
      id: "area",
    },
    resume: {
      value: "",
      placeholder: "Attach your Resume Here",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "file",
      name: "resume",
      id: "resume",
    },
  });
  const radioOptions = [
    {
      id: "mr",
      label: "Mr",
      value: "Mr",
      name: "PrefixValue",
    },
    {
      id: "mrs",
      label: "Mrs",
      value: "Mrs",
      name: "PrefixValue",
    },
    {
      id: "ms",
      label: "Ms",
      value: "Ms",
      name: "PrefixValue",
    },
    {
      id: "dr",
      label: "Dr",
      value: "Dr",
      name: "PrefixValue",
    },
  ];
  const userDetails = Object.entries(userData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "resume") {
      setUserData((prevData) => ({
        ...prevData,
        [name]: { ...prevData[name], value: e?.target?.files?.[0]?.file, errorStatus: false, errorMessage: "" },
      }));
      dispatch(uploadSingleFile({ payload: { file: e?.target?.files?.[0]?.file, folder: "CareerResume" } }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
      }));
    }
  };
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setPrefixValue(value);
  };

  const handleSubmit = () => {
    const dataToSend = {
      firstName: userData.firstName.value,
      lastName: userData.lastName.value,
      email: userData.email.value,
      phoneNumber: userData.phoneNumber.value,
      city: userData.city.value,
      state: userData.state.value,
      area: userData.area.value,
      resume: userData.resume.value,
      countryCode: "+91",
      prefix: PrefixValue,
    };
    if (!PrefixValue) {
      setPrefixError({ errorStatus: true, errorMessage: "Prefix is required." });
      return;
    }
    if (!userData.firstName.value) {
      setUserData((prevData) => ({
        ...prevData,
        firstName: {
          ...prevData.firstName,
          errorStatus: true,
          errorMessage: "First Name is required.",
        },
      }));
      return;
    }
    if (!userData.lastName.value) {
      setUserData((prevData) => ({
        ...prevData,
        lastName: {
          ...prevData.lastName,
          errorStatus: true,
          errorMessage: "Last Name is required.",
        },
      }));
      return;
    }
    if (!userData.phoneNumber.value) {
      setUserData((prevData) => ({
        ...prevData,
        phoneNumber: {
          ...prevData.phoneNumber,
          errorStatus: true,
          errorMessage: "Phone Number is required.",
        },
      }));
      return;
    }
    if (!userData.email.value) {
      setUserData((prevData) => ({
        ...prevData,
        email: {
          ...prevData.email,
          errorStatus: true,
          errorMessage: "Email ID is required.",
        },
      }));
      return;
    }
    if (!userData.city.value) {
      setUserData((prevData) => ({
        ...prevData,
        city: {
          ...prevData.city,
          errorStatus: true,
          errorMessage: "City is required.",
        },
      }));
      return;
    }
    if (!userData.state.value) {
      setUserData((prevData) => ({
        ...prevData,
        state: {
          ...prevData.state,
          errorStatus: true,
          errorMessage: "State is required.",
        },
      }));
      return;
    }
    if (!userData.area.value) {
      setUserData((prevData) => ({
        ...prevData,
        area: {
          ...prevData.area,
          errorStatus: true,
          errorMessage: "Area is required.",
        },
      }));
      return;
    }
    if (!userData.resume.value) {
      setUserData((prevData) => ({
        ...prevData,
        resume: {
          ...prevData.resume,
          errorStatus: true,
          errorMessage: "Resume is required.",
        },
      }));
      return;
    }

    dispatch(addCareerProfile({ payload: dataToSend }));
    setUserData(initialState);
  };
  const pageInfo = useSelector((state) => state.home.pageInfo);
  const url = `https://flyingbyts.s3.ap-south-2.amazonaws.com/${pageInfo?.[7]?.[7]?.pageHeaderImage}`;
  const handlePhoneInput = (value, country) => {
    const country_code = "91";
    const phoneNumber = value.slice(country_code.length);
    setUserData((prevData) => ({
      ...prevData,
      phoneNumber: { ...prevData.phoneNumber, value: phoneNumber, errorStatus: false, errorMessage: "" },
    }));
  };
  return (
    <>
      <Box sx={{ backgroundImage: `url(${url})`, padding: isMobile ? " 50px 7px !important" : "120px 40px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
                <Typography sx={{ fontSize: isMobile ? "24px !important" : "45px !important" }} variant="h1" className="title">
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

                <Box>
                  <label style={{ fontSize: "2rem", fontWeight: "700" }}>Let's build together the best place to work....! *</label>

                  <Box>
                    <Box sx={{ marginTop: "2rem" }} className="d-flex">
                      {radioOptions.map((option) => (
                        <Box className="form-group mr-4" key={option.id}>
                          <Box className="edu-form-check">
                            <input type="radio" id={option.id} value={option.value} name={option.name} onChange={handleRadioChange} />
                            <label style={{ fontSize: "18px !important" }} htmlFor={option.id}>
                              {option.label}
                            </label>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                    {prefixError.errorStatus ? <Typography style={{ color: "red", fontSize: "1.5rem", }}>{prefixError.errorMessage}</Typography> : null}
                  </Box>

                  <Box style={{ width: "100%" }}>
                    <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>
                      {userDetails.map((data, index) => (
                        <Box key={data[1].name} sx={{ display: "flex", flexDirection: "column" }}>
                          {data[1].name == "area" ? <Typography sx={{ marginBottom: "10px !important", fontWeight: "700", fontSize: "1.5rem", marginLeft: "2rem" }}>Applying for ( Area of interest ) *</Typography> : null}
                          {data[1].name == "resume" ? <Typography sx={{ marginBottom: "10px !important", fontWeight: "700", fontSize: "1.5rem", marginLeft: "2rem" }}>Attach your Resume Here*</Typography> : null}

                          {data[1].name == "phoneNumber" ? <PhoneInput value={"91" + userData.phoneNumber.value} onChange={handlePhoneInput} autoFormat inputProps={{ required: true }} inputClass={"borderPhoneInput"} specialLabel="" containerClass={"layoutItem"} country={"in"} defaultErrorMessage="Incorrect WhatsApp Number" /> : <input style={{ border: data[1].errorStatus ? "1px solid red" : "1px solid #e5e5e5" }} onChange={handleChange} key={data[0]} placeholder={data[1].placeholder} className={`carrerInput `} label={data[1].placeholder} type={data[1].type} value={data[1].value} name={data[1].name} size="small" />}
                          {data[1].errorStatus ? <Typography style={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data[1].errorMessage}</Typography> : null}
                        </Box>
                      ))}
                    </Box>
                    <Button onClick={handleSubmit} variant="contained" sx={{ fontSize: "2rem !important", textTransform: "none", backgroundColor: "#D5008D", color: "white", fontWeight: "700", width: isMobile ? "40%" : "100%", whiteSpace: "nowrap", padding: "15px 30px", borderRadius: "40px", marginTop: "3rem" }} size="lg">
                      Submit
                    </Button>
                  </Box>
                </Box>
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
