import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginAPI, OTP } from "./api";
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
    const { status, problem, data } = response;
    if (data?.status == 200) {
      setTimeout(() => {
        payload.callback();
      }, 3000);
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
        state.subscriptionPlanId = userData.subscriptionPlanId;
        localStorage.setItem("userData", JSON.stringify(userData));
        sessionStorage.setItem("token", userData?.token);
        localStorage.setItem("token", userData?.token);
        sessionStorage.setItem("userData", JSON.stringify(userData));
        state.optid = action.payload.optid;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {} = UserReducer.actions;
const userReducer = UserReducer.reducer;
export default userReducer;
