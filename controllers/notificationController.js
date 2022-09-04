const { sendSms } = require("../services/notifications")

const postSms = async (req, res, next) => {
    const { name, amount, debtName, minPayment, rate, phone } = req.body

    let message

    if (req.body.extraAmount) {
        const defaultMonth = amount / minPayment

        let totalSum = 0

        const Debt = (summ, month) => {
            if (summ < minPayment) {
                return { totalSum, month }
            }
            const percentAmount = (rate / 100) * summ / 12
            const monthPayment = minPayment - percentAmount

            totalSum += monthPayment

            return Debt(summ - monthPayment, month + 1)
        }
        const resultAmount = Debt(amount, 0)

        totalMonths = defaultMonth - resultAmount.month

        const countYears = () => {
            let month = 0
            let year = 0
            if (totalMonths > 12) {
                month = totalMonths % 12
                year = totalMonths / 12
            }
            return {year, month}
        }
        const resultTime = countYears()

        message = `Hey ${name}! Pay extra ${req.body.extraAmount}/month. And you'll save $${Math.floor(amount - resultAmount.totalSum)} and ${resultTime.year} y, ${resultTime.month} months}`
    } else {
        message = `Hey ${name}! You have an outstanding amount of ${amount} for ${debtName}. Please don't forget to pay your minimum monthly payment of ${minPayment}/month.`
    }

    sendSms(phone, message)
    console.log(message);
    res.status(200).json({
        contentType: "application/json",
        status: true,
        message: "Succes",
    });
}

module.exports = {
    postSms
}