const nodemailer = require('nodemailer');
const fs = require('fs');
const dev = require('../config/env/development');


module.exports.SendEmail = (content, sub, to, invoice) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: dev.mailAuthInfo.user,
            pass: dev.mailAuthInfo.pass
        }
    });

    let mailOptions = {
        from: dev.mailAuthInfo.user,
        to: to,
        subject: sub,
        html: content,
        attachments: {
            filename: invoice.fileName,
            path: invoice.filePath
        }
    };

    transporter.sendMail(mailOptions, (error, info) => {
        fs.unlinkSync(mailOptions.attachments.path);
        
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

}

module.exports.SendEmailWithoutAttachment = (content, sub, to) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: dev.mailAuthInfo.user,
            pass: dev.mailAuthInfo.pass
        }
    });

    let mailOptions = {
        from: dev.mailAuthInfo.user,
        to: to,
        subject: sub,
        html: content
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

}



