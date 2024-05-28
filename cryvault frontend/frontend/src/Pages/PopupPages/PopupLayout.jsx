import React, { useState } from "react";
import PopupLazyLoad from "../../Utilities/PopupLazyLoad";
import { Box, Pagination, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const PopupLayout = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    // dispatch(addClientInfo())
  };
  return (
    <>
      <PopupHeader />
      <PopupLazyLoad {...{ page }} />
      <Pagination onChange={handlePageChange} sx={{ position: "absolute", right: "0" }} count={10} color="primary" />
      <PopupFooter />
    </>
  );
};

export const PopupHeader = () => {
  return (
    <Box sx={{ padding: "2rem 6rem", display: "flex", justifyContent: "end" }}>
      <img className="logo-light" src="assets/images/cryovault-blue-200x48.webp" alt="Corporate Logo" />
    </Box>
  );
};

export const PopupFooter = () => {
  return (
    <Box sx={{ background: "#2b2e64", marginTop: "10rem" }}>
      <Typography sx={{ color: "white", textAlign: "center", padding: "2rem", fontSize: "2rem" }}>
        Cryovault Biotech India Pvt. Ltd.
        <br />
        No. 52/65, Swami Vivekananda Road, Srinivasa Layout, Bagalur, North Bangaluru, Karnataka - 562149, INDIA.
        <br />
        18001 024 026 (Tollfree) | www.cryovault.in | E-mail: info@cryovault.in
      </Typography>
    </Box>
  );
};

export default PopupLayout;
