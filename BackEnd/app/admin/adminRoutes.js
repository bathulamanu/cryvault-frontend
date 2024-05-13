var adminCtrl = require('./adminCtrl');
var auth = require('../../utils/Auth').token;


module.exports = (app) => {

    app.post('/flyingbyts/api/user/getadmindetails', auth, adminCtrl.getAdminDetails);
    app.get('/flyingbyts/api/admin/getcustomerlist', auth, adminCtrl.getCustomerList);


    app.post('/flyingbyts/api/admin/addBabyDetails', auth, adminCtrl.addBabyDetails);
    app.get('/flyingbyts/api/admin/getBabyDetails/:customerID', auth, adminCtrl.getBabyDetails);
    app.get('/flyingbyts/api/admin/getAllBabyDetails', auth, adminCtrl.getAllBabyDetails);
    app.put('/flyingbyts/api/admin/updateBabyDetails/:babyID', auth, adminCtrl.updateBabyDetails);
    app.delete('/flyingbyts/api/admin/deleteBabyDetails/:babyID', auth, adminCtrl.deleteBabyDetails);

    app.get('/flyingbyts/api/admin/getCustomerPaymentDetails', auth, adminCtrl.getCustomerPaymentDetails);
}