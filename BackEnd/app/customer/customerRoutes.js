var customer = require('./customerCtrl');
var auth = require('../../utils/Auth').token;


module.exports = (app) => {
    app.post('/cryovault/api/customer/updateCustomerInfo', auth, customer.updateCustomerInfo);
    app.post('/cryovault/api/customer/createOrUpdateSubscriptionPlan', auth, customer.createOrUpdateSubscriptionPlan);
    app.get('/cryovault/api/customer/getSubscriptionPlan', customer.getSubscriptionPlan);
    app.post('/cryovault/api/customer/addOrupdateAnnexureInfo', auth, customer.addOrupdateAnnexureInfo);
    app.get('/cryovault/api/customer/getAnnexureInfo', auth, customer.getAnnexureInfo);
    app.post('/cryovault/api/customer/addOrUpdateGender', auth,customer.addOrUpdateGender);
    app.get('/cryovault/api/customer/getGender',auth, customer.getGender);
    app.post('/cryovault/api/customer/addOrUpdateHelp',auth, customer.addOrUpdateHelp);
    app.get('/cryovault/api/customer/getHelpDetails', auth,customer.getHelpDetails);
    app.post('/cryovault/api/customer/addCustomerAnyDetailsIssue', auth, customer.addCustomerAnyDetailsIssue);
    app.get('/cryovault/api/customer/getCustomerAnyDetailsIssue', auth,customer.getCustomerAnyDetailsIssue);
    app.post('/cryovault/api/customer/addCustomerMobileNumberChangeIssue', auth, customer.addCustomerMobileNumberChangeIssue);
    app.get('/cryovault/api/customer/getCustomerMobileNumberChangeIssue',auth, customer.getCustomerMobileNumberChangeIssue);
    app.post('/cryovault/api/customer/addCustomerHospitalDetailsChangeIssue', auth, customer.addCustomerHospitalDetailsChangeIssue);
    app.get('/cryovault/api/customer/getCustomerHospitalDetailsChangeIssue', auth,customer.getCustomerHospitalDetailsChangeIssue);
    app.post('/cryovault/api/customer/addCustomerExecutiveDetailsIssue', auth, customer.addCustomerExecutiveDetailsIssue);
    app.get('/cryovault/api/customer/getCustomerExecutiveDetailsIssue',auth, customer.getCustomerExecutiveDetailsIssue);
    app.post('/cryovault/api/customer/addCustomerNomineeDetailsChangeIssue', auth, customer.addCustomerNomineeDetailsChangeIssue);
    app.get('/cryovault/api/customer/getCustomerNomineeDetailsChangeIssue', auth,customer.getCustomerNomineeDetailsChangeIssue);
    app.post('/cryovault/api/customer/addCustomerCommunicationDetailsIssue', auth, customer.addCustomerCommunicationDetailsIssue);
    app.get('/cryovault/api/customer/getCustomerCommunicationDetailsIssue', auth,customer.getCustomerCommunicationDetailsIssue);

    app.post('/cryovault/api/customer/addCustomerBabyDetails',auth, customer.addCustomerBabyDetails);
    app.get('/cryovault/api/customer/getCustomerBabyDetails', auth,customer.getCustomerBabyDetails);
}

// present just we are saving data later we have do other portion of admin

