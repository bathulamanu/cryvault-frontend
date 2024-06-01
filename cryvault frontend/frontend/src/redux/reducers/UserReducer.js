import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginAPI, OTP, getCustomerInfoApi } from "./api";
import axios from "axios";

export const login = createAsyncThunk("login", async (payload, thunkAPI) => {
  const apiUrl = LoginAPI();
  try {
    const response = await axios.post(apiUrl, payload.payload);
    const { ok, problem, data } = response;
    if (data) {
      if (payload.callback) payload.callback();
      return data;
    } else {
      return thunkAPI.rejectWithValue({ data, problem });
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const verifyOTP = createAsyncThunk("verify", async (payload = {}, thunkAPI) => {
  const apiUrl = OTP();
  try {
    const response = await axios.post(apiUrl, payload.payload);
    const { problem, data } = response;
    if (data?.status == 200) {
      console.log({data})
      localStorage.setItem("subscriptionPlanId", data.data.subscriptionPlanId);
      sessionStorage.setItem("subscriptionPlanId", data.data.subscriptionPlanId);
      payload.callback();
      return data;
    } else {
      return thunkAPI.rejectWithValue({ data, problem });
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getCustomerInfo = createAsyncThunk("getCustomerInfo", async (payload = {}, thunkAPI) => {
  const apiUrl = getCustomerInfoApi();
  try {
    const response = await axios.post(apiUrl, payload.payload);
    const { problem, data } = response;
    if (data?.status == 200) {
      payload.callback();
      return data;
    } else {
      return thunkAPI.rejectWithValue({ data, problem });
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  optid: "",
  userDetails: {},
  loading: false,
  error: null,
  subscriptionPlanId: null,
};
const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        const userData = action.payload.data;
        state.userDetails = action.payload.data;
        state.subscriptionPlanId = action.payload.data.subscriptionPlanId;
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("subscriptionPlanId", action.payload.data.subscriptionPlanId);
        sessionStorage.setItem("subscriptionPlanId", JSON.stringify(action.payload.data.subscriptionPlanId));
        sessionStorage.setItem("token", userData?.token);
        localStorage.setItem("token", userData?.token);
        sessionStorage.setItem("userData", JSON.stringify(userData));
        state.optid = action.payload.optid;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCustomerInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCustomerInfo.fulfilled, (state, action) => {
        state.loading = false;
        const userData = action.payload.data;
        state.userDetails = action.payload.data;
        state.subscriptionPlanId = action.payload.data.subscriptionPlanId;
        console.log(action.payload.data.subscriptionPlanId);
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("subscriptionPlanId", JSON.stringify(action.payload.data.subscriptionPlanId));
        sessionStorage.setItem("token", userData?.token);
        localStorage.setItem("token", userData?.token);
        sessionStorage.setItem("userData", JSON.stringify(userData));
        state.optid = action.payload.optid;
      })
      .addCase(getCustomerInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {} = UserReducer.actions;
const userReducer = UserReducer.reducer;
export default userReducer;
