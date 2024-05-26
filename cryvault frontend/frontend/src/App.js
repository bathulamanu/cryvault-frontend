import React from "react";
import "./App.css";
import Footer from "./Components/Common/Footer";
import Header, { MobileHeader } from "./Components/Common/Header";
import useDeviceSize from "./Utilities/useDeviceSize";
import LazyLoad from "./Utilities/LazyLoad";

import { BrowserRouter as Router, useNavigate, useRoutes } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import PopupLayout, { PopupFooter, PopupHeader } from "./Pages/PopupPages/PopupLayout";
import PopupLazyLoad from "./Utilities/PopupLazyLoad";
function App() {
  const isMobile = useDeviceSize() === "xs";
  const isPopupPage = useSelector((state) => state.dashboard.isPopupPage);
  return (
    <Router>
      <>
        {isPopupPage ? (
          <PopupLayout />
        ) : (
          <>
            {isMobile ? <MobileHeader /> : <Header />}
            <LazyLoad />

            <Footer />
          </>
        )}
      </>
    </Router>
  );
}

export default App;
