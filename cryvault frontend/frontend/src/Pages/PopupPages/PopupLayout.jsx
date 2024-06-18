import React, { useState, useRef } from "react";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Typography } from "@mui/material";
import HospitalDetails from "./HospitalDetails";
import FatherDetails from "./FatherDetails";
import MotherDetails from "./MotherDetails";
import CommunicationDetails from "./CommunicationDetails";
import ReferenceIformation from "./ReferenceIformation";
import Signature from "./Signature";
import ForbankUse from "./ForbankUse";
import HealthHistory from "./HealthHistory"

import { useDispatch, useSelector } from "react-redux";

import { addOrupdateAnnexureInfo } from "../../redux/reducers/UserReducer"

const PopupLayout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const TOTAL_PAGES = 8;
  const dispatch = useDispatch();
  const childRef = useRef();
  const childMotherDetailsRef = useRef();
  const childCommunicationDetailsRef = useRef();
  const childHospitalDetailsRef = useRef();
  const childReferenceIformationRef = useRef();
  const childSignatureRef = useRef();
  const childForbankUseRef = useRef();
  const childHealthHistoryRef = useRef();

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [dataFromChild, setDataFromChild] = useState('');
  const [dataFromMotherDetails, setdataFromMotherDetails] = useState('');
  const [dataFromCommunicationDetails, setdataFromCommunicationDetails] = useState('');
  const [dataFromHospitalDetails, setdataFromHospitalDetails] = useState('');
  const [dataFromReferenceIformation, setdataFromReferenceIformation] = useState('');
  const [dataFromSignature, setdataFromSignature] = useState('');
  const [dataFromForbankUse, setdataFromForbankUse] = useState('');
  const [dataFromHealthHistory, setdataFromHealthHistory] = useState('');


  const handleNext = () => {
    if (currentPage < TOTAL_PAGES) {
      setCurrentPage(currentPage + 1);
    }

    if (childRef.current) {
      setDataFromChild(childRef.current.getChildData());
    }
    if (childMotherDetailsRef.current) {
      setdataFromMotherDetails(childMotherDetailsRef.current.getMotherDetails());
    }
    if (childCommunicationDetailsRef.current) {
      setdataFromCommunicationDetails(childCommunicationDetailsRef.current.getCommunicationDetailsChildData());
    }
    if (childHospitalDetailsRef.current) {
      setdataFromHospitalDetails(childHospitalDetailsRef.current.getHospitalDetailsChildData());
    }
    if (childReferenceIformationRef.current) {
      setdataFromReferenceIformation(childReferenceIformationRef.current.getReferenceIformationChildData());
    }
    if (childSignatureRef.current) {
      setdataFromSignature(childSignatureRef.current.getSignatureChildData());
    }
    if (childForbankUseRef.current) {
      setdataFromForbankUse(childForbankUseRef.current.getForbankUseChildData());
    }
    if (childHealthHistoryRef.current) {
      setdataFromHealthHistory(childHealthHistoryRef.current.getHealthHistoryChildData());
    }
    const dataToSend = {
      // fullName: userData.fullName.value,
      // Email: userData.email.value,
      // countryCode: "+91",// userData.countryCode.value,
      // phoneNumber: userData.phone.value.replace(userData.countryCode.value, ''),
      // Subject: userData.subject.value,
      // pageName: router?.pathname,
    };

    console.log("kkk dataFromChild dataFromChild   ", dataFromChild ? dataFromChild : null);
    console.log("kkk dataFromChild dataFromMotherDetails   ", dataFromMotherDetails ? dataFromMotherDetails : null);
    console.log("kkk dataFromChild dataFromCommunicationDetails   ", dataFromCommunicationDetails ? dataFromCommunicationDetails : null);
    console.log("kkk dataFromChild dataFromHospitalDetails   ", dataFromHospitalDetails ? dataFromHospitalDetails : null);
    console.log("kkk dataFromChild dataFromReferenceIformation   ", dataFromReferenceIformation ? dataFromReferenceIformation : null);
    console.log("kkk dataFromChild dataFromSignature   ", dataFromSignature ? dataFromSignature : null);
    console.log("kkk dataFromChild dataFromForbankUse   ", dataFromForbankUse ? dataFromForbankUse : null);
    console.log("kkk dataFromChild dataFromHealthHistory   ", dataFromHealthHistory ? dataFromHealthHistory : null);


    // dispatch(addOrupdateAnnexureInfo(dataToSend))
  };

  return (
    <Box sx={{ margin: "13rem", display: "flex", flexDirection: "column", gap: "1rem", border: "1px solid #e5e5e5" }}>
      <Box>

        {currentPage == 1 && <FatherDetails ref={childRef} />}
        {currentPage == 2 && <MotherDetails ref={childMotherDetailsRef} />}
        {currentPage == 3 && <CommunicationDetails ref={childCommunicationDetailsRef} />}
        {currentPage == 4 && <HospitalDetails ref={childHospitalDetailsRef} />}
        {currentPage == 5 && <ReferenceIformation ref={childReferenceIformationRef} />}
        {currentPage == 6 && <Signature ref={childSignatureRef} />}
        {currentPage == 7 && <ForbankUse ref={childForbankUseRef} />}
        {currentPage == 8 && <HealthHistory ref={childHealthHistoryRef} />}

      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", padding: "4rem" }}>
        <Button sx={{ padding: "0rem 4rem", borderRadius: "0.5rem", fontSize: "2rem", backgroundColor: "white", color: "blue" }} variant="outlined" startIcon={<ArrowBackIcon />} disabled={currentPage === 1} onClick={handlePrev}>
          Prev
        </Button>

        <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <Typography sx={{ fontSize: "3rem !important" }} variant="h4">
            {"<"}
          </Typography>
          <Typography sx={{ fontSize: "3rem !important", display: "flex" }} variant="h4" >
            <span style={{ color: "blue" }}>{`${currentPage} `}</span>
            <span>/</span>
            <span>{`${TOTAL_PAGES} `}</span>
          </Typography>
          <Typography sx={{ fontSize: "3rem !important" }} variant="h4">
            {">"}
          </Typography>
        </Box>

        <Button
          sx={{ padding: "0rem 4rem", borderRadius: "0.5rem", fontSize: "2rem" }}
          variant="contained"
          endIcon={<KeyboardTabIcon />}
          disabled={currentPage === TOTAL_PAGES} // Disable next button on last page
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PopupLayout;
