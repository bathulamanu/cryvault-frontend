import { Image } from "@mui/icons-material";
import { Typography, Container, Box, List, ListItem, ListItemText } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSocialIcons } from "../../redux/reducers/HomePageReducer";

const quicklinks = [
  { name: "Home", path: "/" },
  { name: "About Cryovault", path: "/aboutus" },
  { name: "FAQ", path: "/faq" },
  { name: "Feedback", path: "/feedback" },
  { name: "Contact", path: "/contactus" },
  { name: "Sitemap", path: "" }, // Assuming Sitemap doesn't have a path
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms and Conditions", path: "/terms-and-conditions" },
  { name: "Cancellation, Refund & Replacement Policy", path: "/cancellation-refund-replacement-policy" },
];
const stemCellslinks = [
  { name: "Stem Cell Banking", path: "/stem-cell-banking" },
  { name: "Why to Choose Stem Cell Banking?", path: "/why-to-choose-stem-cell-banking" },
  { name: "What is Umbilical Cord?", path: "/about-umbilical-cord" },
  { name: "Cord Blood Banking", path: "/cord-blood-banking-umbilical-cord-preservation-in-india-cryovault" },
  { name: "How to Store Your STEM CELLS WITH CRYOVAULT", path: "/how-to-store-your-stem-cells-with-cryovault" },
  { name: "Benefits of Stem Cells", path: "/best-stem-cell-bank-in-india-stem-cell-banking-cryovault" },
  { name: "When and How is Cord Blood Collected", path: "/when-and-how-is-cord-blood-collected" },
  { name: "7 Reasons to Save your Child's Cord Blood", path: "/7-reasons-to-save-your-childs-cord-blood" },
];
const Footer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home);
  const socialIcons = data && data.socialIcons && data.socialIcons && data.socialIcons.data && data.socialIcons.data[0];

  // console.log(socialIcons);
  // const contactInfo = useMemo(() => {
  //   // const title = socialIcons?.footerPara && footerPara[0]?.title;
  // }, [socialIcons, data]);

  useEffect(() => {
    dispatch(fetchSocialIcons());
  }, []);
  return (
    <footer
      // style={{
      //   bottom: "0",
      //   position: "absolute",

      //   width: "100%",
      // }}
      style={{ backgroundColor: "#D7F5FF" }}
      className="edu-footer footer-lighten bg-image footer-style-1"
    >
      <Box className="footer-top">
        <Box className="container">
          <Box className="row g-5">
            <Box className="col-lg-3 col-md-6">
              <Box className="edu-footer-widget">
                <h4 className="widget-title">About Us</h4>
                <img className="logo-light" src="assets/images/heading-icon1.webp" alt="" />
                <p className="description">{socialIcons?.description}</p>
                <Box className="widget-information">
                  <Typography>Trusted By Millions of People</Typography>
                  <Container sx={{ display: "flex" }}>
                    <Typography fontSize={15} color={"#FF0046 !important"}>
                      Accreditations & License
                    </Typography>
                    <hr width="20%" style={{ height: "2px", color: "#FF0046", marginLeft: "6%", marginTop: "4.5%" }} />
                  </Container>
                  <img src="assets/images/certificate.webp" />
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-3 col-sm-6">
              <Box className="edu-footer-widget explore-widget">
                <h4 className="widget-title">Quick Links </h4>
                <img className="logo-light" src="assets/images/heading-icon1.webp" alt="" />
                {/* <Box className="inner">
                  <ul className="footer-link link-hover">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/aboutus">About Cryovault</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/feedback">Feedback</Link>
                    </li>
                    <li>
                      <Link to="/contactus">Contact</Link>
                    </li>
                    <li>
                      <Link to="">Sitemap</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms-and-conditions">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="/cancellation-refund-replacement-policy">Cancellation, Refund & Replacement Policy</Link>
                    </li>
                  </ul>
                </Box> */}
                <Box className="inner">
                  <List className="footer-link link-hover">
                    {quicklinks.map((link) => (
                      <ListItem sx={{ padding: "0" }} key={link.name} component={Link} to={link.path}>
                        <ListItemText primary={link.name} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-3 col-md-6">
              <Box className="edu-footer-widget">
                <h4 className="widget-title">Contact Us</h4>
                <img className="logo-light" src="assets/images/heading-icon1.webp" alt="" />
                <ul className="information-list">
                  <li>
                    <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 !important" }}>
                      <span>
                        <FaMapMarkerAlt color="#FF0046" />
                      </span>
                      <Link to="tel:+011235641231">No.:52/65, Swami Vivekananda road, Srinivasa layout, Bagalur, North Bengaluru, Karnataka- 562149.</Link>
                    </Container>
                  </li>
                  <li>
                    <span>
                      <i className="icon-phone" style={{ color: "#FF0046" }}></i>
                    </span>
                    <Link to="tel:+011235641231">+91 73311 61886</Link>
                  </li>
                  <li>
                    <span>
                      <i className="icon-envelope" style={{ color: "#FF0046" }}></i>
                    </span>
                    <Link to="mailto:info@edublink.com" target="_blank">
                      info@cryovault.in
                    </Link>
                  </li>
                </ul>
                <ul className="social-share icon-transparent mt-5">
                  <li>
                    <Link to="#" className="color-fb">
                      <i className="icon-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-linkd">
                      <i className="icon-linkedin2"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-ig">
                      <i className="icon-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-twitter">
                      <i className="icon-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-yt">
                      <i className="icon-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </Box>
            </Box>
            <Box className="col-lg-3 col-sm-6">
              <Box className="edu-footer-widget quick-link-widget">
                <h4 className="widget-title">Stem Cell Banking</h4>
                <img className="logo-light" src="assets/images/heading-icon1.webp" alt="" />

                <Box className="inner">
                  <List className="footer-link link-hover">
                    {stemCellslinks.map((link) => (
                      <ListItem sx={{ padding: "0" }} key={link.name} button component={Link} to={link.path}>
                        <ListItemText primary={link.name} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box style={{ backgroundColor: "#D7F5FF" }} className="copyright-area pt-4 pb-4">
        <Box className="container">
          <Box className="row">
            <Box className="col-lg-12">
              <Box className="inner text-center" sx={{display:"flex"}}>
                <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                  <p dangerouslySetInnerHTML={{ __html: socialIcons?.footerCopyright1 }}></p>
                </Container>
                <Container sx={{ display: "flex", justifyContent: "end" }}>
                  <p dangerouslySetInnerHTML={{ __html: socialIcons?.footerCopyright2 }}></p>
                </Container>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
