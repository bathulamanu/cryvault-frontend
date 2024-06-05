import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetFooter, GetHeaderSocialMediaIcon, Plans,GetAdditonalServicesDetailsApi } from "./api";
import axios from "axios";

export const getAllPlans = createAsyncThunk("getPlans", async (payload = {}, thunkAPI) => {
  const apiUrl = Plans();

  try {
    const response = await axios.get(apiUrl);
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

export const getAdditonalServicesDetails = createAsyncThunk("getAdditonalServicesDetails", async (payload, thunkAPI) => {
  const apiUrl = GetAdditonalServicesDetailsApi();
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
  plans: [],
  loading: false,
  error: null,
};
const PlansReducer = createSlice({
  name: "plans",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = action.payload;
      })
      .addCase(getAllPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
  },
});
export const {} = PlansReducer.actions;
const plansReducer = PlansReducer.reducer;
export default plansReducer;
