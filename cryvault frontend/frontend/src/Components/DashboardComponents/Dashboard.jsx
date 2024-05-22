import React, { useState } from "react";
import { Box, Card, List, ListItem, ListItemIcon, Menu, MenuItem, useMediaQuery } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Cake } from "@mui/icons-material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { Report } from "@mui/icons-material";
import { LocalOffer } from "@mui/icons-material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Share } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";

// import BabyDetails from "./BabyDetails";
// import Invoices from "./Invoices";
// import Offers from "./Offers";
// import Services from "./Services";
// import "./Dashboard.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Details from "../../Pages/DashboardPages/Details";
// import Subscription from "./Subscription";
// import Settings from "./Settings";
// import Reference from "./Reference";
import "./Dashboard.css";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const isMobile = false;
  const [isListVisible, setListVisible] = useState(false); // State variable to track list visibility

  // Function to handle menu icon click
  const handleMenuIconClick = () => {
    setListVisible(!isListVisible); // Toggle list visibility
  };

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
    setListVisible(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          marginTop: "100px",
        }}
      >
        <Box
          sx={{
            display: isMobile ? "none" : "block",
            marginLeft: isMobile ? "0px" : "30px",
            marginBottom: isMobile ? "20px" : "0px",
          }}
        >
          <Box
            sx={{
              border: "0.5px solid #BEBEBE",
              width: isMobile ? "100%" : "200px",
              height: "auto",
              borderRadius: "50px",
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              textAlign:"center !important",
              alignItems:"center"
            }}
          >
            <List style={{ paddingTop: "20px" }} component="nav" aria-label="main mailbox folders">
              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "45px",
                  justifyContent: "center",
                  borderRadius: "20px",
                  gap: "1.5rem",
                  alignItems: "start",
                }}
                onClick={() => handleItemClick("DashBoard")}
              >
                <ListItemIcon sx={{ alignSelf: "center" }}>
                  <DashboardIcon
                    className={selectedItem === "DashBoard" ? "selectedIcon" : "Icon"}
                    sx={{
                      color: selectedItem === "DashBoard" ? "#9e64f6" : "black",
                    }}
                  />
                </ListItemIcon>
                {selectedItem === "DashBoard" && (
                  <div
                    style={{
                      color: "#9e64f6",
                      fontSize: isMobile ? "14px" : "2rem",
                      marginLeft: "-25px",
                      textAlign:"center !important"
                    }}
                  >
                    DashBoard
                  </div>
                )}
              </ListItem>

              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Baby Details")}
              >
                <ListItemIcon>
                  <Cake className={selectedItem === "Baby Details" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Baby Details" ? "#9e64f6" : "black" }} />
                </ListItemIcon>

                {selectedItem === "Baby Details" && (
                  <div
                    style={{
                      color: "#9e64f6",
                      fontSize: isMobile ? "14px" : "2rem",
                      marginLeft: "-25px",
                    }}
                  >
                    Baby Details
                  </div>
                )}
              </ListItem>
              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Invoices")}
              >
                <ListItemIcon>
                  <ReceiptIcon className={selectedItem === "Invoices" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Invoices" ? "#9e64f6" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Invoices" && (
                  <div
                    style={{
                      color: "#9e64f6",
                      fontSize: isMobile ? "14px" : "2rem",
                      marginLeft: "-25px",
                    }}
                  >
                    Invoices
                  </div>
                )}
              </ListItem>
              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Reports")}
              >
                <ListItemIcon>
                  <Report className={selectedItem === "Reports" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Reports" ? "#9e64f6" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Reports" && (
                  <div
                    style={{
                      color: "#9e64f6",
                      fontSize: isMobile ? "14px" : "2rem",
                      marginLeft: "-25px",
                    }}
                  >
                    Reports
                  </div>
                )}
              </ListItem>

              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Offers and Updates")}
              >
                <ListItemIcon>
                  <LocalOffer className={selectedItem === "Offers and Updates" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Offers and Updates" ? "#9e64f6" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Offers and Updates" && (
                  <div
                    style={{
                      color: "#9e64f6",
                      fontSize: isMobile ? "14px" : "2rem",
                      marginLeft: "0px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Offers and Updates
                  </div>
                )}
              </ListItem>

              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Subscription")}
              >
                <ListItemIcon>
                  <MonetizationOnIcon className={selectedItem === "Subscription" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Subscription" ? "#9e64f6" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Subscription" && (
                  <div
                    style={{
                      color: "#9e64f6",
                      fontSize: isMobile ? "14px" : "2rem",
                      marginLeft: "-25px",
                    }}
                  >
                    Subscription
                  </div>
                )}
              </ListItem>
              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Reference")}
              >
                <ListItemIcon>
                  <Share className={selectedItem === "Reference" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Reference" ? "#9e64f6" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Reference" && (
                  <div
                    style={{
                      color: "#9e64f6",
                      fontSize: isMobile ? "14px" : "2rem",
                      marginLeft: "-25px",
                    }}
                  >
                    Reference
                  </div>
                )}
              </ListItem>
              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Settings")}
              >
                <ListItemIcon>
                  <SettingsIcon className={selectedItem === "Settings" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Settings" ? "#9e64f6" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Settings" && (
                  <div
                    style={{
                      color: "#9e64f6",
                      fontSize: isMobile ? "14px" : "2rem",
                      marginLeft: "-25px",
                    }}
                  >
                    Settings
                  </div>
                )}
              </ListItem>
              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",

                  height: "50px",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Help")}
              >
                <ListItemIcon>
                  <HelpIcon className={selectedItem === "Help" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Help" ? "#9e64f6" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Help" && (
                  <div
                    style={{
                      color: "#9e64f6",
                      fontSize: isMobile ? "14px" : "2rem",
                      marginLeft: isMobile ? "1px" : "-25px",
                    }}
                  >
                    Help
                  </div>
                )}
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          style={{
            width: isMobile ? "100%" : "calc(100% - 200px)",
            display: isMobile ? "none" : "block",
          }}
        >
          {selectedItem === "DashBoard" && <Details />}
          {/* {selectedItem === "Baby Details" && <BabyDetails />}
          {selectedItem === "Invoices" && <Invoices />}
          {selectedItem === "Reports" && <Services />}
          {selectedItem === "Offers and Updates" && <Offers />}
          {selectedItem === "Subscription" && <Subscription />}
          {selectedItem === "Settings" && <Settings />}
          {selectedItem === "Reference" && <Reference />} */}
        </Box>
      </div>

      {/* mobile */}
      <div style={{ display: isMobile ? "block" : "none" }}>
        <Card
          sx={{
            backgroundColor: "#9e64f6",
            marginLeft: "10px",
            width: "90vw",
            height: "50px",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <span style={{ color: "white" }}>{selectedItem}</span>
            <div>
              {isListVisible ? (
                <CloseIcon
                  onClick={handleMenuIconClick}
                  sx={{
                    border: "1px solid white",
                    borderRadius: "10px",
                    color: "white",
                    width: "30px",
                    height: "30px",
                  }}
                />
              ) : (
                <MenuIcon
                  onClick={handleMenuIconClick}
                  sx={{
                    borderRadius: "10px",
                    border: "1px solid white",
                    color: "white",
                    width: "30px",
                    height: "30px",
                  }}
                />
              )}
            </div>
          </Box>
        </Card>
        {isListVisible && (
          <Card
            sx={{
              width: isMobile ? "100%" : "120px",
              height: "auto",

              paddingLeft: "20px",
            }}
          >
            <List style={{ paddingTop: "20px" }} component="nav" aria-label="main mailbox folders">
              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",

                  marginBottom: "10px",

                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("DashBoard")}
              >
                <ListItemIcon sx={{ alignSelf: "center" }}>
                  <DashboardIcon
                    className="Icon"
                    sx={{
                      color: "#9e64f6",
                    }}
                  />
                </ListItemIcon>

                <div
                  style={{
                    color: "#9e64f6",
                    fontSize: isMobile ? "14px" : "2rem",
                    marginLeft: isMobile ? "-5px" : "-25px",
                  }}
                >
                  DashBoard
                </div>
              </ListItem>

              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",

                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Baby Details")}
              >
                <ListItemIcon>
                  <Cake className="Icon" sx={{ color: "#9e64f6" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#9e64f6",
                    fontSize: isMobile ? "14px" : "2rem",
                    marginLeft: isMobile ? "-5px" : "-25px",
                  }}
                >
                  Baby Details
                </div>
              </ListItem>
              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",

                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Invoices")}
              >
                <ListItemIcon>
                  <ReceiptIcon className="Icon" sx={{ color: "#9e64f6" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#9e64f6",
                    fontSize: isMobile ? "14px" : "2rem",
                    marginLeft: isMobile ? "-5px" : "-25px",
                  }}
                >
                  Invoices
                </div>
              </ListItem>
              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",

                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Reports")}
              >
                <ListItemIcon>
                  <Report className="Icon" sx={{ color: "#9e64f6" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#9e64f6",
                    fontSize: isMobile ? "14px" : "2rem",
                    marginLeft: isMobile ? "-5px" : "-25px",
                  }}
                >
                  Reports
                </div>
              </ListItem>

              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  marginLeft: isMobile ? "-50px" : "-10px",
                  height: "50px",
                  width: isMobile ? "-50px" : "200px",
                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Offers and Updates")}
              >
                <ListItemIcon>
                  <LocalOffer style={{ marginLeft: isMobile ? "50px" : "-10px" }} className="Icon" sx={{ color: "#9e64f6" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#9e64f6",
                    fontSize: isMobile ? "14px" : "2rem",
                    marginLeft: isMobile ? "20px" : "-25px",
                  }}
                >
                  Offers and Updates
                </div>
              </ListItem>

              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",
                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Subscription")}
              >
                <ListItemIcon>
                  <MonetizationOnIcon className="Icon" sx={{ color: "#9e64f6" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#9e64f6",
                    fontSize: isMobile ? "14px" : "2rem",
                    marginLeft: isMobile ? "-5px" : "-25px",
                  }}
                >
                  Subscription
                </div>
              </ListItem>
              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",

                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Reference")}
              >
                <ListItemIcon>
                  <Share className="Icon" sx={{ color: "#9e64f6" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#9e64f6",
                    fontSize: isMobile ? "14px" : "2rem",
                    marginLeft: isMobile ? "-5px" : "-25px",
                  }}
                >
                  Reference
                </div>
              </ListItem>
              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",

                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Settings")}
              >
                <ListItemIcon>
                  <SettingsIcon className="Icon" sx={{ color: "#9e64f6" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#9e64f6",
                    fontSize: isMobile ? "14px" : "2rem",
                    marginLeft: isMobile ? "-5px" : "-25px",
                  }}
                >
                  Settings
                </div>
              </ListItem>
              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "50px",

                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Help")}
              >
                <ListItemIcon>
                  <HelpIcon className="Icon" sx={{ color: "#9e64f6" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#9e64f6",
                    fontSize: isMobile ? "14px" : "2rem",
                    marginLeft: isMobile ? "-5px" : "-25px",
                  }}
                >
                  Help
                </div>
              </ListItem>
            </List>
          </Card>
        )}
        <Box style={{ width: isMobile ? "100%" : "calc(100% - 120px)" }}>
          {selectedItem === "DashBoard" && <Details />}
          {/* {selectedItem === "Baby Details" && <BabyDetails />}
          {selectedItem === "Invoices" && <Invoices />}
          {selectedItem === "Reports" && <Services />}
          {selectedItem === "Offers and Updates" && <Offers />}
          {selectedItem === "Subscription" && <Subscription />}
          {selectedItem === "Settings" && <Settings />}
          {selectedItem === "Reference" && <Reference />} */}
        </Box>
      </div>
    </>
  );
};

export default Dashboard;
