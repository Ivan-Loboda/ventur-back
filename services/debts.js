const { Debt } = require("../db/mongooseModels/debtModel");

async function getAllDebts() {
  try {
    const debts = await Debt.find({});
    return debts;
  } catch (err) {
    console.error(err);
  }
}

async function addNewDebt({ name, phone, debtName, amount, rate, minPayment}) {
  const newDebt = {
    name,
    phone,
    debtName,
    amount,
    rate,
    minPayment,
  };
  try {
    const newDebts = await new Debt(newDebt);
    await newDebts.save();
    return newDebts;
  } catch (err) {
    console.error(err);
  }
}


module.exports = {
  getAllDebts,
  addNewDebt,
};
