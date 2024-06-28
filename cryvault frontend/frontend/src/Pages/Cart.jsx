import React, { useState, useEffect } from "react";
import { BiTrash } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, OutlinedInput, TextField } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";

const Cart = () => {
  const location = useLocation();
  const [planName, setplanName] = useState(localStorage.getItem("planName"));
  const [amount, setAmount] = useState(localStorage.getItem("planAmount"));
  const handling = 100;
  const tax = amount * 0.18;
  const total = parseInt(amount) + handling + tax;
  const subscription = localStorage.getItem("subscription");

  const navigate = useNavigate();
  const deleteitem = () => {
    setplanName(localStorage.removeItem("planName"));
    setAmount(localStorage.removeItem("amount"));
    localStorage.removeItem("subscription");
  };

  const pay = () => {
    if (planName) {
      const userDetails = localStorage.getItem("userData");
      localStorage.setItem("isCheckingOut", "true");
      if (userDetails?.length > 0 && userDetails != "undefined") {
        const id = JSON.parse(userDetails);
        const isUserLoggedIn = id?.registrationCRNid?.length > 0;
        if (isUserLoggedIn) navigate("/checkout");
      } else {
        navigate("/login");
      }
    }
  };
  const isMobile = useDeviceSize() === "xs";

  return (
    <Box sx={{ marginTop: 15, adding: isMobile ? "0rem 2rem" : " 7rem 10rem" }}>
      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", margin: "3rem 7rem" }}>
        <Box>
          <Typography sx={{ fontSize: "3.5rem", fontWeight: "700" }}>Cart</Typography>
          {planName ? (
            <Box sx={{ marginTop: "1rem", flexDirection: isMobile ? "column" : "row", padding: "0 !important" }} className="cart">
              <Box className="leftCartSection">
                <Box className={!isMobile ? "cartProducts" : "cartProductsMobile"}>
                  <Box sx={{ display: "flex", gap: "2rem" }}>
                    <Box className="productImg">
                      <img style={{ width: "10rem", height: "10rem", borderRradius: "0.5rem" }} src={"https://media.istockphoto.com/id/1434696624/photo/dark-blue-sea-surface-with-waves-splash-and-bubbles.jpg?s=1024x1024&w=is&k=20&c=AKxh2lgEevJuCvyIe4Bnvu_jFhJKlwjL9rlMtbQERy4="} />
                    </Box>
                    <Box className="productDetails">
                      <Typography sx={{ fontSize: "2.5rem", fontWeight: "500" }}> {planName}</Typography>
                    </Box>
                  </Box>

                  <Box className="productAmount">
                    <Typography sx={{ fontSize: "2.5rem", fontWeight: "500", whiteSpace: "nowrap" }}>{amount} INR</Typography>
                    <IconButton onClick={deleteitem}>
                      <BiTrash size={25} color="red" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <Typography sx={{ fontSize: "2.5rem", fontWeight: "700" }}>No Items in cart</Typography>
          )}
        </Box>

        <Box sx={{ width: isMobile ? "100%" : "35%", margin: isMobile ? "2rem 0rem" : "0rem" }} className="rightCartSection">
          <Typography sx={{ fontSize: "2.5rem", fontWeight: "700" }}>Order</Typography>
          <OutlinedInput
            id="outlined-adornment-password"
            type={"text"}
            placeholder="Promo Code"
            size="small"
            sx={{ height: "36px" }}
            name="coupon"
          // value={loginData?.password}
          // onChange={handleOnChange}
          />
          <Box>
            <hr />
            <Box className="discount">
              <Typography sx={{ fontSize: "2.5rem", fontWeight: "700" }}>Discount</Typography>
              <Typography sx={{ fontSize: "2.5rem", fontWeight: "500" }}>0 INR</Typography>
            </Box>
            <hr />

            <Box className="discount">
              <Typography sx={{ fontSize: "2.5rem", fontWeight: "700" }}>Total</Typography>
              <Typography sx={{ fontSize: "2.5rem", fontWeight: "500" }}>{amount} INR</Typography>
            </Box>
          </Box>
          <Button className="edu-btn" sx={{ width: "100%" }} onClick={pay}>
            Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
// useEffect(() => {
//   const storedplanName = sessionStorage.getItem("planName");
//   const storedAmount = sessionStorage.getItem("amount");

//   if (storedplanName !== planName) {
//     setplanName(storedplanName);
//   }

//   if (storedAmount !== amount) {
//     setAmount(storedAmount);
//   }
// }, [planName, amount]);

// const handleKeyDown = (e, i) => {
//     if (e.key == "Enter") {
//       e.preventDefault();

//       if (i < inputRefs.length - 1) inputRefs[i + 1].current.focus();
//     }
//   };

//   <input onKeyDown={(e) => handleKeyDown(e, 0)} ref={inputRefs[0]} type="text" />
//       <input onKeyDown={(e) => handleKeyDown(e, 1)} ref={inputRefs[1]} type="text" />
//       <input onKeyDown={(e) => handleKeyDown(e, 2)} ref={inputRefs[2]} type="text" />

//       useEffect(() => {
//         console.log("vaishnavi");
//         inputRefs[0].current.focus();
//       }, []);

//         // const inputRef = useRef(null);
//   const inputRefs = [useRef(null), useRef(null), useRef(null)];

// const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// const handleResize = () => setWindowWidth(window.innerWidth);

// useEffect(() => {
//   window.addEventListener("resize", handleResize);

//   // return () => window.removeEventListener('resize',handleResize)
// }, []);
