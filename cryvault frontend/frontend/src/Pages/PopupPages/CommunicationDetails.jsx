import {
  Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Stack, Typography, Card,
  CardContent,
  Checkbox,
  Button,
  FormControlLabel,
  Grid

} from "@mui/material";
import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, getState, getCity,getCityForPermanentAddress } from "../../redux/reducers/PaymentReducer";
import { MultipleSelect, SingleSelect } from '../CheckoutDetails'
import {
  getByIdList,
  getCityIdList,
  getNamesIdList,
  getStateIdList,
} from "../../globalFunctions";

import { addOrupdateAnnexureInfo } from "../../redux/reducers/UserReducer"
import { GetTypeOfProof, getAnnexureInfo } from '../../redux/reducers/DashboardReducer'
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
  var { handleNext, handlePrev, currentPage, setCurrentPage, TOTAL_PAGES } = props
  const [data, setData] = useState({
    Address: {
      value: "",
      placeholder: "Current Address",
      errorMessage: "",
      errorStatus: false,
      name: "Address",
      id: "Address",
    },
    Country: {
      value: 352,
      placeholder: "Country",
      errorMessage: "",
      errorStatus: false,
      name: "Country",
      id: "Country"
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
    City: {
      value: null,
      placeholder: "City",
      errorMessage: "",
      errorStatus: false,
      name: "City",
      id: "City",
      cityID: ""
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
      value: false,
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
    PermanentAddressCountry: {
      value: 352,
      placeholder: "PermanentAddressCountry",
      errorMessage: "",
      errorStatus: false,
      name: "PermanentAddressCountry",
      id: "PermanentAddressCountry",
    },
    PermanentAddressState: {
      value: null,
      placeholder: "PermanentAddressState",
      errorMessage: "",
      errorStatus: false,
      name: "PermanentAddressState",
      id: "PermanentAddressState",
    },
    PermanentAddressCity: {
      value: null,
      placeholder: "PermanentAddressCity",
      errorMessage: "",
      errorStatus: false,
      name: "PermanentAddressCity",
      id: "PermanentAddressCity",
    },
    PermanentAddressPinCode: {
      value: "",
      placeholder: "PinCode",
      errorMessage: "",
      errorStatus: false,
      name: "PermanentAddressPinCode",
      id: "PermanentAddressPinCode",
    }
  })
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.payment.countries);
  const states = useSelector((state) => state.payment.states);
  const cities = useSelector((state) => state.payment.cities);
  const cities2 = useSelector((state) => state.payment.citiesForPermanentAddress);

  const upDatedCountryList = getNamesIdList(countries);
  const stateList = getStateIdList(states);
  let cityList;
  let cityList2;
  if (data.State.value && cities.length != 0) {
    cityList = getCityIdList(cities);
  }
  if (data.PermanentAddressState.value && cities2.length != 0) {
    cityList2 = getCityIdList(cities2);
  }


  const [customerAnnexureInformationId, setCustomerAnnexureInformationId] = useState(null)
  const SubscribedInnerPageData = useSelector((state) => state.dashboard.SubscribedUserData);
  useEffect(() => {
    async function getCommunicationData() {
      setCustomerAnnexureInformationId(SubscribedInnerPageData?.customerAnnexureInformationId)
      if (SubscribedInnerPageData && SubscribedInnerPageData.CustomerCommunicationDetails) {

        for (let item in SubscribedInnerPageData.CustomerCommunicationDetails) {
          for (let item1 in data) {
            if (item1 == item) {
              data[item1].value = SubscribedInnerPageData.CustomerCommunicationDetails[item]
            }
          }
        }
      }
    }
    getCommunicationData()
  }, [SubscribedInnerPageData]);

  useEffect(() => {
    getAnnexureInfo()
  }, [handlePrev]);

  useImperativeHandle(ref, () => ({
    getCommunicationDetailsChildData: () => {
      // if (!data.Address.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     Address: {
      //       ...prevData.Address,
      //       errorStatus: true,
      //       errorMessage: "Address is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.Country.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     Country: {
      //       ...prevData.Country,
      //       errorStatus: true,
      //       errorMessage: "Country is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.State.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     State: {
      //       ...prevData.State,
      //       errorStatus: true,
      //       errorMessage: "State is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.City.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     City: {
      //       ...prevData.City,
      //       errorStatus: true,
      //       errorMessage: "City is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.PinCode.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     PinCode: {
      //       ...prevData.PinCode,
      //       errorStatus: true,
      //       errorMessage: "PinCode is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.PermanentAddress.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     PermanentAddress: {
      //       ...prevData.PermanentAddress,
      //       errorStatus: true,
      //       errorMessage: "Permanent Address is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.PermanentAddressCountry.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     PermanentAddressCountry: {
      //       ...prevData.PermanentAddressCountry,
      //       errorStatus: true,
      //       errorMessage: "Country is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.PermanentAddressState.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     PermanentAddressState: {
      //       ...prevData.PermanentAddressState,
      //       errorStatus: true,
      //       errorMessage: "State is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.PermanentAddressCity.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     PermanentAddressCity: {
      //       ...prevData.PermanentAddressCity,
      //       errorStatus: true,
      //       errorMessage: "City is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.PermanentAddressPinCode.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     PermanentAddressPinCode: {
      //       ...prevData.PermanentAddressPinCode,
      //       errorStatus: true,
      //       errorMessage: "PinCode is required.",
      //     },
      //   }));
      //   return;
      // }

      const dataToSend = {
        Address: data.Address.value,
        City: data.City.value,
        State: data.State.value,
        Country: data.Country.value,
        PinCode: data.PinCode.value,
        permanentAddressIsSameAsCorrespondenceAddress: data.permanentAddressIsSameAsCorrespondenceAddress.value,
        PermanentAddress: data.PermanentAddress.value,
        PermanentAddressCity: data.PermanentAddressCity.value,
        PermanentAddressState: data.PermanentAddressState.value,
        PermanentAddressCountry: data.PermanentAddressCountry.value,
        PermanentAddressPinCode: data.PermanentAddressPinCode.value
      };

      if (currentPage < TOTAL_PAGES) {
        setCurrentPage(currentPage + 1);
      }
      dispatch(addOrupdateAnnexureInfo({ CustomerCommunicationDetails: dataToSend, customerAnnexureInformationId: customerAnnexureInformationId }))

    }
  }))

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const exp = /^\d*$/
    if ((name == "PinCode" || name == "PermanentAddressPinCode") && !exp.test(value)) {
      return
    }
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));
  };

  useEffect(() => {
    const dataToSend = data.Country.value;
    if (data.Country.value) dispatch(getState({ payload: dataToSend }));
  }, [data.Country.value]);

  // useEffect(() => {
  //   const dataToSend = data.PermanentAddressCountry.value;
  //   if (data.PermanentAddressCountry.value) dispatch(getState({ payload: dataToSend }));
  // }, [data.PermanentAddressCountry.value]);

  useEffect(() => {
    const dataToSend = data.State.value
    if (data.State.value) dispatch(getCity({ payload: dataToSend }));
  }, [data.State.value]);

  useEffect(() => {
    const dataToSend = data.PermanentAddressState.value
    if (data.PermanentAddressState.value) dispatch(getCityForPermanentAddress({ payload: dataToSend }));
  }, [data.PermanentAddressState.value]);


  const handleChange = (event, name) => {
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: event, errorStatus: false, errorMessage: "" },
    }));
  }

  const handleCheckChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      ['permanentAddressIsSameAsCorrespondenceAddress']: { ...prevData['permanentAddressIsSameAsCorrespondenceAddress'], value: event.target.checked, errorStatus: false, errorMessage: "" },
    }));
  }

  useEffect(() => {
    dispatch(getCountry());
    dispatch(getAnnexureInfo());
  }, []);

  useEffect(() => {

    // handleNext();
  }, [handleNext]);

  return (
    <Box sx={{ display: "flex", width: "100%" }} className="conatiner">
      {/* <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase", width: "100%" }}>Communication Details</Typography>
      <br></br>  */}
      <Box sx={{ width: "50%", border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>

        <Box sx={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "2rem", gridRowGap: "3rem" }} className="fatherDetails">
          {Object.entries(data).map(([key, fieldData]) =>
            fieldData.name == "Address" || fieldData.name == "PinCode" ? (
              <>
                <Stack sx={{ width: fieldData.name == "Address" ? "198%" : "100%", gap: "0.5rem" }} key={key}>
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
                      inputProps={fieldData.name == "PinCode" ? { maxLength: 6 } : { maxLength: 200 }}
                    />
                    {fieldData.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{fieldData.errorMessage}</Typography> : null}
                  </FormControl>
                </Stack>
                {fieldData.name == "Address" ? <br /> : null}
              </>
            ) :
              fieldData.name == "Country" ? (
                <>
                  <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>

                    <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{data.Country.name} <span style={redStarStyle}>*</span></InputLabel>
                    <FormControl variant="outlined" size="small">
                      <SingleSelect
                        Placeholder={"Select"}
                        width={"100%"}
                        disabled={true}
                        data={upDatedCountryList}
                        value={data.Country.value}
                        onChange={(e) => {
                          handleChange(e, "Country");
                        }}
                      />

                      {data.Country.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.Country.errorMessage}</Typography> : null}
                    </FormControl>
                  </Stack>
                </>
              ) : fieldData.name == "State" ? (
                <>
                  <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                    <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{data.State.name} <span style={redStarStyle}>*</span></InputLabel>
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={stateList}
                      value={data.State.value}
                      onChange={(e) => {
                        handleChange(e, "State")
                      }}
                    />

                    {data.State.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.State.errorMessage}</Typography> : null}
                  </Stack>
                </>
              ) : fieldData.name == "City" ? (
                <>
                  <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                    <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{data.City.name} <span style={redStarStyle}>*</span></InputLabel>
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={cityList}
                      value={data.City.value}
                      onChange={(e) => {
                        handleChange(e, "City");
                      }}
                    />
                    {data.City.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.City.errorMessage}</Typography> : null}
                  </Stack>
                </>
              ) : fieldData.name == "permanentAddressIsSameAsCorrespondenceAddress" ? (
                <>
                  <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                    {data.permanentAddressIsSameAsCorrespondenceAddress.value}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={data.permanentAddressIsSameAsCorrespondenceAddress.value}
                          onChange={handleCheckChange}
                          name={data.permanentAddressIsSameAsCorrespondenceAddress.name}
                          value={data.permanentAddressIsSameAsCorrespondenceAddress.value}
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

      <Box sx={{ width: "50%", flexDirection: "column", display: "flex", border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }} >
        <Box sx={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "2rem", gridRowGap: "3rem" }} className="fatherDetails">
          {Object.entries(data).map(([key, fieldData]) =>
            fieldData.name == "PermanentAddress" || fieldData.name == "PermanentAddressPinCode" ? (
              <>
                <Stack sx={{ width: fieldData.name == "PermanentAddress" ? "149%" : "100%", gap: "0.5rem" }} key={key}>
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
                      inputProps={fieldData.name == "PermanentAddressPinCode" ? { maxLength: 6 } : { maxLength: 200 }}
                    />
                    {fieldData.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{fieldData.errorMessage}</Typography> : null}
                  </FormControl>
                </Stack>
                {fieldData.name == "PermanentAddress" ? <br /> : null}
              </>
            ) : fieldData.name == "PermanentAddressCountry" ? (
              <>
                <Stack sx={{ width: "90%", gap: "0.5rem" }} key={key}>

                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Country <span style={redStarStyle}>*</span></InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={upDatedCountryList}
                    disabled={true}
                    value={data.PermanentAddressCountry.value}
                    onChange={(e) => {
                      handleChange(e, "PermanentAddressCountry");
                    }}
                  />

                  {data.PermanentAddressCountry.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.PermanentAddressCountry.errorMessage}</Typography> : null}
                </Stack>
              </>
            ) : fieldData.name == "PermanentAddressState" ? (
              <>
                <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>

                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>State <span style={redStarStyle}>*</span></InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={stateList}
                    value={data.PermanentAddressState.value}
                    onChange={(e) => {
                      handleChange(e, "PermanentAddressState");
                    }}
                  />

                  {data.PermanentAddressState.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.PermanentAddressState.errorMessage}</Typography> : null}
                </Stack>
              </>
            ) : fieldData.name == "PermanentAddressCity" ? (
              <>
                <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>

                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>City <span style={redStarStyle}>*</span></InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={cityList2}
                    value={data.PermanentAddressCity.value}
                    onChange={(e) => {
                      handleChange(e, "PermanentAddressCity");
                    }}
                  />

                  {data.PermanentAddressCity.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{data.PermanentAddressCity.errorMessage}</Typography> : null}
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


