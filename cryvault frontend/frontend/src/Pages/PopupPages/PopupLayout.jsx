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
import InnerPagePreview from "./InnerPagePreview";

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

  // const [dataFromChild, setDataFromChild] = useState('');
  // const [dataFromMotherDetails, setdataFromMotherDetails] = useState('');
  // const [dataFromCommunicationDetails, setdataFromCommunicationDetails] = useState('');
  // const [dataFromHospitalDetails, setdataFromHospitalDetails] = useState('');
  // const [dataFromReferenceIformation, setdataFromReferenceIformation] = useState('');
  // const [dataFromSignature, setdataFromSignature] = useState('');
  // const [dataFromForbankUse, setdataFromForbankUse] = useState('');
  // const [dataFromHealthHistory, setdataFromHealthHistory] = useState('');


  const handleNext = () => {

    // if (currentPage < TOTAL_PAGES) {
    //    setCurrentPage(currentPage + 1);
    // }

    if (childRef.current) {
      childRef.current.getFatherData();
    }
    if (childMotherDetailsRef.current) {
      childMotherDetailsRef.current.getMotherDetails();
    }
    if (childCommunicationDetailsRef.current) {
      childCommunicationDetailsRef.current.getCommunicationDetailsChildData();
    }
    if (childHospitalDetailsRef.current) {
      childHospitalDetailsRef.current.getHospitalDetailsChildData();
    }
    if (childReferenceIformationRef.current) {
      childReferenceIformationRef.current.getReferenceIformationChildData();
    }
    if (childSignatureRef.current) {
      childSignatureRef.current.getSignatureChildData()
    }
    if (childForbankUseRef.current) {
      childForbankUseRef.current.getForbankUseChildData();
    }
    if (childHealthHistoryRef.current) {
      childHealthHistoryRef.current.getHealthHistoryChildData();
    }


    // console.log("kkk dataFromChild dataFromChild   ", dataFromChild ? dataFromChild : null);
    // console.log("kkk dataFromChild dataFromMotherDetails   ", dataFromMotherDetails ? dataFromMotherDetails : null);
    // console.log("kkk dataFromChild dataFromCommunicationDetails   ", dataFromCommunicationDetails ? dataFromCommunicationDetails : null);
    // console.log("kkk dataFromChild dataFromHospitalDetails   ", dataFromHospitalDetails ? dataFromHospitalDetails : null);
    // console.log("kkk dataFromChild dataFromReferenceIformation   ", dataFromReferenceIformation ? dataFromReferenceIformation : null);
    // console.log("kkk dataFromChild dataFromSignature   ", dataFromSignature ? dataFromSignature : null);
    // console.log("kkk dataFromChild dataFromForbankUse   ", dataFromForbankUse ? dataFromForbankUse : null);
    // console.log("kkk dataFromChild dataFromHealthHistory   ", dataFromHealthHistory ? dataFromHealthHistory : null);

  };

  return (
    <Box sx={{ margin: "13rem", display: "flex", flexDirection: "column", gap: "1rem", border: "1px solid #e5e5e5" }}>
      <Box>
        {/* {currentPage == 1 && <FatherDetails ref={childRef} handleNext={handleNext} handlePrev={handlePrev} currentPage={currentPage} setCurrentPage={setCurrentPage} TOTAL_PAGES={TOTAL_PAGES} />}
        {currentPage == 2 && <MotherDetails ref={childMotherDetailsRef} handleNext={handleNext} handlePrev={handlePrev} currentPage={currentPage} setCurrentPage={setCurrentPage} TOTAL_PAGES={TOTAL_PAGES} />}*/}
        {currentPage == 1 && <CommunicationDetails ref={childCommunicationDetailsRef} handleNext={handleNext} handlePrev={handlePrev} currentPage={currentPage} setCurrentPage={setCurrentPage} TOTAL_PAGES={TOTAL_PAGES} />} 
        {currentPage == 2 && <HospitalDetails ref={childHospitalDetailsRef} handleNext={handleNext} handlePrev={handlePrev} currentPage={currentPage} setCurrentPage={setCurrentPage} TOTAL_PAGES={TOTAL_PAGES} />}
        {currentPage == 3 && <ReferenceIformation ref={childReferenceIformationRef} handleNext={handleNext} handlePrev={handlePrev} currentPage={currentPage} setCurrentPage={setCurrentPage} TOTAL_PAGES={TOTAL_PAGES} />}
        {/* {currentPage == 6 && <Signature ref={childSignatureRef} handleNext={handleNext} handlePrev={handlePrev} currentPage={currentPage} setCurrentPage={setCurrentPage} TOTAL_PAGES={TOTAL_PAGES} />}
        {currentPage == 7 && <ForbankUse ref={childForbankUseRef} handleNext={handleNext} handlePrev={handlePrev} currentPage={currentPage} setCurrentPage={setCurrentPage} TOTAL_PAGES={TOTAL_PAGES} />}
        {currentPage == 8 && <HealthHistory ref={childHealthHistoryRef} handleNext={handleNext} handlePrev={handlePrev} currentPage={currentPage} setCurrentPage={setCurrentPage} TOTAL_PAGES={TOTAL_PAGES} />}
        {currentPage == 9 && <InnerPagePreview setCurrentPage={setCurrentPage} />} */}

      </Box>

      {currentPage != 9 ?
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


          {currentPage === 8 ?
            <Button
              sx={{ padding: "0rem 4rem", borderRadius: "0.5rem", fontSize: "2rem" }}
              variant="contained"
              endIcon={<KeyboardTabIcon />}
              onClick={handleNext}
            >
              Preview
            </Button>

            :
            <Button
              sx={{ padding: "0rem 4rem", borderRadius: "0.5rem", fontSize: "2rem" }}
              variant="contained"
              endIcon={<KeyboardTabIcon />}
              onClick={handleNext}
            >
              Next
            </Button>

          }

        </Box> : null}
    </Box>
  );
};

export default PopupLayout;
