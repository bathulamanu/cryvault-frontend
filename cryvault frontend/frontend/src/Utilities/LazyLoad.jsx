import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../Components/Common/Loader";
// import Login from "Pages/Login";
// import OTP from "Pages/OTP";
// import Registration from "Pages/Registration";
import Home from "../Pages/Home";
import useDeviceSize from "./useDeviceSize";
// import About from "Pages/Aboutus";
// import Accera from "Pages/Accreditations";
// import Vision from "Pages/Vision";
// import Carrer from "Pages/Carrers";
// import Franchise from "Pages/Franchise";
import StemCellBanking from "../Pages/StemCellBanking";
// import ChooseStemcell from "Pages/ChooseStemcell";
// import UmbilicalCord from "Pages/UmbilicalCord";
// import CordBloodbanking from "Pages/CordBloodbanking";
// import StoreStemcells from "Pages/StoreStemcells";
// import Benifitscellbank from "Pages/Benifitscellbank";
// import HowcordBloodcollected from "Pages/HowcordBloodcollected";
// import SevenReasonscordblood from "Pages/SevenReasonscordblood";
// import Cart from "Pages/Cart";
import Plan from "../Pages/Plan";
import RequestKit from "../Pages/RequestKit";
import Appointment from "../Pages/Appointment";
import Pregnancy from "../Pages/Pregnancy";
import FirstTrimester from "../Pages/FirstTrimester";
import SecondTimester from "../Pages/SecondTrimester";
import ThirdTrimester from "../Pages/ThirdTrimester";
import PregnancyChart from "../Pages/PregnancyChart";
import ImmunizationChart from "../Pages/ImmunizationChart";
import Blog from "../Pages/Blog";
// import BlogSingle from "../Pages/SingleBlog";
import Images from "../Pages/Images";
import Videos from "../Pages/Videos";
import Contact from "../Pages/Contact";
// import Faq from "Pages/Faq";
// import PrivacyPolicy from "Pages/PrivacyPolicy";
// import FeedBack from "Pages/FeedBack";
// import TermsCondition from "Pages/TermsCondition";
// import CancellatioRefund from "Pages/CancellatioRefund";
// import NotFound from "Pages/NotFound";
// import Popup from "Pages/Popup";
// import Reference from "Pages/Reference";
// import Settings from "Pages/Settings";
// import HelpExecutive from "Pages/HelpExecutive";
// import HelpNominee from "Pages/HelpNominee";
// import HelpCommunication from "Pages/HelpCommunication";
// import Offer from "Pages/Offer";
// import Help from "Pages/Help";
// import HelpDetails from "Pages/HelpDetails";
// import HelpMobile from "Pages/HelpMobile";
// import HelpHospital from "Pages/HelpHospitalDetails";
// import Report from "Pages/Report";
// import Invoice from "Pages/Invoice";
// import BabyDoctorDetails from "Pages/BabyDoctorDetails";
// import HelpHospitalDetails from "Pages/HelpHospitalDetails";
// import Subscription from "Pages/Subscription/index";
// import Details from "Pages/Details";
// import ThankYou from "Pages/Thankyou";
// import CheckOut from "Pages/Checkout";
const LazyLoad = () => {
  const [hasToken, setHasToken] = useState(false);
  const [usertype, setUserType] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const isMobile = useDeviceSize();
  const location = useLocation();

  useEffect(() => {
    // Check if there is a token in sessionStorage
    const token = sessionStorage.getItem("token");
    const subscription = sessionStorage.getItem("usertype");
    setHasToken(!!token); // Set hasToken to true if token exists, false otherwise
    setUserType(subscription !== null && subscription !== "null");
  }, []);
  const isLazyLoadRoute =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/dashboard") ||
    location.pathname === "/popup" || // Add new routes here
    location.pathname === "/reference" ||
    location.pathname === "/settings" ||
    location.pathname === "/subscription" ||
    location.pathname === "/help" ||
    location.pathname === "/helpexecutive" ||
    location.pathname === "/helpnominee" ||
    location.pathname === "/helpcommunication" ||
    location.pathname === "/helpdetails" ||
    location.pathname === "/helpmobile" ||
    location.pathname === "/helphospital" ||
    location.pathname === "/offer" ||
    location.pathname === "/report" ||
    location.pathname === "/invoice" ||
    location.pathname === "/babydoctordetails" ||
    location.pathname === "/helphospitaldetails" ||
    location.pathname === "/details";

  // Add other LazyLoad routes as needed

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/blog-single" element={<SingleBlog />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="/" element={<Home />} />

        <Route path="/aboutus" element={<About />} />
        <Route path="/accreditations" element={<Accera />} />
        <Route path="/vision-mission" element={<Vision />} />
        <Route path="/carrer" element={<Carrer />} />
        <Route path="/franchise" element={<Franchise />} /> */}

        {/* banking-links */}
        <Route path="/stem-cell-banking" element={<StemCellBanking />} />
        {/* 
        <Route path="/why-to-choose-stem-cell-banking" element={<ChooseStemcell />} />
        <Route path="/about-umbilical-cord" element={<UmbilicalCord />} />
        <Route path="/cord-blood-banking-umbilical-cord-preservation-in-india-cryovault" element={<CordBloodbanking />} />
        <Route path="/how-to-store-your-stem-cells-with-cryovault" element={<StoreStemcells />} />
        <Route path="/best-stem-cell-bank-in-india-stem-cell-banking-cryovault" element={<Benifitscellbank />} />
        <Route path="/when-and-how-is-cord-blood-collected" element={<HowcordBloodcollected />} />
        <Route path="/7-reasons-to-save-your-childs-cord-blood" element={<SevenReasonscordblood />} /> */}

        {/* banking-links */}

        {/* 
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/thankyou" element={<ThankYou />} />
        */}
        <Route path="/plan" element={<Plan />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/request-for-information-kit" element={<RequestKit />} />
        <Route path="/pregnancy" element={<Pregnancy />} />
        <Route path="/first-trimester" element={<FirstTrimester />} />
        <Route path="/second-trimester" element={<SecondTimester />} />
        <Route path="/third-trimester" element={<ThirdTrimester />} />
        <Route path="/pregnancy-diet-chart" element={<PregnancyChart />} />
        <Route path="/immunization-chart" element={<ImmunizationChart />} />
        <Route path="/images" element={<Images />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contactus" element={<Contact />} />
        {/*<Route path="/faq" element={<Faq />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/terms-and-conditions" element={<TermsCondition />} />
        <Route path="/cancellation-refund-replacement-policy" element={<CancellatioRefund />} /> */}
      </Routes>
    </Suspense>
  );
};

export default LazyLoad;
