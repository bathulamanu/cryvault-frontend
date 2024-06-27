import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateOrderApi, GetCustomerPaymentDetails, GetGenderDetails, LoginAPI, OTP, PaymentStatus, getCityName, getCountryName, getOrderDetailsApi, getPaymentDetailsApi, getStateName } from "./api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const getGenders = createAsyncThunk("gender", async (payload, thunkAPI) => {
  const apiUrl = GetGenderDetails();
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `${token}`,
  };
  try {
    const response = await axios.get(apiUrl, { headers });
    const { ok, problem, data } = response;
    if (data) {
      if (payload?.callback) payload.callback();
      return data;
    } else {
      return thunkAPI.rejectWithValue({ data, problem });
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getCountry = createAsyncThunk("country", async (payload, thunkAPI) => {
  const apiUrl = getCountryName();
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `${token}`,
  };
  try {
    const response = await axios.get(apiUrl, { headers });
    const { ok, problem, data } = response;
    if (data) {
      if (payload?.callback) payload.callback();
      return data;
    } else {
      return thunkAPI.rejectWithValue({ data, problem });
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getState = createAsyncThunk("state", async (payload, thunkAPI) => {
  const apiUrl = getStateName();
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `${token}`,
  };
  try {
    const response = await axios.get(`${apiUrl}/${payload?.payload}`, { headers });
    const { ok, problem, data } = response;
    if (data) {
      if (payload?.callback) payload.callback();
      return data;
    } else {
      return thunkAPI.rejectWithValue({ data, problem });
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getCity = createAsyncThunk("city", async (payload, thunkAPI) => {
  const apiUrl = getCityName();
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `${token}`,
  };
  try {
    const response = await axios.get(`${apiUrl}/${payload.payload}`, { headers });
    const { ok, problem, data } = response;
    if (data) {
      if (payload?.callback) payload.callback();
      return data;
    } else {
      return thunkAPI.rejectWithValue({ data, problem });
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getCityForPermanentAddress = createAsyncThunk("getCityForPermanentAddress", async (payload, thunkAPI) => {
  const apiUrl = getCityName();
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `${token}`,
  };
  try {
    const response = await axios.get(`${apiUrl}/${payload.payload}`, { headers });
    const { ok, problem, data } = response;
    if (data) {
      if (payload?.callback) payload.callback();
      return data;
    } else {
      return thunkAPI.rejectWithValue({ data, problem });
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getCustomerPaymentDetails = createAsyncThunk("getCustomerPaymentDetails", async (payload, thunkAPI) => {
  const apiUrl = GetCustomerPaymentDetails();
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `${token}`,
  };
  try {
    const response = await axios.post(apiUrl, payload, { headers });
    const { ok, problem, data } = response;
    if (data) {
      if (payload?.callback) payload.callback();
      return data;
    } else {
      return thunkAPI.rejectWithValue({ data, problem });
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const createOrder = createAsyncThunk("createOrder", async (payload, thunkAPI) => {
  const apiUrl = CreateOrderApi();
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `${token}`,
  };
  const subscription = localStorage.getItem("subscription");
  const amount = localStorage.getItem("planAmount");
  const paymentMethod = "card";

  // const navigate = useNavigate();
  // const goToThankyouPage = () => navigate("/thankyou");
  try {
    const response = await axios.post(apiUrl, payload.payload, { headers });

    if (response.status === 200) {
      const orderid = response.data.data.id;
      const options = {
        key: response.data.key,
        amount: payload.amount,
        currency: "INR",
        name: "Cryovault",
        description: "Test Transaction",
        image: "https://www.cryovault.in/wp-content/uploads/2024/01/cryovault-blue-200x48.png",
        order_id: orderid,
        card: {
          number: "4111 1111 1111 1111", // Replace with a valid test card number
          expiry_month: "12", // Expiry month (MM)
          expiry_year: "23", // Expiry year (YY)
          cvv: "123", // Replace with a valid CVV
          name: "John Doe", // Cardholder name
        },
        prefill: {
          name: payload.name || "Piyush Garg", // Use payload.name if provided, otherwise default to "Piyush Garg"
          email: payload.email || "youremail@example.com", // Use payload.email if provided, otherwise default to "youremail@example.com"
          contact: payload.contact || "7879186483", // Use payload.contact if provided, otherwise default to "9999999999"
          method: payload.paymentMethod, // Assuming paymentMethod is provided in the payload
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
        handler: async (response) => {
          const postData = {
            payment: {
              subscriptionPlanId: subscription,
              OrderCode: orderid,
              paidAmount: amount,
              totalAmount: amount,
              Event: "payment.captured",
              paymentType: paymentMethod,
              PaymentGatewayID: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            },
          };

          try {
            const apiResponse = await axios.post(PaymentStatus(), postData, { headers });
            const { status, data } = apiResponse;
            if (status === 200) {
              console.log("Payment successful!");
              window.location.href = "/thankyou";
            } else {
              console.error("Payment failed:");
              // alert("ok oka");
              toast.error("Payment failed. Please try again or contact support.");
            }
          } catch (error) {
            console.error("Error sending data to API:", error);
          }
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", async (response) => {
        // console.log("cehck it out ", response);
        // alert("ok");
        const postData = {
          payment: {
            subscriptionPlanId: subscription,
            OrderCode: orderid,
            paidAmount: amount,
            totalAmount: amount,
            Event: "payment.failed",
            paymentType: paymentMethod,
            PaymentGatewayID: "",
            razorpay_order_id: "",
            razorpaySignature: ""
          }
        };

        try {
          const apiResponse = await axios.post(PaymentStatus(), postData, { headers });
          const { status, data } = apiResponse;
          if (status === 200) {

          } else {

          }
        } catch (error) {
          // console.error("Error sending data to API:", error);
        }
        
        toast.error(response?.error?.description);
      });
      rzp1.open();
    } else {
      console.error("Unexpected status code:", response.status);
      // Handle other status codes if needed
    }

    return response.data; // Assuming your API response contains the necessary data
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getOrderDetails = createAsyncThunk("getOrderDetails", async (payload, thunkAPI) => {
  const apiUrl = getOrderDetailsApi();
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `${token}`,
  };
  try {
    const response = await axios.get(apiUrl, { headers });
    const { ok, problem, data } = response;
    if (data) {
      if (payload?.callback) payload.callback();
      return data;
    } else {
      return thunkAPI.rejectWithValue({ data, problem });
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  genders: [],
  countries: [],
  states: [],
  cities: [],
  userPaymentDetails: {},
  orderDetails: [],
  loading: false,
  error: null,
  citiesForPermanentAddress:[]
};
const PaymentReducer = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGenders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGenders.fulfilled, (state, action) => {
        state.loading = false;
        state.genders = action.payload.data;
      })
      .addCase(getGenders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCustomerPaymentDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCustomerPaymentDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.userPaymentDetails = action.payload;
        toast.success(action.payload.message);
      })
      .addCase(getCustomerPaymentDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(action.payload.message);
      })
      .addCase(getCountry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload.data;
      })
      .addCase(getCountry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getState.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getState.fulfilled, (state, action) => {
        state.loading = false;
        state.states = action.payload.data;
      })
      .addCase(getState.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCity.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload.data;
      })
      .addCase(getCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCityForPermanentAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCityForPermanentAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.citiesForPermanentAddress = action.payload.data;
      })
      .addCase(getCityForPermanentAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getOrderDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(getOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { } = PaymentReducer.actions;
const paymentReducer = PaymentReducer.reducer;
export default paymentReducer;
