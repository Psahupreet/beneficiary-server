const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

app.post('/api/beneficiaries', (req, res) => {
  const { fullName, address, country, pincode } = req.body;

  // Save data to the database (example logic)
  if (fullName && address && country && pincode) {
    // Assume a successful save to the database
    res.status(201).send({ message: 'Beneficiary added successfully!' });
  } else {
    res.status(400).send({ error: 'Invalid data provided' });
  }
});

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/beneficiariesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Routes
const beneficiaryRoutes = require("./routes/beneficiaryRoutes");
app.use("/api/beneficiaries", beneficiaryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
