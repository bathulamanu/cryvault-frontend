import { Image } from "@mui/icons-material";
import { Typography, Container } from "@mui/material";
import React, { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSocialIcons } from "../../redux/reducers/HomePageReducer";

const Footer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home);
  const socialIcons = data && data.socialIcons && data.socialIcons && data.socialIcons.data && data.socialIcons.data[0]
  useEffect(() => {
    dispatch(fetchSocialIcons())
  }, []);
  return (
    <footer  className="edu-footer footer-lighten bg-image footer-style-1">
      <div className="footer-top">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="edu-footer-widget">
                <h4 className="widget-title">About Us</h4>
                <img className="logo-light" src="assets/images/heading-icon1.webp" alt="" />
                <p className="description">{socialIcons?.description}</p>
                <div className="widget-information">
                  <Typography>Trusted By Millions of People</Typography>
                  <Container sx={{ display: "flex" }}>
                    <Typography fontSize={15} color={"#FF0046 !important"}>
                      Accreditations & License
                    </Typography>
                    <hr width="20%" style={{ height: "2px", color: "#FF0046", marginLeft: "6%", marginTop: "4.5%" }} />
                  </Container>
                  <img src="assets/images/certificate.webp" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="edu-footer-widget explore-widget">
                <h4 className="widget-title">Quick Links </h4>
                <img className="logo-light" src="assets/images/heading-icon1.webp" alt="" />
                <div className="inner">
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
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="edu-footer-widget">
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
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="edu-footer-widget quick-link-widget">
                <h4 className="widget-title">Stem Cell Banking</h4>
                <img className="logo-light" src="assets/images/heading-icon1.webp" alt="" />
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li>
                      <Link to="/stem-cell-banking">Stem Cell Banking</Link>
                    </li>
                    <li>
                      <Link to="/why-to-choose-stem-cell-banking">Why to Choose Stem Cell Banking?</Link>
                    </li>
                    <li>
                      <Link to="/about-umbilical-cord">What is Umbilical Cord?</Link>
                    </li>
                    <li>
                      <Link to="/cord-blood-banking-umbilical-cord-preservation-in-india-cryovault">Cord Blood Banking</Link>
                    </li>
                    <li>
                      <Link to="/how-to-store-your-stem-cells-with-cryovault">How to Store Your STEM CELLS WITH CRYOVAULT</Link>
                    </li>
                    <li>
                      <Link to="/best-stem-cell-bank-in-india-stem-cell-banking-cryovault">Benifits of Stem Cells</Link>
                    </li>
                    <li>
                      <Link to="/when-and-how-is-cord-blood-collected">When and How is Cord Blood Collected</Link>
                    </li>
                    <li>
                      <Link to="/7-reasons-to-save-your-childs-cord-blood">7 Reasons to Save your Childs Cord Blood</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                  <p dangerouslySetInnerHTML={{ __html: socialIcons?.footerCopyright }} >
                  </p>
                  <p>
                    {" "}
                    Designed By{" "}
                    <a style={{ color: "#d5008d", cursor: "pointer" }} to="#" target="_blank">
                      {" "}
                      Innovators Tech Solutions
                    </a>
                  </p>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
