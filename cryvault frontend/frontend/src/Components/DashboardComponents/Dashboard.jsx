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
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Details, { MobileDetails } from "../../Pages/DashboardPages/Details";
import Services from "../../Pages/DashboardPages/Services";
import Subscription from "../../Pages/DashboardPages/Subscriptions";
import "./Dashboard.css";
import BabyDetails from "../../Pages/DashboardPages/BabyDetails";
import Invoices from "../../Pages/DashboardPages/Invoices";
import Offers from "../../Pages/DashboardPages/Offers";
import Refferals from "../../Pages/DashboardPages/Refferals";
import SettingsPage from "../../Pages/DashboardPages/SettingsPage";
import Help from "../../Pages/DashboardPages/Help";
import { useSelector } from "react-redux";
import { AddDetailsPopup } from "../../Utilities/PopupLazyLoad";
import useDeviceSize from "../../Utilities/useDeviceSize";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("DashBoard");
  const isMobile = useDeviceSize() === "xs";

  const [isListVisible, setListVisible] = useState(false); // State variable to track list visibility
  const isSubscribedUser = useSelector((state) => state.dashboard.getAnnexureInfo);
  // Function to handle menu icon click
  const handleMenuIconClick = () => {
    setListVisible(!isListVisible); // Toggle list visibility
  };

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? item : item);
    setListVisible(false);
  };

  return (
    <>
      <Box
        style={{
          display: isMobile ? "none" : "flex",
          flexDirection: isMobile ? "column" : "row",
          marginTop: "100px",
          backgroundColor: "#e5e5e5",
          padding: "4rem 0rem",
          height: "100%",
          gap: "1rem",
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
              width: isMobile ? "100%" : "150px",
              height: "auto",
              borderRadius: "50px",
              // paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              textAlign: "center !important",
              alignItems: "center",
              boxShadow: 3,
              backgroundColor: "white",
              height: "100%",
            }}
          >
            <List style={{ paddingTop: "20px", marginTop: "2rem", gap: "3rem", display: "flex", flexDirection: "column" }} component="nav" aria-label="main mailbox folders">
              <ListItem
                className="listItem"
                button
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  marginBottom: "10px",
                  height: "25px",
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
                      color: selectedItem === "DashBoard" ? "#2b2e64" : "black",
                    }}
                  />
                </ListItemIcon>
                {selectedItem === "DashBoard" && (
                  <div
                    style={{
                      color: "#2b2e64",
                      fontSize: isMobile ? "14px" : "2rem",
                      textAlign: "center !important",
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
                  <Cake className={selectedItem === "Baby Details" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Baby Details" ? "#2b2e64" : "black" }} />
                </ListItemIcon>

                {selectedItem === "Baby Details" && (
                  <div
                    style={{
                      color: "#2b2e64",
                      fontSize: isMobile ? "14px" : "2rem",
                      // marginLeft: "-25px",
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
                  <ReceiptIcon className={selectedItem === "Invoices" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Invoices" ? "#2b2e64" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Invoices" && (
                  <div
                    style={{
                      color: "#2b2e64",
                      fontSize: isMobile ? "14px" : "2rem",
                      // marginLeft: "-25px",
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
                  <Report className={selectedItem === "Reports" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Reports" ? "#2b2e64" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Reports" && (
                  <div
                    style={{
                      color: "#2b2e64",
                      fontSize: isMobile ? "14px" : "2rem",
                      // marginLeft: "-25px",
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
                  <LocalOffer className={selectedItem === "Offers and Updates" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Offers and Updates" ? "#2b2e64" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Offers and Updates" && (
                  <div
                    style={{
                      color: "#2b2e64",
                      fontSize: isMobile ? "14px" : "2rem",
                      marginLeft: "0px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Offers &nbsp; and <br /> &nbsp; Updates
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
                  <MonetizationOnIcon className={selectedItem === "Subscription" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Subscription" ? "#2b2e64" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Subscription" && (
                  <div
                    style={{
                      color: "#2b2e64",
                      fontSize: isMobile ? "14px" : "2rem",
                      // marginLeft: "-25px",
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
                  <Share className={selectedItem === "Reference" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Reference" ? "#2b2e64" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Reference" && (
                  <div
                    style={{
                      color: "#2b2e64",
                      fontSize: isMobile ? "14px" : "2rem",
                      // marginLeft: "-25px",
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
                  <SettingsIcon className={selectedItem === "Settings" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Settings" ? "#2b2e64" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Settings" && (
                  <div
                    style={{
                      color: "#2b2e64",
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
                  <HelpIcon className={selectedItem === "Help" ? "selectedIcon" : "Icon"} sx={{ color: selectedItem === "Help" ? "#2b2e64" : "black" }} />
                </ListItemIcon>
                {selectedItem === "Help" && (
                  <div
                    style={{
                      color: "#2b2e64",
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
            width: isMobile ? "100%" : "calc(100% - 300px)",
            display: isMobile ? "none" : "block",
          }}
        >
          {selectedItem === "DashBoard" && <Details />}
          {selectedItem === "Baby Details" && <BabyDetails />}
          {selectedItem === "Invoices" && <Invoices />}
          {selectedItem === "Reports" && <Services />}
          {selectedItem === "Subscription" && <Subscription />}
          {selectedItem === "Offers and Updates" && <Offers />}
          {selectedItem === "Reference" && <Refferals />}
          {selectedItem === "Settings" && <SettingsPage />}
          {selectedItem === "Help" && <Help />}
        </Box>
        {/* {isSubscribedUser?.length > 0 ? (
          <Box
            style={{
              width: isMobile ? "100%" : "calc(100% - 300px)",
              display: isMobile ? "none" : "block",
            }}
          >
            {selectedItem === "DashBoard" && <Details />}
            {selectedItem === "Baby Details" && <BabyDetails />}
            {selectedItem === "Invoices" && <Invoices />}
            {selectedItem === "Reports" && <Services />}
            {selectedItem === "Subscription" && <Subscription />}
            {selectedItem === "Offers and Updates" && <Offers />}
            {selectedItem === "Reference" && <Refferals />}
            {selectedItem === "Settings" && <SettingsPage />}
            {selectedItem === "Help" && <Help />}
          </Box>
        ) : (
          <Box
            sx={{
              display: "block",
              margin: "auto",
              background: "white",
              padding: "1rem",
              width: "47rem",
              height: "45rem",
              boxShadow: "4px 6px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <AddDetailsPopup />
          </Box>
        )} */}
      </Box>

      {/* mobile */}
      <Box style={{ display: isMobile ? "block" : "none", marginTop: "3rem", marginBottom: "10rem" }}>
        <Card
          sx={{
            backgroundColor: "#2b2e64",
            height: "50px",
            borderRadius: "20px",
            margin:"1rem"
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
            <span style={{ color: "white", fontSize: "2rem" }}>{selectedItem}</span>
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
                      color: "#2b2e64",
                    }}
                  />
                </ListItemIcon>

                <div
                  style={{
                    color: "#2b2e64",
                    fontSize: "2rem",
                    // marginLeft: isMobile ? "-5px" : "-25px",
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
                  <Cake className="Icon" sx={{ color: "#2b2e64" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#2b2e64",
                    fontSize: "2rem",

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
                  <ReceiptIcon className="Icon" sx={{ color: "#2b2e64" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#2b2e64",
                    fontSize: "2rem",

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
                  <Report className="Icon" sx={{ color: "#2b2e64" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#2b2e64",
                    fontSize: "2rem",

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
                  width: isMobile ? "-50px" : "150px",
                  borderRadius: "20px",
                }}
                onClick={() => handleItemClick("Offers and Updates")}
              >
                <ListItemIcon>
                  <LocalOffer style={{ marginLeft: isMobile ? "50px" : "-10px" }} className="Icon" sx={{ color: "#2b2e64" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#2b2e64",
                    fontSize: "2rem",

                    marginLeft: isMobile ? "20px" : "-25px",
                  }}
                >
                  Offers and <br />
                  Updates
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
                  <MonetizationOnIcon className="Icon" sx={{ color: "#2b2e64" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#2b2e64",
                    fontSize: "2rem",

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
                  <Share className="Icon" sx={{ color: "#2b2e64" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#2b2e64",
                    fontSize: "2rem",

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
                  <SettingsIcon className="Icon" sx={{ color: "#2b2e64" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#2b2e64",
                    fontSize: "2rem",

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
                  <HelpIcon className="Icon" sx={{ color: "#2b2e64" }} />
                </ListItemIcon>

                <div
                  style={{
                    color: "#2b2e64",
                    fontSize: "2rem",

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
          {selectedItem === "DashBoard" && <MobileDetails />}
          {selectedItem === "Baby Details" && <BabyDetails />}
          {selectedItem === "Invoices" && <Invoices />}
          {selectedItem === "Reports" && <Services />}
          {selectedItem === "Offers and Updates" && <Offers />}
          {selectedItem === "Subscription" && <Subscription />}
          {selectedItem === "Settings" && <SettingsPage />}
          {selectedItem === "Reference" && <Refferals />}
          {selectedItem === "Help" && <Help />}
        </Box>

        {/* {isSubscribedUser?.length == 0 ? (
          <Box
            style={{
              width: isMobile ? "100%" : "calc(100% - 300px)",
              display: isMobile ? "none" : "block",
            }}
          >
            {selectedItem === "DashBoard" && <Details />}
            {selectedItem === "Baby Details" && <BabyDetails />}
            {selectedItem === "Invoices" && <Invoices />}
            {selectedItem === "Reports" && <Services />}
            {selectedItem === "Subscription" && <Subscription />}
            {selectedItem === "Offers and Updates" && <Offers />}
            {selectedItem === "Reference" && <Refferals />}
            {selectedItem === "Settings" && <SettingsPage />}
            {selectedItem === "Help" && <Help />}
          </Box>
        ) : (
          <Box
            sx={{
              display: "block",
              margin: "auto",
              background: "white",
              padding: "1rem",
              height: "50rem",
              boxShadow: "4px 6px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <AddDetailsPopup />
          </Box>
        )} */}
      </Box>
    </>
  );
};

export default Dashboard;
