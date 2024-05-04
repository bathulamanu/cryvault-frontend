var admin = require('./adminCtrl');
module.exports = (app) => {

    app.post('/cryovault/api/user/getadmindetails', admin.getAdminDetails);

}