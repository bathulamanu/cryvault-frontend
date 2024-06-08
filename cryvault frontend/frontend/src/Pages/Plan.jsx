import React, { useEffect, useState } from "react";
import ReachUs from "../Components/Common/ReachUs";
import { FaHandPointRight } from "react-icons/fa";
import useDeviceSize from "../Utilities/useDeviceSize";
import { Box, List, ListItem, ListItemIcon, ListItemText, Breadcrumbs, Typography, Link, Button } from "@mui/material";
import { getAllPlans, getAdditonalServicesDetails } from "../redux/reducers/PlansReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Plan = () => {
  const isMobile = useDeviceSize() === "xs";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.plans.plans);
  const additionalService = useSelector((state) => state.plans.additionalService);

  const plans = data?.data;

  useEffect(() => {
    dispatch(getAllPlans());
    dispatch(getAdditonalServicesDetails());
  }, []);
  const handleAddClick = (plan) => {
    localStorage.setItem("planName", plan.title);
    localStorage.setItem("planAmount", plan.price);
    localStorage.setItem("subscription", plan.subscriptionID);
    navigate("/cart");
  };

  const colors = ["#A80303", "#007A49", "#00367A"];
  const backgroundcolors = ["#FFF0E3", "#EDFFE3", "#EDFFE3"];
  console.log(additionalService);
  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "60px 100px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
                <Typography sx={{ fontSize: isMobile ? "24px !important" : "25px !important" }} variant="h1" className="title">
                  Plan
                </Typography>
              </Box>
              {isMobile ? null : (
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    <Typography variant="body2" color="text.primary">
                      Getting Started
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.primary">
                    Plans
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: "25px 0 70px !important" }} className="edu-section-gap">
        <Box className="container">
          <Box className="edu-section-gap">
            <Box className="container">
              <Box className="section-title section-center sal-animate" data-sal="slide-up" data-sal-duration="800">
                <Typography variant="h2" className="title">
                  Stem Cell Banking Plans
                </Typography>
                <Box className="shape_in shape_in-bk" style={{ display: "flex", justifyContent: "center" }}>
                  {" "}
                  <img src="assets/images/med-img blk.svg" width="30" />
                </Box>
              </Box>
              <Box className="row g-5">
                {plans?.length === 0 ? (
                  <Typography fontSize={20}>No Plans Available</Typography>
                ) : (
                  plans?.map((plan, index) => (
                    <Box key={plan._id} className="col-lg-4 sal-animate" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                      <Box
                        sx={{
                          height: "100%",
                          paddingBottom: "0 !important",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "start",
                        }}
                        className="pricing-table"
                      >
                        <Box className={`pricing-header`} sx={{ paddingBottom: "3rem", margin: "0 !important", backgroundColor: backgroundcolors[index % colors.length] }}>
                          <Box sx={{ marginBottom: "20px" }} className={`head_ot`}>
                            <Typography sx={{ padding: "12px !important", borderRadius: "0px 0px 24px 24px", fontSize: "18px !important" }} variant="h6" className="title">
                              {plan.durationYear}
                            </Typography>

                            {plan.ribben !== "" && plan.ribbenStatus && plan.ribbenStatusValue == "Active" && <span className="best_vlu">{plan.ribben}</span>}
                          </Box>
                          <Box sx={{ marginBottom: "20px" }}>
                            <Typography sx={{ color: colors[index % colors.length], fontSize: "30px", fontWeight: "700", textTransform: "uppercase" }} variant="h2" className="">
                              {plan.title}
                            </Typography>
                          </Box>
                          <Box sx={{ marginBottom: "20px" }} className="price-wrap">
                            <span style={{ fontSize: "24px" }} className="amount">
                              {plan.currencySymbol}
                              {plan.price}
                            </span>
                          </Box>
                          <Box sx={{ marginBottom: "20px" }} className="price-wrap">
                            <span style={{ fontSize: "1.5rem" }} className="amount">
                              <span style={{ fontSize: "1.5rem" }} className="duration">
                                {plan.durationYearText}
                              </span>{" "}
                              {plan.currencySymbol}
                              {plan.EMI}
                            </span>
                          </Box>

                          <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
                            <Button className="edu-btn" onClick={() => handleAddClick(plan)}>
                              {/* Get Started */}
                              {plan.btnText}
                            </Button>
                            {/* <Typography className="mt-4">{plan.additionalInfo}</Typography> */}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))
                )}
              </Box>
              {/* <Typography className="text-right mt-5 gst_ot">* 18% GST extra is applicable on the above Price </Typography> */}
              <Box
                sx={{
                  marginTop: "3rem !important",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="row g-5"
              >
                {additionalService?.length === 0 ? (
                  <Typography fontSize={20}>No Additional Service</Typography>
                ) : (
                  <Box className="col-lg-4 sal-animate" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                    <Box
                      sx={{
                        height: "100%",
                        paddingBottom: "0 !important",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                      }}
                      className="pricing-table"
                    >
                      <Box className={`pricing-header`} sx={{ paddingBottom: "3rem", margin: "0 !important" }}>
                        <>
                          <Box sx={{ marginBottom: "20px" }} className={`head_ot`}>
                            <Typography sx={{ padding: "12px !important", borderRadius: "0px 0px 24px 24px", fontSize: "18px !important" }} variant="h6" className="title">
                              ADDITIONAL SERVICES
                            </Typography>
                          </Box>
                          <Box sx={{ marginBottom: "20px", textAlign: "justify", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {additionalService?.map((plan, index) => (
                              <Typography sx={{ fontSize: "1.5rem", fontWeight: "500" }} variant="h2" className="">
                                <svg style={{ fontSize: "1.5rem", width: "1.5rem", height: "2rem" }} aria-hidden="true" class="e-font-icon-svg e-far-arrow-alt-circle-right" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path>
                                </svg>{" "}
                                &nbsp;
                                {plan.description} - {plan.value}
                              </Typography>
                            ))}
                          </Box>
                        </>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Plan;
{
  /* <List dense sx={{ padding: 0 }}>
                          {plan.description
                            .split(/<\/?li>/)
                            .filter((item) => item.trim() !== "")
                            .map((item, index) => (
                              <ListItem key={index} sx={{ display: "flex", alignItems: "center", padding: "0px 13px", margin: "0" }}>
                                <ListItemIcon>
                                  <FaHandPointRight />
                                </ListItemIcon>
                                <ListItemText primary={<Typography sx={{ fontSize: "18px" }}>{item.trim()}</Typography>} />
                              </ListItem>
                            ))}
                        </List> */
}
