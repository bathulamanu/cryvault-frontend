// import React, { useState } from "react";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import useDeviceSize from "../../Utilities/useDeviceSize";

// const BookAppointment = () => {
//   const [userData, setUserData] = useState({
//     firstName: {
//       value: "",
//       placeholder: "First Name",
//       errorStatus: false,
//       errorMessage: "",
//       icon: "",
//       type: "text",
//       name: "firstName",
//       id: "firstName",
//     },
//     lastName: {
//       value: "",
//       placeholder: "Last Name",
//       errorStatus: false,
//       errorMessage: "",
//       icon: "",
//       type: "text",
//       name: "lastName",
//       id: "lastName",
//     },
//     email: {
//       value: "",
//       placeholder: "Email",
//       errorStatus: false,
//       errorMessage: "",
//       icon: "",
//       type: "email",
//       name: "email",
//       id: "email",
//     },
//     phone: {
//       value: "",
//       placeholder: "Phone Number",
//       errorStatus: false,
//       errorMessage: "",
//       icon: "",
//       type: "tel",
//       name: "phone",
//       id: "phone",
//     },
//     appointmentDate: {
//       value: "",
//       placeholder: "Appointment Date",
//       errorStatus: false,
//       errorMessage: "",
//       icon: "",
//       type: "date",
//       name: "appointmentDate",
//       id: "appointmentDate",
//     },
//     deliveryDate: {
//       value: "",
//       placeholder: "Delivery Date",
//       errorStatus: false,
//       errorMessage: "",
//       icon: "",
//       type: "date",
//       name: "deliveryDate",
//       id: "deliveryDate",
//     },
//     doctorName: {
//       value: "",
//       placeholder: "Doctor's Name",
//       errorStatus: false,
//       errorMessage: "",
//       icon: "",
//       type: "text",
//       name: "doctorName",
//       id: "doctorName",
//     },
//     hospitalName: {
//       value: "",
//       placeholder: "Hospital Name",
//       errorStatus: false,
//       errorMessage: "",
//       icon: "",
//       type: "text",
//       name: "hospitalName",
//       id: "hospitalName",
//     },
//     address: {
//       value: "",
//       placeholder: "Address",
//       errorStatus: false,
//       errorMessage: "",
//       icon: "",
//       type: "text",
//       name: "address",
//       id: "address",
//     },
//   });
//   const isMobile = useDeviceSize() === "xs";

//   const userDetails = Object.entries(userData);
//   const isOdd = userDetails.length % 2 !== 0;
//   return (
//     <Box style={{ position: "relative", padding: isMobile ? "4rem 3rem" : "15rem" }}>
//       {isMobile ? null : (
//         <Box>
//           <img src="assets/images/note.webp" className="bookImage" style={{}} alt="pencil" />
//           <img src="assets/images/anim-icon-4.webp" style={{ zIndex: "9999999", top: "-15rem", right: " 0px", position: "absolute" }} alt="pencil" />
//         </Box>
//       )}

//       <Box className={isMobile ? "appointmentContainerMobile " : "appointmentContainer"}>
//         <Box style={{ width: isMobile ? "100%" : "50% " }} className="appointmentForm">
//           <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>
//             {userDetails.map((data, index) => (
//               <input key={data[0]} placeholder={data[1].placeholder} className={`appointmentInput ${isOdd && index === userDetails.length - 1 ? "fullWidth" : ""}`} label={data[1].placeholder} type={data[1].type} value={data[1].value} name={data[1].name} size="small" />
//             ))}
//           </Box>
//           <Box className="form-group col-12">
//             <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-rax7gaw23nj6" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfPixwaAAAAABFFuOob52Mh463Oy3rZEtYUr4oJ&amp;co=aHR0cHM6Ly93d3cuY3J5b3ZhdWx0LmluOjQ0Mw..&amp;hl=en&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;size=normal&amp;cb=oh1vpc5nfiib" data-gtm-yt-inspected-6="true"></iframe>
//           </Box>
//           <Button variant="contained" className="appointmentBtn">
//             Make An Appointment
//           </Button>
//         </Box>

//         <Box style={{ width: isMobile ? "100%" : "50% " }} className="appointmentext">
//           <Typography sx={{ color: "#FF004D", fontSize: "2.5rem", fontFamily: "Caveat, Sans-serif" }} gutterBottom variant="h5" component="Box">
//             How We Can Help You?
//           </Typography>
//           <Typography sx={{ color: "#470014", fontSize: "2rem", fontFamily: "Poppins, Sans-serif", fontWeight: "600" }} gutterBottom variant="h5" component="Box">
//             Book an Free Appointment
//           </Typography>
//           <Box className="heart_left">
//             <img src="assets/images/med-img blk heart.svg" width="30" />
//           </Box>
//           <Typography gutterBottom variant="h5" component="Box">
//             Your Baby’s Umbilical Cord Blood Is a Rich Source Of Stem Cells.
//           </Typography>

//           <Typography gutterBottom variant="h5" component="Box">
//             Interested in preserving the stem cells of your child for the future? Please fill the basic information below and schedule a possibly nearer convenient date for a call session with our experts. Let’s begin a journey with Mothercell!
//           </Typography>
//         </Box>
//       </Box>

//       {isMobile ? null : (
//         <Box className="birdImg" role="img" aria-label="">
//           <img src="https://www.cryovault.in/wp-content/uploads/2024/01/bird.png" alt="bird image" />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default BookAppointment;
import { Box, Button } from "@mui/material";
import React from "react";

const BookAppointment = () => {
  return (
    <>
      <Box className="edu-section-gap edu-about-area about-style-4 position-relative">
        <img src="assets/images/anim-icon-4.webp" style={{ top: "-100px", right: "0" }} className="position-ab pencil-ot" alt="pencil" />
        <img src="assets/images/note.webp" className="position-ab notes-img" alt="pencil" />

        <Box className="container">
          <Box className="row g-5 align-items-center">
            <Box className="col-lg-6">
              <Box className="contact-form form-style-2">
                <form className="rnt-contact-form rwt-dynamic-form" id="contact-form">
                  <Box className="row row--10">
                    <Box className="form-group col-6">
                      <input type="text" name="contact-name" id="contact-name" placeholder="First Name" />
                    </Box>
                    <Box className="form-group col-6">
                      <input type="text" name="contact-name" id="contact-name" placeholder="Last Name" />
                    </Box>
                    <Box className="form-group col-6">
                      <input type="email" name="contact-email" id="contact-email" placeholder="Email" />
                    </Box>
                    <Box className="form-group col-6">
                      <input type="tel" name="contact-name" id="contact-name" placeholder="Phone Number" />
                    </Box>
                    <Box className="form-group col-6">
                      <input type="date" name="contact-email" id="contact-email" placeholder="Appointment Date" />
                    </Box>
                    <Box className="form-group col-6">
                      <input type="date" name="contact-name" id="contact-name" placeholder="Expected Delivery Date" />
                    </Box>
                    <Box className="form-group col-6">
                      <input type="text" name="contact-email" id="contact-email" placeholder="Doctor Name" />
                    </Box>
                    <Box className="form-group col-6">
                      <input type="text" name="contact-phone" id="contact-phone" placeholder="Hospital Name" />
                    </Box>
                    <Box className="form-group col-12">
                      <input type="text" name="contact-phone" id="contact-phone" placeholder="Address" />
                    </Box>

                    <Box className="form-group col-12">
                      <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-rax7gaw23nj6" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfPixwaAAAAABFFuOob52Mh463Oy3rZEtYUr4oJ&amp;co=aHR0cHM6Ly93d3cuY3J5b3ZhdWx0LmluOjQ0Mw..&amp;hl=en&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;size=normal&amp;cb=oh1vpc5nfiib" data-gtm-yt-inspected-6="true"></iframe>
                    </Box>
                    <Box className="form-group col-12">
                      <Button variant="contained" className="appointmentBtn rn-btn edu-btn btn-medium submit-btn">
                         Make An Appointment  <i className="icon-4"></i>
                      </Button>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Box>
            <Box className="col-lg-6 sal-animate" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
              <Box className="about-content">
                <Box className="section-title section-left">
                  <span className="pre-title cur_font">How We Can Help You?</span>
                  <h2 className="title">Book an Free Appointment</h2>
                  <Box className="heart_left">
                    <img src="assets/images/med-img blk heart.svg" width="30" />
                  </Box>
                  <p>
                    Your Baby’s Umbilical Cord Blood Is a Rich Source Of Stem
                    <br /> Cells.
                    <br />
                    Interested in preserving the stem cells of your child for the future? Please fill the basic information below and schedule a possibly nearer convenient date for a call session with our experts. Let’s begin a journey with Mothercell!
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BookAppointment;
