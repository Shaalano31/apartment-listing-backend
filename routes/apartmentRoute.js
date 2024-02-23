const express = require("express");
const apartmentController = require("../controllers/apartmentController");

const router = express.Router();

// Route to retrieve all Apartments
router.get("/apartments", apartmentController.getAllApartments);

// Route to retrieve a Apartment by its ID
router.get("/apartments/:id", apartmentController.getApartmentsById);

// Route to create a new Apartment
router.post("/apartments", apartmentController.createApartments);

module.exports = router;
