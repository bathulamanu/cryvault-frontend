import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetFooter, GetHeaderSocialMediaIcon } from "./api";
import axios from "axios";


export const fetchSocialIcons = createAsyncThunk("socialIcons/fetchSocialIcons", async (payload = {}, thunkAPI) => {
  const apiUrl = GetFooter(); 

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
export const fetchHeaderSocialIcons = createAsyncThunk("socialIcons/fetchHeaderSocialIcons", async (payload = {}, thunkAPI) => {
    const apiUrl = GetHeaderSocialMediaIcon(); 
  
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

const initialState = {
  socialIcons: [],
  headerIcons: [],
  copyrights: "",
  loading: false,
  error: null,
};
const HomeReducer = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSocialIcons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSocialIcons.fulfilled, (state, action) => {
        state.loading = false;
        state.socialIcons = action.payload;
      })
      .addCase(fetchSocialIcons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchHeaderSocialIcons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHeaderSocialIcons.fulfilled, (state, action) => {
        state.loading = false;
        state.headerIcons = action.payload;
      })
      .addCase(fetchHeaderSocialIcons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});
export const {} = HomeReducer.actions;
const homeReducer = HomeReducer.reducer;
export default homeReducer;
