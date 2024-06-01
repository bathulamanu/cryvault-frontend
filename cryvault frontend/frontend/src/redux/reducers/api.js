const BASE_URL = "http://18.61.70.225:4000";

export const LoginAPI = () => {
  return `${BASE_URL}/flyingbyts/api/user/customerRegisterOrLogin`;
};

export const OTP = () => {
  return `${BASE_URL}/flyingbyts/api/user/otpVerify`;
};
export const ResendOTPAPI = () => {
  return `${BASE_URL}/cryovault/api/user/customerResendOtp`;
};
export const CreateOrderApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/createOrder`;
};
export const PaymentStatus = () => {
  return `${BASE_URL}/flyingbyts/api/user/customerPayment`;
};
export const Plans = () => {
  return `${BASE_URL}/flyingbyts/api/customer/getSubscriptionPlan`;
};

export const RegistrationForm = () => {
  return `${BASE_URL}/cryovault/api/customer/updateCustomerInfo`;
};

export const GetGenderDetails = () => {
  return `${BASE_URL}/flyingbyts/api/user/getMasterConfiguration/Gender/null`;
};

export const GetCustomerPaymentDetails = () => {
  return `${BASE_URL}/flyingbyts/api/customer/updateCustomerInfo`;
};
export const GetHeaderSocialMediaIcon = () => {
  return `${BASE_URL}/flyingbyts/api/user/getsocialMediaIcon`;
};
export const GetFooter = () => {
  return `${BASE_URL}/flyingbyts/api/user/getFooter`;
};
export const GetImages = () => {
  return `${BASE_URL}/cryovault/api/user/getFilesFromS3`;
};
export const getCountryName = () => {
  return `${BASE_URL}/flyingbyts/api/user/getCountryName `;
};
export const getCityName = () => {
  return `${BASE_URL}/flyingbyts/api/user/getCityName`;
};
export const getStateName = () => {
  return `${BASE_URL}/flyingbyts/api/user/getStateName`;
};
export const getPageMetaInfoApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/getPageMetaInfo`;
};
export const getOrderDetailsApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/getCustomerPaymentDetails`;
};
export const getHelpDetailsApi = () => {
  return `${BASE_URL}/flyingbyts/api/customer/getHelpDetails`;
};
export const IsSubscribedUserApi = () => {
  return `${BASE_URL}/flyingbyts/api/customer/getAnnexureInfo`;
};
export const getImagesApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/getGalleryImages `;
};
export const getVideosApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/getGalleryVideo`;
};
// dashboard api
export const getClientInfoApi = () => {
  return `${BASE_URL}/flyingbyts/api/customer/getAnnexureInfo`;
};
export const addClientInfoApi = () => {
  return `${BASE_URL}/flyingbyts/api/customer/addOrupdateAnnexureInfo`;
};
export const getCustomerInfoApi = () => {
  return `${BASE_URL}/flyingbyts/api/customer/getCustomerInfo`;
};
