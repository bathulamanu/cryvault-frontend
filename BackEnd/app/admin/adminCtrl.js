var ResponseHandler = require("../../config/ResponseHandler");
var DisplayMessages = require("../../utils/messages");
var moment = require('moment');

let adminCtrl = {};

adminCtrl.getAdminDetails = async (req, res) => {
    try {
        console.log("admin detals ");
        // const pool = await poolPromise
        // const result = await pool.request()
        //     .execute(`USP_Get_Candidate_Dropdown`)
        // console.log(result.recordsets);
        // const data = {
        //     country: result.recordsets[0],
        //     EmploymentType: result.recordsets[1],
        //     MinSalaryRangeId: result.recordsets[2],
        //     MaxSalaryRangeId: result.recordsets[3]
        // }
        // ResponseHandler.success(req, res, DisplayMessages.dropDownDataFetched, data);
    } catch (error) {
        console.log(error);
    }
}


module.exports = adminCtrl;