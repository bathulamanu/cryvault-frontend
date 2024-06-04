import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetFooter, GetHeaderSocialMediaIcon, getGoogleReviewsApi, getImagesApi, 
  getPageMetaInfoApi, getTestimonialApi, getVideosApi ,bookAppointmentApi} from "./api";
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
export const getPageMetaInfo = createAsyncThunk("getPageMetaInfo", async (payload = {}, thunkAPI) => {
  const apiUrl = getPageMetaInfoApi();
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
export const getImages = createAsyncThunk("getImages", async (payload = {}, thunkAPI) => {
  const apiUrl = getImagesApi();
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
export const getVideos = createAsyncThunk("getVideos", async (payload = {}, thunkAPI) => {
  const apiUrl = getVideosApi();
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
export const getGoogleReviews = createAsyncThunk("getGoogleReviews", async (payload = {}, thunkAPI) => {
  const apiUrl = getGoogleReviewsApi();
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
export const getTestimonial = createAsyncThunk("getTestimonial", async (payload = {}, thunkAPI) => {
  const apiUrl = getTestimonialApi();
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `${token}`,
  };
  try {
    const response = await axios.get(apiUrl);
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


export const bookAppointment = createAsyncThunk("bookAppointment", async (payload, thunkAPI) => {
  const apiUrl = bookAppointmentApi();
  const headers = {
  };
  try {
    const response = await axios.post(apiUrl, payload.payload, { headers });
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
  images: [],
  videos: [],
  reviews:[],
  testimonials:[],
  pageInfo: {},
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
      .addCase(getPageMetaInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPageMetaInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.pageInfo = action.payload.data;
      })
      .addCase(getPageMetaInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload.data;
      })
      .addCase(getImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload.data;
      })
      .addCase(getVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getGoogleReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGoogleReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload.data;
      })
      .addCase(getGoogleReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getTestimonial.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTestimonial.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload.data;
      })
      .addCase(getTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
  },
});
export const {} = HomeReducer.actions;
const homeReducer = HomeReducer.reducer;
export default homeReducer;
