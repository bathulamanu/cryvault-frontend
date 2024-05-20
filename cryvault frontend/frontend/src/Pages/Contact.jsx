import React from "react";
import { Link } from "react-router-dom";
import ContactHero from "../Components/Contact/ContactHero";
import ContactDetails, { ContactDetailsMobile } from "../Components/Contact/ContactDetails";
import ContactForm from "../Components/Contact/ContactForm";
import ContactMap from "../Components/Contact/ContactMap";
import useDeviceSize from "../Utilities/useDeviceSize";
const Contact = () => {

  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <ContactHero />
      { isMobile ? <ContactDetailsMobile/> : <ContactDetails /> }
     
      <div className="patter_lye"></div>
      <ContactForm />
      <div className="patter_lye"></div>
      <ContactMap />
      
    </>
  );
};

export default Contact;
