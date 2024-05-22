import { Box, Typography } from '@mui/material'
import React from 'react'
import useDeviceSize from '../../Utilities/useDeviceSize';
import './Contact.css'
const ContactHero = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Box sx={{padding: isMobile ? " 50px 7px !important" : "120px 90px !important"}} className={ isMobile ? "contactbgImg edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19" : "edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19"}>
    <Box className="container">
      <Box className="breadcrumb-inner">
        <Box className="page-title">
          <Typography variant={isMobile ? "h3" : 'h1'} className={ isMobile ? "mobileTitle" : "title"}>Contact</Typography>
        </Box>
      </Box>
    </Box>
  </Box>

  )
}

export default ContactHero
