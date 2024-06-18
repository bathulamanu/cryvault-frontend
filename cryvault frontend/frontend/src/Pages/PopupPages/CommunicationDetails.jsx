import {
  Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Stack, Typography, Card,
  CardContent,
  Checkbox,
  Button,
  FormControlLabel,
  Grid

} from "@mui/material";
import React, { useEffect, useState,forwardRef, useImperativeHandle } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, getState, getCity } from "../../redux/reducers/PaymentReducer";
import { MultipleSelect } from '../CheckoutDetails'

const headingStyle = {
  fontSize: "18px",
  fontWeight: 500,
  marginTop: "10px",
  marginLeft: "15px",
};

const inputLableStyle = {
  color: "black",
  fontSize: "14px",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
};

const redStarStyle = {
  color: "red",
  marginLeft: "4px",
};
const CommunicationDetails = forwardRef((props, ref) => {
  const countries = useSelector((state) => state.payment.countries);
  const states = useSelector((state) => state.payment.states);
  const cities = useSelector((state) => state.payment.cities);
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    Address: {
      value: "",
      placeholder: "Current Address",
      errorMessage: "",
      errorStatus: false,
      name: "Address",
      id: "Address",
    },
    City: {
      value: null,
      placeholder: "City",
      errorMessage: "",
      errorStatus: false,
      name: "City",
      id: "City",
      cityID: ""
    },
    State: {
      value: null,
      placeholder: "State",
      errorMessage: "",
      errorStatus: false,
      name: "State",
      id: "State",
      stateID: ""
    },
    Country: {
      value: null,
      placeholder: "Country",
      errorMessage: "",
      errorStatus: false,
      name: "Country",
      id: "Country",
      countryId: 352
    },
    PinCode: {
      value: "",
      placeholder: "PinCode",
      errorMessage: "",
      errorStatus: false,
      name: "PinCode",
      id: "PinCode",
    },
    permanentAddressIsSameAsCorrespondenceAddress: {
      value: null,
      placeholder: "permanentAddressIsSameAsCorrespondenceAddress",
      errorMessage: "",
      errorStatus: false,
      name: "permanentAddressIsSameAsCorrespondenceAddress",
      id: "permanentAddressIsSameAsCorrespondenceAddress",
    },
    PermanentAddress: {
      value: "",
      placeholder: "Permanent Address (If default from current address)",
      errorMessage: "",
      errorStatus: false,
      name: "PermanentAddress",
      id: "PermanentAddress",
    },
    PermanentAddressCity: {
      value: null,
      placeholder: "PermanentAddressCity",
      errorMessage: "",
      errorStatus: false,
      name: "PermanentAddressCity",
      id: "PermanentAddressCity",
    },
    PermanentAddressState: {
      value: null,
      placeholder: "PermanentAddressState",
      errorMessage: "",
      errorStatus: false,
      name: "PermanentAddressState",
      id: "PermanentAddressState",
    },
    PermanentAddressCountry: {
      value: null,
      placeholder: "PermanentAddressCountry",
      errorMessage: "",
      errorStatus: false,
      name: "PermanentAddressCountry",
      id: "PermanentAddressCountry",
    },
    PermanentAddressPinCode: {
      value: "",
      placeholder: "PermanentAddressPinCode",
      errorMessage: "",
      errorStatus: false,
      name: "PermanentAddressPinCode",
      id: "PermanentAddressPinCode",
    }
  })

  useImperativeHandle(ref, () => ({
    getCommunicationDetailsChildData: () => {
      return data;
    }
  }))

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));
  };
  const [deliveryinputType, setDeliveryInputType] = useState("text");

  useEffect(() => {
    const dataToSend = data.Country.countryId;
    if (data.Country.value) dispatch(getState({ payload: dataToSend }));
  }, [data.Country.value]);

  useEffect(() => {
    const dataToSend = data.State.stateID;
    if (data.State.value) dispatch(getCity({ payload: dataToSend }));
  }, [data.State.value]);

  const handleCountryChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      country: {
        ...prevData.Country,
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
        ...prevData.Country,
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
        ...prevData.Country,
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
    <Box sx={{ display: "flex", width: "100%" }} className="conatiner">
      {/* <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase", width: "100%" }}>Communication Details</Typography>
      <br></br> */}
      <Box sx={{ width: "50%", border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>

        <Box sx={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "2rem", gridRowGap: "3rem" }} className="fatherDetails">
          {Object.entries(data).map(([key, fieldData]) =>
            fieldData.name == "Address" || fieldData.name == "PinCode" ? (
              <>
                <Stack sx={{ width: fieldData.name == "Address" ? "208%" : "100%", gap: "0.5rem" }} key={key}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder} <span style={redStarStyle}>*</span></InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={false}
                      type={fieldData.type || "text"}
                      value={fieldData.value}
                      name={fieldData.name}
                      id={`outlined-adornment-${key}`}
                      placeholder={fieldData.placeholder}
                      sx={{
                        border: fieldData.errorStatus ? "1px solid red" : "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                      onChange={handleOnChange}
                    />
                    {fieldData.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{fieldData.errorMessage}</Typography> : null}
                  </FormControl>
                </Stack>
                {fieldData.name == "Address" ? <br /> : null}
              </>
            ) : fieldData.name == "City" ? (
              <>
                <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                  <MultipleSelect type={"city"} title={"City"} userData={data} dataArray={cities} handleChange={handleCityChange} />
                </Stack>
              </>
            ) : fieldData.name == "State" ? (
              <>
                <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                  <MultipleSelect type={"state"} title={"State"} userData={data} dataArray={states} handleChange={handleStateChange} />
                </Stack>
              </>
            ) : fieldData.name == "Country" ? (
              <>
                <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                  <MultipleSelect type={"country"} title={"Country"} userData={data} dataArray={countries} handleChange={handleCountryChange} />
                </Stack>
              </>
            ) : fieldData.name == "permanentAddressIsSameAsCorrespondenceAddress" ? (
              <>
                <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                  <FormControlLabel
                    control={
                      <Checkbox
                      />
                    }
                    label="If permanent address is same as correspondence address"
                  />
                </Stack>
              </>
            ) : (null)
          )}
        </Box>
      </Box>

      <Box sx={{ flexDirection: "column", display: "flex", width: "50%", border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }} >
        <Box sx={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "2rem", gridRowGap: "3rem" }} className="fatherDetails">
          {Object.entries(data).map(([key, fieldData]) =>
            fieldData.name == "PermanentAddress" || fieldData.name == "PermanentAddressPinCode" ? (
              <>
                <Stack sx={{ width: fieldData.name == "PermanentAddress" ? "208%" : "100%", gap: "0.5rem" }} key={key}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder} <span style={redStarStyle}>*</span></InputLabel>
                  <FormControl variant="outlined" size="small">
                    <OutlinedInput
                      readOnly={false}
                      type={fieldData.type || "text"}
                      value={fieldData.value}
                      name={fieldData.name}
                      id={`outlined-adornment-${key}`}
                      placeholder={fieldData.placeholder}
                      sx={{
                        border: fieldData.errorStatus ? "1px solid red" : "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                      onChange={handleOnChange}
                    />
                    {fieldData.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{fieldData.errorMessage}</Typography> : null}
                  </FormControl>
                </Stack>
                {fieldData.name == "PermanentAddress" ? <br /> : null}
              </>
            ) : fieldData.name == "PermanentAddressCity" ? (
              <>
                <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                  <MultipleSelect type={"city"} title={"City"} userData={data} dataArray={cities} handleChange={handleCityChange} />
                </Stack>
              </>
            ) : fieldData.name == "PermanentAddressState" ? (
              <>
                <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                  <MultipleSelect type={"state"} title={"State"} userData={data} dataArray={states} handleChange={handleStateChange} />
                </Stack>
              </>
            ) : fieldData.name == "PermanentAddressCountry" ? (
              <>
                <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                  <MultipleSelect type={"country"} title={"Country"} userData={data} dataArray={countries} handleChange={handleCountryChange} />
                </Stack>
              </>
            ) : (null)
          )}
        </Box>
      </Box>

    </Box>
  );
});

export default CommunicationDetails;


