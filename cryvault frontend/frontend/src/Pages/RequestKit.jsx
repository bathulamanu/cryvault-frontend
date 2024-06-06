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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));
  };
  const handleSubmit = () => {


    if (!userData.firstName.value) {
      setUserData((prevData) => ({
        ...prevData,
        firstName: {
          ...prevData.firstName,
          errorStatus: true,
          errorMessage: "First Name is required",
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
    if (!userData.phone.value) {
      setUserData((prevData) => ({
        ...prevData,
        phone: {
          ...prevData.phone,
          errorStatus: true,
          errorMessage: "Phone NumberEnter is required",
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
          errorMessage: "Location is required",
        },
      }));
      return;
    }
    
    const dataToSend = {
      firstName: userData.firstName.value,
      lastName: userData.lastName.value,
      email: userData.email.value,
      countryCode: "+91",
      phoneNumber: userData.phone.value,
      location: userData.location.value,
      address: userData.address.value,
    };

    dispatch(addInformationKitRequest({ payload: dataToSend }));
    setUserData(initialState);
  };

  const handlePhoneInput = (value, country) => {
    const country_code = "91";
    const phoneNumber = value.slice(country_code.length);
    setUserData((prevData) => ({
      ...prevData,
      phone: { ...prevData.phone, value: phoneNumber, errorStatus: false, errorMessage: "" },
    }));
  };

  useEffect(() => {
    dispatch(getBranchContact());
  }, []);
  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 40px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "65% !important" }}>
                <Typography sx={{ fontSize: isMobile ? "24px !important" : "45px !important" }} variant="h1" className="title">
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
                  {/* {userDetails.map((data, index) => (data[1].component ? data[1].component : 
                  <input key={data[0]} placeholder={data[1].placeholder} className={`appointm
                  entInput ${isOdd && index === userDetails.length - 1 ? "fullWidth" : ""}`} l
                  abel={data[1].placeholder} type={data[1].type} value={data[1].value} name={data[1].name} size="small" />))} */}
                  <Box style={{ width: "100%" }}>
                    <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: "100%" }}>
                      {userDetails.map((data, index) => (
                        <Box key={data[1].name} sx={{ display: "flex", flexDirection: "column" }}>
                          {data[1].name == "phone" ? <PhoneInput value={"91" + userData.phone.value} 
                          onChange={handlePhoneInput} autoFormat inputProps={{ required: true }}
                           inputClass={"borderPhoneInput"} specialLabel="" 
                           containerClass={"layoutItem"} country={"in"}
                            defaultErrorMessage="Incorrect WhatsApp Number" /> :
                             <input style={{ border: data[1].errorStatus ? "1px solid red" : "1px solid #e5e5e5" }}
                              onChange={handleChange} key={data[0]} placeholder={data[1].placeholder}
                               className={`carrerInput `} label={data[1].placeholder} 
                               type={data[1].type} value={data[1].value} name={data[1].name} size="small" />}
                          {data[1].errorStatus ? <Typography style={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data[1].errorMessage}</Typography> : null}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
                <Box className="form-group col-12">
                  <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-rax7gaw23nj6" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfPixwaAAAAABFFuOob52Mh463Oy3rZEtYUr4oJ&amp;co=aHR0cHM6Ly93d3cuY3J5b3ZhdWx0LmluOjQ0Mw..&amp;hl=en&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;size=normal&amp;cb=oh1vpc5nfiib" data-gtm-yt-inspected-6="true"></iframe>
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
            <Link to={`tel:${contactInfo?.[0]?.ContactInfo?.[1]?.value}`}>{contactInfo?.[0]?.ContactInfo?.[1]?.value}</Link>
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
            <Link to="tel:18001 024 026"> {contactInfo?.[0]?.EmailInfo?.[0]?.value}</Link>
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
          <Typography variant="body1">{contactInfo?.[0]?.Address}</Typography>
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
                {contactInfo?.[0]?.ContactInfo?.[1]?.value}
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
                {contactInfo?.[0]?.EmailInfo?.[0]?.value}
                {console.log(contactInfo?.EmailInfo?.[0]?.value)}
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
              {contactInfo?.[0]?.Address}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default RequestKit;
