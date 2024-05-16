import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Common/Footer";
import Header, { MobileHeader } from "./Components/Common/Header";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Home from "./Pages/Home";
import useDeviceSize from "./Utilities/useDeviceSize";

function App() {
  const isMobile = useDeviceSize() === "xs";
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <>
          {isMobile ? <MobileHeader /> : <Header />}
          <Home />
          {isMobile ? <Footer /> : <Footer />}
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
