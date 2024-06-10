import React, { useEffect, useState } from "react";
import ReachUs from "../Components/Common/ReachUs";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";
import { useDispatch, useSelector } from "react-redux";
import { getAccreditationsCertification } from "../redux/reducers/HomePageReducer";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

const Accreditations = () => {
  const isMobile = useDeviceSize() === "xs";
  const dispatch = useDispatch();
  const pageInfo = useSelector((state) => state.home.pageInfo);
  const url = `https://flyingbyts.s3.ap-south-2.amazonaws.com/${pageInfo?.[7]?.[7]?.pageHeaderImage}`;
  const Certificates = useSelector((state) => state.home.AccreditationCertificates);
  useEffect(() => {
    dispatch(getAccreditationsCertification());
  }, []);
  return (
    <>
      <Box sx={{ backgroundImage: `url(${url})`, padding: isMobile ? " 50px 7px !important" : "60px 100px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
                <Typography sx={{ fontSize: isMobile ? "24px !important" : "25px !important" }} variant="h1" className="title">
                  Accreditations & Certifications
                </Typography>
              </Box>

              {isMobile ? null : (
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/pregnancy">
                    <Typography variant="body2" color="text.primary">
                      About
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.primary">
                    Accreditations & Certifications
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="edu-section-gap">
        <Box className="container">
          <Box className="row" sx={{ gap: isMobile ? "2rem" : "1rem" }}>
            <LightGallery speed={500} plugins={[lgZoom, lgAutoplay, lgRotate, lgShare, lgThumbnail, lgVideo]} selector=".gallery-item">
              {Certificates && Certificates?.length != 0 ? (
                <Box
                  className="row"
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px", // Adjust the gap between images as needed
                  }}
                >
                  {Certificates?.map((item) => (
                    <Box className="col-md-3">
                      <Box className="cer_out">
                        <Box key={item._id} className={"edu-blog gallerImg blog-style-list sal-animate"} sx={{ margin: "0 !important" }}>
                          <Box className="thumbnail" sx={{ margin: "0 !important",height:"30rem" }}>
                            {/* <Link to="#">
                            <img style={{ height: "300px !important" }} src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${item.CertificateKey}`} alt={item.title} loading="lazy" />
                          </Link> */}

                            <a className="gallery-item" href={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${item.CertificateKey}`} data-src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${item.CertificateKey}`} style={{ height: "100%" }}>
                              <img src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${item.CertificateKey}`} style={{ border: "1px solid #FF003F", borderRadius: "4px", width: "100%", height: "100%" }} alt={item.title} loading="lazy" />
                            </a>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Typography sx={{ color: "white" }} fontSize={20}>
                  No Certificate Available
                </Typography>
              )}
            </LightGallery>
          </Box>
        </Box>
      </Box>

      <ReachUs />
    </>
  );
};

export default Accreditations;
