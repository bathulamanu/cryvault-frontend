import React from "react";
import "./App.css";
import Footer from "./Components/Common/Footer";
import Header, { MobileHeader } from "./Components/Common/Header";
import useDeviceSize from "./Utilities/useDeviceSize";
import LazyLoad from "./Utilities/LazyLoad";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
const App = () => {
  const isMobile = useDeviceSize() === "xs";
  return (
    <Router>
      <>
        {isMobile ? <MobileHeader /> : <Header />}
        <LazyLoad />

        <Footer />
      </>
    </Router>
  );
};

export default App;
