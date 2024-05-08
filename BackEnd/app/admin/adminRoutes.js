var adminCtrl = require('./adminCtrl');
var auth = require('../../utils/Auth').token;


module.exports = (app) => {

    app.post('/cryovault/api/user/getadmindetails', auth, adminCtrl.getAdminDetails);
    app.get('/cryovault/api/admin/getcustomerlist', auth, adminCtrl.getCustomerList);


    app.post('/cryovault/api/admin/addBabyDetails', auth, adminCtrl.addBabyDetails);
    app.get('/cryovault/api/admin/getBabyDetails/:customerID', auth, adminCtrl.getBabyDetails);
    app.get('/cryovault/api/admin/getAllBabyDetails', auth, adminCtrl.getAllBabyDetails);
    app.put('/cryovault/api/admin/updateBabyDetails/:babyID', auth, adminCtrl.updateBabyDetails);
    app.delete('/cryovault/api/admin/deleteBabyDetails/:babyID', auth, adminCtrl.deleteBabyDetails);




}