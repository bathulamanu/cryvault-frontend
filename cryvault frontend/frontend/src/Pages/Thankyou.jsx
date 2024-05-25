import React, { useEffect, useMemo, useState } from "react";
import { Box, Typography, Stack, Grid, Card, CardHeader, CardContent, Divider, Button, IconButton, TextField, MenuItem, Select, FormControl, InputLabel, Container } from "@mui/material";
import { FaCcVisa } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../redux/reducers/PaymentReducer";

const ThankYouPage = () => {
  const bg = useTheme().palette.mode === "dark" ? "#212121" : "#fff";
  const color = useTheme().palette.mode === "dark" ? "#fff" : "#000";
  const location = useLocation();
  const invoice = location.state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderDetails = useSelector((state)=>state.payment.orderDetails)

  console.log(orderDetails)

  const data = useMemo(()=>{

    // const method= orderDetails && orderDetails[0]?.PaymentDetails?.[0]?.Method
    // const totalAmount= orderDetails && orderDetails[0]?.PaymentDetails?.[0]?.totalAmount
    // const name= orderDetails && orderDetails[0]?.firstName
    // const email= orderDetails && orderDetails[0]?.email
    // const phone= orderDetails && orderDetails[0]?.phoneNumber
    
//     Order ID:

// Subscription Plan:

// Payment Method: sddfsd

// vaishnavi dwivedi
// 7879186483
// vaish@gmail.com
// Sub Total
// 213423 INR
// Total
  },[])

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

  return (
    <Container sx={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", margin: "15rem auto" }} minHeight="100vh" py={4} px={2}>
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
                  <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>Order ID: {invoice?.orderid}</Typography>
                  <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>Subscription Plan: {invoice?.plan}</Typography>
                  <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>Payment Method: {details[0].PaymentDetails[0].paymentType}</Typography>
                </Stack>
                <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>Thank you!</Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>Your order is confirmed.</Typography>
                <Divider />
                <Stack spacing={4} w="full">
                  <Stack sx={{ display: "flex", flexDirection: "column", gap: "1rem" }} align="start" spacing={4} flex="4" pr={2}>
                    <Section title="" style={{ fontSize: "20" }}>
                      <SubSection title="Customer information" content={`${details[0].firstName} ${details[0].lastName}\n ${details[0].phoneNumber}\n ${details[0].email}`} />
                      <SubSection title="Bill address" content={`${details[0].address}`} />
                    </Section>
                  </Stack>
                </Stack>
                <Typography sx={{fontSize:"2rem"}} variant="h3" fontWeight="bold">
                  Summary
                </Typography>

                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{fontSize:"2rem"}} variant="h3" fontWeight="bold">
                    Sub Total
                  </Typography>
                  <Typography variant="h3">{details[0].PaymentDetails[0].paidAmount} INR</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{fontSize:"2rem"}} variant="h3" fontWeight="bold">
                    Total
                  </Typography>
                  <Typography variant="h3">{details[0].PaymentDetails[0].paidAmount} INR</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        )}
      </Stack>
    </Container>
  );
};
const Section = ({ title, children }) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }} w="full">
    <Typography sx={{fontSize:"2rem"}} variant="h3" size="md" fontWeight="bold" mb={2}>
      {title}
    </Typography>
    {children}
  </Box>
);

const SubSection = ({ title, content }) => (
  <Stack sx={{ flexDirection: "column", justifyContent: "space-between", gap: "2rem" }} align="start" spacing={0}>
    <Typography sx={{fontSize:"2rem"}} variant="h3" fontWeight="bold">
      {title}
    </Typography>
    <Typography sx={{fontSize:"2rem", lineHeight: "1.5"}} variant="h3" whiteSpace="pre-line">
      {content}
    </Typography>
  </Stack>
);
export default ThankYouPage;
