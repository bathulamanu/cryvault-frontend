var ip = require('ip');
module.exports = {
    port: 4000,
    database: 'cryovault',
    MobileOTP: {
        username: 'CRYOVAULT',
        message: 'Your+OTP+is+%7B%23var%23%7D+to+Verify+in+Cryovault+Account.+Please+do+not+Share+with+anyone.+-+Cryovault+Biotech+India+PVT.+LTD.',
        apikey: 'e57c29862e5305705772',
        senderId: 'CROVLT',
        template: 'cryovault-1007171255570714661'
    },
    SecretKey: `cryo`,
    // dbConnection: 'mongodb+srv://admin:admin%40123@cluster0.r5inff3.mongodb.net/cryovault-dev?retryWrites=true&w=majority&appName=Cluster0',
    dbConnection: `mongodb://localhost:27017/cryovault-dev`,
    razorpay: {
        Key_Id: 'rzp_test_93iVfb7AY6AgpL',//'rzp_test_WEIxQkJ74d9Rnb',
        Key_Secret: 'zEBc1QkY4TDbiXeXs6ZTKJH4'// 'cMxWHPbQfAe2foZcns87rTXd'
    },
    s3: {
        AccessKeyId: "AKIAYS2NUR7Y6ZVWZJW6",
        SecretAccessKey: "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",
        Bucket: 's3-cryovault1',
        region: 'ap-southeast-1'
    },
    mailAuthInfo: {
        user: 'krishnakumaricryo@gmail.com',
        pass: 'qyms gzye jixv peiy'
    }
}


