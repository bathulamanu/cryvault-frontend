import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigation, useRoutes } from "react-router-dom";
import useDeviceSize from "../../Utilities/useDeviceSize";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import { addReachUS } from "../../redux/reducers/HomePageReducer";
import { useDispatch } from "react-redux";
import { validateEmail, validatePhoneNumber } from "../Contact/ContactForm";
import PhoneInput from "react-phone-input-2";


const initialState = {
  fullName: {
    value: "",
    placeholder: "First Name",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "text",
    name: "fullName",
    id: "fullName",
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
  countryCode: {
    value: "",
    name: "countryCode",
    id: "countryCode",
  },
  subject: {
    value: "",
    placeholder: "Subject",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "text",
    name: "subject",
    id: "subject",
  },
};
const ReachUs = () => {
  const router = useLocation();
  const [userData, setUserData] = useState({
    fullName: {
      value: "",
      placeholder: "Full Name",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "fullName",
      id: "fullName",
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
    countryCode: {
      value: "",
      name: "countryCode",
      id: "countryCode",
    },
    subject: {
      value: "",
      placeholder: "Subject",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "subject",
      id: "subject",
    },
  });

  const isMobile = useDeviceSize() === "xs";
  const dispatch = useDispatch();

  const userDetails = Object.entries(userData);
  const isOdd = userDetails.length % 2 !== 0;

  const handleChange = (e) => {
    const name = e?.target?.name;
    const value = e?.target?.value;
    setUserData({ ...userData, [name]: { ...userData[name], value: value, errorStatus: false, errorMessage: "" } });
  };

  const handlePhoneInput = (value, country) => {
    const country_code = country;
    const phoneNumber = value.slice(country_code.length);
    setUserData((prevData) => ({
      ...prevData,
      phone: { ...prevData.phone, value: phoneNumber, errorStatus: false, errorMessage: "" },
      countryCode: { ...prevData.countryCode, value: country_code, errorStatus: false, errorMessage: "" },
    }));
  };
  const handleSubmit = () => {
    const isMobileInvalid = !validatePhoneNumber(userData.phone.value, String(userData.countryCode.value) || "91");

    const dataToSend = {
      fullName: userData.fullName.value,
      Email: userData.email.value,
      countryCode: userData.countryCode.value,
      phoneNumber: userData.phone.value,
      Subject: userData.subject.value,
      pageName: router?.pathname,
    };

    if (!userData.fullName.value) {
      setUserData((prevData) => ({
        ...prevData,
        fullName: {
          ...prevData.fullName,
          errorStatus: true,
          errorMessage: "Full Name is required.",
        },
      }));
      return;
    }

    if (!validateEmail(userData.email.value)) {
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
    if (isMobileInvalid) {
      setUserData((prevData) => ({
        ...prevData,
        phone: {
          ...prevData.phone,
          errorStatus: true,
          errorMessage: "Enter Valid Phone Number",
        },
      }));
      return;
    }
    dispatch(addReachUS({ payload: dataToSend }));
    setUserData(initialState);
  };
  return (
    <>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }} className="edu-cta-banner-area home-gym-cta-wrapper bg-image">
        <Box sx={{ flexDirection: isMobile ? "column" : "row", justifyContent: "start", marginLeft: isMobile ? "0rem" : "15rem", gap: "1rem", width: "100%", textAlign: "center", display: "flex", alignItems: "center" }} className="section-title section-left sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
          <Box className="col-lg-4">
            <Box className="playiocn">
              <Link to="#">
                <HiOutlinePlayCircle />
              </Link>
            </Box>
          </Box>
          <Box sx={{ alignItems: "center", display: isMobile ? "flex" : "block", flexDirection: "column" }}>
            <Typography variant="h2" className="title mb-4">
              Ready to Get Started?
            </Typography>
            <Typography variant="body1">Make an informed decision.</Typography>
            <Link to="contactus" className="edu-btn">
              Book an E-meet today
            </Link>
          </Box>
        </Box>
      </Box>
      <Box className="edu-section-gap contact-form-area">
        <Box className="container">
          <Box className="row justify-content-center">
            <Box className="col-lg-8">
              <Box className="contact-form contact-form-reach">
                <Box className="section-title section-center">
                  <Typography variant="h3" className="title">
                    Reach Us
                  </Typography>
                  {/* <Box className=" excercise_blo shape_in reachus shape_in-bk">
                    <img src="assets/images/med-img blk.svg" width="30" />
                  </Box> */}
                  <Box className="shape_in excercise_blo reachus text-center">
                    {" "}
                    <img src="assets/images/med-img blk heart.svg" width="30" />
                  </Box>
                </Box>
             

                <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>
                  {" "}
                  {userDetails.map((data, index) =>
                    data[1].name == "phone" ? (
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <PhoneInput
                          value={userData.countryCode.value + userData.phone.value}
                          onChange={handlePhoneInput}
                          autoFormat
                          inputProps={{
                            required: true,
                            placeholder: "Enter your phone number",
                          }}
                          inputClass={"borderPhoneInput"}
                          specialLabel=""
                          containerClass={"layoutItem"}
                          // country={"in"}
                          defaultErrorMessage="Incorrect WhatsApp Number"
                        />
                        {data[1].errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data[1].errorMessage}</Typography> : null}
                      </Box>
                    ) : data[1].name !== "countryCode" ? (
                      <Box sx={{ display: "grid", gridTemplateColumns: "auto", width: data[1].name == "address" ? "200%" : "100%" }}>
                        <input style={{ border: data[1].errorStatus ? "1px solid red" : "none" }} onChange={handleChange} key={data[0]} placeholder={data[1].placeholder} className={`appointmentInput ${data[1].name == "address" ? "fullWidth" : ""}`} label={data[1].placeholder} type={data[1].type} value={data[1].value} name={data[1].name} size="small" />
                        {data[1].errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data[1].errorMessage}</Typography> : null}
                      </Box>
                    ) : null
                  )}
                </Box>
                <Box sx={{ marginTop: "1rem" }} className="form-group col-12">
                  <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-rax7gaw23nj6" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfPixwaAAAAABFFuOob52Mh463Oy3rZEtYUr4oJ&amp;co=aHR0cHM6Ly93d3cuY3J5b3ZhdWx0LmluOjQ0Mw..&amp;hl=en&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;size=normal&amp;cb=oh1vpc5nfiib" data-gtm-yt-inspected-6="true"></iframe>
                </Box>
                <Box className="form-group col-12">
                  <Button onClick={handleSubmit} className="rn-btn edu-btn btn-medium submit-btn" name="submit" type="submit">
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ReachUs;
