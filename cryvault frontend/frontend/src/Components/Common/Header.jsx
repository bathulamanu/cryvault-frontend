import { Button, IconButton, Drawer, styled, Collapse, ListItemButton, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import useScrollToTop from "../../Utilities/scrolltop";
import React, { useRef, useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseIcon from "@mui/icons-material/Close";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeaderSocialIcons } from "../../redux/reducers/HomePageReducer";

const Header = () => {
  const navRef = React.useRef(null);
  const [hasToken, setHasToken] = useState(false);
  const [socialicons, setSocialIcons] = useState([]);
  const [userType, setUserType] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const onAddClick = (e) => {
    setIsActive(!isActive);
  };
  const handleLogout = (e) => {};

  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToTop = useScrollToTop();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home);
  const headerSocialIcons = data && data.socialIcons && data.socialIcons && data.socialIcons.data && data.socialIcons.data[0];
  console.log({ headerSocialIcons });
  useEffect(() => {
    dispatch(fetchHeaderSocialIcons());
  }, []);
  return (
    <header className="edu-header header-style-1 header-fullwidth">
      <Box className="header-top-bar">
        <Box className="container-fluid">
          <Box className="header-top">
            <Box className="header-top-left">
              <ul className="header-info">
                {headerSocialIcons && headerSocialIcons?.length === 0 ? (
                  <Typography fontSize={20}>No Icons Available</Typography>
                ) : (
                  headerSocialIcons &&
                  headerSocialIcons?.footerPara?.[0]?.contactIconAndInfo
                    .filter(
                      (socialicon) => socialicon.name !== "Location" // Filter out "location"
                    )
                    .map((socialicon) => (
                      <li key={socialicon.name}>
                        <Link to={socialicon.iconUrl}>
                          <i className={socialicon.className}></i>
                          {socialicon.description}
                        </Link>
                      </li>
                    ))
                )}
              </ul>
            </Box>
            <Box className="header-top-right">
              <ul className="header-info">
                <li className="social-icon">
                  {headerSocialIcons && headerSocialIcons?.length === 0 ? (
                    <Typography fontSize={20}>No Icons Available</Typography>
                  ) : (
                    headerSocialIcons &&
                    headerSocialIcons?.footerPara?.[0]?.socialMediaIcons?.map((socialicon) => (
                      <Link to={socialicon.iconUrl}>
                        <i className={socialicon.className}></i>
                      </Link>
                    ))
                  )}
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box position="absolute" left="0" width="100%" zIndex="999" transition="top 0.3s ease-in-out">
        <Box className="header-mainmenu">
          <Box className="container-fluid">
            <Box className="header-navbar">
              <Box className="header-brand">
                <Box className="logo">
                  <Link onClick={useScrollToTop()} to="/">
                    <img className="logo-light" src="assets/images/cryovault-blue-200x48.webp" alt="Corporate Logo" />
                    <img className="logo-dark" src="assets/images/cryovault-blue-200x48.webp" alt="Corporate Logo" />
                  </Link>
                </Box>
              </Box>

              <Box className="header-right ">
                <nav className="mainmenu-nav header-mainnav">
                  <ul className="mainmenu">
                    {/* <li>
                      <Link onClick={useScrollToTop()} to="/">
                        HOME
                      </Link>
                    </li> */}
                    <li className="has-droupdown">
                      <Link onClick={useScrollToTop()} to="#">
                        ABOUT
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link onClick={useScrollToTop()} to="aboutus">
                            About Cryovault
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="vision-mission">
                            Vision and Mission
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="accreditations">
                            Accreditations &amp; Certifications
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="carrer">
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="franchise">
                            Franchise
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-droupdown">
                      <Link onClick={useScrollToTop()} to="#">
                        {" "}
                        STEM CELL BANKING
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link onClick={useScrollToTop()} to="/stem-cell-banking">
                            Stem Cell Banking
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/why-to-choose-stem-cell-banking">
                            Why to Choose Stem Cell Banking?
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/about-umbilical-cord">
                            What is Umbilical Cord?
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/cord-blood-banking-umbilical-cord-preservation-in-india-cryovault">
                            Cord Blood Banking
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/how-to-store-your-stem-cells-with-cryovault">
                            How to Store Your STEM CELLS WITH CRYOVAULT
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/best-stem-cell-bank-in-india-stem-cell-banking-cryovault">
                            Benifits of Stem Cells
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/when-and-how-is-cord-blood-collected">
                            When and How is Cord Blood Collected
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/7-reasons-to-save-your-childs-cord-blood">
                            7 Reasons to Save your Child's Cord Blood
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-droupdown">
                      <Link onClick={useScrollToTop()} to="/">
                        {" "}
                        GETTING STARTED
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link onClick={useScrollToTop()} to="/plan">
                            Plans
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/request-for-information-kit">
                          Request For Information Kit
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/appointment">
                            Appointment
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-droupdown">
                      <Link onClick={useScrollToTop()} to="/pregnancy">
                        {" "}
                        PREGNANCY
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link onClick={useScrollToTop()} to="/first-trimester">
                            First Trimester
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/second-trimester">
                            Second Trimester
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/third-trimester">
                            Third Trimester
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/pregnancy-diet-chart">
                            Pregnancy Diet Chart
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/immunization-chart">
                            Immunization Chart
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={useScrollToTop()} to="/blog">
                        {" "}
                        BLOG
                      </Link>
                    </li>
                    <li className="has-droupdown">
                      <Link onClick={useScrollToTop()} to="/images">
                        {" "}
                        GALLERY
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link onClick={useScrollToTop()} to="/images">
                            Images
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to="/videos">
                            Videos
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link onClick={useScrollToTop()} to="/contactus" className="pr-0">
                        CONTACT
                      </Link>
                    </li>
                    <li style={{ display: "flex", alignItems: "center" }}>
                      <Link onClick={useScrollToTop()} to="/cart" className="pr-0">
                        <IoMdCart size={20} />
                      </Link>
                    </li>

                    <li style={{ display: "flex", alignItems: "center" }} className="has-droupdown">
                      <Link onClick={useScrollToTop()} to="#">
                        <FaRegUserCircle size={20} />
                      </Link>
                      <ul className="submenu" style={{ left: "-75%", minWidth: "200px" }}>
                        {!hasToken && (
                          <li>
                            <Link to="/login" className="pr-0">
                              <button className="edu-btn">GET STARTED</button>
                            </Link>
                          </li>
                        )}
                        {hasToken && (
                          <>
                            {userType && (
                              <li>
                                <Link to="/dashboard">Dashboard</Link>
                              </li>
                            )}

                            <li>
                              <Link to="/videos" onClick={handleLogout}>
                                Logout
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </header>
  );
};
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "75%",
    animation: `$slideDown 0.3s ease-in-out forwards`,
    "& .MuiPaper-root": {
      width: "70%",
    },

    "& .MuiTypography-root": {
      fontSize: "2rem",
    },
    listItemText: {
      "& .MuiTypography-root": {
        fontSize: "3rem",
        color: "#333",
      },
    },
  },
}));
export const MobileHeader = React.memo(() => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const [openNestedListIndex, setOpenNestedListIndex] = useState(null);

  const handleNestedClick = (clickedIndex) => {
    if (clickedIndex === openNestedListIndex) {
      setOpenNestedListIndex(null);
    } else {
      setOpenNestedListIndex(clickedIndex);
    }
  };
  return (
    <>
      <Box left="0" zIndex="999" transition="top 0.3s ease-in-out">
        <Box className="header-mainmenu">
          <Box className="container-fluid">
            <Box className="header-navbar" style={{ display: "flex", width: "100%", justifyContent: "space-between", padding: "1rem " }}>
              <Box className="header-brand">
                <Box className="logo">
                  <Link to="/">
                    <img className="logo-dark" src="assets/images/cryovault-blue-200x48.webp" alt="Corporate Logo" />
                  </Link>
                </Box>
              </Box>

              <Box className="header-right ">
                <Button variant="outlined" aria-label="menu" onClick={handleDrawerOpen} size="large" sx={{ width: "50px", height: "50px", color: "black" }}>
                  <MenuSharpIcon onClick={handleDrawerOpen} style={{ width: "50px", height: "50px", color: "black" }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Drawer classes={{ paper: classes.drawer }} anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem button onClick={handleNestedClick}>
            <ListItemText className={classes.listItemText} primary="Home" />
          </ListItem>
          <ListItemButton onClick={() => handleNestedClick(0)}>
            <ListItemText className={classes.listItemText} primary="About" />
            <ListItemIcon>{openNestedListIndex === 0 ? <ExpandLess style={{ fontSize: "3.5rem", height: "4rem" }} /> : <ExpandMore style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
          </ListItemButton>

          {openNestedListIndex === 0 && (
            <List dense disablePadding style={{ marginLeft: 40 }}>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="About Cryovault" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="Vision & Mission " />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary=" Accreditations &amp; Certifications" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="Carrers " />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="Francise " />
              </ListItem>
            </List>
          )}
          <ListItemButton onClick={() => handleNestedClick(1)}>
            <ListItemText onClick={() => handleNestedClick(1)} className={classes.listItemText} primary="Stem Cell Banking" />
            <ListItemIcon>{nestedOpen ? <ExpandLess style={{ fontSize: "3.5rem", height: "4rem" }} /> : <ExpandMore style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
          </ListItemButton>
          {openNestedListIndex === 1 && (
            <List dense disablePadding style={{ marginLeft: 40 }}>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="Stem Cell Banking" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="Why to Choose Stem Cell Banking?" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="   What is Umbilical Cord?" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary=" Cord Blood Banking" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="How to Store Your STEM CELLS WITH CRYOVAULT" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary=" Benifits of Stem Cells" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary=" When and How is Cord Blood Collected" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="  7 Reasons to Save your Child's Cord Blood" />
              </ListItem>
            </List>
          )}
          <ListItemButton onClick={() => handleNestedClick(3)}>
            <ListItemText onClick={() => handleNestedClick(3)} className={classes.listItemText} primary="Getting Started" />
            <ListItemIcon>{nestedOpen ? <ExpandLess style={{ fontSize: "3.5rem", height: "4rem" }} /> : <ExpandMore style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
          </ListItemButton>
          {openNestedListIndex === 2 && (
            <List dense disablePadding style={{ marginLeft: 40 }}>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="Plans" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary=" Request For Information Kit" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="Appointment" />
              </ListItem>
            </List>
          )}
          <ListItemButton onClick={() => handleNestedClick(3)}>
            <ListItemText onClick={() => handleNestedClick(3)} className={classes.listItemText} primary="Pregnancy" />
            <ListItemIcon>{nestedOpen ? <ExpandLess style={{ fontSize: "3.5rem", height: "4rem" }} /> : <ExpandMore style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
          </ListItemButton>
          {openNestedListIndex === 3 && (
            <List dense disablePadding style={{ marginLeft: 40 }}>
              <ListItem>
                <ListItemText className={classes.listItemText} primary=" First Trimester" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary=" Second Trimester" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary=" Third Trimester" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary=" Pregnancy Diet Chart" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="Immunization Chart" />
              </ListItem>
            </List>
          )}

          <ListItemButton onClick={() => handleNestedClick(4)}>
            <ListItemText onClick={() => handleNestedClick(4)} className={classes.listItemText} primary="Gallery" />
            <ListItemIcon>{nestedOpen ? <ExpandLess style={{ fontSize: "3.5rem", height: "4rem" }} /> : <ExpandMore style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
          </ListItemButton>
          {openNestedListIndex === 4 && (
            <List dense disablePadding style={{ marginLeft: 40 }}>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="Images" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="Video" />
              </ListItem>
            </List>
          )}
          <ListItemButton onClick={() => handleNestedClick(5)}>
            <ListItemText onClick={() => handleNestedClick(5)} className={classes.listItemText} primary="Profile" />
            <ListItemIcon>{nestedOpen ? <ExpandLess style={{ fontSize: "3.5rem", height: "4rem" }} /> : <ExpandMore style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
          </ListItemButton>
          {openNestedListIndex === 5 && (
            <List dense disablePadding style={{ marginLeft: 40 }}>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="Get Started" />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.listItemText} primary="Logout" />
              </ListItem>
            </List>
          )}
          <ListItemButton button onClick={handleNestedClick}>
            <ListItemText className={classes.listItemText} primary="Cart" />
          </ListItemButton>
          <ListItemButton button onClick={handleNestedClick}>
            <ListItemText className={classes.listItemText} primary="Blog" />
          </ListItemButton>
          <ListItemButton onClick={handleNestedClick}>
            <ListItemText onClick={handleNestedClick} className={classes.listItemText} primary="Contact" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
});

export default Header;
