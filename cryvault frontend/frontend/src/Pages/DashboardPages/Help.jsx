import { Select, MenuItem, Button, Box, Card, Typography, useMediaQuery, Input, TextField, RadioGroup, FormControlLabel, Checkbox, Grid, FormControl, Radio } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHelpDetails } from "../../redux/reducers/DashboardReducer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Help = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const helpList = useSelector((state) => state.dashboard.helpList);
  const buttonData = helpList?.[0]?.customerHelpTitle?.[0]?.questions;
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => setShowDropdown(!showDropdown);

  const [selectedIssue, setSelectedIssue] = useState(null); // Initial state

  const handleChange = (e) => {
    setSelectedIssue(e.target.id);
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
        <Box  p={2} sx={{ backgroundColor: "#2b2e64" }}>
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
                  <Button onClick={handleChange} id={item.name} className="issuesButton" sx={{ background: "#2B2E64", fontSize: "2rem", fontWeight: "600" }} variant="contained">
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

      <textarea style={{ alignItems: "flex-start", fontSize: "2rem", width: "100%", border: "1px solid #e5e5e5", height: "80%", borderRadius: "1rem", padding: "1rem" }} variant="outlined" aria-label="Demo input" multiline placeholder="If any issues comment here..." />
      <Button className="issuesButton" variant="contained" sx={{ bottom: "-15px", right: "20px", fontSize: "2rem", fontWeight: "600", borderRadius: "0.5rem", position: isMobile ? 'static' :  "absolute", width:isMobile?'100%' : '23e' }}>
        Submit
      </Button>
    </Box>
  );
});

export const MobileNumberIssue = React.memo(() => {
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
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}> Mobile Number change</Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ marginTop: "50px" }}>
          <TextField
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
            id="baby Name"
            label="Existing Number"
            variant="standard"
            fullWidth
          />
        </Box>

        <Box sx={{ marginTop: "50px" }}>
          <TextField
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
            id="date of Birth"
            label="New Number"
            variant="standard"
            fullWidth
          />
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <TextField id="time of Birth" label="Re Enter New Number" variant="standard" fullWidth />
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <TextField
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
            id="Reason"
            label="Reason"
            variant="standard"
            fullWidth
          />
        </Box>
      </Box>

      <Button className="issuesButton" variant="contained" sx={{ bottom: "-15px", right: "20px", fontSize: "2rem", fontWeight: "600", borderRadius: "0.5rem",  position: isMobile ? 'static' :  "absolute", width:isMobile?'100%' : '23e' }}>
        Submit
      </Button>
    </Box>
  );
});
export const HospitalDetailsIssue = React.memo(() => {
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
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}> Hospital details change</Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ marginTop: "50px" }}>
          <TextField
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
            id="baby Name"
            label="Present Hospital"
            variant="standard"
            fullWidth
          />
        </Box>

        <Box sx={{ marginTop: "50px" }}>
          <TextField
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
            id="date of Birth"
            label="New Hospital"
            variant="standard"
            fullWidth
          />
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <TextField
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
            id="time of Birth"
            label="Location/Branch"
            variant="standard"
            fullWidth
          />
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <TextField
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
            id="Reason"
            label="Reason"
            variant="standard"
            fullWidth
          />
        </Box>
      </Box>

      <Button className="issuesButton" variant="contained" sx={{ bottom: "-15px", right: "20px", fontSize: "2rem", fontWeight: "600", borderRadius: "0.5rem",  position: isMobile ? 'static' :  "absolute", width:isMobile?'100%' : '23e' }}>
        Submit
      </Button>
    </Box>
  );
});
export const ExecutiveDetailsIssue = React.memo(() => {
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
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}> Hospital details change</Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ marginTop: "50px" }}>
          <TextField
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
            id="Area Name"
            label="Area Name"
            variant="standard"
            fullWidth
          />
        </Box>

        <Box sx={{ marginTop: "50px" }}>
          <TextField
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
            id="Pincode"
            label="Pincode"
            variant="standard"
            fullWidth
          />
        </Box>
        <textarea style={{ marginTop: "50px", alignItems: "flex-start", fontSize: "2rem", width: "100%", border: "1px solid #e5e5e5", height: "80%", borderRadius: "1rem", padding: "1rem" }} variant="outlined" aria-label="Demo input" multiline placeholder="If any issues comment here..." />
      </Box>

      <Button className="issuesButton" variant="contained" sx={{ bottom: "-15px", right: "20px", fontSize: "2rem", fontWeight: "600", borderRadius: "0.5rem",  position: isMobile ? 'static' :  "absolute", width:isMobile?'100%' : '23e' }}>
        Submit
      </Button>
    </Box>
  );
});

const options = ["Pan Card", "Aadhar Card", "Passport", "Voter Id", "Driving Licence", "Other"];
export const NomineeDetailsIssue = React.memo(() => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}> Nominee details change</Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ marginTop: "30px" }}>
          <TextField
            id="Name of Nominee"
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
            label="Name of Nominee / Gaurdian"
            variant="standard"
            fullWidth
          />
        </Box>

        <Box sx={{ marginTop: "30px" }}>
          <TextField
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
            id="Relationship"
            label="Relationship"
            variant="standard"
            fullWidth
          />
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <TextField
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
            id="Mobile"
            label="Mobile"
            variant="standard"
            fullWidth
          />
        </Box>

        <Box sx={{ marginTop: "30px" }}>
          <TextField
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
          />
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
          <Typography sx={{ fontSize: "2rem", fontWeight: "600", whiteSpace: "nowrap" }}> Id proof Number</Typography>

          <TextField
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
            sx={{ width: "70%" }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", marginTop: "30px", justifyContent: "space-between", alignItems: isMobile ? "start" : "center" }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600", whiteSpace: "nowrap" }}> If other please specify</Typography>

          <TextField
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
            sx={{ width: "65%" }}
          />
        </Box>
      </Box>

      <Button className="issuesButton" variant="contained" sx={{ bottom: "-15px", right: "20px", fontSize: "2rem", fontWeight: "600", borderRadius: "0.5rem",  position: isMobile ? 'static' :  "absolute", width:isMobile?'100%' : '23e' }}>
        Submit
      </Button>
    </Box>
  );
});
export const CommunicationDetailsIssue = React.memo(() => {
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
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>Communication details change</Typography>
      </Box>

      <Box>
        <Box sx={{ marginTop: "30px" }}>
          <TextField
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
            label="Address Line 1"
            variant="standard"
            fullWidth
          />
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <TextField
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
            label="Address Line 2"
            variant="standard"
            fullWidth
          />
        </Box>
        <Box sx={{ display: "flex", marginTop: "30px", gap: "4rem" }}>
          <TextField
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
            id="Near landmark"
            label="Near landmark"
            variant="standard"
            fullWidth
          />
          <TextField
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
            id="City"
            label="City"
            variant="standard"
            fullWidth
          />
          <TextField
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
            id="State"
            label="State"
            variant="standard"
            fullWidth
          />
        </Box>
        <Box sx={{ display: "flex", marginTop: "30px", gap: "4rem" }}>
          <TextField
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
            id="Picode"
            label="Picode"
            variant="standard"
            fullWidth
          />
          <TextField
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
            id="Country"
            label="Country"
            variant="standard"
            fullWidth
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", marginTop: "10px", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", whiteSpace: isMobile ? "pre-wrap" : "nowrap" }}> Is permanent address is same as correspondance address</Typography>

        <FormControlLabel
          control={<Checkbox defaultChecked />}
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

        <TextField
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
        />
      </Box>

      <Button className="issuesButton" variant="contained" sx={{ bottom: "-15px", right: "20px", fontSize: "2rem", fontWeight: "600", borderRadius: "0.5rem",  position: isMobile ? 'static' :  "absolute", width:isMobile?'100%' : '23e' }}>
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
