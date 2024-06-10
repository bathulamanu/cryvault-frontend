import React, { useEffect, useState } from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsShieldPlus } from "react-icons/bs";
import ReachUs from "../Components/Common/ReachUs";
import OurStory from "../Components/Common/OurStory";
import { Box, Breadcrumbs, Typography, Button, Link, TextField } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileSideContact, WebSideContact } from "./RequestKit";
import { getBranchContact, bookAppointment } from "../redux/reducers/HomePageReducer";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail, validatePhoneNumber } from "../Components/Contact/ContactForm";
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
  appointmentDate: {
    value: "",
    placeholder: "Appointment Date",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "date",
    name: "appointmentDate",
    id: "appointmentDate",
  },
  deliveryDate: {
    value: "",
    placeholder: "Delivery Date",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "date",
    name: "deliveryDate",
    id: "deliveryDate",
  },
  doctorName: {
    value: "",
    placeholder: "Doctor's Name",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "text",
    name: "doctorName",
    id: "doctorName",
  },
  hospitalName: {
    value: "",
    placeholder: "Hospital Name",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "text",
    name: "hospitalName",
    id: "hospitalName",
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
};
const Appointment = () => {
  const isMobile = useDeviceSize() === "xs";
  // const [selectedDate, handleDateChange] = useState(new Date());
  const dispatch = useDispatch();
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
    appointmentDate: {
      value: "",
      placeholder: "Appointment Date",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "date",
      name: "appointmentDate",
      id: "appointmentDate",
    },
    deliveryDate: {
      value: "",
      placeholder: "Delivery Date",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "date",
      name: "deliveryDate",
      id: "deliveryDate",
    },
    doctorName: {
      value: "",
      placeholder: "Doctor's Name",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "doctorName",
      id: "doctorName",
    },
    hospitalName: {
      value: "",
      placeholder: "Hospital Name",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "hospitalName",
      id: "hospitalName",
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
  const [deliveryinputType, setDeliveryInputType] = useState("text");
  const [inputType, setInputType] = useState("text");
  const userDetails = Object.entries(userData);
  const isOdd = userDetails.length % 2 !== 0;
  const contactInfo = useSelector((state) => state.home.contactInfo);

  const handleChange = (e) => {
    const name = e?.target?.name;
    const value = e?.target?.value;

    setUserData({ ...userData, [name]: { ...userData[name], value: value, errorStatus: false, errorMessage: "" } });
  };
  const handleDateChange = (e) => {
    const name = e?.target?.name;
    const value = e?.target?.value;
    setUserData({ ...userData, [name]: { ...userData[name], value: value, errorStatus: false, errorMessage: "" } });
  };

  const handleSubmit = () => {
    const isMobileInvalid = !validatePhoneNumber(userData.phone.value, String(userData.countryCode.value) || "91");

    const dataToSend = {
      firstName: userData.firstName.value,
      lastName: userData.lastName.value,
      email: userData.email.value,
      countryCode: "+91",
      phoneNumber: userData.phone.value,
      expectedDeliveryDate: userData.deliveryDate.value,
      appointmentDate: userData.appointmentDate.value,
      doctorName: userData.doctorName.value,
      hospitalName: userData.hospitalName.value,
      address: userData.address.value,
    };

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
    if (!userData.appointmentDate.value) {
      setUserData((prevData) => ({
        ...prevData,
        appointmentDate: {
          ...prevData.appointmentDate,
          errorStatus: true,
          errorMessage: "Appointment Date is required.",
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
    // dispatch(addEmergencyAppointment({ payload: dataToSend }));
    dispatch(bookAppointment({ payload: dataToSend }));
    setUserData(initialState);
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
                  Appointment
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
                    Appointment
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
                  {" "}
                  Book an Appointment
                </Typography>
                <Typography>You can get in touch with us through Email, phone. We anticipate getting with you.</Typography>
                <Typography>In the event that you’d want to allow us to call you please fill in the form. Once we have received your contact details one of our stem cell expert will get back to you at your convenience.</Typography>
              </Box>
              <Box className="">
           
                <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>
                  {" "}
                  {userDetails.map((data, index) =>
                    data[1].name == "appointmentDate" ? (
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <input style={{ border: data[1].errorStatus ? "1px solid red" : "none" }} onChange={handleDateChange} key={data[0]} placeholder={data[1].placeholder} className={`appointmentInput ${isOdd && index === userDetails.length - 1 ? "fullWidth" : ""}`} label={data[1].placeholder} type={inputType} onFocus={() => setInputType("date")} onBlur={() => setInputType("text")} value={data[1].value} name={data[1].name} size="small" />

                        {data[1].errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data[1].errorMessage}</Typography> : null}
                      </Box>
                    ) : data[1].name == "deliveryDate" ? (
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <input style={{ border: data[1].errorStatus ? "1px solid red" : "none" }} onChange={handleDateChange} key={data[0]} placeholder={data[1].placeholder} className={`appointmentInput ${isOdd && index === userDetails.length - 1 ? "fullWidth" : ""}`} label={data[1].placeholder} type={deliveryinputType} onFocus={() => setDeliveryInputType("date")} onBlur={() => setDeliveryInputType("text")} value={data[1].value} name={data[1].name} size="small" />

                        {data[1].errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data[1].errorMessage}</Typography> : null}
                      </Box>
                    ) : data[1].name == "phone" ? (
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
                <Box className="form-group col-12">
                  <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-rax7gaw23nj6" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfPixwaAAAAABFFuOob52Mh463Oy3rZEtYUr4oJ&amp;co=aHR0cHM6Ly93d3cuY3J5b3ZhdWx0LmluOjQ0Mw..&amp;hl=en&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;size=normal&amp;cb=oh1vpc5nfiib" data-gtm-yt-inspected-6="true"></iframe>
                </Box>
                <Button onClick={handleSubmit} variant="contained" sx={{ width: "100%", borderRadius: "3rem !important" }} className="rn-btn edu-btn btn-medium submit-btn">
                  Make An Appointment
                </Button>
              </Box>
            </Box>

            {isMobile ? null : <WebSideContact contactInfo={contactInfo} />}
          </Box>
        </Box>
      </Box>
      {isMobile ? <MobileSideContact contactInfo={contactInfo} /> : null}
      <Box className="contr_rep_out">
        <OurStory />
      </Box>

      {/* <ReachUs /> */}
    </>
  );
};

export default Appointment;
