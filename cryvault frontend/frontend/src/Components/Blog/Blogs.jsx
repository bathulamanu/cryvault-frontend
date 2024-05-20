import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useDeviceSize from "../../Utilities/useDeviceSize";
import './Blog.css'

const Blogs = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Box className={ isMobile ? "blogCardContainerMobile edu-blog blog-style-list sal-animate" : "edu-blog blog-style-list sal-animate"}>
      <Box className={isMobile ? "inner blogCardMobile " : "inner"} sx={{flexDirection: isMobile ? "column" : "row"}}>
        <Box className="thumbnail">
          <Link to="#">
            <img src="assets/images/2-Collect-.webp" alt="Blog Images" />
          </Link>
        </Box>
        <Box className="content">
          <Typography variant="h5" className="title">
            <Link to="#">Harnessing the Future: The Advantages of Stem Cell Banking....</Link>
          </Typography>
          <Typography variant="body1">
            <b>Leave a Comment / Stem Cell / Cryovault</b>
          </Typography>
          <Typography variant="body1">Pregnancy is a time of excitement and preparation for the baby. One of the decisions that soon-to-be parents should consider is whether to bank their baby’s stem cells. Stem cell storage is a sample of these precious cells from umbilical cord blood or tissue in a specialised facility for possible future use. But how does […]</Typography>
          <Box className="read-more-btn">
            <Link className="edu-btn btn-border btn-medium" to="/blog-single">
              Read More <i className="icon-4"></i>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Blogs;
