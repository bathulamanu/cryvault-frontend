import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginAPI, OTP, getCustomerInfoApi, addOrupdateAnnexureInfoApi } from "./api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

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
export const getCustomerInfo = createAsyncThunk("getCustomerInfo", async (payload, thunkAPI) => {
  const apiUrl = getCustomerInfoApi();
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `${token}`,
  };
  try {
    const response = await axios.get(apiUrl, { headers });
    const { problem, data } = response;
    if (data?.status == 200) {
      if (payload?.callback) payload.callback();
      return data;
    } else {
      return thunkAPI.rejectWithValue({ data, problem });
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const startTimerWithCallback = createAsyncThunk("startTimerWithCallback", async (_, { dispatch }) => {
  dispatch(setTimer(60));
  dispatch(clearError());
});
export const addOrupdateAnnexureInfo = createAsyncThunk("addOrupdateAnnexureInfo", async (payload = {}, thunkAPI) => {
  const apiUrl = addOrupdateAnnexureInfoApi();
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `${token}`,
  };
  try {
    const response = await axios.post(apiUrl, payload, { headers });
    const { problem, data } = response;
    if (data?.status == 200) {
      // payload.callback();
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
  timer: 0,
  timerError: "",
  loading: false,
  error: null,
  subscriptionPlanId: null || localStorage.getItem("subscriptionPlanId"),
};
const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTimer: (state, action) => {
      state.timer = action.payload;
    },
    decrementTimer: (state) => {
      if (state.timer > 0) state.timer -= 1;
    },
    setError: (state, action) => {
      state.timerError = action.payload;
    },
    clearError: (state) => {
      state.timerError = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        toast.success(action.payload.message);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(action.payload.message);
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
        toast.success(action.payload.message);
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(action.payload.message);
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
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("subscriptionPlanId", JSON.stringify(action.payload.data.subscriptionPlanId));
        sessionStorage.setItem("userData", JSON.stringify(userData));
        state.optid = action.payload.optid;
        toast.success(action.payload.message);
      })
      .addCase(getCustomerInfo.rejected, (state, action) => {
        state.loading = false;
        state.timerError = action.error.message;
        toast.error(action.payload.message);
      })
      .addCase(addOrupdateAnnexureInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addOrupdateAnnexureInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.AnnexureInfo = action.payload;
        toast.success(action.payload.message);
      })
      .addCase(addOrupdateAnnexureInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(action.payload.message);
      });
    builder.addCase(startTimerWithCallback.fulfilled, (state) => {
      state.timerError = "";
    });
  },
});
export const { setTimer, decrementTimer, setError, clearError } = UserReducer.actions;
const userReducer = UserReducer.reducer;
export default userReducer;
