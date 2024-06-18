import React, { useEffect, useState } from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsShieldPlus } from "react-icons/bs";
import useDeviceSize from "../Utilities/useDeviceSize";
import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/material";
import OurStory from "../Components/Common/OurStory";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { addInformationKitRequest, getBranchContact } from "../redux/reducers/HomePageReducer";
import { validateEmail, validatePhoneNumber } from "../Components/Contact/ContactForm";
import ReCAPTCHA from 'react-google-recaptcha';

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
  countryCode: {
    value: "",
    name: "countryCode",
    id: "countryCode",
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
const recaptchaIntialState = {
  recaptcha: {
    value: "",
    placeholder: "recaptcha",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "text",
    name: "recaptcha",
    id: "recaptcha",
  }
}
const RequestKit = () => {
  const isMobile = useDeviceSize() === "xs";
  const dispatch = useDispatch();
  const contactInfo = useSelector((state) => state.home.contactInfo);
  const [userData, setUserData] = useState({
    firstName: {
      value: "",
      placeholder: "First Name *",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "firstName",
      id: "firstName",
    },
    lastName: {
      value: "",
      placeholder: "Last Name *",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "lastName",
      id: "lastName",
    },
    email: {
      value: "",
      placeholder: "Email *",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "email",
      name: "email",
      id: "email",
    },
    phone: {
      value: "",
      placeholder: "Phone Number *",
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
    location: {
      value: "",
      placeholder: "Location *",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "location",
      id: "location",
    },
    address: {
      value: "",
      placeholder: "Address",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "address",
      id: "address",
    },
  });

  const userDetails = Object.entries(userData);
  const [recaptchaToken, setRecaptchaToken] = useState(recaptchaIntialState);
  const RECAPTCHA_SITE_KEY = "6Lf4RPUpAAAAAOu9M51NaHQlLxl8df7ldXf9pnS_"
  var [captcha, setCaptch] = useState()


  const handleRecaptchaChange = (token) => {
    setRecaptchaToken({ ...recaptchaToken, ["recaptcha"]: { ...recaptchaToken["recaptcha"], value: token, errorStatus: false, errorMessage: "" } });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));
  };
  const handleSubmit = () => {
    let isMobileInvalid;
    if (userData.phone.value || userData.countryCode.value) {
      isMobileInvalid = !validatePhoneNumber(userData.phone.value, String(userData.countryCode.value) || "91");
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
    if (!userData.phone.value) {
      setUserData((prevData) => ({
        ...prevData,
        phone: {
          ...prevData.phone,
          errorStatus: true,
          errorMessage: "Phone Number is required.",
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
    if (!userData.location.value) {
      setUserData((prevData) => ({
        ...prevData,
        location: {
          ...prevData.location,
          errorStatus: true,
          errorMessage: "Location is required.",
        },
      }));
      return;
    }
    if (!recaptchaToken.recaptcha.value) {
      setRecaptchaToken((prevData) => ({
        ...prevData,
        "recaptcha": {
          ...prevData.recaptcha,
          errorStatus: true,
          errorMessage: "ReCaptcha is required",
        },
      }));
      return;
    }

    const dataToSend = {
      firstName: userData.firstName.value,
      lastName: userData.lastName.value,
      email: userData.email.value,
      countryCode: "+91",
      phoneNumber: userData.phone.value.replace(userData.countryCode.value, ''),
      location: userData.location.value,
      address: userData.address.value,
    };

    dispatch(addInformationKitRequest({ payload: dataToSend }));
    setUserData(initialState);
    // setRecaptchaToken(recaptchaIntialState);
    captcha.reset()
  };

  const handlePhoneInput = (value, country) => {
    const country_code = country;
    const phoneNumber = value.slice(country_code.length);
    setUserData((prevData) => ({
      ...prevData,
      phone: { ...prevData.phone, value: phoneNumber, errorStatus: false, errorMessage: "" },
      countryCode: { ...prevData.countryCode, value: country_code.dialCode, errorStatus: false, errorMessage: "" },
    }));
  };

  useEffect(() => {
    dispatch(getBranchContact());
  }, []);
  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "60px 100px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "65% !important" }}>
                <Typography sx={{ fontSize: isMobile ? "24px !important" : "25px !important" }} variant="h1" className="title">
                  Request for Information Kit
                </Typography>
              </Box>

              {isMobile ? null : (
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    <Typography variant="body2" color="text.primary">
                      Getting Started
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.primary">
                    Request for Information Kit
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="py-5">
        <Box className="container">
          <Box className="row">
            <Box className="col-md-7">
              <Box className="inform_form">
                <Typography variant="h3" sx={{ textAlign: isMobile ? "center" : "start" }}>
                  Information Kit
                </Typography>
                <Typography variant="body1">In the event that you’d want to allow us to call you please fill in the form. Once we have received your contact details one of our stem cell expert will get back to you at your convenience.</Typography>
              </Box>
              <Box className="requ_inform">
                <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>


                  <Box style={{ width: "100%" }}>


                    <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>
                      {" "}
                      {userDetails.map((data, index) =>
                        data[1].name == "phone" ? (
                          <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <PhoneInput
                              value={userData.phone.value} //userData.countryCode.value +
                              onChange={handlePhoneInput}
                              autoFormat
                              inputProps={{
                                required: true,
                                placeholder: "Phone Number",
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
                          <Box sx={{ display: "grid", gridTemplateColumns: "auto" }}>
                            <input style={{ border: data[1].errorStatus ? "1px solid red" : "none" }} onChange={handleChange} key={data[0]} placeholder={data[1].placeholder} className={`appointmentInput ${data[1].name == "address" ? "fullWidth" : ""}`} label={data[1].placeholder} type={data[1].type} value={data[1].value} name={data[1].name} size="small" />
                            {data[1].errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data[1].errorMessage}</Typography> : null}
                          </Box>
                        ) : null
                      )}
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ marginTop: "1rem" }} className="form-group col-12">
                  {/* <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-rax7gaw23nj6" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfPixwaAAAAABFFuOob52Mh463Oy3rZEtYUr4oJ&amp;co=aHR0cHM6Ly93d3cuY3J5b3ZhdWx0LmluOjQ0Mw..&amp;hl=en&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;size=normal&amp;cb=oh1vpc5nfiib" data-gtm-yt-inspected-6="true"></iframe> */}
                  <ReCAPTCHA
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={handleRecaptchaChange}
                    ref={el => captcha = el}
                  />
                  {recaptchaToken.recaptcha.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{recaptchaToken.recaptcha.errorMessage}</Typography> : null}

                </Box>
                <Button onClick={handleSubmit} variant="contained" className="rn-btn edu-btn btn-medium submit-btn">
                  Submit
                </Button>
              </Box>
            </Box>

            {isMobile ? null : <WebSideContact contactInfo={contactInfo} />}
          </Box>
        </Box>
      </Box>
      {isMobile ? <MobileSideContact contactInfo={contactInfo} /> : null}
      <Box sx={{ marginTop: "3rem" }} className="contr_rep_out">
        <OurStory />
      </Box>
    </>
  );
};

export const MobileSideContact = ({ contactInfo }) => {
  return (
    <Box className="kit text-center">
      <Typography variant="h3">Contact Details</Typography>

      <Box className="add_info">
        <Box className="number_info">
          <RiCustomerService2Fill />
          <Typography variant="body1">
            <span>Toll Free No</span>
          </Typography>
          <Typography variant="bod1">
            {" "}
            <Link to={`tel:18001 024 026`}>18001 024 026</Link>
          </Typography>
        </Box>
        <Box className="text-center shld_ot">
          <BsShieldPlus />
        </Box>
        <Box className="number_info">
          <HiOutlineMail />
          <Typography variant="body1">
            <span>Email</span>
          </Typography>
          <Typography variant="body1">
            {" "}
            <Link to="tel:18001 024 026">info@cryovault.in</Link>
          </Typography>
        </Box>
        <Box className="text-center shld_ot">
          <BsShieldPlus />
        </Box>
        <Box className="number_info">
          <FaMapLocationDot />
          <Typography variant="body1">
            <span>Location</span>
          </Typography>
          <Typography variant="body1">No.:52/65, Swami Vivekananda road, Srinivasa layout, Bagalur, North Bengaluru, Karnataka- 562149.</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export const WebSideContact = ({ contactInfo }) => {
  return (
    <Box className="col-md-5 pl-5 p-0">
      <Box className="address_info text-center">
        <Typography variant="h3">Contact Details</Typography>

        <Box className="add_info">
          <Box className="number_info">
            <RiCustomerService2Fill style={{ color: "#2A0011" }} />
            <Typography variant="body1">
              <span>Toll Free No</span>
            </Typography>
            <Typography variant="bod1">
              {" "}
              <Link sx={{ color: "black", fontSize: "2rem" }} to={`tel:${contactInfo?.[0]?.ContactInfo?.[1]?.value}`}>
                18001 024 026
              </Link>
            </Typography>
          </Box>
          <Box className="text-center shld_ot">
            <BsShieldPlus />
          </Box>
          <Box className="number_info">
            <HiOutlineMail style={{ color: "#2A0011" }} />
            <Typography variant="body1">
              <span>Email</span>
            </Typography>
            <Typography variant="body1">
              {" "}
              <Link sx={{ color: "black", fontSize: "2rem" }} to="tel:18001 024 026">
                info@cryovault.in
              </Link>
            </Typography>
          </Box>
          <Box className="text-center shld_ot">
            <BsShieldPlus />
          </Box>
          <Box className="number_info">
            <FaMapLocationDot style={{ color: "#2A0011" }} />
            <Typography variant="body1">
              <span>Location</span>
            </Typography>
            <Typography variant="body1" sx={{ color: "black", fontSize: "2rem" }}>
              No.:52/65, Swami Vivekananda road, Srinivasa layout, Bagalur, North Bengaluru, Karnataka- 562149.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default RequestKit;
