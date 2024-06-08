import { Box, Typography } from '@mui/material'
import React from 'react'
import useDeviceSize from '../../Utilities/useDeviceSize';
import './Contact.css'
const ContactHero = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Box sx={{padding: isMobile ? " 50px 7px !important" : "60px 100px !important"}} className={ isMobile ? "contactbgImg edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19" : "edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19"}>
    <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
      <Box className="breadcrumb-inner">
        <Box className="page-title">
          <Typography  sx={{ fontSize: isMobile ? "24px !important" : "25px !important" }} variant={isMobile ? "h3" : 'h1'} className={ isMobile ? "mobileTitle" : "title"}>Contact</Typography>
        </Box>
      </Box>
    </Box>
  </Box>

  )
}

export default ContactHero
