import React, { useState } from "react";
import ReachUs from "../Components/Common/ReachUs";
import useDeviceSize from "../Utilities/useDeviceSize";
import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addFranchiseRequest } from "../redux/reducers/HomePageReducer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Franchise.css";

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
    name: "hospitalName",
    id: "hospitalName",
  },
};
const Franchise = () => {
  const isMobile = useDeviceSize() === "xs";
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
    }
    // professionalExperience: {
    //   value: "",
    //   placeholder: "Professional Experience *",
    //   errorStatus: false,
    //   errorMessage: "",
    //   icon: "",
    //   type: "text",
    //   name: "professionalExperience",
    //   id: "professionalExperience",
    // },
    // comment: {
    //   value: "",
    //   placeholder: "Comment",
    //   errorStatus: false,
    //   errorMessage: "",
    //   icon: "",
    //   type: "text",
    //   name: "comment",
    //   id: "comment",
    // },
  });
  const [officeSpace, setOfficeSpace] = useState(false);
  const [experienceInStemCellBanking, setExperienceInStemCellBanking] = useState(false);

  const handleOfficeSpaceChange = (event) => {
    setOfficeSpace(event.target.value);
  };
  const handleexperienceInStemCellBankingChange = (event) => {
    setExperienceInStemCellBanking(event.target.value);
  };
  const userDetails = Object.entries(userData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));
  };
  const handleSubmit = () => {


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
    if (!officeSpace) {
      setUserData((prevData) => ({
        ...prevData,
        officeSpace: {
          ...prevData.state,
          errorStatus: true,
          errorMessage: "office Space is required.",
        },
      }));
      return;
    }
    //professionalExperience
    if (!experienceInStemCellBanking) {
      setUserData((prevData) => ({
        experienceInStemCellBanking: {
          errorStatus: true,
          errorMessage: "office Space is required.",
        },
      }));
      return;
    }
    //comment

    const dataToSend = {
      firstName: userData.firstName.value,
      lastName: userData.lastName.value,
      email: userData.email.value,
      countryCode: "+91",
      phoneNumber: userData.phoneNumber.value,
      city: userData.city.value,
      state: userData.state.value,
      comment: "",//userData.comment.value,
      professionalExperience: "",//userData.professionalExperience.value,
      OfficeSpace: officeSpace,
      ExperienceInStemCellBanking: experienceInStemCellBanking,
    };

    console.log("cehck here once dataToSend ", dataToSend);

    // dispatch(addFranchiseRequest({ payload: dataToSend }));
    // setUserData(initialState);
  };

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
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 40px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
                <Typography sx={{ fontSize: isMobile ? "24px !important" : "45px !important" }} variant="h1" className="title">
                  Franchise
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
                    Franchise
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
              <Box className="login-form-box">
                <Box className="section-title section-center sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                  <span className="pre-title pre-textsecondary">Work with us</span>
                  <h2 className="title">Franchise</h2>
                  <Box className="shape_in shape_in-bk" style={{ display: "flex", justifyContent: "center" }}>
                    {" "}
                    <img src="assets/images/med-img blk.svg" width="30" />
                  </Box>
                  <p>join our mission to connect the right talent with the Right Opportunity.</p>
                </Box>

                <form className="row">
                  <Box style={{ width: "100%" }}>
                    <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>
                      {userDetails.map((data, index) => (
                        <Box key={data[1].name} sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography sx={{ marginBottom: "10px !important", fontWeight: "700", fontSize: "1.5rem", marginLeft: "2rem" }}>{data[1].placeholder}</Typography>

                          {data[1].name == "phoneNumber" ?
                            <PhoneInput value={"91" + userData.phoneNumber.value} onChange={handlePhoneInput} autoFormat inputProps={{ required: true }}
                              inputClass={"borderPhoneInput"} specialLabel="" containerClass={"layoutItem"} country={"in"} defaultErrorMessage="Incorrect WhatsApp Number" /> :
                            data[1].name != "comment" || data[1].name != "professionalExperience" ? <input style={{ border: data[1].errorStatus ? "1px solid red" : "1px solid #e5e5e5" }}
                              onChange={handleChange} key={data[0]} placeholder={data[1].placeholder} className={`carrerInput `} label={data[1].placeholder} type={data[1].type}
                              value={data[1].value} name={data[1].name} size="small" /> : null}
                          {data[1].errorStatus ? <Typography style={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data[1].errorMessage}</Typography> : null}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Box style={{ marginTop: "1rem" }} className="form-group col-md-12">
                    <Typography sx={{ marginBottom: "10px !important", fontWeight: "700", fontSize: "1.5rem", marginLeft: "2rem" }}>Office Space *</Typography>

                    <Box className="d-flex">
                      <Box className="form-group mb-0 mr-4">
                        <Box className="edu-form-check">
                          <input type="radio" id="yes" name="officeSpace" value="true" checked={officeSpace} onChange={handleOfficeSpaceChange} />
                          <label htmlFor="yes">Yes</label>
                        </Box>
                      </Box>
                      <Box className="form-group mb-0">
                        <Box className="edu-form-check">
                          <input type="radio" id="no" name="officeSpace" value="false" checked={officeSpace} onChange={handleOfficeSpaceChange} />
                          <label htmlFor="no">No</label>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="form-group col-md-12">
                    <Typography sx={{ marginBottom: "10px !important", fontWeight: "700", fontSize: "1.5rem", marginLeft: "2rem" }}>Professional Experience *</Typography>
                    <input type="text" id="current-log-password" />
                  </Box>

                  <Box className="form-group col-md-12">
                    <Typography sx={{ marginBottom: "10px !important", fontWeight: "700", fontSize: "1.5rem", marginLeft: "2rem" }}>Experience in Stem Cell Banking *</Typography>

                    <Box className="d-flex">
                      <Box className="form-group mb-0 mr-4">
                        <Box className="edu-form-check">
                          <input type="radio" id="yes" name="officeSpace" value="true" checked={experienceInStemCellBanking} onChange={handleexperienceInStemCellBankingChange} />
                          <label htmlFor="yes">Yes</label>
                        </Box>
                      </Box>
                      <Box className="form-group mb-0">
                        <Box className="edu-form-check">
                          <input type="radio" id="no" name="officeSpace" value="false" checked={experienceInStemCellBanking} onChange={handleexperienceInStemCellBankingChange} />
                          <label htmlFor="no">No</label>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box className="form-group col-md-12">
                    <Typography sx={{ marginBottom: "10px !important", fontWeight: "700", fontSize: "1.5rem", marginLeft: "2rem" }}>Comment</Typography>
                    <textarea name="contact-message" style={{ fontSize: "15px", height: "150px" }} id="contact-message" cols="30" rows="6" placeholder="Type your message"></textarea>
                  </Box>
                  <Button onClick={handleSubmit} variant="contained" sx={{ fontSize: "2rem !important", textTransform: "none", backgroundColor: "#D5008D", color: "white", fontWeight: "700", width: isMobile ? "40%" : "100%", whiteSpace: "nowrap", padding: "15px 30px", borderRadius: "40px", marginTop: "3rem" }} size="lg">
                    Submit
                  </Button>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <ReachUs />
    </>
  );
};

export default Franchise;
