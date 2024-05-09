const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const singleUpload = upload.single('file');
var auth = require('../../utils/Auth').token;


var commonCtrl = require("./commonCtrl");
module.exports = (app) => {

    app.post('/cryovault/api/user/upload', auth, singleUpload, commonCtrl.upload);
    app.post('/cryovault/api/user/getFilesFromS3', auth, commonCtrl.getFilesFromS3);
    app.post('/cryovault/api/user/deleteFileFromS3', auth, commonCtrl.deleteFileFromS3);

    app.post('/cryovault/api/user/addsocialMediaIcon', auth, commonCtrl.addsocialMediaIcon);
    app.put('/cryovault/api/user/UpdatesocialMediaIcon/:iconID', auth, commonCtrl.UpdatesocialMediaIcon);
    app.get('/cryovault/api/user/getsocialMediaIcon',  commonCtrl.getsocialMediaIcon);

    app.post('/cryovault/api/user/addFooter', auth, commonCtrl.addFooter);
    app.put('/cryovault/api/user/UpdateFooter/:footerID', auth, commonCtrl.UpdateFooter);
    app.get('/cryovault/api/user/getFooter',  commonCtrl.getFooter);
    app.delete('/cryovault/api/user/deleteFooter/:footerID', auth, commonCtrl.deleteFooter);

    app.post('/cryovault/api/user/bookAppointment', auth, commonCtrl.bookAppointment);
    app.put('/cryovault/api/user/UpdateAppointment/:AppointmentID', auth, commonCtrl.UpdateAppointment);
    app.get('/cryovault/api/user/getAllAppointment', auth, commonCtrl.getAllAppointment);
    app.delete('/cryovault/api/user/deleteAppointment/:AppointmentID', auth, commonCtrl.deleteAppointment);


    app.post('/cryovault/api/user/addInformationKitRequest', auth, commonCtrl.addInformationKitRequest);
    app.put('/cryovault/api/user/UpdateInformationKitRequest/:informationKitRequestID', auth, commonCtrl.UpdateInformationKitRequest);
    app.get('/cryovault/api/user/getInformationKitRequest', auth, commonCtrl.getInformationKitRequest);
    app.delete('/cryovault/api/user/deleteInformationKitRequest/:informationKitRequestID', auth, commonCtrl.deleteInformationKitRequest);


    app.post('/cryovault/api/user/addCareerProfile', auth, commonCtrl.addCareerProfile);
    app.put('/cryovault/api/user/UpdateCareerProfile/:careerID', auth, commonCtrl.UpdateCareerProfile);
    app.get('/cryovault/api/user/getCareerProfile', auth, commonCtrl.getCareerProfile);
    app.delete('/cryovault/api/user/deleteCareerProfile/:careerID', auth, commonCtrl.deleteCareerProfile);


    app.post('/cryovault/api/user/addFranchiseRequest', auth, commonCtrl.addFranchiseRequest);
    app.put('/cryovault/api/user/UpdateFranchiseRequest/:franchiseID', auth, commonCtrl.UpdateFranchiseRequest);
    app.get('/cryovault/api/user/getFranchiseRequest', auth, commonCtrl.getFranchiseRequest);
    app.delete('/cryovault/api/user/deleteFranchiseRequest/:franchiseID', auth, commonCtrl.deleteFranchiseRequest);


    app.post('/cryovault/api/user/addCustomerCount', auth, commonCtrl.addCustomerCount);
    app.put('/cryovault/api/user/UpdateCustomerCount/:counterID', auth, commonCtrl.UpdateCustomerCount);
    app.get('/cryovault/api/user/getCustomerCount', auth, commonCtrl.getCustomerCount);
    app.delete('/cryovault/api/user/deleteCustomerCount/:counterID', auth, commonCtrl.deleteCustomerCount);


    app.post('/cryovault/api/user/addGalleryImages', auth, commonCtrl.addGalleryImages);
    app.put('/cryovault/api/user/UpdateGalleryImages/:imageID', auth, commonCtrl.UpdateGalleryImages);
    app.get('/cryovault/api/user/getGalleryImages', auth, commonCtrl.getGalleryImages);
    app.delete('/cryovault/api/user/deleteGalleryImages/:imageID', auth, commonCtrl.deleteGalleryImages);


    app.post('/cryovault/api/user/addGalleryVideo', auth, commonCtrl.addGalleryVideo);
    app.put('/cryovault/api/user/UpdateGalleryVideo/:videoID', auth, commonCtrl.UpdateGalleryVideo);
    app.get('/cryovault/api/user/getGalleryVideo', auth, commonCtrl.getGalleryVideo);
    app.delete('/cryovault/api/user/deleteGalleryVideo/:videoID', auth, commonCtrl.deleteGalleryVideo);


    app.post('/cryovault/api/user/addGalleryVideoType', auth, commonCtrl.addGalleryVideoType);
    app.put('/cryovault/api/user/UpdateGalleryVideoType/:videoTypeID', auth, commonCtrl.UpdateGalleryVideoType);
    app.get('/cryovault/api/user/getGalleryVideoType', auth, commonCtrl.getGalleryVideoType);
    app.delete('/cryovault/api/user/deleteGalleryVideoType/:videoTypeID', auth, commonCtrl.deleteGalleryVideoType);

    app.post('/cryovault/api/user/addBranchContact', auth, commonCtrl.addBranchContact);
    app.put('/cryovault/api/user/UpdateBranchContact/:BranchContactID', auth, commonCtrl.UpdateBranchContact);
    app.get('/cryovault/api/user/getBranchContact', auth, commonCtrl.getBranchContact);
    app.delete('/cryovault/api/user/deleteBranchContact/:BranchContactID', auth, commonCtrl.deleteBranchContact);

    app.post('/cryovault/api/user/addReview', auth, commonCtrl.addReview);
    app.put('/cryovault/api/user/UpdateReview/:reviewID', auth, commonCtrl.UpdateReview);
    app.get('/cryovault/api/user/getReview', auth, commonCtrl.getReview);
    app.delete('/cryovault/api/user/deleteReview/:reviewID', auth, commonCtrl.deleteReview);

    app.post('/cryovault/api/user/addEmergencyAppointment', auth, commonCtrl.addEmergencyAppointment);
    app.put('/cryovault/api/user/UpdateEmergencyAppointment/:emergencyAppointmentID', auth, commonCtrl.UpdateEmergencyAppointment);
    app.get('/cryovault/api/user/getEmergencyAppointment', auth, commonCtrl.getEmergencyAppointment);
    app.delete('/cryovault/api/user/deleteEmergencyAppointment/:emergencyAppointmentID', auth, commonCtrl.deleteEmergencyAppointment);

    app.post('/cryovault/api/user/addTestimony', auth, commonCtrl.addTestimony);
    app.put('/cryovault/api/user/UpdateTestimony/:TestimonyID', auth, commonCtrl.UpdateTestimony);
    app.get('/cryovault/api/user/getTestimony', auth, commonCtrl.getTestimony);
    app.delete('/cryovault/api/user/deleteTestimony/:TestimonyID', auth, commonCtrl.deleteTestimony);

    app.post('/cryovault/api/user/addBlog', auth, commonCtrl.addBlog);
    app.put('/cryovault/api/user/UpdateBlog/:blogID', auth, commonCtrl.UpdateBlog);
    app.get('/cryovault/api/user/getBlog', auth, commonCtrl.getBlog);
    app.delete('/cryovault/api/user/deleteBlog/:blogID', auth, commonCtrl.deleteBlog);

    app.post('/cryovault/api/user/addPageMetaInfo', auth, commonCtrl.addPageMetaInfo);
    app.put('/cryovault/api/user/UpdatePageMetaInfo/:pageMetaInfoID', auth, commonCtrl.UpdatePageMetaInfo);
    app.get('/cryovault/api/user/getPageMetaInfo', auth, commonCtrl.getPageMetaInfo);
    app.delete('/cryovault/api/user/deletePageMetaInfo/:pageMetaInfoID', auth, commonCtrl.deletePageMetaInfo);

    app.post('/cryovault/api/user/addReachUS', auth, commonCtrl.addReachUS);
    app.put('/cryovault/api/user/UpdateReachUS/:ReachUSID', auth, commonCtrl.UpdateReachUS);
    app.get('/cryovault/api/user/getReachUS', auth, commonCtrl.getReachUS);
    app.delete('/cryovault/api/user/deleteReachUS/:ReachUSID', auth, commonCtrl.deleteReachUS);

    app.post('/cryovault/api/user/addEmailContent', auth, commonCtrl.addEmailContent);
    app.put('/cryovault/api/user/UpdateEmailContent/:emailContentID', auth, commonCtrl.UpdateEmailContent);
    app.get('/cryovault/api/user/getEmailContent', auth, commonCtrl.getEmailContent);
    app.delete('/cryovault/api/user/deleteEmailContent/:emailContentID', auth, commonCtrl.deleteEmailContent);

    app.post('/cryovault/api/user/addMasterConfiguration', auth, commonCtrl.addMasterConfiguration);
    app.put('/cryovault/api/user/UpdateMasterConfiguration/:masterConfigurationID', auth, commonCtrl.UpdateMasterConfiguration);
    app.get('/cryovault/api/user/getMasterConfiguration', auth, commonCtrl.getMasterConfiguration);
    app.delete('/cryovault/api/user/deleteMasterConfiguration/:masterConfigurationID', auth, commonCtrl.deleteMasterConfiguration);
  
}

