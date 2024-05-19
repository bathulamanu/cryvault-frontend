import React from "react";
import "./App.css";
import Footer from "./Components/Common/Footer";
import Header, { MobileHeader } from "./Components/Common/Header";
import useDeviceSize from "./Utilities/useDeviceSize";
import LazyLoad from "./Utilities/LazyLoad";

import { BrowserRouter as Router } from "react-router-dom";
function App() {
  const isMobile = useDeviceSize() === "xs";
  return (
    <Router>
      <>
        {isMobile ? <MobileHeader /> : <Header />}
        <LazyLoad />
        {isMobile ? <Footer /> : <Footer />}
      </>
    </Router>
  );
}

export default App;
