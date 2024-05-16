import { Text } from "@chakra-ui/react";
import { Button, IconButton, Menu, MenuItem, styled } from "@mui/material";
import Box from "@mui/material/Box";
import useScrollToTop from "../../Utilities/scrolltop";
import React, { useRef, useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseIcon from "@mui/icons-material/Close";

const StyledButton = styled(Button)(({ theme }) => ({
  my: 2,
  color: theme.palette.text.primary,
  display: "flex",
  alignItems: "start",
  gap: "0.5rem",
  "&:hover": {
    cursor: "pointer",
  },
}));

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

  return (
    <header className="edu-header header-style-1 header-fullwidth">
      <Box position="fixed" left="0" width="100%" zIndex="999" transition="top 0.3s ease-in-out">
        <div className="header-mainmenu">
          <div className="container-fluid">
            <div className="header-navbar">
              <div className="header-brand">
                <div className="logo">
                  <Link onClick={useScrollToTop()} to="/">
                    <img className="logo-light" src="assets/images/cryovault-blue-200x48.webp" alt="Corporate Logo" />
                    <img className="logo-dark" src="assets/images/cryovault-blue-200x48.webp" alt="Corporate Logo" />
                  </Link>
                </div>
              </div>

              <div className="header-right ">
                <nav className="mainmenu-nav header-mainnav">
                  <ul className="mainmenu">
                    <li>
                      <Link onClick={useScrollToTop()} to="/">
                        HOME
                      </Link>
                    </li>
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
                      <Link onClick={useScrollToTop()} to="#">
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
                          <Link onClick={useScrollToTop()} to="request-for-information-kit">
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
                      <Link onClick={useScrollToTop()} to="#">
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
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </header>
  );
};

export const MobileHeader = React.memo(() => {
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const onAddClick = (e) => {
    setIsActive(!isActive);
  };
  const scrollToTop = useScrollToTop();
  console.log("asdasdasdasdasd");
  return (
    <>
      <Box left="0" width="100%" zIndex="999" transition="top 0.3s ease-in-out">
        <div className="header-mainmenu">
          <div className="container-fluid">
            <div className="header-navbar" style={{ display: "flex", width: "100%", justifyContent: "space-between", padding: "1rem " }}>
              <div className="header-brand">
                <div className="logo">
                  <Link onClick={useScrollToTop()} to="/">
                    <img className="logo-dark" src="assets/images/cryovault-blue-200x48.webp" alt="Corporate Logo" />
                  </Link>
                </div>
              </div>

              <div className="header-right ">
                {isActive ? (
                  <Button
                    variant="outlined"
                    aria-label="menu"
                    onClick={
                      // scrollToTop();
                      onAddClick
                    }
                    size="large"
                    sx={{ width: "50px", height: "50px", color: "black" }}
                  >
                    <CloseIcon style={{ width: "50px", height: "50px", color: "black" }} />
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    aria-label="menu"
                    onClick={
                      // scrollToTop;
                      onAddClick
                    }
                    size="large"
                    sx={{ width: "50px", height: "50px", color: "black" }}
                  >
                    <MenuSharpIcon style={{ width: "50px", height: "50px", color: "black" }} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Box>

      {isActive ? (
        <div className="popup-mobile-menu active">
          <div className="inner">
            <ul className="mainmenu">
              <li className="">
                <Link onClick={useScrollToTop} to="/">
                  Home
                </Link>
              </li>
              <li className="has-droupdown">
                <Link onClick={useScrollToTop} to="/about">
                  ABOUT
                </Link>
                <ul className="submenu">
                  <li>
                    <Link onClick={useScrollToTop} to="/aboutus">
                      About Cryovault
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/vision-mission">
                      Vision and Mission
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/accreditations">
                      Accreditations &amp; Certifications
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/carrer">
                      Carrers
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/franchise">
                      Franchise
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-droupdown">
                <Link to="/about"> STEM CELL BANKING</Link>
                <ul className="submenu">
                  <li>
                    <Link onClick={useScrollToTop} to="/stem-cell-banking">
                      Stem Cell Banking
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/why-to-choose-stem-cell-banking">
                      Why to Choose Stem Cell Banking?
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/about-umbilical-cord">
                      What is Umbilical Cord?
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/cord-blood-banking-umbilical-cord-preservation-in-india-cryovault">
                      Cord Blood Banking
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/how-to-store-your-stem-cells-with-cryovault">
                      How to Store Your STEM CELLS WITH CRYOVAULT
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/best-stem-cell-bank-in-india-stem-cell-banking-cryovault">
                      Benifits of Stem Cells
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/when-and-how-is-cord-blood-collected">
                      When and How is Cord Blood Collected
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/7-reasons-to-save-your-childs-cord-blood">
                      7 Reasons to Save your Childs Cord Blood
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-droupdown">
                <Link onClick={useScrollToTop} to="#">
                  {" "}
                  GETTING STARTED
                </Link>
                <ul className="submenu">
                  <li>
                    <Link onClick={useScrollToTop} to="/plan">
                      Plans
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="request-for-information-kit">
                      Request For Inormation Kit
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/appointment">
                      Appointment
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-droupdown">
                <Link onClick={useScrollToTop} to="/pregnancy">
                  {" "}
                  PREGNANCY
                </Link>
                <ul className="submenu">
                  <li>
                    <Link onClick={useScrollToTop} to="/first-trimester">
                      First Trimester
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/second-trimester">
                      Second Trimester
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/third-trimester">
                      Third Trimester
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/pregnancy-diet-chart">
                      Pregnancy Diet Chart
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/immunization-chart">
                      Immunization Chart
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link onClick={useScrollToTop} to="/blog">
                  {" "}
                  BLOG
                </Link>
              </li>
              <li className="has-droupdown">
                <Link onClick={useScrollToTop} to="/gallery">
                  {" "}
                  GALLERY
                </Link>
                <ul className="submenu">
                  <li>
                    <Link onClick={useScrollToTop} to="/images">
                      Images
                    </Link>
                  </li>
                  <li>
                    <Link onClick={useScrollToTop} to="/videos">
                      Videos Me
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link onClick={useScrollToTop} to="/contactus" className="pr-0">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
});

export default Header;
