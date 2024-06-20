
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
  var { handleNext, currentPage, setCurrentPage, TOTAL_PAGES } = props
  const [data, setData] = useState({
    MotherOrGuardianSignature: {
      value: "",
      placeholder: "Exisiting Cryovault Client UIN",
      errorMessage: "",
      errorStatus: false,
      name: "ExisitingCryovaultClientUIN",
      id: "ExisitingCryovaultClientUIN"
    },
    FatherOrGuardianSignature: {
      value: "",
      placeholder: "Exisiting Cryovault Client UIN",
      errorMessage: "",
      errorStatus: false,
      name: "ExisitingCryovaultClientUIN",
      id: "ExisitingCryovaultClientUIN"
    },
    MedicalDirectorSignature: {
      value: "",
      placeholder: "Exisiting Cryovault Client UIN",
      errorMessage: "",
      errorStatus: false,
      name: "ExisitingCryovaultClientUIN",
      id: "ExisitingCryovaultClientUIN"
    },
    MotherOrGuardianName: {
      value: "",
      placeholder: "Exisiting Cryovault Client UIN",
      errorMessage: "",
      errorStatus: false,
      name: "ExisitingCryovaultClientUIN",
      id: "ExisitingCryovaultClientUIN"
    },
    FatherOrGuardianName: {
      value: "",
      placeholder: "Exisiting Cryovault Client UIN",
      errorMessage: "",
      errorStatus: false,
      name: "ExisitingCryovaultClientUIN",
      id: "ExisitingCryovaultClientUIN"
    },
    MedicalDirectorName: {
      value: "",
      placeholder: "Exisiting Cryovault Client UIN",
      errorMessage: "",
      errorStatus: false,
      name: "ExisitingCryovaultClientUIN",
      id: "ExisitingCryovaultClientUIN"
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
      return dataToSend;
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
                placeholder="Input text"
                size="small"
                sx={{
                  border: "1px solid black",
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
                placeholder="Input text"
                size="small"
                sx={{
                  border: "1px solid black",
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
                placeholder="Input text"
                size="small"
                sx={{
                  border: "1px solid black",
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
