import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { addEmergencyAppointment } from "../../redux/reducers/HomePageReducer";
import { useDispatch } from "react-redux";

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
    component: <PhoneInput autoFormat inputProps={{ required: true }} inputClass={"borderPhoneInput"} specialLabel="" containerClass={"layoutItem"} country={"in"} defaultErrorMessage="Incorrect WhatsApp Number" />,
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
  age: {
    value: "",
    placeholder: "Your Age",
    errorStatus: false,
    errorMessage: "",
    icon: "",
    type: "text",
    name: "age",
    id: "age",
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
  }
}
const ContactForm = () => {
  const [userData, setUserData] = useState(initialState);

  const isMobile = useDeviceSize() === "xs";
  const [inputType, setInputType] = useState('text');
  const userDetails = Object.entries(userData);
  const isOdd = userDetails.length % 2 !== 0;
  const dispatch = useDispatch();


  const handlePhoneInput = (value, country) => {
    const country_code = "+91";
    const phoneNumber = value.slice(country_code.length);
    setUserData((prevData) => ({
      ...prevData,
      phone: { ...prevData.phone, value: phoneNumber, errorStatus: false, errorMessage: "" },
    }));
  };

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
    
    if (!userData.firstName.value) {
      setUserData((prevData) => ({
        ...prevData,
        firstName: {
          ...prevData.firstName,
          errorStatus: true,
          errorMessage: "First name is required",
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
          errorMessage: "Last Name is required",
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
          errorMessage: "Email ID is required",
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
          errorMessage: "Appointment Date is required ",
        },
      }));
      return;
    }

    const dataToSend = {
      firstName: userData.firstName.value,
      lastName: userData.lastName.value,
      email: userData.email.value,
      countryCode:"+91",
      phoneNumber: userData.phone.value,
      appointmentDate: userData.appointmentDate.value,
      Age: userData.age.value,
      subject: userData.subject.value,
      queryContent: ""//userData.queryContent.value
    };

    console.log("dataToSend emergrnecy ", dataToSend);
    dispatch(addEmergencyAppointment({ payload: dataToSend }));
    setUserData(initialState);
  };
  return (
    <Box className="edu-section-gap contact_bg contact-form-area contact-form-reach">
      <Box className="container">
        <Box className="row justify-content-center">
          <Box className="col-lg-10">
            <Box className="contact-form">
              <Box className="section-title section-center sal-animate">
                <Typography
                  sx={{
                    color: "#6F6F6F !important",
                    fontFamily: '"Roboto", Sans-serif !important',
                    fontSize: "2rem !important",
                    fontWeight: "400 !important",
                    letterSpacing: "1.2px !important",
                    margin: "0 !important",
                  }}
                  // className="pre-title pre-textsecondary"
                >
                  Need emergency?
                </Typography>
                <Typography sx={{ color: "#FF0061 !important", fontFamily: '"Sacramento", Sans-serif !important', fontSize: "46px !important", fontWeight: "500 !important" }} variant="h2">
                  Drop us a Mail
                </Typography>
                <img className="logo-light" src="assets/images/heading-icon1.webp" alt="" />
              </Box>

              <Box  className="row" sx={{ display: "flex", gap: "4rem" }}>
                <Box  component="form"  style={{ display: "grid", gridTemplateColumns: isMobile ? "auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>
                  {userDetails.map((data, index) =>
                    data[1].component ? (
                      data[1].component
                    ) : data[1].name == "appointmentDate" ? (
                      <input
                      key={data[0]}
                      placeholder={data[1].placeholder}
                      className={`appointmentInput ${isOdd && index === userDetails.length - 1 ? "fullWidth" : ""}`}
                      label={data[1].placeholder}
                      type={inputType}
                      onChange={handleDateChange}
                      onFocus={() => setInputType('date')}
                      onBlur={() => setInputType('text')}
                      value={data[1].value}
                      name={data[1].name}
                      size="small"
                    />                    
                    ) :  data[1].name == "phone" ? (
                      <PhoneInput value={"91" + userData.phone.value}
                        onChange={handlePhoneInput} autoFormat inputProps={{ required: true }}
                        inputClass={"borderPhoneInput"} specialLabel=""
                        containerClass={"layoutItem"} country={"in"}
                        defaultErrorMessage="Incorrect WhatsApp Number" />
                    ) :(
                      <input key={data[0]} placeholder={data[1].placeholder} onChange={handleChange}
                       className={`appointmentInput ${isOdd && index === userDetails.length - 1 ? "fullWidth" : ""}`} 
                       label={data[1].placeholder} type={data[1].type} value={data[1].value}
                       name={data[1].name} size="small" />
                    )
                  )}
                </Box>

                <Box className="form-group col-md-12">
                  <textarea name="contact-message" id="contact-message" cols="30" rows="6" placeholder="Type your message"></textarea>
                </Box>
                <Box className="form-group col-12">
                  <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-rax7gaw23nj6" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfPixwaAAAAABFFuOob52Mh463Oy3rZEtYUr4oJ&amp;co=aHR0cHM6Ly93d3cuY3J5b3ZhdWx0LmluOjQ0Mw..&amp;hl=en&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;size=normal&amp;cb=oh1vpc5nfiib" data-gtm-yt-inspected-6="true"></iframe>
                </Box>
                <Box className="form-group">
                  <Button className="edu-btn btn-medium" onClick={handleSubmit}>Make an Appointment</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
