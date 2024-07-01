import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAnnexureInfoApi, addClientInfoApi, getClientInfoApi, getHelpDetailsApi, uploadSingleFileApi,
  GetTypeOfPregnancyDetails, GetTypeOfProofDetails, addAnyDetailsIssueApi,
  addMobileNumberChange, addHospitalDetailsChangeIssue, addExecutiveDetailsIssue, addNomineeDetailsChangeIssue, addCommunicationDetailsIssue
} from "./api";
import axios from "axios";
import { exampledata } from "../../data";
import { ToastContainer, toast } from "react-toastify";

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
// ------
export const addAnyDetailsIssue = createAsyncThunk("addAnyDetailsIssue", async (payload = {}, thunkAPI) => {
  const apiUrl = addAnyDetailsIssueApi();
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

export const addMobileNumber = createAsyncThunk("addMobileNumber", async (payload = {}, thunkAPI) => {
  const apiUrl = addMobileNumberChange();
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

export const addHospitalDetailsChange = createAsyncThunk("addHospitalDetailsChange", async (payload = {}, thunkAPI) => {
  const apiUrl = addHospitalDetailsChangeIssue();
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
export const addExecutiveDetails = createAsyncThunk("addExecutiveDetails", async (payload = {}, thunkAPI) => {
  const apiUrl = addExecutiveDetailsIssue();
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
export const addNomineeDetailsChange = createAsyncThunk("addNomineeDetailsChange", async (payload = {}, thunkAPI) => {
  const apiUrl = addNomineeDetailsChangeIssue();
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
export const addCommunicationDetails = createAsyncThunk("addCommunicationDetails", async (payload = {}, thunkAPI) => {
  const apiUrl = addCommunicationDetailsIssue();
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
      .addCase(addAnyDetailsIssue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAnyDetailsIssue.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(addAnyDetailsIssue.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(addMobileNumber.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMobileNumber.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(addMobileNumber.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(addHospitalDetailsChange.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addHospitalDetailsChange.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(addHospitalDetailsChange.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(addExecutiveDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addExecutiveDetails.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(addExecutiveDetails.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(addNomineeDetailsChange.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNomineeDetailsChange.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(addNomineeDetailsChange.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })
      .addCase(addCommunicationDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCommunicationDetails.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(addCommunicationDetails.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      })

  },
});
export const { resetPopupPage, setPopupPage } = DashboardReducer.actions;
const dashboardReducer = DashboardReducer.reducer;
export default dashboardReducer;
