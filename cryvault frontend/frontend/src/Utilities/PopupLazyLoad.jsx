import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPopupPage } from "../redux/reducers/DashboardReducer";
import useDeviceSize from "./useDeviceSize";

const PopupLazyLoad = (props) => {
  const { page } = props;
  return <></>;
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
      <Typography sx={{ fontSize: isMobile ? "2rem" : "3rem", fontWeight: "600", padding: "1rem", textAlign: "center" }}>To see the details please fill the form</Typography>
      <Button onClick={handleClick} sx={{ borderRadius: "10px !important", width: "50%", fontSize: "2rem !important", fontWeight: "600 !important" }} className="appointmentBtn rn-btn edu-btn btn-medium submit-btn" variant="contained">
        Fill details
      </Button>
    </Box>
  );
};

export default PopupLazyLoad;
