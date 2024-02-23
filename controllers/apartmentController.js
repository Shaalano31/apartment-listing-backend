const Apartment = require("../models/apartmentModel");

// Controller for handling GET requests to retrieve all posts
async function getAllApartments(req, res) {
  try {
    const allApartments = await Apartment.find();
    res.status(200).json(allApartments);
  } catch (error) {
    console.error("Error retrieving posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Controller for handling GET requests to retrieve a post by its ID
async function getApartmentsById(req, res) {
  const apartmentId = req.params.id;

  try {
    const apartment = await Apartment.findById(postId);

    if (!apartment) {
      res.status(404).json({ error: "Post not found" });
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    console.error("Error retrieving post by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Controller for handling POST requests to create a new post
async function createApartments(req, res) {
  try {
    const { title, price, description, img, size, address } = req.body;

    try {
      const newApartment = new Post({
        title,
        price,
        description,
        img,
        size,
        address,
      });
      await newApartment.save();

      res
        .status(201)
        .json({ message: "Apartment created successfully", newPost });
    } catch (error) {
      if (error.code === 11000) {
        res
          .status(400)
          .json({ error: "Apartment with the same title already exists" });
      } else {
        console.error("Error creating Apartment:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  } catch (error) {
    console.error("Error creating Apartment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getAllApartments,
  getApartmentsById,
  createApartments,
};
