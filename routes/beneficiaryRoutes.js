const express = require("express");
const router = express.Router();
const Beneficiary = require("../models/Beneficiary");

// Get all beneficiaries
router.get("/", async (req, res) => {
  try {
    const beneficiaries = await Beneficiary.find();
    res.json(beneficiaries);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a single beneficiary by ID
router.get("/:id", async (req, res) => {
  try {
    const beneficiary = await Beneficiary.findById(req.params.id);
    res.json(beneficiary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add a new beneficiary
router.post("/", async (req, res) => {
  const { name, accountNumber, bankName, accountType } = req.body;
  const newBeneficiary = new Beneficiary({ name, accountNumber, bankName, accountType });

  try {
    const savedBeneficiary = await newBeneficiary.save();
    res.json(savedBeneficiary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing beneficiary
router.put("/:id", async (req, res) => {
  const { name, accountNumber, bankName, accountType } = req.body;
  try {
    const updatedBeneficiary = await Beneficiary.findByIdAndUpdate(
      req.params.id,
      { name, accountNumber, bankName, accountType },
      { new: true }
    );
    res.json(updatedBeneficiary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a beneficiary
router.delete("/:id", async (req, res) => {
  try {
    const deletedBeneficiary = await Beneficiary.findByIdAndDelete(req.params.id);
    res.json(deletedBeneficiary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
