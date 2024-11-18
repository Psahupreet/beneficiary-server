const mongoose = require("mongoose");

const beneficiarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  accountNumber: { type: String, required: true },
  bankName: { type: String, required: true },
  accountType: { type: String, required: true },
});

const Beneficiary = mongoose.model("Beneficiary", beneficiarySchema);

module.exports = Beneficiary;
