import React from "react";
import { Typography, Box, Card, useMediaQuery } from "@mui/material";
import greenTick from "../../assets/images/greenTick.png";
import wrong from "../../assets/images/wrong.png";

const correctdata = ["Cord Blood Collection & Process", "Cord Tissue Collection & Process", "CD 34+ Cell Enumeration", "CD 45+ Cell Enumeration"];
const wrongData = ["Colony Forming Unit Assay (CFU)", "Free Global Shipment", "Quality Assurance 20L", "Medical Assistance Up To 20L", "Transplant Specialist"];

const Subscription = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ height: "100%" }}>
      <Card
        sx={{
          borderRadius: "20px",
          width: isMobile ? "90%" : "80vw",
          height: isMobile ? "100%" : "100%",
          flexDirection: isMobile ? "column" : "row",
          marginLeft: isMobile ? "none" : "20px",
          marginTop: isMobile ? "10px" : "0px",
        }}
      >
        <Box sx={{ backgroundColor: "#2b2e64" }}>
          <Typography sx={{ color: "white", padding: "10px" }} variant="h4">
            Plans Details
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "start",
            height: "100%",
            gap: "10rem",
            padding: isMobile ? '5rem' :  "0rem 5rem",
          }}
        >
          <Card
            sx={{
              borderTopLeftRadius: "30px",
              borderBottomRightRadius: "30px",
              // marginLeft: "20px",
              border: "0.5px solid #F18D1D",
              // height: "400px",
              width: "300px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  backgroundColor: "#F18D1D",
                  textAlign: "center",
                  height: "50px",
                  paddingTop: "10px",
                }}
              >
                Medium
              </Typography>
              <Card
                sx={{
                  borderTopRightRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  width: "120px",
                  height: "25px",
                  // marginLeft: "175px",
                  // marginTop: "-8px",
                  position: "absolute",
                  right: "-11px",
                  // marginBottom:"1rem"
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    textAlign: "center",
                    backgroundColor: "#13811E",
                  }}
                  style={{ fontSize: "16px" }}
                >
                  Active Plane
                </Typography>
              </Card>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "3rem",
              }}
            >
              <Box style={{ fontWeight: "bold", fontSize: "3rem" }}>₹ 33,999</Box>
              <Box
                style={{
                  fontSize: "2rem",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  fontWeight: "600",
                }}
              >
                EMI Starting Per Month/- <br />
                <Box
                  style={{
                    textAlign: "center",
                    paddingTop: "10px",
                    fontWeight: "bold",
                  }}
                >
                  ₹ 3,333
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {correctdata.map((data) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img style={{ width: "15px", height: "15px" }} src={greenTick} alt="correct" />
                    <span>&#8226;</span>
                    <Typography
                      style={{
                        fontSize: "1.5rem",
                        // paddingTop: "10px",
                        // paddingBottom: "10px",
                        fontWeight: "600",
                        paddingLeft: "5px",
                      }}
                    >
                      {data}
                    </Typography>
                  </Box>
                ))}

                {wrongData.map((data) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img style={{ width: "15px", height: "15px" }} src={wrong} alt="correct" />
                    <span>&#8226;</span>
                    <Typography
                      style={{
                        fontSize: "1.5rem",
                        // paddingTop: "10px",
                        // paddingBottom: "10px",
                        fontWeight: "600",
                        paddingLeft: "5px",
                      }}
                    >
                      {data}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Card>
          <Card
            sx={{
              width: "300px",
              borderRadius: "15px",
              border: "1px solid grey",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "30px",
                gap: "1rem",
              }}
            >
              <Box
                style={{
                  fontSize: "15px",
                  paddingBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                <Typography
                  style={{
                    fontSize: "1.3rem",
                    paddingBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Total Price ₹33,999
                </Typography>
              </Box>
              <Typography
                style={{
                  fontSize: "1.5rem",
                  paddingBottom: "10px",
                  color: "#2b2e64",
                }}
              >
                We Offer 20% Discount
              </Typography>
              <Box
                style={{
                  fontSize: "2rem",
                  paddingBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                SPL Price ₹ 22,999
              </Box>
              <Box style={{ fontSize: "1.5rem", paddingBottom: "10px" }}>
                EMI Starting Per Month/- <span style={{ fontSize: "12px", fontWeight: "600" }}>₹ 3,333</span>
              </Box>
            </Box>
          </Card>
        </Box>
      </Card>
    </Box>
  );
};

export default Subscription;
