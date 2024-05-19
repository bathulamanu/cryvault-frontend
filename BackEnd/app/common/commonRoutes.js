const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const singleUpload = upload.single('file');
var auth = require('../../utils/Auth').token;


var commonCtrl = require("./commonCtrl");
module.exports = (app) => {

    app.post('/flyingbyts/api/user/upload', auth, singleUpload, commonCtrl.upload);
    app.post('/flyingbyts/api/user/getFilesFromS3', auth, commonCtrl.getFilesFromS3);
    app.post('/flyingbyts/api/user/deleteFileFromS3', auth, commonCtrl.deleteFileFromS3);

    app.post('/flyingbyts/api/user/addsocialMediaIcon', auth, commonCtrl.addsocialMediaIcon);
    app.put('/flyingbyts/api/user/UpdatesocialMediaIcon/:iconID', auth, commonCtrl.UpdatesocialMediaIcon);
    app.get('/flyingbyts/api/user/getsocialMediaIcon',  commonCtrl.getsocialMediaIcon);

    app.post('/flyingbyts/api/user/addFooter', auth, commonCtrl.addFooter);
    app.put('/flyingbyts/api/user/UpdateFooter/:footerID', auth, commonCtrl.UpdateFooter);
    app.get('/flyingbyts/api/user/getFooter',  commonCtrl.getFooter);
    app.delete('/flyingbyts/api/user/deleteFooter/:footerID', auth, commonCtrl.deleteFooter);

    app.post('/flyingbyts/api/user/bookAppointment',  commonCtrl.bookAppointment);
    app.put('/flyingbyts/api/user/UpdateAppointment/:AppointmentID', auth, commonCtrl.UpdateAppointment);
    app.get('/flyingbyts/api/user/getAllAppointment', auth, commonCtrl.getAllAppointment);
    app.delete('/flyingbyts/api/user/deleteAppointment/:AppointmentID', auth, commonCtrl.deleteAppointment);


    app.post('/flyingbyts/api/user/addInformationKitRequest',  commonCtrl.addInformationKitRequest);
    app.put('/flyingbyts/api/user/UpdateInformationKitRequest/:informationKitRequestID', auth, commonCtrl.UpdateInformationKitRequest);
    app.get('/flyingbyts/api/user/getInformationKitRequest', auth, commonCtrl.getInformationKitRequest);
    app.delete('/flyingbyts/api/user/deleteInformationKitRequest/:informationKitRequestID', auth, commonCtrl.deleteInformationKitRequest);


    app.post('/flyingbyts/api/user/addCareerProfile',  commonCtrl.addCareerProfile);
    app.put('/flyingbyts/api/user/UpdateCareerProfile/:careerID', auth, commonCtrl.UpdateCareerProfile);
    app.get('/flyingbyts/api/user/getCareerProfile', auth, commonCtrl.getCareerProfile);
    app.delete('/flyingbyts/api/user/deleteCareerProfile/:careerID', auth, commonCtrl.deleteCareerProfile);


    app.post('/flyingbyts/api/user/addFranchiseRequest',  commonCtrl.addFranchiseRequest);
    app.put('/flyingbyts/api/user/UpdateFranchiseRequest/:franchiseID', auth, commonCtrl.UpdateFranchiseRequest);
    app.get('/flyingbyts/api/user/getFranchiseRequest', auth, commonCtrl.getFranchiseRequest);
    app.delete('/flyingbyts/api/user/deleteFranchiseRequest/:franchiseID', auth, commonCtrl.deleteFranchiseRequest);


    app.post('/flyingbyts/api/user/addCustomerCount', auth, commonCtrl.addCustomerCount);
    app.put('/flyingbyts/api/user/UpdateCustomerCount/:counterID', auth, commonCtrl.UpdateCustomerCount);
    app.get('/flyingbyts/api/user/getCustomerCount', auth, commonCtrl.getCustomerCount);
    app.delete('/flyingbyts/api/user/deleteCustomerCount/:counterID', auth, commonCtrl.deleteCustomerCount);


    app.post('/flyingbyts/api/user/addGalleryImages', auth, commonCtrl.addGalleryImages);
    app.put('/flyingbyts/api/user/UpdateGalleryImages/:imageID', auth, commonCtrl.UpdateGalleryImages);
    app.get('/flyingbyts/api/user/getGalleryImages', auth, commonCtrl.getGalleryImages);
    app.delete('/flyingbyts/api/user/deleteGalleryImages/:imageID', auth, commonCtrl.deleteGalleryImages);


    app.post('/flyingbyts/api/user/addGalleryVideo', auth, commonCtrl.addGalleryVideo);
    app.put('/flyingbyts/api/user/UpdateGalleryVideo/:videoID', auth, commonCtrl.UpdateGalleryVideo);
    app.get('/flyingbyts/api/user/getGalleryVideo', auth, commonCtrl.getGalleryVideo);
    app.delete('/flyingbyts/api/user/deleteGalleryVideo/:videoID', auth, commonCtrl.deleteGalleryVideo);


    app.post('/flyingbyts/api/user/addGalleryVideoType', auth, commonCtrl.addGalleryVideoType);
    app.put('/flyingbyts/api/user/UpdateGalleryVideoType/:videoTypeID', auth, commonCtrl.UpdateGalleryVideoType);
    app.get('/flyingbyts/api/user/getGalleryVideoType', auth, commonCtrl.getGalleryVideoType);
    app.delete('/flyingbyts/api/user/deleteGalleryVideoType/:videoTypeID', auth, commonCtrl.deleteGalleryVideoType);

    app.post('/flyingbyts/api/user/addBranchContact', auth, commonCtrl.addBranchContact);
    app.put('/flyingbyts/api/user/UpdateBranchContact/:BranchContactID', auth, commonCtrl.UpdateBranchContact);
    app.get('/flyingbyts/api/user/getBranchContact', auth, commonCtrl.getBranchContact);
    app.delete('/flyingbyts/api/user/deleteBranchContact/:BranchContactID', auth, commonCtrl.deleteBranchContact);

    app.post('/flyingbyts/api/user/addReview', auth, commonCtrl.addReview);
    app.put('/flyingbyts/api/user/UpdateReview/:reviewID', auth, commonCtrl.UpdateReview);
    app.get('/flyingbyts/api/user/getReview', auth, commonCtrl.getReview);
    app.delete('/flyingbyts/api/user/deleteReview/:reviewID', auth, commonCtrl.deleteReview);

    app.post('/flyingbyts/api/user/addEmergencyAppointment',  commonCtrl.addEmergencyAppointment);
    app.put('/flyingbyts/api/user/UpdateEmergencyAppointment/:emergencyAppointmentID', auth, commonCtrl.UpdateEmergencyAppointment);
    app.get('/flyingbyts/api/user/getEmergencyAppointment', auth, commonCtrl.getEmergencyAppointment);
    app.delete('/flyingbyts/api/user/deleteEmergencyAppointment/:emergencyAppointmentID', auth, commonCtrl.deleteEmergencyAppointment);

    app.post('/flyingbyts/api/user/addTestimony', auth, commonCtrl.addTestimony);
    app.put('/flyingbyts/api/user/UpdateTestimony/:TestimonyID', auth, commonCtrl.UpdateTestimony);
    app.get('/flyingbyts/api/user/getTestimony', auth, commonCtrl.getTestimony);
    app.delete('/flyingbyts/api/user/deleteTestimony/:TestimonyID', auth, commonCtrl.deleteTestimony);

    app.post('/flyingbyts/api/user/addBlog', auth, commonCtrl.addBlog);
    app.put('/flyingbyts/api/user/UpdateBlog/:blogID', auth, commonCtrl.UpdateBlog);
    app.get('/flyingbyts/api/user/getBlog', auth, commonCtrl.getBlog);
    app.delete('/flyingbyts/api/user/deleteBlog/:blogID', auth, commonCtrl.deleteBlog);

    app.post('/flyingbyts/api/user/addPageMetaInfo', auth, commonCtrl.addPageMetaInfo);
    app.put('/flyingbyts/api/user/UpdatePageMetaInfo/:pageMetaInfoID', auth, commonCtrl.UpdatePageMetaInfo);
    app.get('/flyingbyts/api/user/getPageMetaInfo', auth, commonCtrl.getPageMetaInfo);
    app.delete('/flyingbyts/api/user/deletePageMetaInfo/:pageMetaInfoID', auth, commonCtrl.deletePageMetaInfo);

    app.post('/flyingbyts/api/user/addReachUS',  commonCtrl.addReachUS);
    app.put('/flyingbyts/api/user/UpdateReachUS/:ReachUSID', auth, commonCtrl.UpdateReachUS);
    app.get('/flyingbyts/api/user/getReachUS', auth, commonCtrl.getReachUS);
    app.delete('/flyingbyts/api/user/deleteReachUS/:ReachUSID', auth, commonCtrl.deleteReachUS);

    app.post('/flyingbyts/api/user/addEmailContent', auth, commonCtrl.addEmailContent);
    app.put('/flyingbyts/api/user/UpdateEmailContent/:emailContentID', auth, commonCtrl.UpdateEmailContent);
    app.get('/flyingbyts/api/user/getEmailContent', auth, commonCtrl.getEmailContent);
    app.delete('/flyingbyts/api/user/deleteEmailContent/:emailContentID', auth, commonCtrl.deleteEmailContent);

    app.post('/flyingbyts/api/user/addMasterConfiguration', auth, commonCtrl.addMasterConfiguration);
    app.put('/flyingbyts/api/user/UpdateMasterConfiguration/:masterConfigurationID', auth, commonCtrl.UpdateMasterConfiguration);
    app.get('/flyingbyts/api/user/getMasterConfiguration/:title', auth, commonCtrl.getMasterConfiguration);
    app.delete('/flyingbyts/api/user/deleteMasterConfiguration/:masterConfigurationID', auth, commonCtrl.deleteMasterConfiguration);
  
}

