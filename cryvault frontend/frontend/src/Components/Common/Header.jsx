import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Typography, IconButton, Toolbar, Menu, Container, Avatar, Button, MenuItem, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  const pages = ["Home", "About", "Stem Cell Banking", "Getting Started", "Pregnancy", "Blog", "Gallery", "Contact"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img style={{ width: "10rem", height: "3rem" }} src={"assets/images/cryovault-blue-200x48.webp"} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "end !important" }}>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "#334155", display: "flex", alignItems: "start", gap: "0.5rem" }}>
              Home
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "#334155", display: "flex", alignItems: "start", gap: "0.5rem" }}>
              About <ExpandMoreIcon />
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "#334155", display: "flex", alignItems: "start", gap: "0.5rem" }}>
              Stem Cell Banking <ExpandMoreIcon />
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "#334155", display: "flex", alignItems: "start", gap: "0.5rem" }}>
              Getting Started <ExpandMoreIcon />
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "#334155", display: "flex", alignItems: "start", gap: "0.5rem" }}>
              Pregnancy <ExpandMoreIcon />
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "#334155", display: "flex", alignItems: "start", gap: "0.5rem" }}>
              Blog
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "#334155", display: "flex", alignItems: "start", gap: "0.5rem" }}>
              Gallery <ExpandMoreIcon />
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "#334155", display: "flex", alignItems: "start", gap: "0.5rem" }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
