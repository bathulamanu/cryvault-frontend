import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../redux/reducers/PaymentReducer";

const CommunicationDetails = () => {
  const countries = useSelector((state) => state.payment.countries);
  const states = useSelector((state) => state.payment.states);
  const cities = useSelector((state) => state.payment.cities);
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    currentAddress: {
      value: "",
      placeholder: "Current Address *",
      errorMessage: "",
      errorStatus: false,
      name: "currentAddress",
      id: "currentAddress",
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
    pincode: {
      value: "",
      placeholder: "Pincode*",
      errorMessage: "",
      errorStatus: false,
      name: "pincode",
      id: "pincode",
    },
  });
  const handleOnChange = () => {};
  const [deliveryinputType, setDeliveryInputType] = useState("text");
  const handleCountryChange = (event) => {
    setData((prevData) => ({
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
    setData((prevData) => ({
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
    setData((prevData) => ({
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
  useEffect(() => {
    dispatch(getCountry());
  }, []);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }} className="conatiner">
      <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Communication Details</Typography>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "60%", border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
          <Box sx={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "2rem", gridRowGap: "3rem" }} className="fatherDetails">
            <Stack sx={{ width: "100%", gap: "0.5rem" }}>
              <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{data.currentAddress.placeholder}</InputLabel>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  readOnly={false}
                  type={data.currentAddress.type || "text"}
                  value={data.currentAddress.value}
                  name={data.currentAddress.name}
                  id={`outlined-adornment`}
                  placeholder={data.currentAddress.placeholder}
                  sx={{
                    border: data.currentAddress.errorStatus ? "1px solid red" : "",
                    height: "40px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                  onChange={handleOnChange}
                />
                {data.currentAddress.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.currentAddress.errorMessage}</Typography> : null}
              </FormControl>
            </Stack>
            <br/>
            <FormControl fullWidth>
              <InputLabel sx={{ fontSize: "2rem" }} id="demo-simple-select-autowidth-label">
                Countries
              </InputLabel>
              <Select sx={{ fontSize: "2rem", border: data.country?.errorStatus ? "1px solid red" : "" }} labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={data.country?.value} onChange={handleCountryChange} autoWidth label="Countries">
                {countries?.map((country) => (
                  <MenuItem sx={{ fontSize: "2rem" }} name={country.name} id={country._id} key={country.name} value={country.countryID}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
              {data.country?.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}> {data.country?.errorMessage} </Typography> : null}
            </FormControl>

            <FormControl sx={{}} fullWidth>
              <InputLabel sx={{ fontSize: "2rem" }} id="demo-simple-select-autowidth-label">
                States
              </InputLabel>
              <Select sx={{ fontSize: "2rem", border: data.state?.errorStatus ? "1px solid red" : "" }} labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={data.state?.value} onChange={handleStateChange} autoWidth label="State">
                {states?.map((state) => (
                  <MenuItem sx={{ fontSize: "2rem" }} name={state.name} id={state._id} key={state.name} value={state.stateID}>
                    {state.name}
                  </MenuItem>
                ))}
              </Select>
              {data.state?.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}> {data.state?.errorMessage} </Typography> : null}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel sx={{ fontSize: "2rem" }} id="demo-simple-select-autowidth-label">
                cities
              </InputLabel>
              <Select sx={{ fontSize: "2rem", border: data.city?.errorStatus ? "1px solid red" : "" }} labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={data.city?.value} onChange={handleCityChange} autoWidth label="Cities">
                {cities?.map((city) => (
                  <MenuItem sx={{ fontSize: "2rem" }} name={city.name} id={city._id} key={city.name} value={city.cityID}>
                    {city.name}
                  </MenuItem>
                ))}
              </Select>
              {data.city?.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}> {data.city?.errorMessage} </Typography> : null}
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ width: "60%", border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
          <Box sx={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "2rem", gridRowGap: "3rem" }} className="fatherDetails">
            <Stack sx={{ width: "100%", gap: "0.5rem" }}>
              <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{data.currentAddress.placeholder}</InputLabel>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  readOnly={false}
                  type={data.currentAddress.type || "text"}
                  value={data.currentAddress.value}
                  name={data.currentAddress.name}
                  id={`outlined-adornment`}
                  placeholder={data.currentAddress.placeholder}
                  sx={{
                    border: data.currentAddress.errorStatus ? "1px solid red" : "",
                    height: "40px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                  onChange={handleOnChange}
                />
                {data.currentAddress.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.currentAddress.errorMessage}</Typography> : null}
              </FormControl>
            </Stack>
            <FormControl fullWidth>
              <InputLabel sx={{ fontSize: "2rem" }} id="demo-simple-select-autowidth-label">
                Countries
              </InputLabel>
              <Select sx={{ fontSize: "2rem", border: data.country?.errorStatus ? "1px solid red" : "" }} labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={data.country?.value} onChange={handleCountryChange} autoWidth label="Countries">
                {countries?.map((country) => (
                  <MenuItem sx={{ fontSize: "2rem" }} name={country.name} id={country._id} key={country.name} value={country.countryID}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
              {data.country?.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}> {data.country?.errorMessage} </Typography> : null}
            </FormControl>

            <FormControl sx={{}} fullWidth>
              <InputLabel sx={{ fontSize: "2rem" }} id="demo-simple-select-autowidth-label">
                States
              </InputLabel>
              <Select sx={{ fontSize: "2rem", border: data.state?.errorStatus ? "1px solid red" : "" }} labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={data.state?.value} onChange={handleStateChange} autoWidth label="State">
                {states?.map((state) => (
                  <MenuItem sx={{ fontSize: "2rem" }} name={state.name} id={state._id} key={state.name} value={state.stateID}>
                    {state.name}
                  </MenuItem>
                ))}
              </Select>
              {data.state?.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}> {data.state?.errorMessage} </Typography> : null}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel sx={{ fontSize: "2rem" }} id="demo-simple-select-autowidth-label">
                cities
              </InputLabel>
              <Select sx={{ fontSize: "2rem", border: data.city?.errorStatus ? "1px solid red" : "" }} labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={data.city?.value} onChange={handleCityChange} autoWidth label="Cities">
                {cities?.map((city) => (
                  <MenuItem sx={{ fontSize: "2rem" }} name={city.name} id={city._id} key={city.name} value={city.cityID}>
                    {city.name}
                  </MenuItem>
                ))}
              </Select>
              {data.city?.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}> {data.city?.errorMessage} </Typography> : null}
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CommunicationDetails;
