const { sendSms } = require("../services/notifications")

const postSms = async (req, res, next) => {
    const { name, amount, debtName, minPayment, phone } = req.body

    let message

    if (req.body.extraAmount) {
        message = `Hey ${name}! Pay extra ${req.body.extraAmount}/month. And you'll save ${500} and ${2} y, ${5} months}`
    } else {
        message = `Hey ${name}! You have an outstanding amount of ${amount} for ${debtName}. Please don't forget to pay your minimum monthly payment of ${minPayment}/month.`
    }

    sendSms(phone, message)
    res.status(200).json({
        contentType: "application/json",
        status: true,
        message: "Succes",
    });
}

module.exports = {
    postSms
}