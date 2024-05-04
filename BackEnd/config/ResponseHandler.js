
module.exports.success = (req, res, msg, data) => {


    if (data) {

        res.json({
            status: 200,
            data: data,
            message: msg
        })
    } else {

        res.json({
            status: 200,
            message: msg
        })

    }

}


module.exports.error = (req, res, msg, err) => {

    res.json({
        status: 400,
        message: msg || err.message
    })

}

