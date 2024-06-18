import React, { useState, forwardRef, useImperativeHandle } from "react";
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

const ForbankUse = forwardRef((props, ref) => {

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));
  };

  useImperativeHandle(ref, () => ({
    getForbankUseChildData: () => {
      return data;
    }
  }))

  const Save = () => {
    // e.preventDefault();
    console.log("for bank detail kk ", data);
  }



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
                placeholder="Input text"
                size="small"
                sx={{
                  border: "1px solid black",
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
                placeholder="Input text"
                size="small"
                sx={{
                  border: "1px solid black",
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
                placeholder="Input text"
                size="small"
                sx={{
                  border: "1px solid black",
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
                placeholder="Input text"
                size="small"
                sx={{
                  border: "1px solid black",
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
                name={data.Date.name}
                value={data.Date.value}
                onChange={handleChange}
              />
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
                  placeholder="Input text"
                  size="small"
                  sx={{
                    border: "1px solid black",
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
      <button onClick={Save()}>save for bank </button>
    </Card>
  );
});

export default ForbankUse;
