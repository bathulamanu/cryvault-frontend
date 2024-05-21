import React, { useEffect, useState } from "react";
import ReachUs from "../Components/Common/ReachUs";
import { FaHandPointRight } from "react-icons/fa";
import useDeviceSize from "../Utilities/useDeviceSize";
import { Box, List, ListItem, ListItemIcon, ListItemText, Breadcrumbs, Typography, Link, Button } from "@mui/material";
import { getAllPlans } from "../redux/reducers/PlansReducer";
import { useDispatch, useSelector } from "react-redux";

const Plan = () => {
  const isMobile = useDeviceSize() === "xs";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.plans.plans);
  const plans = data?.data;

  useEffect(() => {
    dispatch(getAllPlans());
  }, []);
  console.log(plans);
  const handleAddClick = () => {};
  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "200px 90px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
                <Typography variant='h1' className="title">Plan</Typography>
                <Typography variant='body1' className="mb-0">Newborn Stem Cell</Typography>
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
      <Box className="edu-section-gap">
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
                  plans?.map((plan) => (
                    <Box key={plan._id} className="col-lg-4 sal-animate" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                      <Box
                        sx={{
                          height: "100%",

                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "start",
                        }}
                        className="pricing-table"
                      >
                        <Box className={`pricing-header`} sx={{ margin: "0 !important" }}>
                          <Box className={`head_ot`}>
                            <Typography variant="h6" className="title" style={{ backgroundColor: plan.color }}>
                              {plan.title}
                            </Typography>

                            {plan.ribben !== "" && plan.ribbenStatus && <span className="best_vlu">{plan.ribben}</span>}
                          </Box>
                          <Box className="price-wrap">
                            <span className="amount">
                              <sup>{plan.currencySymbol}</sup> {plan.EMI}
                            </span>
                            <span className="duration">{plan.EMItext}</span>
                          </Box>
                        </Box>
                        <List dense sx={{ padding: 0 }}>
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
                        </List>
                        <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
                          <Button className="edu-btn" onClick={() => handleAddClick(plan)}>
                            Get Started
                          </Button>
                          <Typography className="mt-4">{plan.additionalInfo}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))
                )}
              </Box>
              <Typography className="text-right mt-5 gst_ot">* 18% GST extra is applicable on the above Price </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Plan;
