const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  img: String,
  size: Number,
  address: String,
});

const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;
