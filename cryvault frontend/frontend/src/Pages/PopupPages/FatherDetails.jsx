import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import fatherImage from "../../assets/images/father image.png";
import card from "../../assets/images/card.png";
import { ToastContainer, toast } from "react-toastify";
import { uploadSingleFileApi } from '../../redux/reducers/api';
import axios from "axios";
import { validateEmail, validatePhoneNumber } from "../../Components/Contact/ContactForm";
import { GetTypeOfProof, getAnnexureInfo } from '../../redux/reducers/DashboardReducer'
import { useDispatch, useSelector } from "react-redux";
import { getTypeOfProofList } from "../../globalFunctions"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import { MultipleSelect, SingleSelect } from '../CheckoutDetails';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { addOrupdateAnnexureInfo } from "../../redux/reducers/UserReducer";
import { formatDate, formatDateYYYYMMDD } from "../../globalFunctions"

const redStarStyle = {
  color: "red",
  marginLeft: "4px",
};

const FatherDetails = forwardRef((props, ref) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  var { handleNext, handlePrev, currentPage, setCurrentPage, TOTAL_PAGES } = props
  const [data, setData] = useState({
    ExpectantFatherName: {
      value: "",
      placeholder: "Expectant Father's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherName",
      id: "ExpectantFatherName",
    },
    ExpectantFatherDOB: {
      value: "",
      placeholder: "Date of Birth",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherDOB",
      id: "ExpectantFatherDOB",
    },
    ExpectantFatherEmail: {
      value: "",
      placeholder: "Email Address",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherEmail",
      id: "ExpectantFatherEmail",
    },
    ExpectantFatherMobile: {
      value: "",
      placeholder: "Phone Number",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherMobile",
      id: "ExpectantFatherMobile",
    },
    ExpectantFatherOccupation: {
      value: "",
      placeholder: "Occupation",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherOccupation",
      id: "ExpectantFatherOccupation",
    },
    ExpectantFatherDesignation: {
      value: "",
      placeholder: "Designation",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherDesignation",
      id: "ExpectantFatherDesignation",
    },
    ExpectantFatherOrganizationName: {
      value: "",
      placeholder: "Organization",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherOrganizationName",
      id: "ExpectantFatherOrganizationName",
    },
    ExpectantFatherIDproof: {
      value: "",
      placeholder: "ID Proof",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherIDproof",
      id: "ExpectantFatherIDproof",
    },
    ExpectantFatherIdproofNo: {
      value: "",
      placeholder: "ID proof Number",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherIdproofNo",
      id: "ExpectantFatherIdproofNo",
    },
    ExpectantFatherOtherInfo: {
      value: "",
      placeholder: "If Other, please specify",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantFatherOtherInfo",
      id: "ExpectantFatherOtherInfo",
    }
  });
  const dispatch = useDispatch()
  const [dataFile, setDataFile] = useState({
    ExpectantFatherIDproofPhoto: "",
    ExpectantFatherProfilePhoto: ""
  })

  const [customerAnnexureInformationId, setCustomerAnnexureInformationId] = useState(null)

  const [inputType, setInputType] = useState("text");
  const IDproofDetails = useSelector((state) => state.dashboard.typeOfProofData);
  const IDList = getTypeOfProofList(IDproofDetails);
  const SubscribedInnerPageData = useSelector((state) => state.dashboard.SubscribedUserData);


  useEffect(() => {
    async function getCustomerFatherData() {
      setCustomerAnnexureInformationId(SubscribedInnerPageData?.customerAnnexureInformationId)
      if (SubscribedInnerPageData && SubscribedInnerPageData.CustomerClientFatherDetails) {
        for (let item in SubscribedInnerPageData.CustomerClientFatherDetails) {
          for (let item1 in data) {
            if (item1 == item) {
              data[item1].value = item == "ExpectantFatherDOB" ? formatDate(SubscribedInnerPageData.CustomerClientFatherDetails[item]) : SubscribedInnerPageData.CustomerClientFatherDetails[item]
            }
          }
          for (let item2 in dataFile) {
            if (item2 == item) {
              dataFile[item2] = SubscribedInnerPageData.CustomerClientFatherDetails[item]
            }
          }
        }
      }
    }
    getCustomerFatherData()
  }, [SubscribedInnerPageData]);

  useEffect(() => {
    // e.preventDefault();
    getAnnexureInfo()
  }, [handlePrev]);


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const exp = /^\d*$/
    if (name == "ExpectantFatherMobile" && !exp.test(value)) {
      return
    }
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));
  };

  const handleChange = (event, name) => {
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: event, errorStatus: false, errorMessage: "" },
    }));
  }

  useImperativeHandle(ref, () => ({
    getFatherData: () => {
      let isMobileInvalid;
      if (data.ExpectantFatherMobile.value) {
        isMobileInvalid = !validatePhoneNumber(data.ExpectantFatherMobile.value, "91");
      }

      if (!data.ExpectantFatherName.value) {
        setData((prevData) => ({
          ...prevData,
          ExpectantFatherName: {
            ...prevData.ExpectantFatherName,
            errorStatus: true,
            errorMessage: "Father Name is required.",
          },
        }));
        return;
      }
      if (!data.ExpectantFatherDOB.value) {
        setData((prevData) => ({
          ...prevData,
          ExpectantFatherDOB: {
            ...prevData.ExpectantFatherDOB,
            errorStatus: true,
            errorMessage: "Date of Birth is required.",
          },
        }));
        return;
      }
      if (!validateEmail(data.ExpectantFatherEmail.value)) {
        setData((prevData) => ({
          ...prevData,
          ExpectantFatherEmail: {
            ...prevData.ExpectantFatherEmail,
            errorStatus: true,
            errorMessage: "Email Address is required.",
          },
        }));
        return;
      }
      if (!data.ExpectantFatherMobile.value) {
        setData((prevData) => ({
          ...prevData,
          ExpectantFatherMobile: {
            ...prevData.ExpectantFatherMobile,
            errorStatus: true,
            errorMessage: "Phone Number is required.",
          },
        }));
        return;
      }
      if (isMobileInvalid) {
        setData((prevData) => ({
          ...prevData,
          ExpectantFatherMobile: {
            ...prevData.ExpectantFatherMobile,
            errorStatus: true,
            errorMessage: "Enter Valid Phone Number",
          },
        }));
        return;
      }
      if (!data.ExpectantFatherOccupation.value) {
        setData((prevData) => ({
          ...prevData,
          ExpectantFatherOccupation: {
            ...prevData.ExpectantFatherOccupation,
            errorStatus: true,
            errorMessage: "Occupation is required.",
          },
        }));
        return;
      }
      if (!data.ExpectantFatherDesignation.value) {
        setData((prevData) => ({
          ...prevData,
          ExpectantFatherDesignation: {
            ...prevData.ExpectantFatherDesignation,
            errorStatus: true,
            errorMessage: "Designation is required.",
          },
        }));
        return;
      }
      if (!data.ExpectantFatherOrganizationName.value) {
        setData((prevData) => ({
          ...prevData,
          ExpectantFatherOrganizationName: {
            ...prevData.ExpectantFatherOrganizationName,
            errorStatus: true,
            errorMessage: "Organization Name is required.",
          },
        }));
        return;
      }
      if (!data.ExpectantFatherIDproof.value) {
        setData((prevData) => ({
          ...prevData,
          ExpectantFatherIDproof: {
            ...prevData.ExpectantFatherIDproof,
            errorStatus: true,
            errorMessage: "ID Proof is required.",
          },
        }));
        return;
      }
      if (!data.ExpectantFatherIdproofNo.value) {
        setData((prevData) => ({
          ...prevData,
          ExpectantFatherIdproofNo: {
            ...prevData.ExpectantFatherIdproofNo,
            errorStatus: true,
            errorMessage: "ID Proof Number is required.",
          },
        }));
        return;
      }

      const dataToSend = {
        ExpectantFatherName: data.ExpectantFatherName.value,
        ExpectantFatherDOB: formatDateYYYYMMDD(data.ExpectantFatherDOB.value),
        ExpectantFatherEmail: data.ExpectantFatherEmail.value,
        ExpectantFatherMobile: data.ExpectantFatherMobile.value,
        ExpectantFatherOccupation: data.ExpectantFatherOccupation.value,
        ExpectantFatherDesignation: data.ExpectantFatherDesignation.value,
        ExpectantFatherOrganizationName: data.ExpectantFatherOrganizationName.value,
        ExpectantFatherIDproof: data.ExpectantFatherIDproof.value,
        ExpectantFatherIdproofNo: data.ExpectantFatherIdproofNo.value,
        ExpectantFatherOtherInfo: data.ExpectantFatherOtherInfo.value,
        ExpectantFatherIDproofPhoto: dataFile.ExpectantFatherIDproofPhoto,
        ExpectantFatherProfilePhoto: dataFile.ExpectantFatherProfilePhoto
      };


      if (currentPage < TOTAL_PAGES) {
        setCurrentPage(currentPage + 1);
      }

      dispatch(addOrupdateAnnexureInfo({ CustomerClientFatherDetails: dataToSend, customerAnnexureInformationId: customerAnnexureInformationId }))

    }
  }))

  useEffect(() => {
    dispatch(GetTypeOfProof());
    dispatch(getAnnexureInfo());
  }, []);


  const fileIDProofInputRef = useRef(null);
  const fileProfileInputRef = useRef(null);


  const handleButtonClick = () => {
    fileIDProofInputRef.current.click();
  };
  const handleProfileButtonClick = () => {
    fileProfileInputRef.current.click();
  };

  const UploadFile = async (name, fileName, e) => {
    // alert(name);
    const apiUrl = uploadSingleFileApi();
    const token = sessionStorage.getItem("token");
    const headers = {
      'Content-Type': 'multipart/form-data',
      authorization: `${token}`
    };
    const formData = new FormData();
    formData.append('file', e?.target?.files?.[0]);
    formData.append('folder', name);
    const response = await axios.post(apiUrl, formData, { headers });
    if (response?.data?.status == 200) {
      toast.success(response?.data?.message)
      setDataFile((prevData) => ({
        ...prevData,
        [fileName]: response?.data?.data?.key
      }));
    }
    else {
      toast.error(response?.data?.message)
    }
  }

  return (
    <Box sx={{ display: "flex", width: "100%" }} className="conatiner">
      <Box sx={{ width: "60%", border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Father Details</Typography>
        <Box sx={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "2rem", gridRowGap: "3rem" }} className="fatherDetails">
          {Object.entries(data).map(([key, fieldData]) =>
            fieldData.name == "ExpectantFatherDOB" ? (
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder} <span style={redStarStyle}>*</span></InputLabel>
                <FormControl variant="outlined" size="small">
                  <input
                    style={{ border: fieldData.errorStatus ? "1px solid red" : "none" }}
                    onChange={handleOnChange}
                    key={data[0]}
                    placeholder={fieldData.placeholder}
                    className={`dashboardInput fullWidth`}
                    label={fieldData.placeholder} type={inputType}
                    onFocus={() => setInputType("date")}
                    onBlur={() => setInputType("text")}
                    value={fieldData.value}
                    name={fieldData.name}
                    size="small" />

                  {fieldData.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{fieldData.errorMessage}</Typography> : null}
                </FormControl>
              </Stack>
            ) : fieldData.name == "ExpectantFatherIDproof" ? (
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder} <span style={redStarStyle}>*</span></InputLabel>
                <FormControl variant="outlined" size="small">
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={IDList}
                    value={fieldData.value}
                    onChange={(e) => {
                      handleChange(e, "ExpectantFatherIDproof");
                    }}
                  />
                  {fieldData.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{fieldData.errorMessage}</Typography> : null}
                </FormControl>
              </Stack>

            ) : (
              <>
                <Stack sx={{ width: fieldData.name == "ExpectantFatherOrganizationName" || fieldData.name == "ExpectantFatherOtherInfo" ? "208%" : "100%", gap: "0.5rem" }} key={key}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder}
                    {fieldData.name != "ExpectantFatherOtherInfo" ? <span style={redStarStyle}>*</span> : null}</InputLabel>
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
                      inputProps={fieldData.name == "ExpectantFatherMobile" ? { maxLength: 10 } : { maxLength: 200 }}
                      onChange={handleOnChange}
                    />
                    {fieldData.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{fieldData.errorMessage}</Typography> : null}
                  </FormControl>
                </Stack>
                {fieldData.name == "ExpectantFatherOrganizationName" || fieldData.name == "ExpectantFatherOtherInfo" ? <br /> : null}
              </>
            )
          )}
        </Box>
      </Box>

      <Box sx={{ flexDirection: "column", display: "flex", width: "45%" }} className="fatherPicture">
        <Box className="fatherPhoto" sx={{ border: "1px solid #e5e5e5", gap: "1rem", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Upload Father Picture</Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            <Box sx={{ border: "1px solid #e5e5e5", gap: "1rem", display: "flex", padding: "2rem", borderRadius: "1rem" }}>

              {dataFile.ExpectantFatherProfilePhoto ?
                <Box
                  component="img"
                  src={"https://flyingbyts.s3.ap-south-2.amazonaws.com/" + dataFile.ExpectantFatherProfilePhoto}
                  alt="father Image"
                  sx={{ width: 150, height: 150, marginRight: 2 }}
                /> :
                <Box
                  component="img"
                  src={fatherImage}
                  alt="father Image"
                  sx={{ width: 150, height: 150, marginRight: 2 }}
                />
              }
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "1.5rem", textAlign: "center", color: "gray" }}>Drop your new Profile Image here maximum (2MB)</Typography>
                <Typography sx={{ fontSize: "1.5rem", textAlign: "center", color: "gray" }}>Supported Formats: JPG, PNG, SVG</Typography>
                <Button sx={{ alignSelf: "center", fontSize: "1rem", textTransform: "none", marginTop: "1rem" }} variant="contained" disabled>
                  Choose File
                </Button>
              </Box>
            </Box>
            <Button variant="contained" sx={{ alignSelf: "end", fontSize: "1rem", textTransform: "none" }} onClick={handleProfileButtonClick}>
              Upload Image
            </Button>
            <input
              type="file"
              ref={fileProfileInputRef}
              style={{ display: 'none' }}
              onChange={(e) => UploadFile("Profile", 'ExpectantFatherProfilePhoto', e)}
            />
          </Box>
        </Box>
        <Box className="fatherID" sx={{ border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Upload Id Proof</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            <Box sx={{ border: "1px solid #e5e5e5", gap: "1rem", display: "flex", padding: "2rem", borderRadius: "1rem" }}>
              {/* <Box>
                {dataFile.ExpectantFatherIDproofPhoto ?
                  <img src={"https://flyingbyts.s3.ap-south-2.amazonaws.com/" + dataFile.ExpectantFatherIDproofPhoto} />
                  :
                  <img src={card} />}
              </Box> */}

              {dataFile.ExpectantFatherIDproofPhoto ?
                <Box
                  component="img"
                  src={"https://flyingbyts.s3.ap-south-2.amazonaws.com/" + dataFile.ExpectantFatherIDproofPhoto}
                  alt="father Id"
                  sx={{ width: 150, height: 150, marginRight: 2 }}
                /> :
                <Box
                  component="img"
                  src={card}
                  alt="father Id"
                  sx={{ width: 150, height: 150, marginRight: 2 }}
                />
              }
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "1.5rem", textAlign: "center", color: "gray" }}>Drop your ID Proof here maximum (2MB)</Typography>
                <Typography sx={{ fontSize: "1.5rem", textAlign: "center", color: "gray" }}>Supported Formats: JPG, PNG, SVG</Typography>
                <Button sx={{ alignSelf: "center", fontSize: "1rem", textTransform: "none", marginTop: "1rem" }} variant="contained" disabled>
                  Choose File
                </Button>
              </Box>
            </Box>
            <Button variant="contained" sx={{ alignSelf: "end", fontSize: "1rem", textTransform: "none" }} onClick={handleButtonClick}>
              Upload Image
            </Button>
            <input
              type="file"
              ref={fileIDProofInputRef}
              style={{ display: 'none' }}
              onChange={(e) => UploadFile("IDProof", 'ExpectantFatherIDproofPhoto', e)}
            />
          </Box>
        </Box>
      </Box>
    </Box>

  );
});

export default FatherDetails;
