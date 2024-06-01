import React, { useState } from "react";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Typography } from "@mui/material";
import HospitalDetails from "./HospitalDetails";
import FatherDetails from "./FatherDetails";
import MotherDetails from "./MotherDetails";
import CommunicationDetails from "./CommunicationDetails";

const PopupLayout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const TOTAL_PAGES = 8;

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < TOTAL_PAGES) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Box sx={{  margin: "13rem", display: "flex", flexDirection: "column", gap: "1rem", border: "1px solid #e5e5e5" }}>
      <Box >
        
      {currentPage == 1 && <FatherDetails />}
      {currentPage == 2 && <MotherDetails />}
      {currentPage == 3 && <CommunicationDetails />}
      {currentPage == 4 && <HospitalDetails />}
        
        
        </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", padding: "4rem" }}>
        <Button sx={{ padding: "0rem 4rem", borderRadius: "0.5rem", fontSize: "2rem", backgroundColor: "white", color: "blue" }} variant="outlined" startIcon={<ArrowBackIcon />} disabled={currentPage === 1} onClick={handlePrev}>
          Prev
        </Button>

        <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <Typography sx={{ fontSize: "3rem !important" }} variant="h4">
            {"<"}
          </Typography>
          <Typography sx={{ fontSize: "3rem !important" }} variant="h4" sx={{ display: "flex" }}>
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
