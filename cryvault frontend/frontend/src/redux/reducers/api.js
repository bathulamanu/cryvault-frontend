const BASE_URL = "http://18.61.70.225:4000"; // "http://localhost:4000" //


export const s3BucketFilePath = () => {
  return 'https://flyingbyts.s3.ap-south-2.amazonaws.com/';
};

export const reCaptchaSiteKey = () => {
  return '6Lf4RPUpAAAAAOu9M51NaHQlLxl8df7ldXf9pnS_';
};

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
export const getGoogleReviewsApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/getReview`;
};
export const getTestimonialApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/getTestimony`;
};
export const getCustomerCountApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/getCustomerCount`;
};
export const bookAppointmentApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/bookAppointment`;
};
export const addReachUSApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/addReachUS`;
};
export const addCareerProfileApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/addCareerProfile`;
};
export const addFranchiseRequestApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/addFranchiseRequest`;
};
export const addInformationKitRequestApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/addInformationKitRequest`;
};
export const getBranchContactApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/getBranchContact`;
};
export const addEmergencyAppointmentApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/addEmergencyAppointment`;
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

export const GetAdditonalServicesDetailsApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/getAdditionalServices/ADDITIONAL%20SERVICES/null`;
};

export const uploadResumeSingleFileApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/resumeUpload`;
};

export const uploadSingleFileApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/upload`;
};

export const getAccreditationsCertificationApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/getAccreditationsCertification`;
};
export const getBlogsApi = () => {
  return `${BASE_URL}/flyingbyts/api/user/getBlog`;
};
export const addOrupdateAnnexureInfoApi = () => {
  return `${BASE_URL}/flyingbyts/api/customer/addOrupdateAnnexureInfo`;
};
export const GetTypeOfPregnancyDetails = () => {
  return `${BASE_URL}/flyingbyts/api/user/getMasterConfiguration/Type of Pregnancy/null`;
};



