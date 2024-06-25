import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import motherImage from "../../assets/images/motherImage.png";
import card from "../../assets/images/card.png";
import { ToastContainer, toast } from "react-toastify";
import { uploadSingleFileApi } from '../../redux/reducers/api';
import axios from "axios";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { validateEmail, validatePhoneNumber } from "../../Components/Contact/ContactForm";
import { getTypeOfProofList } from "../../globalFunctions"
import { addOrupdateAnnexureInfo } from "../../redux/reducers/UserReducer"
import { useDispatch, useSelector } from "react-redux";
import { GetTypeOfProof, getAnnexureInfo } from '../../redux/reducers/DashboardReducer'
import moment from 'moment';
import { formatDate, formatDateYYYYMMDD } from "../../globalFunctions"
import { MultipleSelect, SingleSelect } from '../CheckoutDetails';
const redStarStyle = {
  color: "red",
  marginLeft: "4px",
};

const MotherDetails = forwardRef((props, ref) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  var { handleNext, handlePrev, currentPage, setCurrentPage, TOTAL_PAGES } = props
  const [data, setData] = useState({
    ExpectantMotherName: {
      value: "",
      placeholder: "Expectant Mother's Name",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherName",
      id: "ExpectantMotherName",
    },
    ExpectantMotherDOB: {
      value: "",
      placeholder: "Date of Birth",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherDOB",
      id: "ExpectantMotherDOB",
    },
    ExpectantMotherEmail: {
      value: "",
      placeholder: "Email Address",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherEmail",
      id: "ExpectantMotherEmail",
    },
    ExpectantMotherMobile: {
      value: "",
      placeholder: "Phone Number",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherMobile",
      id: "ExpectantMotherMobile",
    },
    ExpectantMotherOccupation: {
      value: "",
      placeholder: "Occupation",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherOccupation",
      id: "ExpectantMotherOccupation",
    },
    ExpectantMotherDesignation: {
      value: "",
      placeholder: "Designation",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherDesignation",
      id: "ExpectantMotherDesignation",
    },
    ExpectantMotherOrganizationName: {
      value: "",
      placeholder: "Organization",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherOrganizationName",
      id: "ExpectantMotherOrganizationName",
    },
    ExpectantMotherIDproof: {
      value: "",
      placeholder: "ID Proof",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherIDproof",
      id: "ExpectantMotherIDproof",
    },
    ExpectantMotherIdproofNo: {
      value: "",
      placeholder: "ID proof Number",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherIdproofNo",
      id: "ExpectantMotherIdproofNo",
    },
    ExpectantMotherOtherInfo: {
      value: "",
      placeholder: "If Other, please specify",
      errorMessage: "",
      errorStatus: false,
      name: "ExpectantMotherOtherInfo",
      id: "ExpectantMotherOtherInfo",
    }
  });
  const dispatch = useDispatch()
  const [dataFile, setDataFile] = useState({
    ExpectantMotherIDproofPhoto: "",
    ExpectantMotherProfilePhoto: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value, errorStatus: false, errorMessage: "" },
    }));
  };
  const [deliveryinputType, setDeliveryInputType] = useState("text");
  const [customerAnnexureInformationId, setCustomerAnnexureInformationId] = useState(null)


  const IDproofDetails = useSelector((state) => state.dashboard.typeOfProofData);
  const IDList = getTypeOfProofList(IDproofDetails);
  const SubscribedInnerPageData = useSelector((state) => state.dashboard.SubscribedUserData);
  useEffect(() => {
    async function getCustomerMotherData() {
      setCustomerAnnexureInformationId(SubscribedInnerPageData?.customerAnnexureInformationId)
      if (SubscribedInnerPageData && SubscribedInnerPageData.CustomerClientMotherDetails) {

        for (let item in SubscribedInnerPageData.CustomerClientMotherDetails) {
          for (let item1 in data) {
            if (item1 == item) {
              data[item1].value = item == "ExpectantMotherDOB" ? formatDate(SubscribedInnerPageData.CustomerClientMotherDetails[item]) : SubscribedInnerPageData.CustomerClientMotherDetails[item]
            }
          }
          for (let item2 in dataFile) {
            if (item2 == item) {
              dataFile[item2] = SubscribedInnerPageData.CustomerClientMotherDetails[item]
            }
          }
        }
      }
    }
    getCustomerMotherData()
  }, [SubscribedInnerPageData]);

  const handleOnDropDown = (event, name) => {
    setData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: event, errorStatus: false, errorMessage: "" },
    }));
  }
  useEffect(() => {
    getAnnexureInfo()
  }, [handlePrev]);

  useEffect(() => {
    dispatch(GetTypeOfProof());
    dispatch(getAnnexureInfo());
  }, []);


  useImperativeHandle(ref, () => ({
    getMotherDetails: () => {
      // let isMobileInvalid;
      // if (data.ExpectantMotherMobile.value) {
      //   isMobileInvalid = !validatePhoneNumber(data.ExpectantMotherMobile.value, "91");
      // }

      // if (!data.ExpectantMotherName.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ExpectantMotherName: {
      //       ...prevData.ExpectantMotherName,
      //       errorStatus: true,
      //       errorMessage: "Mother Name is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.ExpectantMotherDOB.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ExpectantMotherDOB: {
      //       ...prevData.ExpectantMotherDOB,
      //       errorStatus: true,
      //       errorMessage: "Date of Birth is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!validateEmail(data.ExpectantMotherEmail.value)) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ExpectantMotherEmail: {
      //       ...prevData.ExpectantMotherEmail,
      //       errorStatus: true,
      //       errorMessage: "Email Address is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.ExpectantMotherMobile.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ExpectantMotherMobile: {
      //       ...prevData.ExpectantMotherMobile,
      //       errorStatus: true,
      //       errorMessage: "Phone Number is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (isMobileInvalid) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ExpectantMotherMobile: {
      //       ...prevData.ExpectantMotherMobile,
      //       errorStatus: true,
      //       errorMessage: "Enter Valid Phone Number",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.ExpectantMotherOccupation.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ExpectantMotherOccupation: {
      //       ...prevData.ExpectantMotherOccupation,
      //       errorStatus: true,
      //       errorMessage: "Occupation is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.ExpectantMotherDesignation.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ExpectantMotherDesignation: {
      //       ...prevData.ExpectantMotherDesignation,
      //       errorStatus: true,
      //       errorMessage: "Designation is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.ExpectantMotherOrganizationName.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ExpectantMotherOrganizationName: {
      //       ...prevData.ExpectantMotherOrganizationName,
      //       errorStatus: true,
      //       errorMessage: "Organization Name is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.ExpectantMotherIDproof.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ExpectantMotherIDproof: {
      //       ...prevData.ExpectantMotherIDproof,
      //       errorStatus: true,
      //       errorMessage: "ID Proof is required.",
      //     },
      //   }));
      //   return;
      // }
      // if (!data.ExpectantMotherIdproofNo.value) {
      //   setData((prevData) => ({
      //     ...prevData,
      //     ExpectantMotherIdproofNo: {
      //       ...prevData.ExpectantMotherIdproofNo,
      //       errorStatus: true,
      //       errorMessage: "ID Proof Number is required.",
      //     },
      //   }));
      //   return;
      // }
      const dataToSend = {
        ExpectantMotherName: data.ExpectantMotherName.value,
        ExpectantMotherDOB: formatDateYYYYMMDD(data.ExpectantMotherDOB.value),
        ExpectantMotherEmail: data.ExpectantMotherEmail.value,
        ExpectantMotherMobile: data.ExpectantMotherMobile.value,
        ExpectantMotherOccupation: data.ExpectantMotherOccupation.value,
        ExpectantMotherDesignation: data.ExpectantMotherDesignation.value,
        ExpectantMotherOrganizationName: data.ExpectantMotherOrganizationName.value,
        ExpectantMotherIDproof: data.ExpectantMotherIDproof.value,
        ExpectantMotherIdproofNo: data.ExpectantMotherIdproofNo.value,
        ExpectantMotherOtherInfo: data.ExpectantMotherOtherInfo.value,
        ExpectantMotherIDproofPhoto: dataFile.ExpectantMotherIDproofPhoto,
        ExpectantMotherProfilePhoto: dataFile.ExpectantMotherProfilePhoto
      };

      if (currentPage < TOTAL_PAGES) {
        setCurrentPage(currentPage + 1);
      }

      dispatch(addOrupdateAnnexureInfo({ CustomerClientMotherDetails: dataToSend, customerAnnexureInformationId: customerAnnexureInformationId }))
    }
  }))


  const fileIDProofInputRef = useRef(null);
  const fileProfileInputRef = useRef(null);


  const handleButtonClick = () => {
    fileIDProofInputRef.current.click();
  };
  const handleProfileButtonClick = () => {
    fileProfileInputRef.current.click();
  };

  const handleChange = async (name, fileName, e) => {
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
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Mother Details</Typography>
        <Box sx={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "2rem", gridRowGap: "3rem" }} className="MotherDetails">
          {Object.entries(data).map(([key, fieldData]) =>
            fieldData.name == "ExpectantMotherDOB" ? (
              <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder}<span style={redStarStyle}>*</span></InputLabel>
                <FormControl variant="outlined" size="small">
                  <OutlinedInput
                    readOnly={false}
                    value={fieldData.value}
                    name={fieldData.name}
                    id={`outlined-adornment-${key}`}
                    placeholder={fieldData.placeholder}
                    type={deliveryinputType}
                    onFocus={() => setDeliveryInputType("date")}
                    onBlur={() => setDeliveryInputType("text")}
                    sx={{
                      border: fieldData.errorStatus ? "1px solid red" : "",
                      height: "40px",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                    onChange={handleOnChange}
                  />
                  {fieldData.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{fieldData.errorMessage}</Typography> : null}
                </FormControl>
              </Stack>
            ) :
              fieldData.name == "ExpectantMotherIDproof" ? (
                <Stack sx={{ width: "100%", gap: "0.5rem" }} key={key}>
                  <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder} <span style={redStarStyle}>*</span></InputLabel>
                  <FormControl variant="outlined" size="small">
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={IDList}
                      value={fieldData.value}
                      onChange={(e) => {
                        handleOnDropDown(e, "ExpectantMotherIDproof");
                      }}
                    />
                    {fieldData.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{fieldData.errorMessage}</Typography> : null}
                  </FormControl>
                </Stack>

              ) : (
                <>
                  <Stack sx={{ width: fieldData.name == "ExpectantMotherOrganizationName" || fieldData.name == "ExpectantMotherOtherInfo" ? "208%" : "100%", gap: "0.5rem" }} key={key}>
                    <InputLabel sx={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}>{fieldData.placeholder} {fieldData.name != "ExpectantMotherOtherInfo" ? <span style={redStarStyle}>*</span> : null}</InputLabel>
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
                      />
                      {fieldData.errorStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{fieldData.errorMessage}</Typography> : null}
                    </FormControl>
                  </Stack>
                  {fieldData.name == "ExpectantMotherOrganizationName" || fieldData.name == "ExpectantMotherOtherInfo" ? <br /> : null}
                </>
              )
          )}
        </Box>
      </Box>

      <Box sx={{ flexDirection: "column", display: "flex", width: "45%" }} className="MotherPicture">
        <Box className="MotherPhoto" sx={{ border: "1px solid #e5e5e5", gap: "1rem", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Upload Mother Picture</Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            <Box sx={{ border: "1px solid #e5e5e5", gap: "1rem", display: "flex", padding: "2rem", borderRadius: "1rem" }}>

              {dataFile.ExpectantMotherProfilePhoto ?
                <Box
                  component="img"
                  src={"https://flyingbyts.s3.ap-south-2.amazonaws.com/" + dataFile.ExpectantMotherProfilePhoto}
                  alt="father Image"
                  sx={{
                    width: isSmallScreen ? '100%' : '50%',
                    height: 'auto',
                    maxWidth: '100%',
                    objectFit: 'cover',
                  }}
                /> :
                <Box
                  component="img"
                  src={motherImage}
                  alt="father Image"
                  sx={{
                    width: isSmallScreen ? '100%' : '50%',
                    height: 'auto',
                    maxWidth: '100%',
                    objectFit: 'cover',
                  }}
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
              onChange={(e) => handleChange("Profile", 'ExpectantMotherProfilePhoto', e)}
            />
          </Box>
        </Box>
        <Box className="MotherID" sx={{ border: "1px solid #e5e5e5", margin: "2rem", padding: "2rem", borderRadius: "1rem" }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "black", textTransform: "uppercase" }}>Upload Id Proof</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            <Box sx={{ border: "1px solid #e5e5e5", gap: "1rem", display: "flex", padding: "2rem", borderRadius: "1rem" }}>

              {dataFile.ExpectantMotherIDproofPhoto ?
                <Box
                  component="img"
                  src={"https://flyingbyts.s3.ap-south-2.amazonaws.com/" + dataFile.ExpectantMotherIDproofPhoto}
                  alt="father Image"
                  sx={{
                    width: isSmallScreen ? '100%' : '50%',
                    height: 'auto',
                    maxWidth: '100%',
                    objectFit: 'cover',
                  }}
                /> :
                <Box
                  component="img"
                  src={card}
                  alt="father Image"
                  sx={{
                    width: isSmallScreen ? '100%' : '50%',
                    height: 'auto',
                    maxWidth: '100%',
                    objectFit: 'cover',
                  }}
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
              onChange={(e) => handleChange("IDProof", 'ExpectantMotherIDproofPhoto', e)}
            />
          </Box>
        </Box>
      </Box>

    </Box>
  );
});

export default MotherDetails;
