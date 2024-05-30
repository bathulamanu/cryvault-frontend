import React, { useEffect, useMemo, useState } from "react";
import { Box, Typography, Stack, Grid, Card, CardHeader, CardContent, Divider, Button, IconButton, TextField, MenuItem, Select, FormControl, InputLabel, Container, CardActions } from "@mui/material";
import { FaCcVisa } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../redux/reducers/PaymentReducer";
import useDeviceSize from "../Utilities/useDeviceSize";

const ThankYouPage = () => {
  const bg = useTheme().palette.mode === "dark" ? "#212121" : "#fff";
  const color = useTheme().palette.mode === "dark" ? "#fff" : "#000";
  const location = useLocation();
  const invoice = location.state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.payment.orderDetails);

  const data = useMemo(() => {
    const orderID = orderDetails && orderDetails?.PaymentDetails?.[0]?.OrderCode;
    const plan = orderDetails && orderDetails?.PaymentDetails?.[0]?.subscriptionPlanId;
    const method = orderDetails && orderDetails?.PaymentDetails?.[0]?.Method;
    const totalAmount = orderDetails && orderDetails?.PaymentDetails?.[0]?.totalAmount || 0;
    const fname = orderDetails && orderDetails?.firstName;
    const lname = orderDetails && orderDetails?.lastName;
    const email = orderDetails && orderDetails?.email;
    const phone = orderDetails && orderDetails?.phoneNumber;
    const address1 = orderDetails && orderDetails?.addressLine1;
    const address2 = orderDetails && orderDetails?.addressLine2;
    const pincode = orderDetails && orderDetails?.pincode;
    const country = orderDetails && orderDetails?.LocationInfo?.countryName;
    const stateName = orderDetails && orderDetails?.LocationInfo?.stateName;
    const cityName = orderDetails && orderDetails?.LocationInfo?.cityName;
    return {
      orderID,
      plan,
      method,
      totalAmount,
      fname,
      lname,
      email,
      phone,
      address1,
      address1,
      address2,
      pincode,
      country,
      stateName,
      cityName,
    };
  }, [orderDetails]);

  useEffect(() => {
    dispatch(getOrderDetails());
  }, []);

  const handleDashboard = () => {
    navigate("/dashboard");
    window.location.reload(); // Remove if you don't need hard reload (consider controlled state updates or soft reload)
  };
  const details = [
    {
      invoice: {
        orderid: "sdaasdasdas",
        plan: "basic",
      },
      PaymentDetails: [
        {
          paymentType: "sddfsd",
          paidAmount: "213423",
        },
      ],
      firstName: "vaishnavi",
      lastName: "dwivedi",
      email: "vaish@gmail.com",
      address: "inodere",
      phoneNumber: "7879186483",
    },
  ];
  const isMobile = useDeviceSize() === "xs";

  return (
    <Container sx={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", margin: isMobile ? "2rem 0rem" : "15rem auto", width: isMobile ? "100%" : "50%" }} py={4} px={2}>
      <Stack spacing={4}>
        {details && details[0] && (
          <Card sx={{ backgroundColor: bg, boxShadow: "none", borderRadius: "lg", padding: 0 }}>
            <CardHeader
              title={
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography sx={{ fontWeight: "600" }} variant="h3" align="center">
                    Cryovault
                  </Typography>
                </Stack>
              }
            />
            <CardContent>
              <Stack spacing={4}>
                <Stack direction="column" spacing={3}>
                  <Typography sx={{ fontWeight: "500", fontSize: "18px", margin: "0 !important" }}>Order ID: {data?.orderID || "NULL"}</Typography>
                  <Typography sx={{ fontWeight: "500", fontSize: "18px", margin: "0 !important" }}>Subscription Plan: {data?.plan || "2"}</Typography>
                  <Typography sx={{ fontWeight: "500", fontSize: "18px", margin: "0 !important" }}>Payment Method: {data?.paymentType || "Card"}</Typography>
                </Stack>
                <br />
                <Typography sx={{ fontWeight: "500", fontSize: "18px", margin: "0 !important" }}>Thank you!</Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "18px", margin: "0 !important" }}>Your order is confirmed.</Typography>
                <Divider />
                <Stack spacing={4} w="full">
                  <Stack sx={{ display: "flex", flexDirection: "column", gap: "1rem" }} align="start" spacing={4} flex="4" pr={2}>
                    <Section style={{ flexDirection: "column", fontSize: "20", display: "flex" }}>
                      <SubSection isAddress={false} title="Customer information" content={`${data?.fname} ${data?.lname}\n ${data?.phone}\n ${data?.email}`} />
                      <SubSection isAddress={true} title="Bill address" content={`${data?.address1}\n  ${data?.address2}\n   ${data?.pincode}\n  ${data?.cityName}\n  ${data?.stateName}\n  ${data?.country}`} />
                    </Section>
                  </Stack>
                </Stack>
                <Typography sx={{ fontSize: "2rem" }} variant="h3" fontWeight="bold">
                  Summary
                </Typography>

                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ fontSize: "2rem" }} variant="h3" fontWeight="bold">
                    Sub Total
                  </Typography>
                  <Typography variant="h3">{data?.totalAmount} INR</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ fontSize: "2rem" }} variant="h3" fontWeight="bold">
                    Total
                  </Typography>
                  <Typography variant="h3">{data?.totalAmount} INR</Typography>
                </Stack>
              </Stack>
            </CardContent>

            <CardActions>
              <Button onClick={()=> navigate('/dashboard')} className="edu-btn" size="small">
                Go To Dashboard
              </Button>
            </CardActions>
          </Card>
        )}
      </Stack>
    </Container>
  );
};
const Section = ({ children }) => <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem", width: "100%" }}>{children}</Box>;

const SubSection = ({ title, content, isAddress }) => (
  <Stack sx={{ alignItems: isAddress ? "end" : "start", flexDirection: "column", justifyContent: "start", gap: "2rem", width: "50%" }} align="start" spacing={0}>
    <Typography sx={{ fontSize: "2rem" }} variant="h3" fontWeight="bold">
      {title}
    </Typography>
    <Typography sx={{ fontSize: "2rem", lineHeight: "1.5", textAlign: isAddress ? "end" : "start" }} variant="h3" whiteSpace="pre-line">
      {content}
    </Typography>
  </Stack>
);
export default ThankYouPage;
