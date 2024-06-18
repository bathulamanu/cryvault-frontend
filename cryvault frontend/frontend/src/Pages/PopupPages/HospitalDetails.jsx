import React, { useEffect, useState ,forwardRef, useImperativeHandle} from "react";
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

import { getCountry } from "../../redux/reducers/PaymentReducer";

import { useDispatch, useSelector } from "react-redux";
import { MultipleSelect } from '../CheckoutDetails'
import { Save } from "@mui/icons-material";
// import {
//   getCityIdList,
//   getNamesIdList,
//   getStateIdList,
// } from "../../../globalFunctions";

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
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.payment.countries);
  const states = useSelector((state) => state.payment.states);
  const cities = useSelector((state) => state.payment.cities);
  const [detail, setDetail] = useState(null);
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
    ConsultingHospitalAddress: {
      value: "",
      placeholder: "Consulting Hospital Address",
      errorMessage: "",
      errorStatus: false,
      name: "ConsultingHospitalAddress",
      id: "ConsultingHospitalAddress"
    },
    ConsultingHosptalCity: {
      value: "",
      placeholder: "Consulting Hosptal City",
      errorMessage: "",
      errorStatus: false,
      name: "ConsultingHosptalCity",
      id: "ConsultingHosptalCity"
    },
    ConsultingHospitalState: {
      value: "",
      placeholder: "Consulting Hospital State",
      errorMessage: "",
      errorStatus: false,
      name: "ConsultingHospitalState",
      id: "ConsultingHospitalState"
    },
    ConsultingHospitalCountry: {
      value: "",
      placeholder: "Consulting Hospital Country",
      errorMessage: "",
      errorStatus: false,
      name: "ConsultingHospitalCountry",
      id: "ConsultingHospitalCountry"
    },
    ConsultingHospitalPinCode: {
      value: "",
      placeholder: "Consulting Hospital PinCode",
      errorMessage: "",
      errorStatus: false,
      name: "ConsultingHospitalPinCode",
      id: "ConsultingHospitalPinCode"
    },
    IsDeliveringHospitalSameAsConsultingHospotal: {
      value: null,
      placeholder: "Is Delivering Hospital Same As Consulting Hospotal",
      errorMessage: "",
      errorStatus: false,
      name: "IsDeliveringHospitalSameAsConsultingHospotal",
      id: "IsDeliveringHospitalSameAsConsultingHospotal"
    },

    DeliveringHospitalAddress: {
      value: "",
      placeholder: "Delivering Hospital Address",
      errorMessage: "",
      errorStatus: false,
      name: "DeliveringHospitalAddress",
      id: "DeliveringHospitalAddress"
    },
    DeliveringHosptalCity: {
      value: "",
      placeholder: "Delivering Hosptal City",
      errorMessage: "",
      errorStatus: false,
      name: "DeliveringHosptalCity",
      id: "DeliveringHosptalCity"
    },
    DeliveringHospitalState: {
      value: "",
      placeholder: "Delivering Hospital State",
      errorMessage: "",
      errorStatus: false,
      name: "DeliveringHospitalState",
      id: "DeliveringHospitalState"
    },
    DeliveringHospitalCountry: {
      value: "",
      placeholder: "Delivering Hospital Country",
      errorMessage: "",
      errorStatus: false,
      name: "DeliveringHospitalCountry",
      id: "DeliveringHospitalCountry"
    },
    DeliveringHospitalPinCode: {
      value: "",
      placeholder: "Delivering Hospital PinCode",
      errorMessage: "",
      errorStatus: false,
      name: "DeliveringHospitalPinCode",
      id: "DeliveringHospitalPinCode"
    }
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));

  };

  useImperativeHandle(ref, () => ({
    getHospitalDetailsChildData: () => {
      return data;
    }
  }))

  const Save = () => {
    console.log("hospital detail kk ", data);
  }

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
    <Card variant="outlined">
      <Typography variant="h5" sx={headingStyle}>
        HOSPITAL & BIRTHING DETAILS (TO INFORM BANK OF ANY CHANGES PRIOR TO
        DELIVERY)
      </Typography>
      <CardContent>
        <Card variant="outlined" sx={{ width: "600px", marginBottom: "15px" }}>
          <CardContent sx={{ width: "600px" }}>
            <Grid container spacing={2} pb={2}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  Expected date of delivery <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" fullWidth>
                  <OutlinedInput
                    readOnly={false}
                    type="text"
                    name="ExpectedDateOfDelivery"
                    id="outlined-adornment-ExpectedDateOfDelivery"
                    placeholder="Expected Date Of Delivery"
                    sx={{
                      border: "1px solid black",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    value={data.ExpectedDateOfDelivery.value}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>

                <MultipleSelect type={"city"} title={"Type of pregnancy"} userData={data} dataArray={cities} handleChange={handleCityChange} />

              </Grid>
              <Grid item xs={6}>

                <MultipleSelect type={"city"} title={"How many childrens do you have alredy"} userData={data} dataArray={cities} handleChange={handleCityChange} />

              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Consulting Gynocologist <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" fullWidth>
                  <OutlinedInput
                    fullWidth
                    type="text"
                    id="ConsultingGynocologist"
                    placeholder="Consulting Gynocologist"
                    name="ConsultingGynocologist"
                    sx={{
                      border: "1px solid black",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    value={data.ConsultingGynocologist.value}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Consulting Hospitals <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" fullWidth>
                  <OutlinedInput
                    fullWidth
                    type="text"
                    id="ConsultingHospital"
                    placeholder="Consulting Hospital"

                    sx={{
                      border: "1px solid black",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    name="ConsultingHospital"
                    value={data.ConsultingHospital.value}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Card variant="outlined">
            <CardContent sx={{ width: "550px" }}>
              <Grid container spacing={2}>

                <Grid item xs={6}>
                  <MultipleSelect type={"city"} title={"City"} userData={data} dataArray={cities} handleChange={handleCityChange} />
                </Grid>

                <Grid item xs={6}>
                  <MultipleSelect type={"state"} title={"State"} userData={data} dataArray={states} handleChange={handleStateChange} />
                </Grid>
                <Grid item xs={6}>
                  <MultipleSelect type={"country"} title={"Country"} userData={data} dataArray={countries} handleChange={handleCountryChange} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Pincode <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="ConsultingHospitalPinCode"
                      placeholder="Consulting Hospital PinCode"
                      size="small"
                      sx={{
                        border: "1px solid black",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                      name="ConsultingHospitalPinCode"
                      value={data.ConsultingHospitalPinCode.value}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Hospital Address <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="ConsultingHospitalAddress"
                      placeholder="Consulting Hospital Address"
                      size="small"
                      name="ConsultingHospitalAddress"
                      sx={{
                        border: "1px solid black",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                      value={data.ConsultingHospitalAddress.value}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item style={{ width: "100%", color: "black" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                      />
                    }
                    label="If  delivering hospital address is same as Current hospital address"
                    name="IsDeliveringHospitalSameAsConsultingHospotal"
                    value={data.IsDeliveringHospitalSameAsConsultingHospotal.value}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent sx={{ width: "550px" }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <MultipleSelect type={"city"} title={"City"} userData={data} dataArray={cities} handleChange={handleCityChange} />
                </Grid>

                <Grid item xs={6}>
                  <MultipleSelect type={"state"} title={"State"} userData={data} dataArray={states} handleChange={handleStateChange} />
                </Grid>
                <Grid item xs={6}>
                  <MultipleSelect type={"country"} title={"Country"} userData={data} dataArray={countries} handleChange={handleCountryChange} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Pincode <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="text"
                      id="DeliveringHospitalPinCode"
                      placeholder="Delivering Hospital PinCode"
                      size="small"
                      sx={{
                        border: "1px solid black",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                      value={data.DeliveringHospitalPinCode.value}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Delivering Address (If different from consulting
                    gynaecologist)
                    <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="DeliveringHospitalAddress"
                      placeholder="Delivering Hospital Address"
                      size="small"
                      sx={{
                        border: "1px solid black",
                        height: "40px",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                      name="DeliveringHospitalAddress"
                      value={data.DeliveringHospitalAddress.value}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Stack>
        <button onClick={Save()}>kkkk</button>
      </CardContent>
    </Card>
  );
});

export default HospitalDetails;
