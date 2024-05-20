import { Box, Typography } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText, Link as MLink } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const socialLinks = [
  { icon: <i className="icon-facebook"></i>, to: "#" },
  { icon: <i className="icon-instagram"></i>, to: "#" },
  { icon: <i className="icon-twitter"></i>, to: "#" },
  { icon: <i className="icon-linkedin2"></i>, to: "#" },
];
const ContactDetails = () => {
  return (
    <Box className="py-5 contact_out">
      <Box className="container">
        <Box className="row">
          <Box className="col-md-7">
            <Box className="contact-bg">
              <Box className="addre_infrm">
                <Typography variant="h4">Bangalore</Typography>

                <Box className="row">
                  <Box className="col-md-4">
                    <Box>
                      <Typography variant="body1">No.:52/65, Swami Vivekananda road, Srinivasa layout, Bagalur, North Bengaluru, Karnataka- 562149.</Typography>
                    </Box>
                  </Box>
                  <Box className="col-md-4">
                    <Box className="pl-2">
                      <Typography variant="body1">+91 90085 73664</Typography>
                      <Typography variant="body1">
                        WhatsApp
                        <br />
                        +91 90085 73664
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="col-md-4">
                    <Box>
                      <Typography variant="body1">
                        info@cryovault.in
                        <br />
                        contacts@cryovault.in
                        <br />
                        Working hours:
                        <br />
                        24/7 Hours
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="text-center">
                <img src="assets/images/heading-icon1.webp" alt="" className="logo-light m-auto" />
              </Box>
              <Box className="addre_infrm">
                <Typography variant="h4">Hyderabad</Typography>

                <Box className="row">
                  <Box className="col-md-4">
                    <Box>
                      <Typography variant="body1">13D, Rd Number 9, Santosh Nagar, MLA Colony, Film Nagar, Hyderabad, Telangana – 500033, India</Typography>
                    </Box>
                  </Box>
                  <Box className="col-md-4">
                    <Box className="pl-2">
                      <Typography variant="body1">+91 90085 73664</Typography>
                      <Typography variant="body1">
                        WhatsApp
                        <br />
                        +91 90085 73664
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="col-md-4">
                    <Box>
                      <Typography variant="body1">admin@cryovault.in contacts@cryovault.in Working hours: 24/7 Hours</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="col-md-5">
            <Box className="company_cnt">
              <Box className="text-center">
                <img className="logo-light m-auto" src="assets/images/heading-icon1.webp" />
              </Box>
              <Typography variant="body1">Cryovault was found to meet the needs of families in India who are considering umbilical cord blood stem cell storage. Established in 2015 under the leadership of 4 visionaries, we are an ethically driven company committed to delivering high quality service at highly affordable prices. We are accredited and licensed by the IFDA, DCGI, ANSI, and ISO 9001</Typography>

              <Box className="social_icons line-tb">
                <Box className="d-flex align-items-center">
                  <Typography variant="h5">Follow Us :</Typography>
                  <List className="cont-socil d-flex">
                    {socialLinks.map((link) => (
                      <ListItem sx={{ padding: 0, margin: 0 }} key={link.to} button component={MLink} href={link.to}>
                        <ListItemIcon sx={{ fontSize: 24 }}>{link.icon}</ListItemIcon>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
              <Box className="brands_icons">
                <Typography variant="h4">Accreditations & License</Typography>
                <img src="assets/images/iso_logo.webp" width="430" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const ContactDetailsMobile = () => {
  return (
    <Box className="py-5 contact_out">
      <Box className="container">
        <Box className="row">
          <Box className="col-md-7">
            <Box className="contact-bg">
              <Box className="addre_infrm" sx={{ textAlign: "center !important" }}>
                <Typography variant="h4">Bangalore</Typography>

                <Typography variant="body1">No.:52/65, Swami Vivekananda road, Srinivasa layout, Bagalur, North Bengaluru, Karnataka- 562149.</Typography>
                <Typography variant="body1">WhatsApp : +91 90085 73664</Typography>
                <Typography variant="body1">
                  info@cryovault.in
                  <br />
                  contacts@cryovault.in
                  <br />
                  Working hours: 24/7 Hours
                </Typography>
              </Box>
              <img className="logo-light" src="assets/images/heading-icon1.webp" alt="" className="m-auto" />

              <Box className="addre_infrm" sx={{ textAlign: "center !important" }}>
                <Typography variant="h4">Hyderabad</Typography>
                <Typography variant="body1">13D, Rd Number 9, Santosh Nagar, MLA Colony, Film Nagar, Hyderabad, Telangana – 500033, India</Typography>
                <Typography variant="body1">+91 90085 73664</Typography>
                <Typography variant="body1">WhatsApp : +91 90085 73664</Typography>
                <Typography variant="body1">
                  admin@cryovault.in <br /> contacts@cryovault.in <br /> Working hours: 24/7 Hours
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="col-md-5">
            <Box sx={{ background: "#FFF7F7", padding: "2rem" }}>
              <Typography variant="body1">Cryovault was found to meet the needs of families in India who are considering umbilical cord blood stem cell storage. Established in 2015 under the leadership of 4 visionaries, we are an ethically driven company committed to delivering high quality service at highly affordable prices. We are accredited and licensed by the IFDA, DCGI, ANSI, and ISO 9001</Typography>

              <Box className="social_icons line-tb">
                <Box className="d-flex align-items-center" sx={{ flexDirection: "column" }}>
                  <Typography variant="h5">Follow Us :</Typography>
                  <List className="cont-socil d-flex">
                    {socialLinks.map((link) => (
                      <ListItem sx={{ padding: 0, margin: 0 }} key={link.to} button component={MLink} href={link.to}>
                        <ListItemIcon sx={{ fontSize: 24 }}>{link.icon}</ListItemIcon>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
              <Box className="brands_icons" sx={{ textAlign: "center" }}>
                <Typography variant="h4">Accreditations & License</Typography>
                <img src="assets/images/iso_logo.webp" width="430" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetails;
