import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDeviceSize from "../../Utilities/useDeviceSize";

const ReachUs = () => {
  const [userData, setUserData] = useState({
    fulltName: {
      value: "",
      placeholder: "Full Name",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "firstName",
      id: "firstName",
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
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }} className="edu-cta-banner-area home-gym-cta-wrapper bg-image">
        <Box sx={{ textAlign: "center" }} className="section-title section-left sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
          <Typography variant="h2" className="title mb-4">
            Ready to Get Started?
          </Typography>
          <Typography variant="body1">Make an informed decision.</Typography>
          <Link to="contactus" className="edu-btn">
            Book an E-meet today <i className="icon-4"></i>
          </Link>
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
                  <Box className="shape_in shape_in-bk">
                    <img src="assets/images/med-img blk.svg" width="30" />
                  </Box>
                </Box>
                <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>
                  {userDetails.map((data, index) => (
                    <input key={data[0]} placeholder={data[1].placeholder} className={`appointmentInput ${isOdd && index === userDetails.length - 1 ? "fullWidth" : ""}`} label={data[1].placeholder} type={data[1].type} value={data[1].value} name={data[1].name} size="small" />
                  ))}
                </Box>
                <Box sx={{marginTop:"1rem"}} className="form-group col-12">
                  <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-rax7gaw23nj6" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfPixwaAAAAABFFuOob52Mh463Oy3rZEtYUr4oJ&amp;co=aHR0cHM6Ly93d3cuY3J5b3ZhdWx0LmluOjQ0Mw..&amp;hl=en&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;size=normal&amp;cb=oh1vpc5nfiib" data-gtm-yt-inspected-6="true"></iframe>
                </Box>
                <Box className="form-group col-12">
                  <Button className="rn-btn edu-btn btn-medium submit-btn" name="submit" type="submit">
                    Submit <i className="icon-4"></i>
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
