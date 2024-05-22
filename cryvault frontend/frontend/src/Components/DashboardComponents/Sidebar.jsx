import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const ReportColumn = ({ reports = "Reports", onClose, ...props }) => {
  const location = useLocation(); // This hook returns the current location object.
  const navigate = useNavigate();
  // Helper function to determine if the route is active
  const isActiveRoute = (route) => location.pathname === route;
  const handleLogout = () => {
    sessionStorage.removeItem("token"); // Clear token from session storage
    navigate("/"); // Navigate to "/"
    window.location.reload();
  };

  // Define all your routes and their default images
  const routes = [
    { to: "/details", img: "dashboard.svg", name: "DashBoard", activeimg: "dashboardactive.svg" },
    { to: "/babydoctordetails", img: "babydoctordetails.svg", name: "Birth Details", activeimg: "babydoctordetailsactive.svg" },
    { to: "/invoice", img: "invoice.svg", name: "Invoices", activeimg: "img_basil_invoice_outline.svg" },
    { to: "/report", img: "report.svg", name: "Reports", activeimg: "img_sort.svg" },
    { to: "/subscription", img: "subscription.svg", name: "Subscription", activeimg: "subscriptionactive.svg" },
    { to: "/offer", img: "offer.svg", name: "Offer", activeimg: "offeractive.svg" },
    { to: "/reference", img: "reference.svg", name: "Reference", activeimg: "referenceactive.svg" },
    { to: "/settings", img: "settings.svg", name: "Settings", activeimg: "settingsactive.svg" },
    { to: "/help", img: "help.svg", name: "Help", activeimg: "helpactive.svg" },
  ];

  return (
    <Box {...props} width={{ md: "10%", base: "100%", marginTop: "10rem" }}>
      {routes.map(({ to, img, name, activeimg }, index) => (
        <NavLink key={index} to={to} onClick={onClose}>
          {isActiveRoute(to) ? (
            <Box flexDirection="column" alignItems="center" mt={index === 0 ? "59px" : "0"} w="100%">
              <Box sx={{ background: "#9e64f6" }} bg="#9e64f6" flexDirection="column" alignItems="center" p="9px" borderRadius="24px">
                <img src={`images/${activeimg}`} h="30px" w="30px" />
              </Box>
              <Typography variant="h5" size="xs" color="#9e64f6">
                {name}
              </Typography>
            </Box>
          ) : (
            <Box flexDirection="column" alignItems="center" mt={index === 0 ? "59px" : "0"} w="100%">
              <img src={`images/${img}`} h={{ md: "81px", base: "auto" }} />
            </Box>
          )}
        </NavLink>
      ))}
    </Box>
  );
};
export default ReportColumn;
