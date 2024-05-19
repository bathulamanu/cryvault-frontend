import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";

const ContactForm = () => {
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
    },
  });

  const isMobile = useDeviceSize() === "xs";

  const userDetails = Object.entries(userData);
  const isOdd = userDetails.length % 2 !== 0;
  return (
    <Box className="edu-section-gap contact_bg contact-form-area contact-form-reach">
      <Box className="container">
        <Box className="row justify-content-center">
          <Box className="col-lg-10">
            <Box className="contact-form">
              <Box className="section-title section-center sal-animate">
                <span className="pre-title pre-textsecondary">Need emergency?</span>
                <Typography variant="h2" className="title">
                  Drop us a Mail
                </Typography>
                <img className="logo-light" src="assets/images/heading-icon1.webp" alt="" />
              </Box>

              <Box className="row" sx={{display: "flex",gap: "4rem"}}>
                <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>
                  {userDetails.map((data, index) => (
                    <input key={data[0]} placeholder={data[1].placeholder} className={`appointmentInput ${isOdd && index === userDetails.length - 1 ? "fullWidth" : ""}`} label={data[1].placeholder} type={data[1].type} value={data[1].value} name={data[1].name} size="small" />
                  ))}
                </Box>

                <Box className="form-group col-md-12">
                  <textarea name="contact-message" id="contact-message" cols="30" rows="6" placeholder="Type your message"></textarea>
                </Box>
                <Box className="form-group col-12">
                  <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-rax7gaw23nj6" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfPixwaAAAAABFFuOob52Mh463Oy3rZEtYUr4oJ&amp;co=aHR0cHM6Ly93d3cuY3J5b3ZhdWx0LmluOjQ0Mw..&amp;hl=en&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;size=normal&amp;cb=oh1vpc5nfiib" data-gtm-yt-inspected-6="true"></iframe>
                </Box>
                <Box className="form-group">
                  <Button className="edu-btn btn-medium">
                    Make an Appointment <i className="icon-4"></i>
                  </Button>
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
