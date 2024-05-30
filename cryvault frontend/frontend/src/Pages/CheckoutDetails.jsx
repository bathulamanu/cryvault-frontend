import { useTheme } from "@emotion/react";
import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDeviceSize from "../Utilities/useDeviceSize";
import { createOrder, getCity, getCountry, getCustomerPaymentDetails, getGenders, getState } from "../redux/reducers/PaymentReducer";

const CheckoutDetails = () => {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem("userData");
    if (localData.length > 0 && localData != "undefined") {
      const parsedData = JSON.parse(localData);
      setDetail(parsedData);
    }
  }, []);

  const xyz = useMemo(() => {
    const localData = localStorage.getItem("userData");
    if (localData.length > 0 && localData != "undefined") {
      const parsedData = JSON.parse(localData);
      return parsedData;
    }
  }, []);

  const data = detail;
  const id = xyz?.registrationCRNid;
  const number = xyz?.phoneNumber;
  const theme = useTheme();
  const genders = useSelector((state) => state.payment.genders);
  const countries = useSelector((state) => state.payment.countries);
  const states = useSelector((state) => state.payment.states);
  const cities = useSelector((state) => state.payment.cities);

  const planName = localStorage.getItem("planName");
  const amount = localStorage.getItem("planAmount");
  const handling = 100;
  const tax = amount * 0.18;
  // const total = parseInt(amount) + handling + tax;
  const subscription = localStorage.getItem("subscription");

  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    registrationId: {
      value: id,
      placeholder: "Registration Id (CRM Num)",
      type: "text",
      name: "registrationId",
      id: "registrationId",
    },
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
      value: number,
      placeholder: "Phone Number",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "tel",
      name: "phone",
      id: "phone",
    },
    addressLine1: {
      value: "",
      placeholder: "Address line 1",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "addressLine1",
      id: "addressLine1",
    },
    addressLine2: {
      value: "",
      placeholder: "Address line 2",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "addressLine2",
      id: "addressLine2",
    },
    nearLandMark: {
      value: "",
      placeholder: "Near Landmark",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "nearLandMark",
      id: "nearLandMark",
    },
    country: {
      value: detail?.countryCode || 352,
      placeholder: "Country",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "country",
      id: "country",
      countryId: 352,
    },
    state: {
      value: "",
      placeholder: "State",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "state",
      id: "state",
      stateID: "",
    },
    city: {
      value: "",
      placeholder: "City",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "city",
      id: "city",
      cityID: "",
    },
    gender: {
      value: "",
      name: "gender",
      options: genders ? genders.map((gender) => ({ label: gender.value, value: gender.value })) : [],
    },
    pincode: {
      value: "",
      placeholder: "Pincode",
      errorStatus: false,
      errorMessage: "",
      icon: "",
      type: "text",
      name: "pincode",
      id: "pincode",
    },
  });
  const isMobile = useDeviceSize() === "xs";
  const userDetails = Object.entries(userData);
  const otherUserData = userDetails.filter((data) => data[1].name !== "gender" && data[1].name !== "pincode" && data[1].name !== "city" && data[1].name !== "country" && data[1].name !== "state");
  const handleGenderChange = (event) => {
    setUserData((prevData) => ({
      ...prevData,
      gender: {
        ...prevData.gender,
        value: event.target.value,
        errorStatus: false,
        errorMessage: "",
      },
    }));
  };

  const handleCountryChange = (event) => {
    setUserData((prevData) => ({
      ...prevData,
      country: {
        ...prevData.country,
        value: event.target.value,
        countryId: event.target.value,
        errorStatus: false,
        errorMessage: "",
      },
    }));
  };

  const handleStateChange = (event) => {
    setUserData((prevData) => ({
      ...prevData,
      state: {
        ...prevData.country,
        value: event.target.value,
        stateID: event.target.value,

        errorStatus: false,
        errorMessage: "",
      },
    }));
  };
  const handleCityChange = (event) => {
    setUserData((prevData) => ({
      ...prevData,
      city: {
        ...prevData.country,
        value: event.target.value,
        cityID: event.target.value,
        errorStatus: false,
        errorMessage: "",
      },
    }));
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [e.target.name]: { ...userData[e.target.name], value: value, errorStatus: false, errorMessage: "" } });
  };
  useEffect(() => {
    const dataToSend = userData.country.countryId;
    if (userData.country.value) dispatch(getState({ payload: dataToSend }));
  }, [userData.country.value]);

  useEffect(() => {
    const dataToSend = userData.state.stateID;
    if (userData.state.value) dispatch(getCity({ payload: dataToSend }));
  }, [userData.state.value]);

  const proceed = () => {
    const dataToSend = {
      countryCode: "91",
      phoneNumber: userData.phone.value,
      firstName: userData.firstName.value,
      lastName: userData.lastName.value,
      email: userData.email.value,
      addressLine1: userData.addressLine1.value,
      addressLine2: userData.addressLine2.value,
      nearLandMark: userData.nearLandMark.value,
      city: userData.city.value,
      state: userData.state.value,
      pincode: userData.pincode.value,
      country: userData.country.value,
      gender: userData.gender.value,
    };
    if (!userData.phone.value) {
      setUserData((prevData) => ({
        ...prevData,
        phone: {
          ...prevData.phone,
          errorStatus: true,
          errorMessage: "Enter valid phone number",
        },
      }));
      return;
    }
    if (!userData.firstName.value) {
      setUserData((prevData) => ({
        ...prevData,
        firstName: {
          ...prevData.firstName,
          errorStatus: true,
          errorMessage: "Enter valid first name",
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
          errorMessage: "Enter valid last name",
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
          errorMessage: "Enter valid email",
        },
      }));
      return;
    }
    if (!userData.addressLine1.value) {
      setUserData((prevData) => ({
        ...prevData,
        addressLine1: {
          ...prevData.addressLine1,
          errorStatus: true,
          errorMessage: "Enter valid address line 1",
        },
      }));
      return;
    }
    if (!userData.addressLine2.value) {
      setUserData((prevData) => ({
        ...prevData,
        addressLine2: {
          ...prevData.addressLine2,
          errorStatus: true,
          errorMessage: "Enter valid address line 2",
        },
      }));
      return;
    }
    if (!userData.nearLandMark.value) {
      setUserData((prevData) => ({
        ...prevData,
        nearLandMark: {
          ...prevData.nearLandMark,
          errorStatus: true,
          errorMessage: "Enter valid near landMark",
        },
      }));
      return;
    }

    if (!userData.country.value) {
      setUserData((prevData) => ({
        ...prevData,
        country: {
          ...prevData.city,
          errorStatus: true,
          errorMessage: "Enter valid country",
        },
      }));
      return;
    }
    if (!userData.state.value) {
      setUserData((prevData) => ({
        ...prevData,
        state: {
          ...prevData.state,
          errorStatus: true,
          errorMessage: "Enter valid state",
        },
      }));
      return;
    }
    if (!userData.city.value) {
      setUserData((prevData) => ({
        ...prevData,
        city: {
          ...prevData.city,
          errorStatus: true,
          errorMessage: "Enter valid city",
        },
      }));
      return;
    }
    if (!userData.pincode.value) {
      setUserData((prevData) => ({
        ...prevData,
        pincode: {
          ...prevData.pincode,
          errorStatus: true,
          errorMessage: "Enter valid pincode",
        },
      }));
      return;
    }
    dispatch(getCustomerPaymentDetails({ payload: dataToSend, callback: order }));
  };

  const order = () => {
    const dataToSend = {
      amount: Number(localStorage.getItem("planAmount")),
      currency: "INR",
    };
    dispatch(createOrder({ payload: dataToSend }));
  };

  useEffect(() => {
    dispatch(getGenders());
    dispatch(getCountry());
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Box style={{ marginTop: isMobile ? "3rem" : "10rem", padding: isMobile ? "0rem 2rem" : "3rem 5rem" }}>
      <Typography variant="h2" sx={{ fontWeight: "600" }}>
        {" "}
        Billing Details
      </Typography>
      <Box style={{ display: "flex", gap: "2rem", marginTop: "5rem", flexDirection: isMobile ? "column" : "row" }}>
        <Box style={{ display: "grid", gridTemplateColumns: isMobile ? "auto" : "auto auto", columnGap: "20px", rowGap: "20px", width: isMobile ? "100%" : "60%" }}>
          {otherUserData.map((data, index) => (
            <Stack key={data[0]}>
              <InputLabel sx={{ fontSize: "2rem" }} htmlFor={data[1].name}>
                {data[1].placeholder}
              </InputLabel>
              <FormControl variant="outlined" size="small">
                <OutlinedInput readOnly={data[1].name == "phone" || data[1].name == "registrationId" ? true : false} type={data[1].type} value={data[1].value} name={data[1].name} id="outlined-adornment-password" placeholder={data[1].placeholder} sx={{ border: data[1].errorStatus ? "1px solid red" : "", height: "57px" }} onChange={handleOnChange} />
                {data[1].errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}> {data[1].errorMessage} </Typography> : null}
              </FormControl>
            </Stack>
          ))}
          <FormControl fullWidth>
            <InputLabel sx={{ fontSize: "2rem" }} id="demo-simple-select-autowidth-label">
              Countries
            </InputLabel>
            <Select sx={{ fontSize: "2rem", border: userData.country?.errorStatus ? "1px solid red" : "" }} labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={userData.country?.value} onChange={handleCountryChange} autoWidth label="Countries">
              {countries?.map((country) => (
                <MenuItem sx={{ fontSize: "2rem" }} name={country.name} id={country._id} key={country.name} value={country.countryID}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
            {userData.country?.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}> {userData.country?.errorMessage} </Typography> : null}
          </FormControl>

          <FormControl sx={{}} fullWidth>
            <InputLabel sx={{ fontSize: "2rem" }} id="demo-simple-select-autowidth-label">
              States
            </InputLabel>
            <Select sx={{ fontSize: "2rem", border: userData.state?.errorStatus ? "1px solid red" : "" }} labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={userData.state?.value} onChange={handleStateChange} autoWidth label="State">
              {states?.map((state) => (
                <MenuItem sx={{ fontSize: "2rem" }} name={state.name} id={state._id} key={state.name} value={state.stateID}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
            {userData.state?.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}> {userData.state?.errorMessage} </Typography> : null}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel sx={{ fontSize: "2rem" }} id="demo-simple-select-autowidth-label">
              cities
            </InputLabel>
            <Select sx={{ fontSize: "2rem", border: userData.city?.errorStatus ? "1px solid red" : "" }} labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={userData.city?.value} onChange={handleCityChange} autoWidth label="Cities">
              {cities?.map((city) => (
                <MenuItem sx={{ fontSize: "2rem" }} name={city.name} id={city._id} key={city.name} value={city.cityID}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
            {userData.city?.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}> {userData.city?.errorMessage} </Typography> : null}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel sx={{ fontSize: "2rem" }} id="demo-simple-select-autowidth-label">
              Gender
            </InputLabel>
            <Select sx={{ fontSize: "2rem" }} labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={userData.gender?.value} onChange={handleGenderChange} autoWidth label="Gender">
              {genders?.map((gender) => (
                <MenuItem sx={{ fontSize: "2rem" }} key={gender.value} value={gender.masterConfigurationID}>
                  {gender.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Stack key={"pincode"}>
            <InputLabel sx={{ fontSize: "2rem" }} htmlFor={"pincode"}>
              Pincode
            </InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput readOnly={false} type={"text"} value={userData.pincode.value} name={userData.pincode.name} id="outlined-adornment-password" placeholder={userData.pincode.placeholder} sx={{ border: userData.pincode.errorStatus ? "1px solid red" : "", height: "57px" }} onChange={handleOnChange} />
              {userData.pincode.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}> {userData.pincode.errorMessage} </Typography> : null}
            </FormControl>
          </Stack>
        </Box>

        <Box style={{ marginBottom: isMobile ? "2rem" : "0rem", width: isMobile ? "100%" : "40%", padding: "2rem", display: "flex", flexDirection: "column", border: "1px solid #e5e5e5", justifyContent: "start", gap: "5rem" }}>
          {/* partial payments */}
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "600" }}>
              Payment Type
            </Typography>
            <br />

            <RadioGroup sx={{ width: "90%" }}>
              <Box sx={{ display: "flex", flexDirection:isMobile ? 'column' :  "row", gap: "1rem" }}>
                <FormControlLabel
                  control={
                    <Radio
                      sx={{
                        height: "4rem",
                        width: "4rem",
                        "& .MuiSvgIcon-root": {
                          fontSize: "3rem",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="h4" sx={{ whiteSpace: "nowrap" }}>
                      Partial Payment
                    </Typography>
                  } // Use Typography for label
                />
                <FormControlLabel
                  control={
                    <Radio
                      sx={{
                        height: "4rem",
                        width: "4rem",
                        "& .MuiSvgIcon-root": {
                          fontSize: "3rem",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="h4" sx={{ whiteSpace: "nowrap" }}>
                      Complete Payment
                    </Typography>
                  } // Use Typography for label
                />
              </Box>
            </RadioGroup>
          </Box>

          <Box sx={{ flexDirection: "column", display: "flex", gap: "4rem" }}>
            <Typography variant="h4" sx={{ fontWeight: "600" }}>
              Order Details
            </Typography>
            <Box sx={{ border: "none !important" }} class="input-group mb-4 border rounded-pill p-2">
              <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0" height={"45px"} />
              <Box class="input-group-append border-0">
                <Button className="edu-btn" borderRadius={"35px !important"}>
                  Apply Coupon
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4" sx={{ fontWeight: "600" }}>
                Poduct
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "600" }}>
                Total
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4" sx={{ fontWeight: "600" }}>
                {planName}
              </Typography>
              <Typography variant="h4">{amount}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4" sx={{ fontWeight: "600" }}>
                Subtotal
              </Typography>
              <Typography variant="h4">{amount}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4" sx={{ fontWeight: "600" }}>
                Total
              </Typography>
              <Typography variant="h4">{amount}</Typography>
            </Box>
          </Box>

          <Button className="edu-btn" sx={{ width: "100%" }} onClick={proceed}>
            Place Order
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutDetails;
