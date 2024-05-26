import { Box, Button, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPopupPage } from "../redux/reducers/DashboardReducer";
import ClientDetails from "../Pages/PopupPages/ClientDetails";
import HospitalDetails from "../Pages/PopupPages/HospitalDetails";
import ReferenceDetails from "../Pages/PopupPages/HospitalDetails";
import ShipmentDetails from "../Pages/PopupPages/HospitalDetails";
import { PopupFooter, PopupHeader } from "../Pages/PopupPages/PopupLayout";
import EmergencyDetails from "../Pages/PopupPages/EmergencyDetails";
import HealthDetails from "../Pages/PopupPages/HealthDetails";
import useDeviceSize from "./useDeviceSize";

const PopupLazyLoad = (props) => {
  const { page } = props;
  return (
    <>
      {page == 1 && <ClientDetails />}
      {page == 2 && <HospitalDetails />}
      {page == 3 && <EmergencyDetails />}
      {page == 4 && <HealthDetails />}
    </>
  );
};
export const AddDetailsPopup = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useDeviceSize() === "xs";

  const handleClick = () => {
    dispatch(setPopupPage(true));
    navigate("/popup");
  };
  return (
    <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", width: "100%", height: "100%", gap: "2rem" }}>
      <Typography sx={{ fontSize: isMobile ? '2rem' : "3rem", fontWeight: "600", padding: "1rem", textAlign: "center" }}>To see the details please fill the form</Typography>
      <Button onClick={handleClick} sx={{ borderRadius: "10px !important", width: "50%", fontSize: "2rem !important", fontWeight: "600 !important" }} className="appointmentBtn rn-btn edu-btn btn-medium submit-btn" variant="contained">
        Fill details
      </Button>
    </Box>
  );
};

export default PopupLazyLoad;
