var asyncLoop = require('node-async-loop');
const key = require("../../config/env/development");
var ResponseHandler = require("../../config/ResponseHandler");
var DisplayMessages = require("../../utils/messages");
// const shortid = require('shortid');
common = {}
const AWS = require('aws-sdk');
const fs = require('fs');
const ShortUniqueId = require('short-unique-id');
const multer = require('multer');


var socialMediaIconModel = require('./model/socialMediaIconModel');
var footerModel = require('./model/footerModel');
var appointmentModel = require('./model/AppointmentModel');
var customerSignupOrLoginModel = require('../user/model/customerSignUPModel');
var InformationKitRequestModel = require('./model/InformationKitRequestModel');
var CareersModel = require('./model/CareersModel');
var FranchiseModel = require('./model/FranchiseModel');
var counterModel = require('./model/counterModel');
var ImagesModel = require('./model/imagesModel');
var VideoModel = require('./model/videoModel');
var VideoModelType = require('./model/videoTypeModel');
var ContactBranchModel = require('./model/ContactBranchModel');
var reviewCustomerModel = require('./model/reviewCustomerModel');
var EmergencyAppointment = require('./model/emergencyAppointmentModel');
var testimonyModel = require('./model/testimonyModel');
var blogModel = require('./model/blogModel');
var pageMetaInfoModel = require('./model/pageInfoModel');
var ReachUSModel = require('./model/ReachUsModel');
var emailContentModel = require('./model/emailContentModel');
var masterConfigurationModel = require('./model/masterConfigurationModel')

const zlib = require('zlib');
const stream = require('stream');

var sendEmail = require('../../mail/mailContent');

AWS.config.update({
    accessKeyId: key.s3.AccessKeyId,
    secretAccessKey: key.s3.SecretAccessKey,
    region: key.s3.region,
});

const s3 = new AWS.S3();

common.upload = async (req, res) => {
    try {
        const { randomUUID } = new ShortUniqueId({ length: 10 });
        const file = req.file;
        const keyValue = req.body.folder + '/' + `${randomUUID()}-${file.originalname}`;

        // Read the file from the local system
        const fileStream = fs.createReadStream(file.path);

        // Compress the file using gzip
        const gzipStream = zlib.createGzip();
        const compressedFile = fileStream.pipe(gzipStream);

        // Body: fs.createReadStream(file.path),

        const params = {
            Bucket: key.s3.Bucket,
            Key: keyValue,
            Body: compressedFile,
            ACL: 'public-read'
        };

        s3.upload(params, async (err, data) => {

            if (err) {
                return ResponseHandler.error(req, res, DisplayMessages.ErrorWhileUpload, err)
            }
            ResponseHandler.success(req, res, DisplayMessages.FileUpload, data)
            fs.unlinkSync(file.path);
            return
        });
    }
    catch (err) {
        ResponseHandler.error(req, res, DisplayMessages.ErrorWhileUpload, "")
    }

};

async function getAllEmailContent(filterParam) {
    return new Promise(async (resolve, reject) => {
        // appointment
        emailContentModel.find({ status: true, name: filterParam }).then((response) => {

            return resolve(response)
        })
            .catch((err) => {
                return reject(err)
            })
    })
}


common.addsocialMediaIcon = async (req, res) => {
    try {
        socialMediaIconModel.create(req.body).then((so) => {
            ResponseHandler.success(req, res, DisplayMessages.IconAdded, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdatesocialMediaIcon = async (req, res) => {
    try {

        if (!req.params.iconID) {
            ResponseHandler.error(req, res, DisplayMessages.iconIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;

        socialMediaIconModel.updateOne({ iconID: req.params.iconID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.IconUpdated, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


common.getsocialMediaIcon = async (req, res) => {
    try {
        socialMediaIconModel.find({}).then((resp) => {
            ResponseHandler.success(req, res, DisplayMessages.getSocialMediaIcon, resp)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.addFooter = async (req, res) => {
    try {

        footerModel.create(req.body).then((foo) => {
            ResponseHandler.success(req, res, DisplayMessages.AddFooter, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdateFooter = async (req, res) => {
    try {

        if (!req.params.footerID) {
            ResponseHandler.error(req, res, DisplayMessages.footerIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;

        footerModel.updateOne({ footerID: req.params.footerID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.UpdatedFooter, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })


    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getFooter = async (req, res) => {
    try {
        footerModel.find({ status: true }, {
            "status": 0,
            "createdTime": 0,
            "__v": 0,
            "updatedBy": 0,
            "updatedTime": 0
        }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.GetFooter, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteFooter = async (req, res) => {
    try {

        if (!req.params.footerID) {
            ResponseHandler.error(req, res, DisplayMessages.footerIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        footerModel.updateOne({ footerID: req.params.footerID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.UpdatedFooter, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })


    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.bookAppointment = async (req, res) => {
    try {
        var app = {}
        customerSignupOrLoginModel.find({ phoneNumber: req.body.phoneNumber }).then((dd) => {
            req.body['customerID'] = null
            if (dd && dd.length != 0) {
                req.body['customerID'] = dd[0].customerID
            }
            appointmentModel.create(req.body).then(async (icon) => {
                if (icon.email) {
                    const emailContent = await getAllEmailContent('appointment');
                    app['Content'] = "";
                    if (emailContent && emailContent.length != 0) {
                        app['Content'] = emailContent[0].emailDescription;
                    }
                    app['Subject'] = 'Cryovault Appointment Acknowledgement';
                    app['Email'] = icon.email;
                    app['Name'] = icon.firstName || "";
                    await sendEmail.EmailWithoutAttachment(app)
                }
                ResponseHandler.success(req, res, DisplayMessages.AddedAppointment, "")
            })
                .catch((err) => {
                    ResponseHandler.error(req, res, "", err);
                })
        })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }

}

common.UpdateAppointment = async (req, res) => {
    try {
        if (!req.params.AppointmentID) {
            ResponseHandler.error(req, res, DisplayMessages.AppointmentIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        appointmentModel.updateOne({ AppointmentID: req.params.AppointmentID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.UpdateAppointment, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }

}

common.getAllAppointment = async (req, res) => {
    try {
        appointmentModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.GetAppointment, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


common.deleteAppointment = async (req, res) => {
    try {

        if (!req.params.AppointmentID) {
            ResponseHandler.error(req, res, DisplayMessages.AppointmentIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        appointmentModel.updateOne({ AppointmentID: req.params.AppointmentID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.DeleteAppointment, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


common.addInformationKitRequest = async (req, res) => {
    try {
        var kit = {}
        customerSignupOrLoginModel.find({ phoneNumber: req.body.phoneNumber }).then((dd) => {
            req.body['customerID'] = null
            if (dd && dd.length != 0) {
                req.body['customerID'] = dd[0].customerID
            }
            InformationKitRequestModel.create(req.body).then(async (kitres) => {
                if (kitres.email) {
                    const emailContent = await getAllEmailContent('InformationKit');
                    kit['Content'] = "";
                    if (emailContent && emailContent.length != 0) {
                        kit['Content'] = emailContent[0].emailDescription;
                    }
                    kit['Subject'] = 'Cryovault InformationKit Request';
                    kit['Email'] = kitres.email;
                    kit['Name'] = kitres.firstName || "";
                    await sendEmail.EmailWithoutAttachment(kit)
                }
                ResponseHandler.success(req, res, DisplayMessages.AddInformationKitRequest, "")
            })
                .catch((err) => {
                    ResponseHandler.error(req, res, "", err);
                })
        })


    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }

}

common.UpdateInformationKitRequest = async (req, res) => {
    try {

        if (!req.params.informationKitRequestID) {
            ResponseHandler.error(req, res, DisplayMessages.informationKitRequestIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        InformationKitRequestModel.updateOne({ informationKitRequestID: req.params.informationKitRequestID },
            { $set: req.body })
            .then((icon) => {
                ResponseHandler.success(req, res, DisplayMessages.UpdateInformationKitRequest, icon)
            })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })



    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }

}

common.getInformationKitRequest = async (req, res) => {
    try {
        InformationKitRequestModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.GetInformationKitRequest, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


common.deleteInformationKitRequest = async (req, res) => {
    try {

        if (!req.params.informationKitRequestID) {
            ResponseHandler.error(req, res, DisplayMessages.informationKitRequestIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        InformationKitRequestModel.updateOne({ informationKitRequestID: req.params.informationKitRequestID },
            { $set: req.body }).then((response) => {
                ResponseHandler.success(req, res, DisplayMessages.DeleteInformationKitRequest, response)
            })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getFilesFromS3 = async (req, res) => {
    try {
        const params = {
            Bucket: key.s3.Bucket,
            Prefix: req.body.folderName
        };

        s3.listObjectsV2(params, (err, data) => {
            if (err) {
                ResponseHandler.error(req, res, DisplayMessages.ErrorFromS3, err);
            } else {
                ResponseHandler.success(req, res, DisplayMessages.GetFiles, data)
            }
        });
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteFileFromS3 = async (req, res) => {
    try {
        const params = {
            Bucket: key.s3.Bucket,
            Key: req.body.fileName
        };

        s3.deleteObject(params, (err, data) => {
            if (err) {
                ResponseHandler.error(req, res, DisplayMessages.ErrorFromS3, err);
            } else {
                ResponseHandler.success(req, res, DisplayMessages.DeleteFile, req.body.fileName)
            }
        });
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }

}


common.addCareerProfile = async (req, res) => {
    try {
        var career = {}
        CareersModel.create(req.body).then(async (car) => {
            if (car.email) {
                const emailContent = await getAllEmailContent('career');
                career['Content'] = "";
                if (emailContent && emailContent.length != 0) {
                    career['Content'] = emailContent[0].emailDescription;
                }
                career['Subject'] = 'Cryovault Carrer Acknowledgement';
                career['Email'] = car.email;
                career['Name'] = car.firstName || "";
                await sendEmail.EmailWithoutAttachment(career)
            }
            ResponseHandler.success(req, res, DisplayMessages.CareerAdd, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }

}

common.UpdateCareerProfile = async (req, res) => {
    try {

        if (!req.params.careerID) {
            ResponseHandler.error(req, res, DisplayMessages.careerIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;

        CareersModel.updateOne({ careerID: req.params.careerID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.CareerUpdate, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }

}
common.getCareerProfile = async (req, res) => {
    try {
        CareersModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.CareerGet, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


common.deleteCareerProfile = async (req, res) => {
    try {

        if (!req.params.careerID) {
            ResponseHandler.error(req, res, DisplayMessages.careerIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        CareersModel.updateOne({ careerID: req.params.careerID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.CarrerDelete, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


common.addFranchiseRequest = async (req, res) => {
    try {
        var franchise = {}
        FranchiseModel.create(req.body).then(async (fran) => {
            if (fran.email) {
                const emailContent = await getAllEmailContent('franchise');
                franchise['Content'] = "";
                if (emailContent && emailContent.length != 0) {
                    franchise['Content'] = emailContent[0].emailDescription;
                }
                franchise['Subject'] = 'Cryovault Franchise Request Acknowledgement';
                franchise['Email'] = fran.email;
                franchise['Name'] = fran.firstName || "";
                await sendEmail.EmailWithoutAttachment(franchise)
            }
            ResponseHandler.success(req, res, DisplayMessages.FranchiseAdded, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })


    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdateFranchiseRequest = async (req, res) => {
    try {


        if (!req.params.franchiseID) {
            ResponseHandler.error(req, res, DisplayMessages.franchiseIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        FranchiseModel.updateOne({ franchiseID: req.params.franchiseID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.FranchiseUpdate, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })


    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getFranchiseRequest = async (req, res) => {
    try {
        FranchiseModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.FranchiseGet, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteFranchiseRequest = async (req, res) => {
    try {
        if (!req.params.franchiseID) {
            ResponseHandler.error(req, res, DisplayMessages.franchiseIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        FranchiseModel.updateOne({ franchiseID: req.params.franchiseID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.FranchiseDelete, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.addCustomerCount = async (req, res) => {

    try {

        counterModel.create(req.body).then((count) => {
            ResponseHandler.success(req, res, DisplayMessages.counterAdd, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })


    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }

}


common.UpdateCustomerCount = async (req, res) => {

    try {
        if (!req.params.counterID) {
            ResponseHandler.error(req, res, DisplayMessages.counterIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        counterModel.updateOne({ counterID: req.params.counterID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.counterUpdate, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })


    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }

}
common.getCustomerCount = async (req, res) => {
    try {
        counterModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.CounterGet, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteCustomerCount = async (req, res) => {
    try {

        if (!req.params.counterID) {
            ResponseHandler.error(req, res, DisplayMessages.counterIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        counterModel.updateOne({ counterID: req.params.counterID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.CounterDelete, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}



common.addGalleryImages = async (req, res) => {
    try {

        ImagesModel.create(req.body).then((img) => {
            ResponseHandler.success(req, res, DisplayMessages.GallaryImageAdd, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })


    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdateGalleryImages = async (req, res) => {
    try {

        if (!req.params.imageID) {
            ResponseHandler.error(req, res, DisplayMessages.imageIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        ImagesModel.updateOne({ imageID: req.params.imageID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.GallaryImageUpdate, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })


    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getGalleryImages = async (req, res) => {
    try {
        ImagesModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.GallaryImageGet, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteGalleryImages = async (req, res) => {
    try {

        if (!req.params.imageID) {
            ResponseHandler.error(req, res, DisplayMessages.imageIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        ImagesModel.updateOne({ imageID: req.params.imageID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.GallaryImageDelete, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


// ---------------------


common.addGalleryVideo = async (req, res) => {
    try {

        VideoModel.create(req.body).then((vid) => {
            ResponseHandler.success(req, res, DisplayMessages.GallaryVideoAdd, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdateGalleryVideo = async (req, res) => {
    try {
        if (!req.params.videoID) {
            ResponseHandler.error(req, res, DisplayMessages.VideoIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        VideoModel.updateOne({ videoID: req.params.videoID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.GallaryVideoUpdate, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getGalleryVideo = async (req, res) => {
    try {
        VideoModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.GallaryVideoGet, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteGalleryVideo = async (req, res) => {
    try {

        if (!req.params.videoID) {
            ResponseHandler.error(req, res, DisplayMessages.VideoIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        VideoModel.updateOne({ videoID: req.params.videoID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.GallaryVideodelete, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}




// --------------------------

common.addGalleryVideoType = async (req, res) => {
    try {

        VideoModelType.create(req.body).then((type) => {
            ResponseHandler.success(req, res, DisplayMessages.GallaryVideoTypeAdd, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })


    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


common.UpdateGalleryVideoType = async (req, res) => {

    try {
        if (!req.params.videoTypeID) {
            ResponseHandler.error(req, res, DisplayMessages.VideoTypeIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        VideoModelType.updateOne({ videoTypeID: req.params.videoTypeID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.GallaryVideoTypeUpdate, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getGalleryVideoType = async (req, res) => {
    try {
        VideoModelType.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.GallaryVideoTypeGet, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteGalleryVideoType = async (req, res) => {
    try {

        if (!req.params.videoTypeID) {
            ResponseHandler.error(req, res, DisplayMessages.VideoTypeIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        VideoModelType.updateOne({ videoTypeID: req.params.videoTypeID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.GallaryVideoTypedelete, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


common.addBranchContact = async (req, res) => {
    try {
        ContactBranchModel.create(req.body).then((branch) => {
            ResponseHandler.success(req, res, DisplayMessages.addingBranchContact, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdateBranchContact = async (req, res) => {
    try {

        if (!req.params.BranchContactID) {
            ResponseHandler.error(req, res, DisplayMessages.BranchContactIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        ContactBranchModel.updateOne({ BranchContactID: req.params.BranchContactID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingBranchContact, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getBranchContact = async (req, res) => {
    try {
        ContactBranchModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getBranchContact, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteBranchContact = async (req, res) => {
    try {

        if (!req.params.BranchContactID) {
            ResponseHandler.error(req, res, DisplayMessages.BranchContactIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        ContactBranchModel.updateOne({ BranchContactID: req.params.BranchContactID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteBranchContact, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}



common.addReview = async (req, res) => {
    try {
        reviewCustomerModel.create(req.body).then((re) => {
            ResponseHandler.success(req, res, DisplayMessages.addingReview, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdateReview = async (req, res) => {
    try {

        if (!req.params.reviewID) {
            ResponseHandler.error(req, res, DisplayMessages.reviewIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        reviewCustomerModel.updateOne({ reviewID: req.params.reviewID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingReview, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getReview = async (req, res) => {
    try {
        reviewCustomerModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getReview, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteReview = async (req, res) => {
    try {

        if (!req.params.reviewID) {
            ResponseHandler.error(req, res, DisplayMessages.reviewIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        reviewCustomerModel.updateOne({ reviewID: req.params.reviewID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteReview, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

// ---------------------------emergency review----------------------

common.addEmergencyAppointment = async (req, res) => {
    try {
        var emer = {}
        EmergencyAppointment.create(req.body).then(async (emergnecy) => {
            if (emergnecy.email) {
                const emailContent = await getAllEmailContent('emergency');
                emer['Content'] = "";
                if (emailContent && emailContent.length != 0) {
                    emer['Content'] = emailContent[0].emailDescription;
                }
                emer['Subject'] = 'Cryovault Emergency Appointment Acknowledgement';
                emer['Email'] = emergnecy.email;
                emer['Name'] = emergnecy.firstName || '';
                await sendEmail.EmailWithoutAttachment(emer)
            }

            ResponseHandler.success(req, res, DisplayMessages.addingEmergencyAppointment, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdateEmergencyAppointment = async (req, res) => {
    try {
        if (!req.params.emergencyAppointmentID) {
            ResponseHandler.error(req, res, DisplayMessages.EmergencyAppointmentRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        EmergencyAppointment.updateOne({ emergencyAppointmentID: req.params.emergencyAppointmentID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingEmergencyAppointment, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getEmergencyAppointment = async (req, res) => {
    try {
        EmergencyAppointment.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getEmergencyAppointment, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteEmergencyAppointment = async (req, res) => {
    try {

        if (!req.params.emergencyAppointmentID) {
            ResponseHandler.error(req, res, DisplayMessages.EmergencyAppointmentRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        EmergencyAppointment.updateOne({ emergencyAppointmentID: req.params.emergencyAppointmentID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteEmergencyAppointment, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.addTestimony = async (req, res) => {
    try {
        testimonyModel.create(req.body).then((tes) => {
            ResponseHandler.success(req, res, DisplayMessages.addingTestimony, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdateTestimony = async (req, res) => {
    try {
        if (!req.params.TestimonyID) {
            ResponseHandler.error(req, res, DisplayMessages.TestimonyRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        testimonyModel.updateOne({ TestimonyID: req.params.TestimonyID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingTestimony, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getTestimony = async (req, res) => {
    try {
        testimonyModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getTestimony, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteTestimony = async (req, res) => {
    try {

        if (!req.params.TestimonyID) {
            ResponseHandler.error(req, res, DisplayMessages.TestimonyRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        testimonyModel.updateOne({ TestimonyID: req.params.TestimonyID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteTestimony, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

// -------------------------------

common.addBlog = async (req, res) => {
    try {
        blogModel.create(req.body).then((bl) => {
            ResponseHandler.success(req, res, DisplayMessages.addingBlog, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdateBlog = async (req, res) => {
    try {
        if (!req.params.blogID) {
            ResponseHandler.error(req, res, DisplayMessages.BlogRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        blogModel.updateOne({ blogID: req.params.blogID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingBlog, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getBlog = async (req, res) => {
    try {
        blogModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getBlog, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteBlog = async (req, res) => {
    try {

        if (!req.params.blogID) {
            ResponseHandler.error(req, res, DisplayMessages.BlogRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        blogModel.updateOne({ blogID: req.params.blogID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteBlog, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

// -------------------------------------------------------

common.addPageMetaInfo = async (req, res) => {
    try {
        pageMetaInfoModel.create(req.body).then((meta) => {
            ResponseHandler.success(req, res, DisplayMessages.addingPageMetaInfo, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdatePageMetaInfo = async (req, res) => {
    try {
        if (!req.params.pageMetaInfoID) {
            ResponseHandler.error(req, res, DisplayMessages.PageMetaInfoRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        pageMetaInfoModel.updateOne({ pageMetaInfoID: req.params.pageMetaInfoID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingPageMetaInfo, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getPageMetaInfo = async (req, res) => {
    try {
        pageMetaInfoModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getPageMetaInfo, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deletePageMetaInfo = async (req, res) => {
    try {

        if (!req.params.pageMetaInfoID) {
            ResponseHandler.error(req, res, DisplayMessages.PageMetaInfoRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        pageMetaInfoModel.updateOne({ pageMetaInfoID: req.params.pageMetaInfoID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deletePageMetaInfo, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

// ------------------------------------------

common.addReachUS = async (req, res) => {
    try {
        ReachUSModel.create(req.body).then((reach) => {
            ResponseHandler.success(req, res, DisplayMessages.addingReachUS, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdateReachUS = async (req, res) => {
    try {
        if (!req.params.ReachUSID) {
            ResponseHandler.error(req, res, DisplayMessages.ReachUSRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        ReachUSModel.updateOne({ ReachUSID: req.params.ReachUSID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingReachUS, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getReachUS = async (req, res) => {
    try {
        ReachUSModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getReachUS, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteReachUS = async (req, res) => {
    try {

        if (!req.params.ReachUSID) {
            ResponseHandler.error(req, res, DisplayMessages.ReachUSRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        ReachUSModel.updateOne({ ReachUSID: req.params.ReachUSID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteReachUS, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


//////////////////////////////////////////////////////////////////

common.addEmailContent = async (req, res) => {
    try {
        req.body['createdby'] = req.user.employeeAutoGeneratedID
        emailContentModel.create(req.body).then((con) => {
            ResponseHandler.success(req, res, DisplayMessages.addingEmailContent, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdateEmailContent = async (req, res) => {
    try {
        if (!req.params.emailContentID) {
            ResponseHandler.error(req, res, DisplayMessages.EmailContentIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        emailContentModel.updateOne({ emailContentID: req.params.emailContentID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingEmailContent, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getEmailContent = async (req, res) => {
    try {
        emailContentModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getEmailContent, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteEmailContent = async (req, res) => {
    try {

        if (!req.params.emailContentID) {
            ResponseHandler.error(req, res, DisplayMessages.EmailContentIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        emailContentModel.updateOne({ emailContentID: req.params.emailContentID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteEmailContent, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

///////////////////////////////////////////////////////////////////////////


common.addMasterConfiguration = async (req, res) => {
    try {
        masterConfigurationModel.create(req.body).then((con) => {
            ResponseHandler.success(req, res, DisplayMessages.addingMasterConfiguration, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.UpdateMasterConfiguration = async (req, res) => {
    try {
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        masterConfigurationModel.updateOne({ masterConfigurationID: req.params.masterConfigurationID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingMasterConfiguration, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.getMasterConfiguration = async (req, res) => {
    try {
        masterConfigurationModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getMasterConfiguration, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

common.deleteMasterConfiguration = async (req, res) => {
    try {
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false
        masterConfigurationModel.updateOne({ masterConfigurationID: req.params.masterConfigurationID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteMasterConfiguration, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


module.exports = common;