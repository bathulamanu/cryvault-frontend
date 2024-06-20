import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../Components/Common/Loader";
import Login from "../Pages/Login";
import OTP from "../Pages/OTP";
import Home from "../Pages/Home";
import useDeviceSize from "./useDeviceSize";
import About from "../Pages/Aboutus";
import Accreditations from "../Pages/Accreditations";
import Vision from "../Pages/Vision";
import Carrer from "../Pages/Carrer";
import Franchise from "../Pages/Franchise";
import StemCellBanking from "../Pages/StemCellBanking";
import ChooseStemcell from "../Pages/ChooseStemcell";
import UmbilicalCord from "../Pages/UmbilicalCord";
import CordBloodbanking from "../Pages/CordBloodbanking";
import StoreStemcells from "../Pages/StoreStemcells";
import Benifitscellbank from "../Pages/Benifitscellbank";
import HowcordBloodcollected from "../Pages/HowcordBloodcollected";
import SevenReasonscordblood from "../Pages/SevenReasonscordblood";
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
import Images from "../Pages/Images";
import Videos from "../Pages/Videos";
import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import ThankYou from "../Pages/Thankyou";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { Drawer, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SettingsColumn from "../Components/DashboardComponents/Sidebar";
import Dashboard from "../Components/DashboardComponents/Dashboard";
import CheckoutDetails from "../Pages/CheckoutDetails";
import { useDispatch, useSelector } from "react-redux";
import { getPageMetaInfo } from "../redux/reducers/HomePageReducer";
import PopupLayout from "../Pages/PopupPages/PopupLayout";
// import FatherDetails from "../Pages/PopupPages/FatherDetails";
import PopupLazyLoad from "./PopupLazyLoad";
import SingleBlog from "../Pages/SingleBlog";

const LazyLoad = () => {
  const [hasToken, setHasToken] = useState(false);
  const [usertype, setUserType] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const isMobile = useDeviceSize() == "xs";
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    // Check if there is a token in sessionStorage
    const token = sessionStorage.getItem("token");
    const subscription = sessionStorage.getItem("usertype");
    setHasToken(!!token); // Set hasToken to true if token exists, false otherwise
    setUserType(subscription !== null && subscription !== "null");
  }, []);

  useEffect(() => {
    dispatch(getPageMetaInfo());
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

  const pageInfo = useSelector((state) => state.home.pageInfo);
  const aboutCryovault = pageInfo?.[0]?.[1]?.urlSlug;
  const howToStoreYourStemCellsWithCryovault = pageInfo?.[1]?.[2]?.urlSlug;
  const careers = pageInfo?.[2]?.[4]?.urlSlug;
  const whyToChooseStemCellBanking = pageInfo?.[3]?.[3]?.urlSlug;
  const cordBloodBankingUmbilicalCordPreservationInIndiaCryovault = pageInfo?.[4]?.[5]?.urlSlug;
  const stemCellBanking = pageInfo?.[5]?.[9]?.urlSlug;
  const franchise = pageInfo?.[6]?.[6]?.urlSlug;
  const visionMission = pageInfo?.[7]?.[7]?.urlSlug;
  const requestForInformationKit = pageInfo?.[9]?.[12]?.urlSlug;
  const aboutUmbilicalCord = pageInfo?.[10]?.[10]?.urlSlug;
  const ReasonsToSaveYourChildsCordBlood = pageInfo?.[11]?.[8]?.urlSlug;
  const videos = pageInfo?.[13]?.[18]?.urlSlug;
  const immunizationChart = pageInfo?.[14]?.[19]?.urlSlug;
  const thirdTrimester = pageInfo?.[15]?.[20]?.urlSlug;
  const appointment = pageInfo?.[16]?.[15]?.urlSlug;
  const secondTrimester = pageInfo?.[17]?.[16]?.urlSlug;
  const firstTrimester = pageInfo?.[18]?.[17]?.urlSlug;
  const pregnancyDietChart = pageInfo?.[19]?.[21]?.urlSlug;
  const contact = pageInfo?.[20]?.[22]?.urlSlug;
  const images = pageInfo?.[21]?.[24]?.urlSlug;
  const blog = pageInfo?.[22]?.[23]?.urlSlug;
  const bestStemCellBankInIndiaStemCellBankingCryovault = pageInfo?.[23]?.[25]?.urlSlug;
  const accreditationsCertifications = pageInfo?.[24]?.[13]?.urlSlug;
  const whenAndHowIsCordBloodCollected = pageInfo?.[25]?.[26]?.urlSlug;
  const userDetails = useSelector((state) => state.user.userDetails);
  const orderDetails = useSelector((state) => state.payment.orderDetails);

  const [hasPlan, setHasPaln] = useState(false);

  useEffect(() => {
    const planCondition = userDetails?.subscriptionPlanId?.toString()?.length > 0 || orderDetails?.PaymentDetails?.[0]?.subscriptionPlanId;
    setHasPaln(planCondition);
  }, [orderDetails, userDetails]);


  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={blog} element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path={aboutCryovault} element={<About />} />
        <Route path={visionMission} element={<Vision />} />
        <Route path={careers} element={<Carrer />} />
        <Route path={accreditationsCertifications} element={<Accreditations />} />
        <Route path={franchise} element={<Franchise />} />
        <Route path={stemCellBanking} element={<StemCellBanking />} />
        <Route path={whyToChooseStemCellBanking} element={<ChooseStemcell />} />
        <Route path={aboutUmbilicalCord} element={<UmbilicalCord />} />
        <Route path={cordBloodBankingUmbilicalCordPreservationInIndiaCryovault} element={<CordBloodbanking />} />
        <Route path={howToStoreYourStemCellsWithCryovault} element={<StoreStemcells />} />
        <Route path={bestStemCellBankInIndiaStemCellBankingCryovault} element={<Benifitscellbank />} />
        <Route path={whenAndHowIsCordBloodCollected} element={<HowcordBloodcollected />} />
        <Route path={ReasonsToSaveYourChildsCordBlood} element={<SevenReasonscordblood />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutDetails />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/plan" element={<Plan />} />
        <Route path={appointment} element={<Appointment />} />
        <Route path={requestForInformationKit} element={<RequestKit />} />
        <Route path="/pregnancy" element={<Pregnancy />} />
        <Route path={firstTrimester} element={<FirstTrimester />} />
        <Route path={secondTrimester} element={<SecondTimester />} />
        <Route path={thirdTrimester} element={<ThirdTrimester />} />
        <Route path={pregnancyDietChart} element={<PregnancyChart />} />
        <Route path={immunizationChart} element={<ImmunizationChart />} />
        <Route path={images} element={<Images />} />
        <Route path={videos} element={<Videos />} />
        <Route path={contact} element={<Contact />} />
        <Route path="/blog-single/:id" element={<SingleBlog />} />
        {hasPlan ? (
           <>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/popup" element={<PopupLayout />} /> */}
          </>
        ) : null}
            <Route path="/popup" element={<PopupLayout />} />

        {/*<Route path="/faq" element={<Faq />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/terms-and-conditions" element={<TermsCondition />} />
        <Route path="/cancellation-refund-replacement-policy" element={<CancellatioRefund />} /> */}
        {/* 
       
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Home />} />
         */}
      </Routes>
    </Suspense>
  );
};

export default LazyLoad;
