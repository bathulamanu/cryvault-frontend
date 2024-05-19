import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
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

  const userDetails = Object.entries(userData);
  const isOdd = userDetails.length % 2 !== 0;
  return (
    <Box style={{ position: "relative", padding: isMobile ? "4rem 3rem" : "15rem" }}>
      {isMobile ? null : (
        <Box>
          <img src="assets/images/note.webp" className="bookImage" style={{}} alt="pencil" />
          <img src="assets/images/anim-icon-4.webp" style={{ zIndex: "9999999", top: "-15rem", right: " 0px", position: "absolute" }} alt="pencil" />
        </Box>
      )}

      <Box className={isMobile ? "appointmentContainerMobile " : "appointmentContainer"}>
        <Box style={{ width: isMobile ? "100%" : "50% " }} className="appointmentForm">
          <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>
            {userDetails.map((data, index) => (
              <input key={data[0]} placeholder={data[1].placeholder} className={`appointmentInput ${isOdd && index === userDetails.length - 1 ? "fullWidth" : ""}`} label={data[1].placeholder} type={data[1].type} value={data[1].value} name={data[1].name} size="small" />
            ))}
          </Box>
          <Box className="form-group col-12">
            <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-rax7gaw23nj6" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfPixwaAAAAABFFuOob52Mh463Oy3rZEtYUr4oJ&amp;co=aHR0cHM6Ly93d3cuY3J5b3ZhdWx0LmluOjQ0Mw..&amp;hl=en&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;size=normal&amp;cb=oh1vpc5nfiib" data-gtm-yt-inspected-6="true"></iframe>
          </Box>
          <Button variant="contained" className="appointmentBtn">
            Make An Appointment
          </Button>
        </Box>

        <Box style={{ width: isMobile ? "100%" : "50% " }} className="appointmentext">
          <Typography sx={{ color: "#FF004D", fontSize: "2.5rem", fontFamily: "Caveat, Sans-serif" }} gutterBottom variant="h5" component="Box">
            How We Can Help You?
          </Typography>
          <Typography sx={{ color: "#470014", fontSize: "2rem", fontFamily: "Poppins, Sans-serif", fontWeight: "600" }} gutterBottom variant="h5" component="Box">
            Book an Free Appointment
          </Typography>
          <Box className="heart_left">
            <img src="assets/images/med-img blk heart.svg" width="30" />
          </Box>
          <Typography gutterBottom variant="h5" component="Box">
            Your Baby’s Umbilical Cord Blood Is a Rich Source Of Stem Cells.
          </Typography>

          <Typography gutterBottom variant="h5" component="Box">
            Interested in preserving the stem cells of your child for the future? Please fill the basic information below and schedule a possibly nearer convenient date for a call session with our experts. Let’s begin a journey with Mothercell!
          </Typography>
        </Box>
      </Box>

      {isMobile ? null : (
        <Box className="birdImg" role="img" aria-label="">
          <img src="https://www.cryovault.in/wp-content/uploads/2024/01/bird.png" alt="bird image" />
        </Box>
      )}
    </Box>
  );
};

export default BookAppointment;
