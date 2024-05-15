import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Home from "./Pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        <>
          <Header />
           <Home/>
          <Footer />
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
