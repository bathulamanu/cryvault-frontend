
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

const Signature = forwardRef((props, ref) => {
  var { handleNext, handlePrev, currentPage, setCurrentPage, TOTAL_PAGES } = props;
  const dispatch = useDispatch()
  const [data, setData] = useState({
    MotherOrGuardianSignature: {
      value: "",
      placeholder: "MotherOrGuardianSignature",
      errorMessage: "",
      errorStatus: false,
      name: "MotherOrGuardianSignature",
      id: "MotherOrGuardianSignature"
    },
    FatherOrGuardianSignature: {
      value: "",
      placeholder: "FatherOrGuardianSignature",
      errorMessage: "",
      errorStatus: false,
      name: "FatherOrGuardianSignature",
      id: "FatherOrGuardianSignature"
    },
    MedicalDirectorSignature: {
      value: "",
      placeholder: "MedicalDirectorSignature",
      errorMessage: "",
      errorStatus: false,
      name: "MedicalDirectorSignature",
      id: "MedicalDirectorSignature"
    },
    MotherOrGuardianName: {
      value: "",
      placeholder: "MotherOrGuardianName",
      errorMessage: "",
      errorStatus: false,
      name: "MotherOrGuardianName",
      id: "MotherOrGuardianName"
    },
    FatherOrGuardianName: {
      value: "",
      placeholder: "FatherOrGuardianName",
      errorMessage: "",
      errorStatus: false,
      name: "FatherOrGuardianName",
      id: "FatherOrGuardianName"
    },
    MedicalDirectorName: {
      value: "",
      placeholder: "MedicalDirectorName",
      errorMessage: "",
      errorStatus: false,
      name: "MedicalDirectorName",
      id: "MedicalDirectorName"
    }
  });

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
    async function getSignatureData() {
      setCustomerAnnexureInformationId(SubscribedInnerPageData?.customerAnnexureInformationId)
      if (SubscribedInnerPageData && SubscribedInnerPageData.CustomerData && SubscribedInnerPageData.CustomerData.length != 0 && SubscribedInnerPageData.CustomerData[0].AllSignature) {
        for (let item in SubscribedInnerPageData.CustomerData[0].AllSignature) {
          for (let item1 in data) {
            if (item1 == item) {
              data[item1].value = SubscribedInnerPageData.CustomerData[0].AllSignature[item]
            }
          }
        }
      }
    }
    getSignatureData()
  }, [SubscribedInnerPageData]);

  useEffect(() => {
    getAnnexureInfo()
  }, [handlePrev]);


  useEffect(() => {
    dispatch(getAnnexureInfo());
  }, []);


  useImperativeHandle(ref, () => ({
    getSignatureChildData: () => {
      const dataToSend = {
        MotherOrGuardianSignature: data.MotherOrGuardianSignature.value,
        FatherOrGuardianSignature: data.FatherOrGuardianSignature.value,
        MedicalDirectorSignature: data.MedicalDirectorSignature.value,
        MotherOrGuardianName: data.MotherOrGuardianName.value,
        FatherOrGuardianName: data.FatherOrGuardianName.value,
        MedicalDirectorName: data.MedicalDirectorName.value
      };

      if (currentPage < TOTAL_PAGES) {
        setCurrentPage(currentPage + 1);
      }
      dispatch(addOrupdateAnnexureInfo({ AllSignature: dataToSend, customerAnnexureInformationId: customerAnnexureInformationId }))

    }
  }))



  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" sx={headingStyle}>
          SIGNATURE
        </Typography>
        <Grid container spacing={3} pt={1} pb={2}>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Signature of Father / Legal Guardian
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <TextareaAutosize
                minRows={4}
                id="outlined-adornment-password"
                size="small"
                name="FatherOrGuardianSignature"
                value={data.FatherOrGuardianSignature.value}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Signature of Mother / Legal Guardian
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <TextareaAutosize
                minRows={4}
                id="outlined-adornment-password"
                size="small"
                name="MotherOrGuardianSignature"
                value={data.MotherOrGuardianSignature.value}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Signature of Medical Director CBIPL
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <TextareaAutosize
                minRows={4}
                id="outlined-adornment-password"
                size="small"
                name="MedicalDirectorSignature"
                value={data.MedicalDirectorSignature.value}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} pt={1} pb={2}>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Name of Father / Legal Guardian
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder="Name"
                size="small"
                sx={{
                  border: data.FatherOrGuardianName.errorStatus ? "1px solid red":"", 
                  height: "40px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                }}
                name="FatherOrGuardianName"
                value={data.FatherOrGuardianName.value}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Name of Mother / Legal Guardian
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder="Name"
                size="small"
                sx={{
                  border: data.MotherOrGuardianName.errorStatus ? "1px solid red":"",
                  height: "40px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                }}
                name="MotherOrGuardianName"
                value={data.MotherOrGuardianName.value}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Name of Medical Director CBIPL
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder="Name"
                size="small"
                sx={{
                  border: data.MedicalDirectorName.errorStatus ? "1px solid red":"",
                  height: "40px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                }}
                name="MedicalDirectorName"
                value={data.MedicalDirectorName.value}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
});

export default Signature;
