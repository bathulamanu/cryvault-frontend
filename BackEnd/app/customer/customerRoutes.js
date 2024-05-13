var customer = require('./customerCtrl');
var auth = require('../../utils/Auth').token;


module.exports = (app) => {
    app.post('/flyingbyts/api/customer/updateCustomerInfo', auth, customer.updateCustomerInfo);

    app.post('/flyingbyts/api/customer/createSubscriptionPlan', auth, customer.createSubscriptionPlan);    
    app.put('/flyingbyts/api/customer/UpdateSubscriptionPlan/:subscriptionID', auth, customer.UpdateSubscriptionPlan);
    app.get('/flyingbyts/api/customer/getSubscriptionPlan', customer.getSubscriptionPlan);
    app.delete('/flyingbyts/api/customer/deleteSubscriptionPlan/:subscriptionID',auth, customer.deleteSubscriptionPlan);

    app.post('/flyingbyts/api/customer/addOrupdateAnnexureInfo', auth, customer.addOrupdateAnnexureInfo);
    app.get('/flyingbyts/api/customer/getAnnexureInfo', auth, customer.getAnnexureInfo);
    app.post('/flyingbyts/api/customer/addOrUpdateGender', auth,customer.addOrUpdateGender);
    app.get('/flyingbyts/api/customer/getGender',auth, customer.getGender);
    app.post('/flyingbyts/api/customer/addOrUpdateHelp',auth, customer.addOrUpdateHelp);
    app.get('/flyingbyts/api/customer/getHelpDetails', auth,customer.getHelpDetails);
    app.post('/flyingbyts/api/customer/addCustomerAnyDetailsIssue', auth, customer.addCustomerAnyDetailsIssue);
    app.get('/flyingbyts/api/customer/getCustomerAnyDetailsIssue', auth,customer.getCustomerAnyDetailsIssue);
    app.post('/flyingbyts/api/customer/addCustomerMobileNumberChangeIssue', auth, customer.addCustomerMobileNumberChangeIssue);
    app.get('/flyingbyts/api/customer/getCustomerMobileNumberChangeIssue',auth, customer.getCustomerMobileNumberChangeIssue);
    app.post('/flyingbyts/api/customer/addCustomerHospitalDetailsChangeIssue', auth, customer.addCustomerHospitalDetailsChangeIssue);
    app.get('/flyingbyts/api/customer/getCustomerHospitalDetailsChangeIssue', auth,customer.getCustomerHospitalDetailsChangeIssue);
    app.post('/flyingbyts/api/customer/addCustomerExecutiveDetailsIssue', auth, customer.addCustomerExecutiveDetailsIssue);
    app.get('/flyingbyts/api/customer/getCustomerExecutiveDetailsIssue',auth, customer.getCustomerExecutiveDetailsIssue);
    app.post('/flyingbyts/api/customer/addCustomerNomineeDetailsChangeIssue', auth, customer.addCustomerNomineeDetailsChangeIssue);
    app.get('/flyingbyts/api/customer/getCustomerNomineeDetailsChangeIssue', auth,customer.getCustomerNomineeDetailsChangeIssue);
    app.post('/flyingbyts/api/customer/addCustomerCommunicationDetailsIssue', auth, customer.addCustomerCommunicationDetailsIssue);
    app.get('/flyingbyts/api/customer/getCustomerCommunicationDetailsIssue', auth,customer.getCustomerCommunicationDetailsIssue);

    app.post('/flyingbyts/api/customer/addCustomerBabyDetails',auth, customer.addCustomerBabyDetails);
    app.get('/flyingbyts/api/customer/getCustomerBabyDetails', auth,customer.getCustomerBabyDetails);
}

// present just we are saving data later we have do other portion of admin

