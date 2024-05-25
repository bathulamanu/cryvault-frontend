import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHelpDetailsApi } from "./api";
import axios from "axios";

export const getHelpDetails = createAsyncThunk("getHelpDetails", async (payload = {}, thunkAPI) => {
  const apiUrl = getHelpDetailsApi();
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `${token}`,
  };
  try {
    const response = await axios.get(apiUrl, { headers });
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

const initialState = {
  helpList: [],

  loading: false,
  error: null,
};
const DashboardReducer = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHelpDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHelpDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.helpList = action.payload.data;
      })
      .addCase(getHelpDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {} = DashboardReducer.actions;
const dashboardReducer = DashboardReducer.reducer;
export default dashboardReducer;
