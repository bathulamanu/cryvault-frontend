import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
// import { styled } from "@mui/material/styles";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  MenuItem,
  Select
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { MultipleSelect, SingleSelect } from '../CheckoutDetails'
import {
  getCityIdList,
  getNamesIdList,
  getStateIdList,
  getTypeOfPregnancyList
} from "../../globalFunctions";

import { getCountry, getState, getCity, getCityForPermanentAddress } from "../../redux/reducers/PaymentReducer";
import { GetTypeOfPregnancy } from "../../redux/reducers/DashboardReducer";
import { addOrupdateAnnexureInfo } from "../../redux/reducers/UserReducer"
import { GetTypeOfProof, getAnnexureInfo } from '../../redux/reducers/DashboardReducer'
import { formatDate, formatDateYYYYMMDD } from "../../globalFunctions";
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


const HospitalDetails = forwardRef((props, ref) => {
  var { handleNext, handlePrev, currentPage, setCurrentPage, TOTAL_PAGES } = props
  const dispatch = useDispatch();

  const [data, setData] = useState({
    ExpectedDateOfDelivery: {
      value: "",
      placeholder: "Expected Date Of Delivery",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectedDateOfDelivery",
      id: "ExpectedDateOfDelivery"
    },
    TypeOfpregnancy: {
      value: "",
      placeholder: "Type Of pregnancy",
      errorMessage: "",
      errorStatus: false,
      name: "TypeOfpregnancy",
      id: "TypeOfpregnancy"
    },
    HowManyChildrensDoYouHaveAlready: {
      value: "",
      placeholder: "How Many Childrens Do You Have Already",
      errorMessage: "",
      errorStatus: false,
      name: "HowManyChildrensDoYouHaveAlready",
      id: "HowManyChildrensDoYouHaveAlready"
    },
    ConsultingGynocologist: {
      value: "",
      placeholder: "Consulting Gynocologist",
      errorMessage: "",
      errorStatus: false,
      name: "ConsultingGynocologist",
      id: "ConsultingGynocologist"
    },
    ConsultingHospital: {
      value: "",
      placeholder: "Consulting Hospital",
      errorMessage: "",
      errorStatus: false,
      name: "ConsultingHospital",
      id: "ConsultingHospital"
    },

    ConsultingHospitalCountry: {
      value: 352,
      placeholder: "Country",
      errorMessage: "",
      errorStatus: false,
      name: "ConsultingHospitalCountry",
      id: "ConsultingHospitalCountry"
    },

    ConsultingHospitalState: {
      value: "",
      placeholder: "State",
      errorMessage: "",
      errorStatus: false,
      name: "ConsultingHospitalState",
      id: "ConsultingHospitalState"
    },
    ConsultingHosptalCity: {
      value: "",
      placeholder: "City",
      errorMessage: "",
      errorStatus: false,
      name: "ConsultingHosptalCity",
      id: "ConsultingHosptalCity"
    },
    ConsultingHospitalPinCode: {
      value: "",
      placeholder: "PinCode",
      errorMessage: "",
      errorStatus: false,
      name: "ConsultingHospitalPinCode",
      id: "ConsultingHospitalPinCode"
    },
    ConsultingHospitalAddress: {
      value: "",
      placeholder: "Hospital Address",
      errorMessage: "",
      errorStatus: false,
      name: "ConsultingHospitalAddress",
      id: "ConsultingHospitalAddress"
    },

    IsDeliveringHospitalSameAsConsultingHospotal: {
      value: null,
      placeholder: "Is Delivering Hospital Same As Consulting Hospotal",
      errorMessage: "",
      errorStatus: false,
      name: "IsDeliveringHospitalSameAsConsultingHospotal",
      id: "IsDeliveringHospitalSameAsConsultingHospotal"
    },



    DeliveringHospitalCountry: {
      value: 352,
      placeholder: "Country",
      errorMessage: "",
      errorStatus: false,
      name: "DeliveringHospitalCountry",
      id: "DeliveringHospitalCountry"
    },

    DeliveringHospitalState: {
      value: "",
      placeholder: "State",
      errorMessage: "",
      errorStatus: false,
      name: "DeliveringHospitalState",
      id: "DeliveringHospitalState"
    },
    DeliveringHosptalCity: {
      value: "",
      placeholder: "City",
      errorMessage: "",
      errorStatus: false,
      name: "DeliveringHosptalCity",
      id: "DeliveringHosptalCity"
    },
    DeliveringHospitalPinCode: {
      value: "",
      placeholder: "PinCode",
      errorMessage: "",
      errorStatus: false,
      name: "DeliveringHospitalPinCode",
      id: "DeliveringHospitalPinCode"
    },
    DeliveringHospitalAddress: {
      value: "",
      placeholder: "Delivering Address (If different from consulting gynaecologist)",
      errorMessage: "",
      errorStatus: false,
      name: "DeliveringHospitalAddress",
      id: "DeliveringHospitalAddress"
    },
  });

  const NoofChildres = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "6" }
  ]
  const countries = useSelector((state) => state.payment.countries);
  const states = useSelector((state) => state.payment.states);
  const cities = useSelector((state) => state.payment.cities);
  const cities2 = useSelector((state) => state.payment.citiesForPermanentAddress);

  const typeOfPreganacyData = useSelector((state) => state.dashboard.typeOfPreganacyData);

  const upDatedCountryList = getNamesIdList(countries);
  const stateList = getStateIdList(states);
  const typeOfPreganacyDataList = getTypeOfPregnancyList(typeOfPreganacyData);

  let cityList;
  let cityList2;
  if (data.ConsultingHospitalState.value && cities.length != 0) {
    cityList = getCityIdList(cities);
  }
  if (data.DeliveringHospitalState.value && cities2.length != 0) {
    cityList2 = getCityIdList(cities2);
  }
  const [customerAnnexureInformationId, setCustomerAnnexureInformationId] = useState(null)
  const SubscribedInnerPageData = useSelector((state) => state.dashboard.SubscribedUserData);
  useEffect(() => {
    async function getCommunicationData() {
      setCustomerAnnexureInformationId(SubscribedInnerPageData?.customerAnnexureInformationId)
      if (SubscribedInnerPageData && SubscribedInnerPageData.CustomerHospitalBirthingdetails) {

        for (let item in SubscribedInnerPageData.CustomerHospitalBirthingdetails) {
          for (let item1 in data) {
            if (item1 == item) {
              data[item1].value = item == "ExpectedDateOfDelivery" ? formatDate(SubscribedInnerPageData.CustomerHospitalBirthingdetails[item]) : SubscribedInnerPageData.CustomerHospitalBirthingdetails[item]
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

  const [inputType, setInputType] = useState("text");
  const handleChange = (e) => {
    const { name, value } = e.target;
    const exp = /^\d*$/
    if ((name == "ConsultingHospitalPinCode" || name == "DeliveringHospitalPinCode") && !exp.test(value)) {
      return
    }
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));

  };

  const handleOnChange = (event, name) => {
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: event, errorStatus: false, errorMessage: "" },
    }));
  }

  const handleCheckChange = (event) => {
    // setData((prevData) => ({
    //   ...prevData,
    //   ['IsDeliveringHospitalSameAsConsultingHospotal']: { ...prevData['IsDeliveringHospitalSameAsConsultingHospotal'], value: event.target.checked, errorStatus: false, errorMessage: "" },
    // }));

    setData((prevData) => {
      const newValues = {
        ...prevData, ['IsDeliveringHospitalSameAsConsultingHospotal']: {
          ...prevData['IsDeliveringHospitalSameAsConsultingHospotal'],
          value: event.target.checked, errorStatus: false, errorMessage: ""
        }
      };
      if (event.target.checked === true) {
        newValues.DeliveringHospitalAddress.value = newValues.ConsultingHospitalAddress.value;
        newValues.DeliveringHospitalCountry.value = newValues.ConsultingHospitalCountry.value;
        newValues.DeliveringHospitalState.value = newValues.ConsultingHospitalState.value;
        newValues.DeliveringHosptalCity.value = newValues.ConsultingHosptalCity.value;
        newValues.DeliveringHospitalPinCode.value = newValues.ConsultingHospitalPinCode.value;
      } else {
        newValues.DeliveringHospitalAddress.value = "";
        newValues.DeliveringHospitalCountry.value = 352;
        newValues.DeliveringHospitalState.value = "";
        newValues.DeliveringHosptalCity.value = "";
        newValues.DeliveringHospitalPinCode.value = "";
      }
      return newValues;
    });
  }


  useImperativeHandle(ref, () => ({
    getHospitalDetailsChildData: () => {
      // if (!data.ExpectedDateOfDelivery.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ExpectedDateOfDelivery: {
      //       ...prevData.ExpectedDateOfDelivery,
      //       errorStatus: true,
      //       errorMessage: "Expected Date Of Delivery is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.TypeOfpregnancy.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     TypeOfpregnancy: {
      //       ...prevData.TypeOfpregnancy,
      //       errorStatus: true,
      //       errorMessage: "Type Of pregnancy is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.HowManyChildrensDoYouHaveAlready.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     HowManyChildrensDoYouHaveAlready: {
      //       ...prevData.HowManyChildrensDoYouHaveAlready,
      //       errorStatus: true,
      //       errorMessage: "How Many Childrens Do You Have Already is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.ConsultingGynocologist.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ConsultingGynocologist: {
      //       ...prevData.ConsultingGynocologist,
      //       errorStatus: true,
      //       errorMessage: "Consulting Gynocologist is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.ConsultingHospital.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ConsultingHospital: {
      //       ...prevData.ConsultingHospital,
      //       errorStatus: true,
      //       errorMessage: "Consulting Hospital is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.ConsultingHospitalCountry.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ConsultingHospitalCountry: {
      //       ...prevData.ConsultingHospitalCountry,
      //       errorStatus: true,
      //       errorMessage: "Country is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.ConsultingHospitalState.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ConsultingHospitalState: {
      //       ...prevData.ConsultingHospitalState,
      //       errorStatus: true,
      //       errorMessage: "State is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.ConsultingHosptalCity.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ConsultingHosptalCity: {
      //       ...prevData.ConsultingHosptalCity,
      //       errorStatus: true,
      //       errorMessage: "City is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.ConsultingHospitalPinCode.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ConsultingHospitalPinCode: {
      //       ...prevData.ConsultingHospitalPinCode,
      //       errorStatus: true,
      //       errorMessage: "PinCode is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.ConsultingHospitalAddress.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ConsultingHospitalAddress: {
      //       ...prevData.ConsultingHospitalAddress,
      //       errorStatus: true,
      //       errorMessage: "Hospital Address is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.DeliveringHospitalCountry.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     DeliveringHospitalCountry: {
      //       ...prevData.DeliveringHospitalCountry,
      //       errorStatus: true,
      //       errorMessage: "Country is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.DeliveringHospitalState.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     DeliveringHospitalState: {
      //       ...prevData.DeliveringHospitalState,
      //       errorStatus: true,
      //       errorMessage: "State is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.DeliveringHosptalCity.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     DeliveringHosptalCity: {
      //       ...prevData.DeliveringHosptalCity,
      //       errorStatus: true,
      //       errorMessage: "City is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.DeliveringHospitalPinCode.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     DeliveringHospitalPinCode: {
      //       ...prevData.DeliveringHospitalPinCode,
      //       errorStatus: true,
      //       errorMessage: "PinCode is required.",
      //     },
      //   }));
      //   return;
      // }

      // if (!data.DeliveringHospitalAddress.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     DeliveringHospitalAddress: {
      //       ...prevData.DeliveringHospitalAddress,
      //       errorStatus: true,
      //       errorMessage: "Delivering Hospital Address is required.",
      //     },
      //   }));
      //   return;
      // }

      const dataToSend = {
        ExpectedDateOfDelivery: formatDateYYYYMMDD(data.ExpectedDateOfDelivery.value),
        TypeOfpregnancy: data.TypeOfpregnancy.value,
        HowManyChildrensDoYouHaveAlready: data.HowManyChildrensDoYouHaveAlready.value,
        ConsultingGynocologist: data.ConsultingGynocologist.value,
        ConsultingHospital: data.ConsultingHospital.value,
        ConsultingHospitalAddress: data.ConsultingHospitalAddress.value,
        ConsultingHospitalCountry: data.ConsultingHospitalCountry.value,
        ConsultingHospitalState: data.ConsultingHospitalState.value,
        ConsultingHosptalCity: data.ConsultingHosptalCity.value,
        ConsultingHospitalPinCode: data.ConsultingHospitalPinCode.value,
        IsDeliveringHospitalSameAsConsultingHospotal: data.IsDeliveringHospitalSameAsConsultingHospotal.value,
        DeliveringHospitalAddress: data.DeliveringHospitalAddress.value,
        DeliveringHospitalCountry: data.DeliveringHospitalCountry.value,
        DeliveringHospitalState: data.DeliveringHospitalState.value,
        DeliveringHosptalCity: data.DeliveringHosptalCity.value,
        DeliveringHospitalPinCode: data.DeliveringHospitalPinCode.value,

      };

      if (currentPage < TOTAL_PAGES) {
        setCurrentPage(currentPage + 1);
      }
      dispatch(addOrupdateAnnexureInfo({ CustomerHospitalBirthingdetails: dataToSend, customerAnnexureInformationId: customerAnnexureInformationId }))


    }
  }))


  useEffect(() => {
    const dataToSend = data.ConsultingHospitalCountry.value;
    if (data.ConsultingHospitalCountry.value) dispatch(getState({ payload: dataToSend }));
  }, [data.ConsultingHospitalCountry.value]);

  // useEffect(() => {
  //   const dataToSend = data.DeliveringHospitalCountry.value;
  //   if (data.DeliveringHospitalCountry.value) dispatch(getState({ payload: dataToSend }));
  // }, [data.DeliveringHospitalCountry.value]);

  useEffect(() => {
    const dataToSend = data.ConsultingHospitalState.value
    if (data.ConsultingHospitalState.value) dispatch(getCity({ payload: dataToSend }));
  }, [data.ConsultingHospitalState.value]);

  useEffect(() => {
    const dataToSend = data.DeliveringHospitalState.value
    if (data.DeliveringHospitalState.value) dispatch(getCityForPermanentAddress({ payload: dataToSend }));
  }, [data.DeliveringHospitalState.value]);



  useEffect(() => {
    dispatch(getCountry());
    dispatch(GetTypeOfPregnancy());
    dispatch(getAnnexureInfo());
  }, []);


  return (
    <Card variant="outlined">
      <Typography variant="h5" sx={headingStyle}>
        HOSPITAL & BIRTHING DETAILS (TO INFORM BANK OF ANY CHANGES PRIOR TO
        DELIVERY)
      </Typography>
      <CardContent>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined" sx={{ marginBottom: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Expected date of delivery <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth>

                    <input
                      style={{ border: data.ExpectedDateOfDelivery.errorStatus ? "1px solid red" : "none" }}
                      onChange={handleChange}
                      key={"key"}
                      placeholder={data.ExpectedDateOfDelivery.placeholder}
                      className={`dashboardInput fullWidth`}
                      label={data.ExpectedDateOfDelivery.placeholder}
                      type={inputType}
                      onFocus={() => setInputType("date")}
                      onBlur={() => setInputType("text")}
                      value={data.ExpectedDateOfDelivery.value}
                      name={data.ExpectedDateOfDelivery.name}
                      size="small" />

                    {data.ExpectedDateOfDelivery.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.ExpectedDateOfDelivery.errorMessage}</Typography> : null}

                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    {data.TypeOfpregnancy.placeholder} <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={typeOfPreganacyDataList}
                      value={data.TypeOfpregnancy.value}
                      onChange={(e) => {
                        handleOnChange(e, "TypeOfpregnancy");
                      }}
                    />
                    {data.TypeOfpregnancy.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.TypeOfpregnancy.errorMessage}</Typography> : null}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    {data.HowManyChildrensDoYouHaveAlready.placeholder}  <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={NoofChildres}
                    value={data.HowManyChildrensDoYouHaveAlready.value}
                    onChange={(e) => {
                      handleOnChange(e, "HowManyChildrensDoYouHaveAlready");
                    }}
                  />
                  {data.HowManyChildrensDoYouHaveAlready.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.HowManyChildrensDoYouHaveAlready.errorMessage}</Typography> : null}

                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    {data.ConsultingGynocologist.placeholder} <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="text"
                      id="ConsultingGynocologist"
                      placeholder="Consulting Gynocologist"
                      name={data.ConsultingGynocologist.name}
                      sx={{
                        border: data.ConsultingGynocologist.errorStatus ? "1px solid red" : "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                      value={data.ConsultingGynocologist.value}
                      onChange={handleChange}
                    />

                    {data.ConsultingGynocologist.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.ConsultingGynocologist.errorMessage}</Typography> : null}

                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    {data.ConsultingHospital.placeholder}<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="text"
                      id="ConsultingHospital"
                      placeholder="Consulting Hospital"

                      sx={{
                        border: data.ConsultingHospital.errorStatus ? "1px solid red" : "",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                      name={data.ConsultingHospital.name}
                      value={data.ConsultingHospital.value}
                      onChange={handleChange}
                    />
                    {data.ConsultingHospital.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.ConsultingHospital.errorMessage}</Typography> : null}

                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: "49%",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >

            <Card variant="outlined">
              <CardContent sx={{  }}>
                <Grid container spacing={2}>


                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      {data.ConsultingHospitalCountry.placeholder}<span style={redStarStyle}>*</span>
                    </InputLabel>
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      disabled={true}
                      data={upDatedCountryList}
                      // value = {352}
                      value={data.ConsultingHospitalCountry.value}
                      onChange={(e) => {
                        handleOnChange(e, "ConsultingHospitalCountry");
                      }}
                    />

                    {data.ConsultingHospitalCountry.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.ConsultingHospitalCountry.errorMessage}</Typography> : null}
                  </Grid>

                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      {data.ConsultingHospitalState.placeholder} <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={stateList}
                      value={data.ConsultingHospitalState.value}
                      onChange={(e) => {
                        handleOnChange(e, "ConsultingHospitalState")
                      }}
                    />
                    {data.ConsultingHospitalState.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.ConsultingHospitalState.errorMessage}</Typography> : null}

                  </Grid>

                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      {data.ConsultingHosptalCity.placeholder} <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={cityList}
                      value={data.ConsultingHosptalCity.value}
                      onChange={(e) => {
                        handleOnChange(e, "ConsultingHosptalCity");
                      }}
                    />
                    {data.ConsultingHosptalCity.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.ConsultingHosptalCity.errorMessage}</Typography> : null}

                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      {data.ConsultingHospitalPinCode.placeholder} <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl variant="outlined" size="small" fullWidth>
                      <OutlinedInput
                        fullWidth
                        type="number"
                        id="ConsultingHospitalPinCode"
                        placeholder="PinCode"
                        size="small"
                        sx={{
                          border: data.ConsultingHospitalPinCode.errorStatus ? "1px solid red" : "",
                          height: "40px",
                          width: "100%",
                          padding: "10px",
                          borderRadius: "8px",
                        }}
                        inputProps={{ maxLength: 6 }}
                        name={data.ConsultingHospitalPinCode.name}
                        value={data.ConsultingHospitalPinCode.value}
                        onChange={handleChange}

                      />
                      {data.ConsultingHospitalPinCode.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.ConsultingHospitalPinCode.errorMessage}</Typography> : null}

                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3} pb={2}>
                  <Grid item style={{ width: "100%" }}>
                    <InputLabel sx={inputLableStyle}>
                      {data.ConsultingHospitalAddress.placeholder}<span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl variant="outlined" fullWidth size="small">
                      <OutlinedInput
                        fullWidth
                        id="ConsultingHospitalAddress"
                        placeholder="Consulting Hospital Address"
                        size="small"
                        name={data.ConsultingHospitalAddress.name}
                        sx={{
                          border: data.ConsultingHospitalAddress.errorStatus ? "1px solid red" : "",
                          height: "40px",
                          width: "100%",
                          padding: "10px",
                          borderRadius: "8px",
                        }}
                        value={data.ConsultingHospitalAddress.value}
                        onChange={handleChange}
                      />
                      {data.ConsultingHospitalAddress.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.ConsultingHospitalAddress.errorMessage}</Typography> : null}

                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item style={{ width: "100%", color: "black" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={data.IsDeliveringHospitalSameAsConsultingHospotal.value}
                          onChange={handleCheckChange}
                          name={data.IsDeliveringHospitalSameAsConsultingHospotal.name}
                          value={data.IsDeliveringHospitalSameAsConsultingHospotal.value}
                        />
                      }
                      label="If delivering hospital address is same as Current hospital address"

                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card> </Box>
          <Box
            sx={{
              width: "49%",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Card variant="outlined">
              <CardContent sx={{  }}>
                <Grid container spacing={2}>

                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      {data.DeliveringHospitalCountry.placeholder} <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      disabled={true}
                      data={upDatedCountryList}
                      value={data.DeliveringHospitalCountry.value}
                      onChange={(e) => {
                        handleOnChange(e, "DeliveringHospitalCountry");
                      }}
                    />
                    {data.DeliveringHospitalCountry.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.DeliveringHospitalCountry.errorMessage}</Typography> : null}

                  </Grid>

                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      {data.DeliveringHospitalState.placeholder} <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={stateList}
                      value={data.DeliveringHospitalState.value}
                      onChange={(e) => {
                        handleOnChange(e, "DeliveringHospitalState")
                      }}
                    />
                    {data.DeliveringHospitalState.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.DeliveringHospitalState.errorMessage}</Typography> : null}

                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      {data.DeliveringHosptalCity.placeholder} <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={cityList2}
                      value={data.DeliveringHosptalCity.value}
                      onChange={(e) => {
                        handleOnChange(e, "DeliveringHosptalCity");
                      }}
                    />
                    {data.DeliveringHosptalCity.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.DeliveringHosptalCity.errorMessage}</Typography> : null}

                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      {data.DeliveringHospitalPinCode.placeholder} <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl variant="outlined" size="small" fullWidth>
                      <OutlinedInput
                        fullWidth
                        type="text"
                        id="DeliveringHospitalPinCode"
                        placeholder="PinCode"
                        size="small"
                        sx={{
                          border: data.DeliveringHospitalPinCode.errorStatus ? "1px solid red" : "",
                          height: "40px",
                          width: "100%",
                          padding: "10px",
                          borderRadius: "8px",
                        }}
                        inputProps={{ maxLength: 6 }}
                        name={data.DeliveringHospitalPinCode.name}
                        value={data.DeliveringHospitalPinCode.value}
                        onChange={handleChange}

                      />
                      {data.DeliveringHospitalPinCode.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.DeliveringHospitalPinCode.errorMessage}</Typography> : null}

                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3} pb={2}>
                  <Grid item style={{ width: "100%" }}>
                    <InputLabel sx={inputLableStyle}>
                      {data.DeliveringHospitalAddress.placeholder}
                      <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl variant="outlined" fullWidth size="small">
                      <OutlinedInput
                        fullWidth
                        id="DeliveringHospitalAddress"
                        placeholder="Delivering Hospital Address"
                        size="small"
                        sx={{
                          border: data.DeliveringHospitalAddress.errorStatus ? "1px solid red" : "",
                          height: "40px",
                          width: "100%",
                          padding: "10px",
                          borderRadius: "8px",
                        }}
                        name={data.DeliveringHospitalAddress.name}
                        value={data.DeliveringHospitalAddress.value}
                        onChange={handleChange}
                      />
                      {data.DeliveringHospitalAddress.errorStatus ? <Typography sx={{ color: "red", fontSize: "1.5rem", marginLeft: "2rem" }}>{data.DeliveringHospitalAddress.errorMessage}</Typography> : null}

                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>

        </Stack>
      </CardContent>
    </Card>
  );
});

export default HospitalDetails;
