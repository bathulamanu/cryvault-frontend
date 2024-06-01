import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";
const BookAppointment = () => {
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
  const isMobile = useDeviceSize() === "xs";
  const [deliveryinputType, setDeliveryInputType] = useState('text');
  const [inputType, setInputType] = useState('text');
  const userDetails = Object.entries(userData);
  const isOdd = userDetails.length % 2 !== 0;
  return (
    <>
      <Box sx={{ marginBottom: "8rem !important", backgroundColor: "white !important" }} className="edu-section-gap edu-about-area about-style-4 position-relative">
        {isMobile ? null : <img src="assets/images/anim-icon-4.webp" style={{ top: "-100px", right: "0" }} className="position-ab pencil-ot" alt="pencil" />}
        {isMobile ? null : <img src="assets/images/note.webp" className="position-ab notes-img" alt="pencil" />}

        <Box className="container">
          <Box sx={{marginTop:"2rem !important"}} className="row g-5 align-items-center">
            <Box className="col-lg-6">
              <Box sx={{ padding: isMobile ? "20px !important" : "40px" }} className="contact-form form-style-2">
                <Box style={{ width: "100%" }}>
                  <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>
                    {" "}
                    {userDetails.map((data, index) =>
                      data[1].name == "appointmentDate" ? (
                        <input key={data[0]} placeholder={data[1].placeholder} className={`appointmentInput ${isOdd && index === userDetails.length - 1 ? "fullWidth" : ""}`} label={data[1].placeholder} type={inputType} onFocus={() => setInputType("date")} onBlur={() => setInputType("text")} value={data[1].value} name={data[1].name} size="small" />
                      ) : data[1].name == "deliveryDate" ? (
                        <input key={data[0]} placeholder={data[1].placeholder} className={`appointmentInput ${isOdd && index === userDetails.length - 1 ? "fullWidth" : ""}`} label={data[1].placeholder} type={deliveryinputType} onFocus={() => setDeliveryInputType("date")} onBlur={() => setDeliveryInputType("text")} value={data[1].value} name={data[1].name} size="small" />
                      ) : (
                        <input key={data[0]} placeholder={data[1].placeholder} className={`appointmentInput ${isOdd && index === userDetails.length - 1 ? "fullWidth" : ""}`} label={data[1].placeholder} type={data[1].type} value={data[1].value} name={data[1].name} size="small" />
                      )
                    )}
                  </Box>
                  <Box className="form-group col-12">
                    <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-rax7gaw23nj6" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfPixwaAAAAABFFuOob52Mh463Oy3rZEtYUr4oJ&amp;co=aHR0cHM6Ly93d3cuY3J5b3ZhdWx0LmluOjQ0Mw..&amp;hl=en&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;size=normal&amp;cb=oh1vpc5nfiib" data-gtm-yt-inspected-6="true"></iframe>
                  </Box>
                  <Button sx={{ fontWeight: "600", textTransform: "none" }} variant="contained" className="appointmentBtn">
                    Make An Appointment
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-6 sal-animate" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
              <Box  className="about-content">
                <Box className="section-title section-left" sx={{ textAlign: isMobile ? "center !important" : "left" }}>
                  <span className="pre-title cur_font">How We Can Help You?</span>
                  <Typography variant="h2" className="title">
                    Book an Free Appointment
                  </Typography>
                  <Box className="heart_left">
                    <img src="assets/images/med-img blk heart.svg" width="30" />
                  </Box>
                  <Typography>
                    Your Baby’s Umbilical Cord Blood Is a Rich Source Of Stem
                    <br /> Cells.
                    <br />
                    Interested in preserving the stem cells of your child for the future? Please fill the basic information below and schedule a possibly nearer convenient date for a call session with our experts. Let’s begin a journey with Mothercell!
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {isMobile ? null : (
          <Box className="birdImg" role="img" aria-label="">
            <img src="https://www.cryovault.in/wp-content/uploads/2024/01/bird.png" alt="bird image" />
          </Box>
        )}
      </Box>
    </>
  );
};

export default BookAppointment;
