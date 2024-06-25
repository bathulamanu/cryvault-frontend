import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import {
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
  TextareaAutosize,
  Typography,
} from "@mui/material";

import { addOrupdateAnnexureInfo } from "../../redux/reducers/UserReducer"
import { GetTypeOfProof, getAnnexureInfo } from '../../redux/reducers/DashboardReducer'
import { useDispatch, useSelector } from "react-redux";
import { formatDate, formatDateYYYYMMDD } from "../../globalFunctions"
const headingStyle = {
  fontSize: "18px",
  fontWeight: 500,
  marginTop: "10px",
  marginLeft: "5px",
};

const inputLableStyle = {
  color: "black",
  fontSize: "14px",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
};

const ForbankUse = forwardRef((props, ref) => {
  var { handleNext, handlePrev, currentPage, setCurrentPage, TOTAL_PAGES } = props

  const [data, setData] = useState({
    NameOfExcutive: {
      value: "",
      placeholder: "Name Of Excutive",
      errorMessage: "",
      errorStatus: false,
      name: "NameOfExcutive",
      id: "NameOfExcutive"
    },
    EmployeeCode: {
      value: "",
      placeholder: "Employee Code",
      errorMessage: "",
      errorStatus: false,
      name: "EmployeeCode",
      id: "EmployeeCode"
    },
    NameOfManager: {
      value: "",
      placeholder: "Name Of Manager",
      errorMessage: "",
      errorStatus: false,
      name: "NameOfManager",
      id: "NameOfManager"
    },
    AreaOrRegion: {
      value: "",
      placeholder: "Area Or Region",
      errorMessage: "",
      errorStatus: false,
      name: "AreaOrRegion",
      id: "AreaOrRegion"
    },
    Date: {
      value: "",
      placeholder: "Date",
      errorMessage: "",
      errorStatus: false,
      name: "Date",
      id: "Date"
    },
    ExcutiveSignature: {
      value: "",
      placeholder: "Excutive Signature",
      errorMessage: "",
      errorStatus: false,
      name: "ExcutiveSignature",
      id: "ExcutiveSignature"
    },
    Name: {
      value: "",
      placeholder: "Name",
      errorMessage: "",
      errorStatus: false,
      name: "Name",
      id: "Name"
    }
  })
  const dispatch = useDispatch()
  const [inputType, setInputType] = useState("text");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));
  };

  const [customerAnnexureInformationId, setCustomerAnnexureInformationId] = useState(null)
  const SubscribedInnerPageData = useSelector((state) => state.dashboard.SubscribedUserData);
  useEffect(() => {
    async function getCommunicationData() {
      setCustomerAnnexureInformationId(SubscribedInnerPageData?.customerAnnexureInformationId)
      if (SubscribedInnerPageData && SubscribedInnerPageData.CustomerData && SubscribedInnerPageData.CustomerData.length != 0 && SubscribedInnerPageData.CustomerData[0].ExcutiveInfoForbankUse) {
        for (let item in SubscribedInnerPageData.CustomerData[0].ExcutiveInfoForbankUse) {
          for (let item1 in data) {
            if (item1 == item) {
              data[item1].value = item == "Date" ? formatDate(SubscribedInnerPageData.CustomerData[0].ExcutiveInfoForbankUse[item]) : SubscribedInnerPageData.CustomerData[0].ExcutiveInfoForbankUse[item]
          
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

  useEffect(() => {
    dispatch(getAnnexureInfo());
  }, []);


  useImperativeHandle(ref, () => ({
    getForbankUseChildData: () => {
      const dataToSend = {
        NameOfExcutive: data.NameOfExcutive.value,
        EmployeeCode: data.EmployeeCode.value,
        NameOfManager: data.NameOfManager.value,
        AreaOrRegion: data.AreaOrRegion.value,
        Date: formatDateYYYYMMDD(data.Date.value),
        ExcutiveSignature: data.ExcutiveSignature.value,
        Name: data.Name.value
      };

      if (currentPage < TOTAL_PAGES) {
        setCurrentPage(currentPage + 1);
      }

      dispatch(addOrupdateAnnexureInfo({ ExcutiveInfoForbankUse: dataToSend, customerAnnexureInformationId: customerAnnexureInformationId }))

    }
  }))



  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" sx={headingStyle}>
          FOR BANK USE ONLY
        </Typography>
        <Grid container spacing={2} pt={1} pb={2}>
          <Grid item xs={6}>
            <InputLabel sx={inputLableStyle}>Name of excutive</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder={data.NameOfExcutive.placeholder}
                size="small"
                sx={{
                  border: data.NameOfExcutive.errorStatus ? "1px solid red":"",
                  height: "40px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                }}
                name={data.NameOfExcutive.name}
                value={data.NameOfExcutive.value}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={inputLableStyle}>Employee Code</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder={data.EmployeeCode.placeholder}
                size="small"
                sx={{
                  border: data.EmployeeCode.errorStatus ? "1px solid red":"",
                  height: "40px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                }}
                name={data.EmployeeCode.name}
                value={data.EmployeeCode.value}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} pt={1} pb={2}>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>Name of manager</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder={data.NameOfManager.placeholder}
                size="small"
                sx={{
                  border: data.NameOfManager.errorStatus ? "1px solid red":"",
                  height: "40px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                }}
                name={data.NameOfManager.name}
                value={data.NameOfManager.value}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>Area / Region</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder={data.AreaOrRegion.placeholder}
                size="small"
                sx={{
                  border: data.AreaOrRegion.errorStatus ? "1px solid red":"",
                  height: "40px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                }}
                name={data.AreaOrRegion.name}
                value={data.AreaOrRegion.value}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>Date</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
           
              <input
                style={{ border: data.Date.errorStatus ? "1px solid red" : "none" }}
                onChange={handleChange}
                key={data[0]}
                placeholder={data.Date.placeholder}
                className={`dashboardInput fullWidth`}
                label={data.Date.placeholder} type={inputType}
                onFocus={() => setInputType("date")}
                onBlur={() => setInputType("text")}
                value={data.Date.value}
                name={data.Date.name}
                size="small" />
            </FormControl>
          </Grid>
        </Grid>
        <Stack
          sx={{ display: "flex", marginLeft: "1020px", maxWidth: "350px" }}
        >
          <Grid container spacing={2} pt={3} pb={2}>
            <Grid item style={{ width: "100%" }}>
              <InputLabel sx={inputLableStyle}>
                Signature of executive
              </InputLabel>
              <FormControl variant="outlined" fullWidth size="small">
                <TextareaAutosize
                  minRows={4}
                  id="outlined-adornment-password"
                  size="small"
                  name={data.ExcutiveSignature.name}
                  value={data.ExcutiveSignature.value}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} pt={3} pb={2}>
            <Grid item style={{ width: "100%" }}>
              <InputLabel sx={inputLableStyle}>Name of excutive</InputLabel>
              <FormControl variant="outlined" fullWidth size="small">
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  placeholder={data.Name.placeholder}
                  size="small"
                  sx={{
                    border: data.Name.errorStatus ? "1px solid red":"",
                    height: "40px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                  name={data.Name.name}
                  value={data.Name.value}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
});

export default ForbankUse;
