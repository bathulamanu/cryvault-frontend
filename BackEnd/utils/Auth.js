const key = require("../config/env/development");
var jwt = require('jsonwebtoken');
var ResponseHandler = require("../config/ResponseHandler");
var DisplayMessages = require("../utils/messages");

module.exports.token = (req, res, next) => {

    if (req.headers.authorization) {
        var token = req.headers.authorization;
    
            jwt.verify(token, key.SecretKey, function (err, decoded) {
                if (err) {
                    ResponseHandler.error(req, res, "", err);
                }
                else {
                    req.user = decoded;
                    next();
                }
            });
     

    }
    else {
        ResponseHandler.error(req, res, DisplayMessages.ACCESS_DENIED, "");
    }

}
