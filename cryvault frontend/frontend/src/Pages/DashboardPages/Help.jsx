import {
  Select, MenuItem, Button, Box, Card, Typography, useMediaQuery, Input, TextField, RadioGroup, FormControlLabel, Checkbox, Grid, FormControl, Radio
  , OutlinedInput, InputLabel, Stack
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHelpDetails, addAnyDetailsIssue, addMobileNumber, addHospitalDetailsChange, addExecutiveDetails, addNomineeDetailsChange, addCommunicationDetails } from "../../redux/reducers/DashboardReducer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Help = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const helpList = useSelector((state) => state.dashboard.helpList);
  const buttonData = helpList?.[0]?.customerHelpTitle?.[0]?.questions;
  const customerHelpTitleID = helpList?.[0]?.customerHelpTitle?.[0]?.customerHelpTitleID;
  localStorage.setItem("customerHelpTitleID", customerHelpTitleID)

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => setShowDropdown(!showDropdown);

  const [selectedIssue, setSelectedIssue] = useState(null); // Initial state


  const handleChange = (e, item) => {
    setSelectedIssue(e.target.id);
    localStorage.setItem("selectedIssueName", e.target.id)
    localStorage.setItem("selectedIssue", item.questionsId)
    setShowDropdown(false);
  };

  useEffect(() => {
    dispatch(getHelpDetails());
  }, []);

  return (
    <Box sx={{ height: "100%" }}>
      <Card
        sx={{
          margin: isMobile ? "20px" : "0px",
          width: isMobile ? "9a0%" : "1100px",
          height: isMobile ? "100%" : "100%",
          borderRadius: "20px",
          backgroundColor: "#F8F9FC",
        }}
        style={{ marginLeft: isMobile ? "10px" : "20px" }}
      >
        <Box p={2} sx={{ backgroundColor: "#2b2e64" }}>
          <Typography sx={{ color: "white" }} variant="h4">
            Help
          </Typography>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            margin: "2rem",
            height: isMobile ? "auto" : "100%",
            alignItems: "flex-start",
            gap: "1rem",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Box sx={{ height: "100%", width: isMobile ? "100%" : "30%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                position: "relative",
                border: "2px solid black",
                borderRadius: showDropdown ? "1.5rem 1.5rem 0rem 0rem" : "1.5rem",
                padding: "1rem",
                whiteSpace: "nowrap",
                justifyContent: "space-around",
                cursor: "pointer",
              }}
              onClick={handleDropdown}
            >
              <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}> How can we help you? </Typography>
              {!showDropdown ? <KeyboardArrowDownIcon sx={{ fontSize: "4rem", fontWeight: "600" }} /> : <KeyboardArrowUpIcon sx={{ fontSize: "4rem", fontWeight: "600" }} />}
            </Box>

            {showDropdown ? (
              <Box sx={{ height: "80%", justifyContent: "space-between", display: "flex", flexDirection: "column", gap: "2rem", border: "1px solid black", padding: "2rem", borderRadius: "0rem 0rem 2.5rem 2.5rem" }}>
                {buttonData?.map((item) => (
                  <Button onClick={(e) => { handleChange(e, item) }} id={item.name} className="issuesButton" sx={{ background: "#2B2E64", fontSize: "2rem", fontWeight: "600" }} variant="contained">
                    {item.name}
                  </Button>
                ))}
              </Box>
            ) : null}
          </Box>

          <Box sx={{ width: isMobile ? "100%" : "65%" }} className="helpDetailSection">
            {selectedIssue && issueComponents[selectedIssue]}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export const DetailsIssue = React.memo(() => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anyDetail, setAnyDetail] = useState({
    customerHelpTitleNo: localStorage.getItem("customerHelpTitleID"),
    questionId: localStorage.getItem("selectedIssue"),
    customerID: null,
    issue: ""
  })
  const dispatch = useDispatch();

  const handleOnanyDetailChange = (value, name) => {
    setAnyDetail((data) => ({
      ...data,
      [name]: value
    }))
  };

  const SaveUserAnyDetailsData = () => {
    console.log("cehck data anyDetail 12345678 ", anyDetail);
    dispatch(addAnyDetailsIssue(anyDetail))
  }
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "Column",
        alignItems: "start",
        gap: "2rem",
        position: "relative",
        border: "1px solid #2B2E64",
        borderRadius: "1.5rem",
        padding: "1rem",
        height: "85%",
        background: "white",
      }}
    >
      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: "1.5rem",
          padding: "1rem",
        }}
      >
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}> Any details issue </Typography>
      </Box>

      <textarea
        style={{ alignItems: "flex-start", fontSize: "2rem", width: "100%", border: "1px solid #e5e5e5", height: "80%", borderRadius: "1rem", padding: "1rem" }}
        variant="outlined"
        aria-label="Demo input"
        multiline placeholder="If any issues comment here..."
        value={anyDetail?.issue}
        onChange={(e) => { handleOnanyDetailChange(e.target.value, "issue") }}
      />

      <Button className="issuesButton" variant="contained" onClick={SaveUserAnyDetailsData} sx={{ bottom: "-15px", right: "20px", fontSize: "2rem", fontWeight: "600", borderRadius: "0.5rem", position: isMobile ? 'static' : "absolute", width: isMobile ? '100%' : '23e' }}>
        Submit
      </Button>
    </Box>
  );
});
export const MobileNumberIssue = React.memo(() => {

  const isMobile = useMediaQuery("(max-width:600px)");
  const [MobilChange, setMobilChange] = useState({
    customerHelpTitleNo: localStorage.getItem("customerHelpTitleID"),
    questionId: localStorage.getItem("selectedIssue"),
    customerID: null,
    ExistedPhoneNumber: "",
    NewPhoneNumber: "",
    ReEnter: "",
    reason: ""
  })
  const dispatch = useDispatch();

  const handleOnChange = (value, name) => {
    const exp = /^\d*$/
    if (name != "reason" && !exp.test(value)) {
      return
    }
    setMobilChange((data) => ({
      ...data,
      [name]: value
    }))
  };

  const SaveUserData = () => {
    console.log("cehck data MobilChange 12345678 ", MobilChange);
    dispatch(addMobileNumber(MobilChange))
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "Column",
        alignItems: "start",
        gap: "2rem",
        position: "relative",
        border: "1px solid #2B2E64",
        borderRadius: "1.5rem",
        padding: "1rem",
        height: "85%",
        background: "white",
      }}
    >
      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: "1.5rem",
          padding: "1rem",
        }}
      >
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}> {localStorage.getItem("selectedIssueName")}</Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ marginTop: "50px" }}>
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Existing Number</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={MobilChange?.ExistedPhoneNumber}
                name="email"
                id={`outlined-adornment`}
                placeholder="Existing Number"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnChange(e.target.value, "ExistedPhoneNumber") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", }, maxLength: 10 }}
              />
            </FormControl>
          </Stack>
        </Box>
        <Box sx={{ marginTop: "50px" }}>

          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>New Number</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={MobilChange?.NewPhoneNumber}
                name="email"
                id={`outlined-adornment`}
                placeholder="New Number"
                sx={{
                  border: "",
                  height: "40px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                }}
                onChange={(e) => { handleOnChange(e.target.value, "NewPhoneNumber") }}
                InputLabelProps={{
                  sx: {
                    fontSize: "1.5rem",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "1.5rem",

                  },
                  maxLength: 10
                }}
              />
            </FormControl>
          </Stack>
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          {/* <TextField id="time of Birth" label="Re Enter New Number" variant="standard" fullWidth /> */}
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Re Enter New Number</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={MobilChange?.ReEnter}
                name="email"
                id={`outlined-adornment`}
                placeholder="Re Enter New Number"
                sx={{
                  border: "",
                  height: "40px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                }}
                onChange={(e) => { handleOnChange(e.target.value, "ReEnter") }}
                InputLabelProps={{
                  sx: {
                    fontSize: "1.5rem",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "1.5rem",
                  },
                  maxLength: 10
                }}
              />
            </FormControl>
          </Stack>
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Reason</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={MobilChange?.reason}
                name="email"
                id={`outlined-adornment`}
                placeholder="Reason"
                sx={{
                  border: "",
                  height: "40px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                }}
                onChange={(e) => { handleOnChange(e.target.value, "reason") }}
                InputLabelProps={{
                  sx: {
                    fontSize: "1.5rem",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "1.5rem",
                  },
                }}
              />
            </FormControl>
          </Stack>
        </Box>
      </Box>


      <Button
        className="issuesButton"
        variant="contained"
        onClick={SaveUserData}
        sx={{
          bottom: "-15px",
          right: "20px",
          fontSize: "2rem",
          fontWeight: "600",
          borderRadius: "0.5rem",
          position: isMobile ? 'static' : "absolute",
          width: isMobile ? '100%' : '23e'
        }}>
        Submit
      </Button>
    </Box>
  );
});
export const HospitalDetailsIssue = React.memo(() => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [hospitalDetailsChange, sethospitalDetailsChange] = useState({
    customerHelpTitleNo: localStorage.getItem("customerHelpTitleID"),
    questionId: localStorage.getItem("selectedIssue"),
    customerID: null,
    presentHospoital: "",
    NewHospital: "",
    locationOrBranch: "",
    reason: ""
  })

  const dispatch = useDispatch();

  const handleOnHospitalChange = (value, name) => {
    sethospitalDetailsChange((data) => ({
      ...data,
      [name]: value
    }))
  };

  const SaveUserHospitalData = () => {
    console.log("cehck data hospitalDetailsChange 12345678 ", hospitalDetailsChange);
    dispatch(addHospitalDetailsChange(hospitalDetailsChange))
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "Column",
        alignItems: "start",
        gap: "2rem",
        position: "relative",
        border: "1px solid #2B2E64",
        borderRadius: "1.5rem",
        padding: "1rem",
        height: "85%",
        background: "white",
      }}
    >
      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: "1.5rem",
          padding: "1rem",
        }}
      >
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}> {localStorage.getItem("selectedIssueName")}</Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ marginTop: "50px" }}>
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Present Hospital</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={hospitalDetailsChange?.presentHospoital}
                name="email"
                id={`outlined-adornment`}
                placeholder="Present Hospoital"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnHospitalChange(e.target.value, "presentHospoital") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
        </Box>

        <Box sx={{ marginTop: "50px" }}>

          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>New Hospital</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={hospitalDetailsChange?.NewHospital}
                name="email"
                id={`outlined-adornment`}
                placeholder="New Hospoital"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnHospitalChange(e.target.value, "NewHospital") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
        </Box>
        <Box sx={{ marginTop: "50px" }}>

          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Location/Branch</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={hospitalDetailsChange?.locationOrBranch}
                name="email"
                id={`outlined-adornment`}
                placeholder="Location/Branch"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnHospitalChange(e.target.value, "locationOrBranch") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Reason</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={hospitalDetailsChange?.reason}
                name="email"
                id={`outlined-adornment`}
                placeholder="Reason"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnHospitalChange(e.target.value, "reason") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
        </Box>
      </Box>

      <Button className="issuesButton" variant="contained" onClick={SaveUserHospitalData} sx={{ bottom: "-15px", right: "20px", fontSize: "2rem", fontWeight: "600", borderRadius: "0.5rem", position: isMobile ? 'static' : "absolute", width: isMobile ? '100%' : '23e' }}>
        Submit
      </Button>
    </Box>
  );
});
export const ExecutiveDetailsIssue = React.memo(() => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [executiveChange, setExecutiveChange] = useState({
    customerHelpTitleNo: localStorage.getItem("customerHelpTitleID"),
    questionId: localStorage.getItem("selectedIssue"),
    customerID: null,
    areaName: "",
    pincode: "",
    reason: ""
  })

  const dispatch = useDispatch();

  const handleOnExecutiveChange = (value, name) => {

    const exp = /^\d*$/
    if (name == "pincode" && !exp.test(value)) {
      return
    }
    setExecutiveChange((data) => ({
      ...data,
      [name]: value
    }))
  };

  const SaveUserExecutiveData = () => {
    console.log("cehck data executiveChange 12345678 ", executiveChange);
    dispatch(addExecutiveDetails(executiveChange))
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "Column",
        alignItems: "start",
        gap: "2rem",
        position: "relative",
        border: "1px solid #2B2E64",
        borderRadius: "1.5rem",
        padding: "1rem",
        height: "85%",
        background: "white",
      }}
    >
      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: "1.5rem",
          padding: "1rem",
        }}
      >
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}> {localStorage.getItem("selectedIssueName")}</Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ marginTop: "50px" }}>
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Area Name</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={executiveChange?.areaName}
                name="email"
                id={`outlined-adornment`}
                placeholder="Area Name"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnExecutiveChange(e.target.value, "areaName") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
        </Box>

        <Box sx={{ marginTop: "50px" }}>

          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Pincode</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={executiveChange?.pincode}
                name="email"
                id={`outlined-adornment`}
                placeholder="Pincode"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnExecutiveChange(e.target.value, "pincode") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", }, maxLength: 6 }}
              />
            </FormControl>
          </Stack>
        </Box>
        <textarea
          style={{
            marginTop: "50px",
            alignItems: "flex-start",
            fontSize: "2rem",
            width: "100%",
            border: "1px solid #e5e5e5",
            height: "80%",
            borderRadius: "1rem",
            padding: "1rem"
          }}
          variant="outlined"
          onChange={(e) => { handleOnExecutiveChange(e.target.value, "reason") }}
          aria-label="Demo input"
          multiline
          value={executiveChange?.reason}
          placeholder="If any issues comment here..." />
      </Box>

      <Button className="issuesButton" variant="contained" onClick={SaveUserExecutiveData} sx={{ bottom: "-15px", right: "20px", fontSize: "2rem", fontWeight: "600", borderRadius: "0.5rem", position: isMobile ? 'static' : "absolute", width: isMobile ? '100%' : '23e' }}>
        Submit
      </Button>
    </Box>
  );
});

const options = ["Pan Card", "Aadhar Card", "Passport", "Voter Id", "Driving Licence", "Other"];
export const NomineeDetailsIssue = React.memo(() => {
  const [selectedValue, setSelectedValue] = useState("");
  const [nominne, setNominne] = useState({
    customerHelpTitleNo: localStorage.getItem("customerHelpTitleID"),
    questionId: localStorage.getItem("selectedIssue"),
    customerID: null,
    NomineeOrGaurdianName: "",
    relationship: "",
    mobileNumber: "",
    address: "",
    idProof: "",
    idProofNo: "",
    other: ""
  })
  const dispatch = useDispatch();

  const handleOnNomineeChange = (value, name) => {
    const exp = /^\d*$/
    if (name == "mobileNumber" && !exp.test(value)) {
      return
    }
    setNominne((data) => ({
      ...data,
      [name]: value
    }))
  };

  const SaveUserNomineeData = () => {
    console.log("cehck data nominne 12345678 ", nominne);
    dispatch(addNomineeDetailsChange(nominne))
  }

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setNominne((data) => ({
      ...data,
      ['idProof']: event.target.value
    }))
  };

  const chunkedOptions = [options.slice(0, 3), options.slice(3)];
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "Column",
        alignItems: "start",
        gap: "2rem",
        position: "relative",
        border: "1px solid #2B2E64",
        borderRadius: "1.5rem",
        padding: "1rem",
        height: "85%",
        background: "white",
      }}
    >
      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: "1.5rem",
          padding: "1rem",
        }}
      >
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}> {localStorage.getItem("selectedIssueName")}</Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ marginTop: "30px" }}>
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Name of Nominee / Gaurdian</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={nominne?.NomineeOrGaurdianName}
                name="email"
                id={`outlined-adornment`}
                placeholder="Name of Nominee / Gaurdian"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnNomineeChange(e.target.value, "NomineeOrGaurdianName") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
        </Box>

        <Box sx={{ marginTop: "30px" }}>

          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Relationship</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={nominne?.relationship}
                name="email"
                id={`outlined-adornment`}
                placeholder="Relationship"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnNomineeChange(e.target.value, "relationship") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
        </Box>
        <Box sx={{ marginTop: "30px" }}>

          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Mobile</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={nominne?.mobileNumber}
                name="email"
                id={`outlined-adornment`}
                placeholder="Mobile"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnNomineeChange(e.target.value, "mobileNumber") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
        </Box>

        <Box sx={{ marginTop: "30px" }}>

          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Address</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={nominne?.address}
                name="email"
                id={`outlined-adornment`}
                placeholder="Address"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnNomineeChange(e.target.value, "address") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", marginTop: "30px", gap: isMobile ? "1rem" : "6rem" }}>
          <Typography
            InputLabelProps={{
              sx: {
                fontSize: "1.5rem",
              },
            }}
            InputProps={{
              sx: {
                fontSize: "1.5rem",
              },
            }}
            sx={{ fontSize: "2rem", fontWeight: "600", whiteSpace: "nowrap" }}
          >
            {" "}
            ID proof
          </Typography>

          <RadioGroup sx={{ width: "90%" }} value={selectedValue} onChange={handleChange}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "1rem" }}>
                {options.slice(0, 3).map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
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
                    label={<Typography variant="h4">{option}</Typography>} // Use Typography for label
                  />
                ))}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                {options.length > 3 && (
                  <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
                    {options.slice(3).map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
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
                        label={<Typography variant="h4">{option}</Typography>} // Use Typography for label
                      />
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          </RadioGroup>
        </Box>
        <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", marginTop: "10px", justifyContent: "space-between", alignItems: isMobile ? "start" : "center" }}>

          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Id proof Number</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={nominne?.idProofNo}
                name="email"
                id={`outlined-adornment`}
                placeholder="Id Proof No"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnNomineeChange(e.target.value, "idProofNo") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", marginTop: "30px", justifyContent: "space-between", alignItems: isMobile ? "start" : "center" }}>
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>If other please specify</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={nominne?.other}
                name="email"
                id={`outlined-adornment`}
                placeholder="other"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnNomineeChange(e.target.value, "other") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
        </Box>
      </Box>

      <Button className="issuesButton" variant="contained" onClick={SaveUserNomineeData}
        sx={{ bottom: "-15px", right: "20px", fontSize: "2rem", fontWeight: "600", borderRadius: "0.5rem", position: isMobile ? 'static' : "absolute", width: isMobile ? '100%' : '23e' }}>
        Submit
      </Button>
    </Box>
  );
});

export const CommunicationDetailsIssue = React.memo(() => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [communication, setCommunication] = useState({
    customerHelpTitleNo: localStorage.getItem("customerHelpTitleID"),
    questionId: localStorage.getItem("selectedIssue"),
    customerID: null,
    addressLine1: "",
    addressLine2: "",
    nearlandMark: "",
    city: 748596,
    state: 1699,
    pincode: "",
    country: 352,
    ifPermanentAddressIsSameAsCorrespondence: null
  })
  const dispatch = useDispatch();

  const handleOnCommunicationChange = (value, name) => {
    const exp = /^\d*$/
    if (name == "pincode" && !exp.test(value)) {
      return
    }
    setCommunication((data) => ({
      ...data,
      [name]: value
    }))
  };


  const handleCheckChange = (event, name) => {
    // setData((prevData) => ({
    //     ...prevData,
    //     [name]: { ...prevData[name], value: event.target.checked, errorStatus: false, errorMessage: "" },
    // }));

    setCommunication((data) => ({
      ...data,
      [name]: event.target.checked
    }))
  }

  const SaveUserCommunicationData = () => {
    console.log("cehck data communication 12345678 ", communication);
    dispatch(addCommunicationDetails(communication))
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "Column",
        alignItems: "start",
        gap: "2rem",
        position: "relative",
        border: "1px solid #2B2E64",
        borderRadius: "1.5rem",
        padding: "1rem",
        height: "85%",
        background: "white",
      }}
    >
      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: "1.5rem",
          padding: "1rem",
        }}
      >
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}> {localStorage.getItem("selectedIssueName")} </Typography>
      </Box>

      <Box>
        <Box sx={{ marginTop: "30px" }}>
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Address Line 1</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={communication?.addressLine1}
                name="email"
                id={`outlined-adornment`}
                placeholder="Address Line 1"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnCommunicationChange(e.target.value, "addressLine1") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Address Line 2</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={communication?.addressLine2}
                name="email"
                id={`outlined-adornment`}
                placeholder="Address Line 2"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnCommunicationChange(e.target.value, "addressLine2") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", marginTop: "30px", gap: "4rem" }}>

          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>"Near landmark</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={communication?.nearlandMark}
                name="email"
                id={`outlined-adornment`}
                placeholder="Near landMark"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnCommunicationChange(e.target.value, "nearlandMark") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>City</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={communication?.city}
                name="email"
                id={`outlined-adornment`}
                placeholder="city"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnCommunicationChange(e.target.value, "city") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>State</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={communication?.state}
                name="email"
                id={`outlined-adornment`}
                placeholder="state"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnCommunicationChange(e.target.value, "state") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>

        </Box>
        <Box sx={{ display: "flex", marginTop: "30px", gap: "4rem" }}>
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Picode</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={communication?.pincode}
                name="email"
                id={`outlined-adornment`}
                placeholder="Pincode"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnCommunicationChange(e.target.value, "pincode") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>
          <Stack sx={{ width: "100%", gap: "0.5rem" }} key={"key"}>
            <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>Country</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                readOnly={false}
                type="text"
                value={communication?.country}
                name="email"
                id={`outlined-adornment`}
                placeholder="country"
                sx={{ border: "", height: "40px", width: "100%", padding: "10px", borderRadius: "8px", }}
                onChange={(e) => { handleOnCommunicationChange(e.target.value, "country") }}
                InputLabelProps={{ sx: { fontSize: "1.5rem", } }}
                InputProps={{ sx: { fontSize: "1.5rem", } }}
              />
            </FormControl>
          </Stack>

        </Box>
      </Box>
      <Box sx={{ display: "flex", marginTop: "10px", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", whiteSpace: isMobile ? "pre-wrap" : "nowrap" }}> Is permanent address is same as correspondance address</Typography>

        <FormControlLabel
          control={
            <Checkbox
              // defaultChecked
              // value={communication?.ifPermanentAddressIsSameAsCorrespondence}
              onChange={(e) => handleCheckChange(e, 'ifPermanentAddressIsSameAsCorrespondence')}
              name="ifPermanentAddressIsSameAsCorrespondence"
              checked={communication?.ifPermanentAddressIsSameAsCorrespondence}
            />}
          labelPlacement="end"
          sx={{
            height: "4rem",
            width: "4rem",
            "& .MuiSvgIcon-root": {
              fontSize: "3rem",
            },
          }}
        />
      </Box>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", marginTop: "30px", justifyContent: "space-between", alignItems: "start" }}>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", whiteSpace: isMobile ? "pre-wrap" : "nowrap" }}> Address (If diffrent from above)</Typography>

        {/* <TextField
          InputLabelProps={{
            sx: {
              fontSize: "1.5rem",
            },
          }}
          InputProps={{
            sx: {
              fontSize: "1.5rem",
            },
          }}
          id="Address"
          label="Address"
          variant="standard"
          fullWidth
        /> */}

      </Box>

      <Button className="issuesButton"
        variant="contained"
        onClick={SaveUserCommunicationData}
        sx={{ bottom: "-15px", right: "20px", fontSize: "2rem", fontWeight: "600", borderRadius: "0.5rem", position: isMobile ? 'static' : "absolute", width: isMobile ? '100%' : '23e' }}>
        Submit
      </Button>
    </Box>
  );
});

export const issueComponents = {
  "Any details issue": <DetailsIssue />,
  "Mobile Number change": <MobileNumberIssue />,
  "Hospital details change": <HospitalDetailsIssue />,
  "Executive details in your area": <ExecutiveDetailsIssue />,
  "Nominee details change": <NomineeDetailsIssue />,
  "Communication details change": <CommunicationDetailsIssue />,
};
export default Help;
