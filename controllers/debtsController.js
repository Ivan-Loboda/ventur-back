
const {
    getAllDebts,
    addNewDebt,
} = require("../services/debts");

const getDebts = async (req, res, next) => {
    const debts = await getAllDebts();
    res.status(200).json({
        contentType: "application/json",
        status: true,
        response: debts,
        message: "Succes"
    });
};


const addDebt = async (req, res, next) => {
    const newDebt = await addNewDebt(req.body);
    res.status(201).json({
        contentType: "application/json",
        status: true,
        response: newDebt,
        message: "Debt aded succesful"
    });
};


module.exports = {
    getDebts,
    addDebt,
};