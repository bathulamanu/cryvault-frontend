const BASE_URL = "http://18.61.60.231:4000";

export const LoginAPI = () => {
  return `${BASE_URL}/flyingbyts/api/user/customerRegisterOrLogin`;
};

export const OTP = () => {
  return `${BASE_URL}/flyingbyts/api/user/otpVerify`;
};
export const ResendOTPAPI = () => {
  return `${BASE_URL}/cryovault/api/user/customerResendOtp`;
};
export const CreateOrder = () => {
  return `${BASE_URL}/cryovault/api/user/createOrder`;
};
export const PaymentStatus = () => {
  return `${BASE_URL}/cryovault/api/user/customerPayment`;
};
export const Plans = () => {
  return `${BASE_URL}/flyingbyts/api/customer/getSubscriptionPlan`;
};

export const RegistrationForm = () => {
  return `${BASE_URL}/cryovault/api/customer/updateCustomerInfo`;
};

export const GetGenderDetails = () => {
  return `${BASE_URL}/cryovault/api/customer/getGender`;
};

export const GetCustomerPaymentDetails = () => {
  return `${BASE_URL}/cryovault/api/user/getCustomerPaymentDetails`;
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
