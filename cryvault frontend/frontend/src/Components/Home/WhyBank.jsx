import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Home.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { AiFillBank } from "react-icons/ai";
import { LuMailQuestion } from "react-icons/lu";
import { FaHandshake, FaRegHandshake } from "react-icons/fa6";
import useDeviceSize from "../../Utilities/useDeviceSize";

const WhyBank = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Box sx={{ display: "flex", flexDirection: "column", position: "absolute", width: "100%" }}>
      <Box className={isMobile ? "bannerImageMobile" : "bannerImage "} style={{ justifyContent: "end", display: "flex" }}>
        <img src="https://www.cryovault.in/wp-content/uploads/2024/01/img-6-3.png" alt=""></img>
      </Box>

      <Box className="whybankContent">
        <Typography variant={isMobile ? "h5" : "h1"} sx={{ textAlign: "center", fontSize: isMobile ? "2.5rem" : "46px", fontWeight: isMobile ? "500" : "600", color: "#103741" }}>
          Newborn stem cells <br /> are a powerful resource
        </Typography>

        {/* <Box className={isMobile ? "shape_inMobile shape_inMobile-bk " : "shape_in shape_in-bk"} style={{ display: "flex", justifyContent: "center" }}>
          <img src="assets/images/med-img blk.svg" width="30" />
        </Box> */}

        <div className="shape_in shape_in-bk" style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <img src="assets/images/med-img blk.svg" width="30" />
        </div>
        <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "500", fontSize: "19px" }}>
          Your baby’s umbilical cord contains both cord blood and cord tissue, <br />
          which are rich sources of unique stem cells that have potential for healing.
        </Typography>

        <Box columnSpacing={4} container spacing={4} xs={12} md={4} sm={4} sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "1rem", padding: isMobile ? "4rem 1rem" : "3rem 11.5rem", margin: "0 !important", flexGrow: 1, maxWidth: "100% !important" }}>
          <Box item className="card1" xs={12} md={4} sm={4} sx={{ maxWidth: isMobile ? "100%" : "33%" }}>
            <Box className="cardContainer">
              {/* <HelpOutlineIcon style={{ fontSize: "2.5rem" }} /> */}
              <HelpOutlineIcon style={{ fontSize: "2.5rem" }}  />
              <Box>
                <Typography variant="h4" sx={{ color: "white" }} gutterBottom>
                  Why Bank?
                </Typography>
                <Typography sx={{ lineHeight: "2" }} variant="h5" component="Box">
                  Stem cells from newborn umbilical cord blood are a treasure that can potentially save your baby or family member .......
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="card2" xs={12} md={4} sm={4} sx={{ maxWidth: isMobile ? "100%" : "33%" }}>
            <Box className="cardContainer">
              <LuMailQuestion style={{ fontSize: "2.5rem", width: "3em", height: "1em" }} />

              <Box>
                <Typography variant="h4" sx={{ color: "white" }} gutterBottom>
                  Information Guide
                </Typography>
                <Typography sx={{ lineHeight: "2" }} variant="h5" component="Box">
                  If you’re thinking about cord blood banking, our Information Guide can help you get started. It answers questions .....
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="card3" xs={12} md={4} sm={4} sx={{ maxWidth: isMobile ? "100%" : "33%" }}>
            <Box className="cardContainer">
              <FaHandshake style={{ fontSize: "2.5rem", width: "3em", height: "1em" }}  />
              <Box>
                <Typography variant="h4" sx={{ color: "white" }} gutterBottom>
                  Cord Blood & Tissue
                </Typography>
                <Typography sx={{ lineHeight: "2" }} variant="h5" component="Box">
                  Today, cord blood stem cells have been used in the treatment of over 80 life threatening diseases. ..
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="whyBankCard"></Box>
      </Box>
    </Box>
  );
};

export default WhyBank;
