import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetFooter, GetHeaderSocialMediaIcon, addCareerProfileApi, addEmergencyAppointmentApi, getAccreditationsCertificationApi, uploadSingleFileApi, addFranchiseRequestApi, addInformationKitRequestApi, addReachUSApi, bookAppointmentApi, getBranchContactApi, getCustomerCountApi, getGoogleReviewsApi, getImagesApi, getPageMetaInfoApi, getTestimonialApi, getVideosApi, getBlogsApi } from "./api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

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
export const getCustomerCount = createAsyncThunk("getCustomerCount", async (payload = {}, thunkAPI) => {
  const apiUrl = getCustomerCountApi();
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
export const bookAppointment = createAsyncThunk("bookAppointment", async (payload = {}, thunkAPI) => {
  const apiUrl = bookAppointmentApi();
  try {
    const response = await axios.post(apiUrl, payload.payload);
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
export const addReachUS = createAsyncThunk("addReachUS", async (payload = {}, thunkAPI) => {
  const apiUrl = addReachUSApi();
  try {
    const response = await axios.post(apiUrl, payload.payload);
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

export const addCareerProfile = createAsyncThunk("addCareerProfile", async (payload = {}, thunkAPI) => {
  const apiUrl = addCareerProfileApi();
  try {
    const response = await axios.post(apiUrl, payload.payload);
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
export const addFranchiseRequest = createAsyncThunk("addFranchiseRequest", async (payload = {}, thunkAPI) => {
  const apiUrl = addFranchiseRequestApi();
  try {
    const response = await axios.post(apiUrl, payload.payload);
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
export const addInformationKitRequest = createAsyncThunk("addInformationKitRequest", async (payload = {}, thunkAPI) => {
  const apiUrl = addInformationKitRequestApi();
  try {
    const response = await axios.post(apiUrl, payload.payload);
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
export const getBranchContact = createAsyncThunk("getBranchContact", async (payload = {}, thunkAPI) => {
  const apiUrl = getBranchContactApi();
  try {
    const response = await axios.get(apiUrl, payload.payload);
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
export const addEmergencyAppointment = createAsyncThunk("addEmergencyAppointment", async (payload = {}, thunkAPI) => {
  const apiUrl = addEmergencyAppointmentApi();
  try {
    const response = await axios.post(apiUrl, payload.payload);
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
export const uploadSingleFile = createAsyncThunk("uploadSingleFile", async (payload = {}, thunkAPI) => {
  const apiUrl = uploadSingleFileApi();
  try {
    const response = await axios.post(apiUrl, payload.payload);
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
export const getAccreditationsCertification = createAsyncThunk("getAccreditationsCertification", async (payload = {}, thunkAPI) => {
  const apiUrl = getAccreditationsCertificationApi();
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
export const getBlogs = createAsyncThunk("getBlogs", async (payload = {}, thunkAPI) => {
  const apiUrl = getBlogsApi();
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
  socialIcons: [],
  headerIcons: [],
  images: [],
  videos: [],
  reviews: [],
  testimonials: [],
  pageInfo: {},
  contactInfo: {},
  copyrights: "",
  loading: false,
  error: null,
  customerCount: [],
  Certificates: [],
  blogs: [],
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
      .addCase(getCustomerCount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCustomerCount.fulfilled, (state, action) => {
        state.loading = false;
        state.customerCount = action.payload.data;
      })
      .addCase(getCustomerCount.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(bookAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookAppointment.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(bookAppointment.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(addReachUS.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addReachUS.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(addReachUS.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(addCareerProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCareerProfile.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(addCareerProfile.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(addFranchiseRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addFranchiseRequest.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(addFranchiseRequest.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(addInformationKitRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addInformationKitRequest.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(addInformationKitRequest.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(getBranchContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBranchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contactInfo = action.payload.data;
      })
      .addCase(getBranchContact.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(addEmergencyAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addEmergencyAppointment.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(addEmergencyAppointment.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(getAccreditationsCertification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAccreditationsCertification.fulfilled, (state, action) => {
        state.loading = false;
        state.AccreditationCertificates = action.payload.data;
      })
      .addCase(getAccreditationsCertification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload.data;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(uploadSingleFile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadSingleFile.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(uploadSingleFile.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      });
  },
});
export const {} = HomeReducer.actions;
const homeReducer = HomeReducer.reducer;
export default homeReducer;
