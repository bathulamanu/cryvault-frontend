import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Home.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { AiFillBank } from "react-icons/ai";
import { LuMailQuestion } from "react-icons/lu";
import { FaHandshake } from "react-icons/fa6";

const WhyBank = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", position: "absolute", width: "100%" }}>
      <div className="bannerImage " style={{ justifyContent: "end", display: "flex" }}>
        <img src="https://www.cryovault.in/wp-content/uploads/2024/01/img-6-3.png" alt=""></img>
      </div>

      <div className="whybankContent">
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Newborn stem cells <br /> are a powerful resource
        </Typography>

        <div className="shape_in shape_in-bk" style={{ display: "flex", justifyContent: "center" }}>
          <img src="assets/images/med-img blk.svg" width="30" />
        </div>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Your baby’s umbilical cord contains both cord blood and cord tissue, <br />
          which are rich sources of unique stem cells that have potential for healing.
        </Typography>

        <Grid sx={{ flexGrow: 1 }} container spacing={2} sx={{ padding: "4rem 12rem" }}>
          <Grid className="card1" item xs={6} md={4} sm={4}>
            <div className="cardContainer">
              <HelpOutlineIcon sx={{ fontSize: "2.5rem" }} />

              <div>
                <Typography variant="h4" sx={{ color: "white" }} gutterBottom>
                  Why Bank?
                </Typography>
                <Typography variant="h5" component="div">
                  Stem cells from newborn umbilical cord blood are a treasure that can potentially save your baby or family member .......
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid className="card2" item xs={6} md={4} sm={4}>
            <div className="cardContainer">
              <LuMailQuestion sx={{ fontSize: "2.5rem" }} />

              <div>
                <Typography variant="h4" sx={{ color: "white" }} gutterBottom>
                  Information Guide
                </Typography>
                <Typography variant="h5" component="div">
                  If you’re thinking about cord blood banking, our Information Guide can help you get started. It answers questions .....
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid className="card3" item xs={6} md={4} sm={4}>
            <div className="cardContainer">
              <FaHandshake sx={{ fontSize: "2.5rem" }} />

              <div>
                <Typography variant="h4" sx={{ color: "white" }} gutterBottom>
                  Cord Blood & Tissue
                </Typography>
                <Typography variant="h5" component="div">
                  Today, cord blood stem cells have been used in the treatment of over 80 life threatening diseases. ..
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>

        <div className="whyBankCard"></div>
      </div>
    </Box>
  );
};

export default WhyBank;
