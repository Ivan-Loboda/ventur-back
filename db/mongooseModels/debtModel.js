const mongoose = require("mongoose");

const debtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  phone: {
    type: String,
    required: [true, "Set number for contact"],
  },
  debtName: {
    type: String,
    required: [true, "Set debt name for contact"],
  },
  amount: {
    type: Number,
    required: [true, "Set amount for contact"],
  },
  rate: {
    type: Number,
    required: [true, "Set rate for contact"],
  },
  minPayment: {
    type: Number,
    required: [true, "Set minimal payment for contact"],
  },
  extraAmount: {
    type: String,
  },
  versionKey: false,
});

const Debt = mongoose.model("Debt", debtSchema);

module.exports = {
  Debt,
};
