const express = require("express");
const router = express.Router();

// Example database collection
const usersCollection = require("./database").collection("users");

router.get("/current-user", async (req, res) => {
  try {
    const currentUser = await usersCollection.findOne({
      email: req.user.email
    });

    if (!currentUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(currentUser);
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
});
