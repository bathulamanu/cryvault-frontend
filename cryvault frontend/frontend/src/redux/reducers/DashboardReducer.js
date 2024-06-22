import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAnnexureInfoApi, addClientInfoApi, getClientInfoApi, getHelpDetailsApi, uploadSingleFileApi, GetTypeOfPregnancyDetails, GetTypeOfProofDetails } from "./api";
import axios from "axios";
import { exampledata } from "../../data";

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
export const getAnnexureInfo = createAsyncThunk("getAnnexureInfo", async (payload = {}, thunkAPI) => {
  const apiUrl = getAnnexureInfoApi();
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
export const getClientInfo = createAsyncThunk("getClientInfo", async (payload = {}, thunkAPI) => {
  const apiUrl = getClientInfoApi();
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

export const addClientInfo = createAsyncThunk("addClientInfo", async (payload = {}, thunkAPI) => {
  const apiUrl = addClientInfoApi();
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `${token}`,
  };
  try {
    const response = await axios.post(apiUrl, { headers });
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

// export const addClientFileInfo = createAsyncThunk("addClientFileInfo", async (payload = {}, thunkAPI) => {
//   const apiUrl = uploadSingleFileApi();
//   const token = sessionStorage.getItem("token");
//   const headers = {
//     authorization: `${token}`,
//   };
//   try {
//     const response = await axios.post(apiUrl, { headers });
//     const { ok, problem, data } = response;
//     if (data) {
//       if (payload.callback) payload.callback();
//       return data;
//     } else {
//       return thunkAPI.rejectWithValue({ data, problem });
//     }
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

export const GetTypeOfPregnancy = createAsyncThunk("GetTypeOfPregnancy", async (payload = {}, thunkAPI) => {
  const apiUrl = GetTypeOfPregnancyDetails();
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


export const GetTypeOfProof = createAsyncThunk("GetTypeOfProof", async (payload = {}, thunkAPI) => {
  const apiUrl = GetTypeOfProofDetails();
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
  SubscribedUserData: [],
  typeOfProofData: [],
  typeOfPreganacyData: [],
  clientData: exampledata,
  loading: false,
  error: null,
  isPopupPage: false,
};
const DashboardReducer = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setPopupPage: (state, action) => {
      state.isPopupPage = action.payload;
    },
    resetPopupPage: (state, action) => {
      state.isPopupPage = action.payload;
    },
  },
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
      })
      .addCase(getAnnexureInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAnnexureInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.SubscribedUserData = action.payload.data;
      })
      .addCase(getAnnexureInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getClientInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getClientInfo.fulfilled, (state, action) => {
        state.loading = false;
        // state.clientData = action.payload.data;
      })
      .addCase(getClientInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addClientInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addClientInfo.fulfilled, (state, action) => {
        state.loading = false;
        // state.clientData = action.payload.data;
      })
      .addCase(addClientInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(GetTypeOfPregnancy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetTypeOfPregnancy.fulfilled, (state, action) => {
        state.loading = false;
        state.typeOfPreganacyData = action.payload.data;
      })
      .addCase(GetTypeOfPregnancy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(GetTypeOfProof.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetTypeOfProof.fulfilled, (state, action) => {
        state.loading = false;
        state.typeOfProofData = action.payload.data;
      })
      .addCase(GetTypeOfProof.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
});
export const { resetPopupPage, setPopupPage } = DashboardReducer.actions;
const dashboardReducer = DashboardReducer.reducer;
export default dashboardReducer;
