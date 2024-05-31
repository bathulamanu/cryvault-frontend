import { Button, IconButton, Drawer, Collapse, ListItemButton, Typography, createTheme } from "@mui/material";
import Box from "@mui/material/Box";
import useScrollToTop from "../../Utilities/scrolltop";
import React, { useRef, useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseIcon from "@mui/icons-material/Close";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore, SignalCellularNullOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeaderSocialIcons, getPageMetaInfo } from "../../redux/reducers/HomePageReducer";
import { AppBar, Toolbar, Menu, MenuItem, Divider, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
  useEffect(() => {
    dispatch(fetchHeaderSocialIcons());
    dispatch(getPageMetaInfo());
  }, []);

  const pageInfo = useSelector((state) => state.home.pageInfo);
  const aboutCryovault = pageInfo?.[0]?.[1]?.urlSlug;
  const howToStoreYourStemCellsWithCryovault = pageInfo?.[1]?.[2]?.urlSlug;
  const careers = pageInfo?.[2]?.[4]?.urlSlug;
  const whyToChooseStemCellBanking = pageInfo?.[3]?.[3]?.urlSlug;
  const cordBloodBankingUmbilicalCordPreservationInIndiaCryovault = pageInfo?.[4]?.[5]?.urlSlug;
  const stemCellBanking = pageInfo?.[5]?.[9]?.urlSlug;
  const franchise = pageInfo?.[6]?.[6]?.urlSlug;
  const visionMission = pageInfo?.[7]?.[7]?.urlSlug;
  // const howToStoreYourStemCellsWithCryovault = pageInfo?.[8]?.[11]?.urlSlug
  const requestForInformationKit = pageInfo?.[9]?.[12]?.urlSlug;
  const aboutUmbilicalCord = pageInfo?.[10]?.[10]?.urlSlug;
  const ReasonsToSaveYourChildsCordBlood = pageInfo?.[11]?.[8]?.urlSlug;
  const cryovaultUmbilicalCordPreservationStemCellBankingCharges = pageInfo?.[12]?.[14]?.urlSlug;
  const videos = pageInfo?.[13]?.[18]?.urlSlug;
  const immunizationChart = pageInfo?.[14]?.[19]?.urlSlug;
  const thirdTrimester = pageInfo?.[15]?.[20]?.urlSlug;
  const appointment = pageInfo?.[16]?.[15]?.urlSlug;
  const secondTrimester = pageInfo?.[17]?.[16]?.urlSlug;
  const firstTrimester = pageInfo?.[18]?.[17]?.urlSlug;
  const pregnancyDietChart = pageInfo?.[19]?.[21]?.urlSlug;
  const contact = pageInfo?.[20]?.[22]?.urlSlug;
  const images = pageInfo?.[21]?.[24]?.urlSlug;
  const blog = pageInfo?.[22]?.[23]?.urlSlug;
  const bestStemCellBankInIndiaStemCellBankingCryovault = pageInfo?.[23]?.[25]?.urlSlug;
  const accreditationsCertifications = pageInfo?.[24]?.[13]?.urlSlug;
  const whenAndHowIsCordBloodCollected = pageInfo?.[25]?.[26]?.urlSlug;
  const orderDetails = useSelector((state) => state.payment.orderDetails);

  const userDetails = useSelector((state) => state.user.userDetails);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(userDetails?.customerID?.toString()?.length > 0 || false);
  const [isSubscribedUser, setiIsSubscribedUser] = useState(userDetails?.subscriptionPlanId?.toString()?.length > 0 || orderDetails && orderDetails?.PaymentDetails?.[0]?.subscriptionPlanId?.toString()?.length > 0 || false);
  useEffect(() => {
    setIsUserLoggedIn(userDetails?.customerID?.toString()?.length > 0 || orderDetails && orderDetails?.PaymentDetails?.[0]?.subscriptionPlanId?.toString()?.length > 0 );
    setiIsSubscribedUser(userDetails?.subscriptionPlanId?.toString()?.length > 0 || orderDetails && orderDetails?.PaymentDetails?.[0]?.subscriptionPlanId?.toString()?.length > 0 );
  }, [userDetails,orderDetails]);

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    localStorage.clear();
    sessionStorage.clear();
  };
  useEffect(() => {
    localStorage.setItem("isCheckingOut", "false");
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
                    {/* <img className="logo-dark" src="assets/images/cryovault-blue-200x48.webp" alt="Corporate Logo" /> */}
                  </Link>
                </Box>
              </Box>

              <Box className="header-right ">
                <nav className="mainmenu-nav header-mainnav">
                  <ul className="mainmenu">
                    <li>
                      <Link onClick={useScrollToTop()} to="/">
                        HOME
                      </Link>
                    </li>
                    <li className="has-droupdown">
                      <Link onClick={useScrollToTop()} to={`/${aboutCryovault}`}>
                        ABOUT
                      </Link>

                      <ul className="submenu">
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${aboutCryovault}`}>
                            About Cryovault
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${visionMission}`}>
                            Vision and Mission
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${accreditationsCertifications}`}>
                            Accreditations &amp; Certifications
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${careers}`}>
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${franchise}`}>
                            Franchise
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-droupdown">
                      <Link onClick={useScrollToTop()} to={`/${stemCellBanking}`}>
                        {" "}
                        STEM CELL BANKING
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${stemCellBanking}`}>
                            Stem Cell Banking
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${whyToChooseStemCellBanking}`}>
                            Why to Choose Stem Cell Banking?
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${aboutUmbilicalCord}`}>
                            What is Umbilical Cord?
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${cordBloodBankingUmbilicalCordPreservationInIndiaCryovault}`}>
                            Cord Blood Banking
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${howToStoreYourStemCellsWithCryovault}`}>
                            How to Store Your STEM CELLS WITH CRYOVAULT
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${bestStemCellBankInIndiaStemCellBankingCryovault}`}>
                            Benifits of Stem Cells
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${whenAndHowIsCordBloodCollected}`}>
                            When and How is Cord Blood Collected
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${ReasonsToSaveYourChildsCordBlood}`}>
                            7 Reasons to Save your Child's Cord Blood
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-droupdown">
                      <Link onClick={useScrollToTop()} to="/plan">
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
                          <Link onClick={useScrollToTop()} to={`/${requestForInformationKit}`}>
                            Request For Information Kit
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${appointment}`}>
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
                          <Link onClick={useScrollToTop()} to={`/${firstTrimester}`}>
                            First Trimester
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${secondTrimester}`}>
                            Second Trimester
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${thirdTrimester}`}>
                            Third Trimester
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${pregnancyDietChart}`}>
                            Pregnancy Diet Chart
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${immunizationChart}`}>
                            Immunization Chart
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={useScrollToTop()} to={`/${blog}`}>
                        {" "}
                        BLOG
                      </Link>
                    </li>
                    <li className="has-droupdown">
                      <Link onClick={useScrollToTop()} to={`/${images}`}>
                        {" "}
                        GALLERY
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link onClick={useScrollToTop()} to={`${images}`}>
                            Images
                          </Link>
                        </li>
                        <li>
                          <Link onClick={useScrollToTop()} to={`/${videos}`}>
                            Videos
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link onClick={useScrollToTop()} to={`/${contact}`} className="pr-0">
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
                        {isUserLoggedIn ? (
                          <>
                            {isSubscribedUser ? (
                              <li>
                                <Link to="/dashboard">Dashboard</Link>
                              </li>
                            ) : null}

                            <li>
                              <Link to="/" onClick={handleLogout}>
                                Logout
                              </Link>
                            </li>
                          </>
                        ) : (
                          <li>
                            <Link to="/login" className="pr-0">
                              <Button className="edu-btn">GET STARTED</Button>
                            </Link>
                          </li>
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

export const MobileHeader = React.memo(() => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");
  const [openNestedListIndex, setOpenNestedListIndex] = useState(null);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const userDetails = useSelector((state) => state.user.userDetails);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(userDetails?.customerID?.toString()?.length > 0 || false);
  const [isSubscribedUser, setiIsSubscribedUser] = useState(userDetails?.subscriptionPlanId?.toString()?.length > 0 || false);

  useEffect(() => {
    setIsUserLoggedIn(userDetails?.customerID?.toString()?.length > 0);
    setiIsSubscribedUser(userDetails?.subscriptionPlanId?.toString()?.length > 0);
  }, [userDetails]);

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    localStorage.clear();
    sessionStorage.clear();
  };
  const handleNestedClick = (clickedIndex) => {
    if (clickedIndex === openNestedListIndex) {
      setOpenNestedListIndex(null);
    } else {
      setOpenNestedListIndex(clickedIndex);
    }
  };

  useEffect(() => {
    dispatch(fetchHeaderSocialIcons());
    dispatch(getPageMetaInfo());
  }, []);

  const pageInfo = useSelector((state) => state.home.pageInfo);
  const aboutCryovault = pageInfo?.[0]?.[1]?.urlSlug;
  const howToStoreYourStemCellsWithCryovault = pageInfo?.[1]?.[2]?.urlSlug;
  const careers = pageInfo?.[2]?.[4]?.urlSlug;
  const whyToChooseStemCellBanking = pageInfo?.[3]?.[3]?.urlSlug;
  const cordBloodBankingUmbilicalCordPreservationInIndiaCryovault = pageInfo?.[4]?.[5]?.urlSlug;
  const stemCellBanking = pageInfo?.[5]?.[9]?.urlSlug;
  const franchise = pageInfo?.[6]?.[6]?.urlSlug;
  const visionMission = pageInfo?.[7]?.[7]?.urlSlug;
  const requestForInformationKit = pageInfo?.[9]?.[12]?.urlSlug;
  const aboutUmbilicalCord = pageInfo?.[10]?.[10]?.urlSlug;
  const ReasonsToSaveYourChildsCordBlood = pageInfo?.[11]?.[8]?.urlSlug;
  const videos = pageInfo?.[13]?.[18]?.urlSlug;
  const immunizationChart = pageInfo?.[14]?.[19]?.urlSlug;
  const thirdTrimester = pageInfo?.[15]?.[20]?.urlSlug;
  const appointment = pageInfo?.[16]?.[15]?.urlSlug;
  const secondTrimester = pageInfo?.[17]?.[16]?.urlSlug;
  const firstTrimester = pageInfo?.[18]?.[17]?.urlSlug;
  const pregnancyDietChart = pageInfo?.[19]?.[21]?.urlSlug;
  const contact = pageInfo?.[20]?.[22]?.urlSlug;
  const images = pageInfo?.[21]?.[24]?.urlSlug;
  const blog = pageInfo?.[22]?.[23]?.urlSlug;
  const bestStemCellBankInIndiaStemCellBankingCryovault = pageInfo?.[23]?.[25]?.urlSlug;
  const accreditationsCertifications = pageInfo?.[24]?.[13]?.urlSlug;
  const whenAndHowIsCordBloodCollected = pageInfo?.[25]?.[26]?.urlSlug;

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
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          width: "75%",
          animation: `$slideDown 0.3s ease-in-out forwards`,
          "& .MuiPaper-root": {
            width: "70%",
          },

          "& .MuiTypography-root": {
            fontSize: "2rem",
            fontWeight: "600",
            fontFamily: "'Baloo 2'",
          },
          listItemText: {
            "& .MuiTypography-root": {
              fontSize: "3rem",
              color: "#333",
            },
          },
        }}
      >
        <List>
          <ListItemButton sx={{ border: "1px solid #e5e5e5", borderTop: "none" }} button onClick={handleNestedClick}>
            <Link to={`/`}>
              <ListItemText sx={{ color: selectedItem == "Home" ? "#550059" : "black" }} primary="Home" />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ border: "1px solid #e5e5e5", borderTop: "none" }} onClick={() => handleNestedClick(0)}>
            <ListItemText sx={{ color: selectedItem == "About" ? "#550059" : "black" }} onClick={() => setSelectedItem("About")} primary="About" />
            <ListItemIcon>{openNestedListIndex === 0 ? <ExpandLess style={{ fontSize: "3.5rem", height: "4rem" }} /> : <ExpandMore style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
          </ListItemButton>

          {openNestedListIndex === 0 && (
            <List dense disablePadding style={{ paddingLeft: 40, borderBottom: "1px solid #e5e5e5" }}>
              <Link to={`/${aboutCryovault}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
                  <ListItemText onClick={() => setSelectedItem("About Cryovault")} sx={{ color: selectedItem == "About Cryovault" ? "#550059" : "black" }} primary="About Cryovault" />
                </ListItemButton>
              </Link>
              <Link to={`/${visionMission}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Vision & Mission " ? "#550059" : "black" }} onClick={() => setSelectedItem("Vision & Mission ")} primary="Vision & Mission " />
                </ListItemButton>
              </Link>
              <Link to={`/${accreditationsCertifications}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Accreditations &amp; Certifications" ? "#550059" : "black" }} onClick={() => setSelectedItem(" Accreditations &amp; Certifications")} primary=" Accreditations &amp; Certifications" />
                </ListItemButton>
              </Link>
              <Link to={`/${careers}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Carrers" ? "#550059" : "black" }} onClick={() => setSelectedItem("Carrers")} primary="Carrers " />
                </ListItemButton>
              </Link>
              <Link to={`/${franchise}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Francise" ? "#550059" : "black" }} onClick={() => setSelectedItem("Francise")} primary="Francise " />
                </ListItemButton>
              </Link>
            </List>
          )}
          <ListItemButton
            sx={{ border: "1px solid #e5e5e5", borderTop: "none" }}
            onClick={() => {
              setSelectedItem("Stem Cell Banking");
              handleNestedClick(1);
            }}
          >
            <ListItemText
              onClick={() => {
                setSelectedItem("Stem Cell Banking");
                handleNestedClick(1);
              }}
              sx={{ color: selectedItem == "Stem Cell Banking" ? "#550059" : "black" }}
              primary="Stem Cell Banking"
            />
            <ListItemIcon>{nestedOpen ? <ExpandLess style={{ fontSize: "3.5rem", height: "4rem" }} /> : <ExpandMore style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
          </ListItemButton>
          {openNestedListIndex === 1 && (
            <List dense disablePadding>
              <Link to={`/${stemCellBanking}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Stem Cell Banking" ? "#550059" : "black" }} onClick={() => setSelectedItem("Stem Cell Banking")} primary="Stem Cell Banking" />
                </ListItemButton>
              </Link>
              <Link to={`/${whyToChooseStemCellBanking}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Why to Choose Stem Cell Banking?" ? "#550059" : "black" }} onClick={() => setSelectedItem("Why to Choose Stem Cell Banking?")} primary="Why to Choose Stem Cell Banking?" />
                </ListItemButton>
              </Link>
              <Link to={`/${aboutUmbilicalCord}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "What is Umbilical Cord?" ? "#550059" : "black" }} onClick={() => setSelectedItem("What is Umbilical Cord?")} primary="What is Umbilical Cord?" />
                </ListItemButton>
              </Link>
              <Link to={`/${cordBloodBankingUmbilicalCordPreservationInIndiaCryovault}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Cord Blood Banking" ? "#550059" : "black" }} onClick={() => setSelectedItem("Cord Blood Banking")} primary=" Cord Blood Banking" />
                </ListItemButton>
              </Link>

              <Link to={`/${howToStoreYourStemCellsWithCryovault}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "How to Store Your STEM CELLS WITH CRYOVAULT" ? "#550059" : "black" }} onClick={() => setSelectedItem("How to Store Your STEM CELLS WITH CRYOVAULT")} primary="How to Store Your STEM CELLS WITH CRYOVAULT" />
                </ListItemButton>
              </Link>

              <Link to={`/${bestStemCellBankInIndiaStemCellBankingCryovault}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
                  <ListItemText sx={{ color: selectedItem == "Benifits of Stem Cells" ? "#550059" : "black" }} onClick={() => setSelectedItem("Benifits of Stem Cells")} primary=" Benifits of Stem Cells" />
                </ListItemButton>
              </Link>

              <Link to={`/${whenAndHowIsCordBloodCollected}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == " When and How is Cord Blood Collected" ? "#550059" : "black" }} onClick={() => setSelectedItem(" When and How is Cord Blood Collected")} primary=" When and How is Cord Blood Collected" />
                </ListItemButton>
              </Link>
              <Link to={`/${ReasonsToSaveYourChildsCordBlood}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "7 Reasons to Save your Child's Cord Blood" ? "#550059" : "black" }} onClick={() => setSelectedItem(" 7 Reasons to Save your Child's Cord Blood")} primary="  7 Reasons to Save your Child's Cord Blood" />
                </ListItemButton>
              </Link>
            </List>
          )}
          <ListItemButton
            onClick={() => {
              setSelectedItem("Getting Started");
              handleNestedClick(2);
            }}
            sx={{ border: "1px solid #e5e5e5" }}
          >
            <ListItemText
              onClick={() => {
                setSelectedItem("Getting Started");
                handleNestedClick(2);
              }}
              sx={{ color: selectedItem == "Getting Started" ? "#550059" : "black" }}
              primary="Getting Started"
            />
            <ListItemIcon>{nestedOpen ? <ExpandLess style={{ fontSize: "3.5rem", height: "4rem" }} /> : <ExpandMore style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
          </ListItemButton>
          {openNestedListIndex === 2 && (
            <List dense disablePadding>
              <Link to={`/plan`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Plans" ? "#550059" : "black" }} onClick={() => setSelectedItem("Plans")} primary="Plans" />
                </ListItemButton>
              </Link>
              <Link to={`/${requestForInformationKit}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Request For Information Kit" ? "#550059" : "black" }} onClick={() => setSelectedItem("Request For Information Kit")} primary=" Request For Information Kit" />
                </ListItemButton>
              </Link>
              <Link to={`/${appointment}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Appointmentt" ? "#550059" : "black" }} onClick={() => setSelectedItem("Appointment")} primary="Appointment" />
                </ListItemButton>
              </Link>
            </List>
          )}
          <ListItemButton
            onClick={() => {
              setSelectedItem("Pregnancy");
              handleNestedClick(3);
            }}
            sx={{ border: "1px solid #e5e5e5", borderTop: "none" }}
          >
            <ListItemText
              onClick={() => {
                setSelectedItem("Pregnancy");
                handleNestedClick(3);
              }}
              sx={{ color: selectedItem == "Pregnancy" ? "#550059" : "black" }}
              primary="Pregnancy"
            />
            <ListItemIcon>{nestedOpen ? <ExpandLess style={{ fontSize: "3.5rem", height: "4rem" }} /> : <ExpandMore style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
          </ListItemButton>
          {openNestedListIndex === 3 && (
            <List dense disablePadding>
              <Link to={`/${firstTrimester}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "First Trimester" ? "#550059" : "black" }} onClick={() => setSelectedItem(" First Trimester")} primary=" First Trimester" />
                </ListItemButton>
              </Link>
              <Link to={`/${secondTrimester}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Second Trimester" ? "#550059" : "black" }} onClick={() => setSelectedItem(" Second Trimester")} primary=" Second Trimester" />
                </ListItemButton>
              </Link>
              <Link to={`/${thirdTrimester}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Third Trimester" ? "#550059" : "black" }} onClick={() => setSelectedItem(" Third Trimester")} primary=" Third Trimester" />
                </ListItemButton>
              </Link>
              <Link to={`/${pregnancyDietChart}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Pregnancy Diet Chart" ? "#550059" : "black" }} onClick={() => setSelectedItem("Pregnancy Diet Chart")} primary=" Pregnancy Diet Chart" />
                </ListItemButton>
              </Link>
              <Link to={`/${immunizationChart}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Immunization Chart" ? "#550059" : "black" }} onClick={() => setSelectedItem("Immunization Chart")} primary="Immunization Chart" />
                </ListItemButton>
              </Link>
            </List>
          )}

          <ListItemButton
            onClick={() => {
              setSelectedItem("Gallery");
              handleNestedClick(4);
            }}
            sx={{ border: "1px solid #e5e5e5" }}
          >
            <ListItemText
              onClick={() => {
                setSelectedItem("Gallery");
                handleNestedClick(4);
              }}
              sx={{ color: selectedItem == "Gallery" ? "#550059" : "black" }}
              primary="Gallery"
            />
            <ListItemIcon>{nestedOpen ? <ExpandLess style={{ fontSize: "3.5rem", height: "4rem" }} /> : <ExpandMore style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
          </ListItemButton>
          {openNestedListIndex === 4 && (
            <List dense disablePadding>
              <Link to={`/${images}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Images" ? "#550059" : "black" }} onClick={() => setSelectedItem("Images")} primary="Images" />
                </ListItemButton>
              </Link>
              <Link to={`/${videos}`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText sx={{ color: selectedItem == "Video" ? "#550059" : "black" }} onClick={() => setSelectedItem("Video")} primary="Video" />
                </ListItemButton>
              </Link>
            </List>
          )}
          <ListItemButton sx={{ border: "1px solid #e5e5e5", borderTop: "none" }} onClick={() => handleNestedClick(5)}>
            <ListItemText
              sx={{ color: selectedItem == "Profile" ? "#550059" : "black" }}
              onClick={() => {
                setSelectedItem("Profile");
                handleNestedClick(5);
              }}
              primary="Profile"
            />
            <ListItemIcon>{nestedOpen ? <ExpandLess style={{ fontSize: "3.5rem", height: "4rem" }} /> : <ExpandMore style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>
          </ListItemButton>
          {openNestedListIndex === 5 && (
            <List dense disablePadding>
              {isUserLoggedIn ? (
                <>
                  {isSubscribedUser ? (
                    <Link to={`/dashboard`} onClick={handleDrawerClose}>
                      <ListItemButton>
                        <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                        <ListItemText
                          sx={{ color: selectedItem == "Dashboard" ? "#550059" : "black" }}
                          onClick={() => {
                            setSelectedItem("Dashboard");
                          }}
                          primary="Dashboard"
                        />
                      </ListItemButton>
                    </Link>
                  ) : null}
                </>
              ) : (
                <Link to={`/`} onClick={handleLogout}>
                  <ListItemButton>
                    <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                    <ListItemText
                      sx={{ color: selectedItem == "Logout" ? "#550059" : "black" }}
                      onClick={() => {
                        setSelectedItem("Logout");
                      }}
                      primary="Logout"
                    />
                  </ListItemButton>
                </Link>
              )}
              ) : (
              <Link to={`/login`} onClick={handleDrawerClose}>
                <ListItemButton>
                  <ListItemIcon>{<ChevronRightIcon style={{ fontSize: "3.5rem", height: "4rem" }} />}</ListItemIcon>

                  <ListItemText
                    sx={{ color: selectedItem == "Get Started" ? "#550059" : "black" }}
                    onClick={() => {
                      setSelectedItem("Get Started");
                    }}
                    primary="Get Started"
                  />
                </ListItemButton>
              </Link>
              )}
            </List>
          )}
          <ListItemButton sx={{ border: "1px solid #e5e5e5", borderTop: "none" }} button onClick={handleNestedClick}>
            <ListItemText
              sx={{ color: selectedItem == "Cart" ? "#550059" : "black" }}
              onClick={() => {
                setSelectedItem("Cart");
              }}
              primary="Cart"
            />
          </ListItemButton>
          <ListItemButton sx={{ border: "1px solid #e5e5e5", borderTop: "none" }} button onClick={handleNestedClick}>
            <Link to={`/${blog}`} onClick={handleDrawerClose}>
              <ListItemText
                sx={{ color: selectedItem == "Blog" ? "#550059" : "black" }}
                onClick={() => {
                  setSelectedItem("Blog");
                }}
                primary="Blog"
              />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ border: "1px solid #e5e5e5", borderTop: "none" }} onClick={handleNestedClick}>
            <Link to={`/${contact}`} onClick={handleDrawerClose}>
              <ListItemText
                sx={{ color: selectedItem == "Contact" ? "#550059" : "black" }}
                onClick={() => {
                  setSelectedItem("Contact");
                }}
                primary="Contact"
              />
            </Link>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
});

export default Header;

{
  /* <AppBar position="static">
                  <Toolbar disableGutters component="nav">
                    <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
                      Cryovault
                    </Typography>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                      <IconButton size="large" aria-label="account of current user" aria-controls={anchorEl ? "menu-list-grow" : undefined} aria-haspopup="true" onClick={handleOpenMenu} color="inherit">
                        <FaRegUserCircle />
                      </IconButton>
                      <Menu
                        id="menu-list-grow"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleCloseMenu}
                        MenuListProps={{
                          "aria-labelledby": "menu-list-grow",
                        }}
                      >
                        {userMenu}
                      </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                      {items.map((item) => (
                        <Button key={item.label} component={Link} to={item.path} sx={{ my: 2, color: "white", display: "block" }} aria-controls={item.submenu && "menu-list-grow-" + item.label} aria-haspopup={item.submenu && true} onMouseEnter={item.submenu && handleOpenMenu}>
                          {item.label}
                          {item.submenu && <ExpandMoreIcon sx={{ ml: 1 }} />}
                        </Button>
                      ))}
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                      <IconButton size="large" aria-label="cart" color="inherit">
                        <IoMdCart />
                      </IconButton>
                    </Box>
                  </Toolbar>
                  {items.map((item) => (
                    <Menu
                      key={item.label}
                      id={"menu-list-grow-" + item.label}
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl) && anchorEl === item.submenu}
                      onClose={handleCloseMenu}
                      MenuListProps={{
                        "aria-labelledby": "menu-list-grow-" + item.label,
                      }}
                    >
                      {item.submenu &&
                        item.submenu.map((subItem) => (
                          <MenuItem key={subItem.label} component={Link} to={subItem.path}>
                            {subItem.label}
                          </MenuItem>
                        ))}
                    </Menu>
                  ))}
                </AppBar> */
}
// const items = [
//   { label: "HOME", path: "/" },
//   {
//     label: "ABOUT",
//     submenu: [
//       { label: "About Cryovault", path: "aboutus" },
//       { label: "Vision and Mission", path: "vision-mission" },
//       { label: "Accreditations & Certifications", path: "accreditations" },
//       { label: "Careers", path: "carrer" },
//       { label: "Franchise", path: "franchise" },
//     ],
//   },
//   {
//     label: "STEM CELL BANKING",
//     submenu: [
//       { label: "Stem Cell Banking", path: "/stem-cell-banking" },
//       { label: "Why to Choose Stem Cell Banking?", path: "/why-to-choose-stem-cell-banking" },
//       { label: "What is Umbilical Cord?", path: "/about-umbilical-cord" },
//       { label: "Cord Blood Banking", path: "/cord-blood-banking-umbilical-cord-preservation-in-india-cryovault" },
//       { label: "How to Store Your STEM CELLS WITH CRYOVAULT", path: "/how-to-store-your-stem-cells-with-cryovault" },
//       { label: "Benifits of Stem Cells", path: "/best-stem-cell-bank-in-india-stem-cell-banking-cryovault" },
//       { label: "When and How is Cord Blood Collected", path: "/when-and-how-is-cord-blood-collected" },
//       { label: "7 Reasons to Save your Child's Cord Blood", path: "/7-reasons-to-save-your-childs-cord-blood" },
//     ],
//   },
//   {
//     label: "GETTING STARTED",
//     submenu: [
//       { label: "Plans", path: "/plan" },
//       { label: "Request For Information Kit", path: "/request-for-information-kit" },
//       { label: "Appointment", path: "/appointment" },
//     ],
//   },
//   {
//     label: "PREGNANCY",
//     submenu: [
//       { label: "First Trimester", path: "/first-trimester" },
//       { label: "Second Trimester", path: "/second-trimester" },
//       { label: "Third Trimester", path: "/third-trimester" },
//       { label: "Pregnancy Diet Chart", path: "/pregnancy-diet-chart" },
//       { label: "Immunization Chart", path: "/immunization-chart" },
//     ],
//   },
//   { label: "BLOG", path: "/blog" },
//   {
//     label: "GALLERY",
//     submenu: [
//       { label: "Images", path: "/images" },
//       { label: "Videos", path: "/videos" },
//     ],
//   },
//   { label: "CONTACT", path: "/contactus" },
// ];

// const userMenu = [
//   !hasToken && (
//     <MenuItem component={Link} to="/login">
//       <Button variant="contained" className="edu-btn">
//         GET STARTED
//       </Button>
//     </MenuItem>
//   ),
//   hasToken && (
//     <>
//       {userType && (
//         <MenuItem component={Link} to="/dashboard">
//           Dashboard
//         </MenuItem>
//       )}
//       <MenuItem component={Link} to="/videos" onClick={handleLogout}>
//         Logout
//       </MenuItem>
//     </>
//   ),
// ];
// const [anchorEl, setAnchorEl] = React.useState(null);

// const handleOpenMenu = (event) => {
//   setAnchorEl(event.currentTarget);
// };

// const handleCloseMenu = () => {
//   setAnchorEl(null);
// };
