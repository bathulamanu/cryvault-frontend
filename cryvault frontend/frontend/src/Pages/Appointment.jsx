import React, { useState } from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsShieldPlus } from "react-icons/bs";
import ReachUs from "../Components/Common/ReachUs";
import OurStory from "../Components/Common/OurStory";
import { Box, Breadcrumbs, Typography, Button, Link } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Appointment = () => {
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

  const userDetails = Object.entries(userData);
  const isOdd = userDetails.length % 2 !== 0;
  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 90px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "65% !important" }}>
                <Typography variant="h1" className="title">
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
              <Box className="requ_inform">
                <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>{userDetails.map((data, index) => (data[1].component ? data[1].component : <input key={data[0]} placeholder={data[1].placeholder} className={`appointmentInput ${isOdd && index === userDetails.length - 1 ? "fullWidth" : ""}`} label={data[1].placeholder} type={data[1].type} value={data[1].value} name={data[1].name} size="small" />))}</Box>
                <Box className="form-group col-12">
                  <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-rax7gaw23nj6" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfPixwaAAAAABFFuOob52Mh463Oy3rZEtYUr4oJ&amp;co=aHR0cHM6Ly93d3cuY3J5b3ZhdWx0LmluOjQ0Mw..&amp;hl=en&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;size=normal&amp;cb=oh1vpc5nfiib" data-gtm-yt-inspected-6="true"></iframe>
                </Box>
                <Button variant="contained" className="rn-btn edu-btn btn-medium submit-btn">
                  Make An Appointment
                </Button>
              </Box>
            </Box>

            {isMobile ? null : (
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
                        <Link sx={{ color: "black", fontSize: "2rem" }} to="tel:18001 024 026">
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
                        {" "}
                        Arden Fair, 4th Floor, Pai Layout, Old Madras Road, Bangalore – 560016
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      {isMobile ? (
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
                <Link to="tel:18001 024 026">18001 024 026</Link>
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
              <Typography variant="body1"> Arden Fair, 4th Floor, Pai Layout, Old Madras Road, Bangalore – 560016</Typography>
            </Box>
          </Box>
        </Box>
      ) : null}
      <Box className="contr_rep_out">
        <OurStory />
      </Box>

      {/* <ReachUs /> */}
    </>
  );
};

export default Appointment;
