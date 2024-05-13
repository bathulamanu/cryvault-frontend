var userCtrl = require("./UserCtrl");
var auth = require('../../utils/Auth').token;

module.exports = (app) => {
    
    app.post('/flyingbyts/api/user/customerRegisterOrLogin', userCtrl.customerSignUpOrLogin);
    app.post('/flyingbyts/api/user/otpVerify', userCtrl.otpVerify);
    app.post('/flyingbyts/api/user/customerResendOtp', userCtrl.customerSignUpOrLogin);
    app.post('/flyingbyts/api/user/createOrder', auth, userCtrl.customerOrderCreation);
    app.post('/flyingbyts/api/user/customerPayment', auth, userCtrl.customerPaymentVerification); 
    app.get('/flyingbyts/api/user/getCustomerPaymentDetails', auth, userCtrl.getCustomerPaymentDetails);

    app.post('/flyingbyts/api/user/addCoupon', auth, userCtrl.addCoupon);
    app.put('/flyingbyts/api/user/UpdateCoupon/:couponID', auth, userCtrl.UpdateCoupon);
    app.get('/flyingbyts/api/user/getCoupon', auth, userCtrl.getCoupon);
    app.delete('/flyingbyts/api/user/deleteCoupon/:couponID', auth, userCtrl.deleteCoupon);

}